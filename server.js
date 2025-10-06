const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Data storage directory
const DATA_DIR = path.join(__dirname, 'data');
const QUERIES_FILE = path.join(DATA_DIR, 'queries.json');
const CONTEXT_FILE = path.join(DATA_DIR, 'context.json');

// Initialize data directory and files
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR);
}

if (!fs.existsSync(QUERIES_FILE)) {
  fs.writeFileSync(QUERIES_FILE, JSON.stringify([]));
}

if (!fs.existsSync(CONTEXT_FILE)) {
  fs.writeFileSync(CONTEXT_FILE, JSON.stringify({}));
}

// Helper functions
function readQueries() {
  const data = fs.readFileSync(QUERIES_FILE, 'utf8');
  return JSON.parse(data);
}

function writeQueries(queries) {
  fs.writeFileSync(QUERIES_FILE, JSON.stringify(queries, null, 2));
}

function readContext() {
  const data = fs.readFileSync(CONTEXT_FILE, 'utf8');
  return JSON.parse(data);
}

function writeContext(context) {
  fs.writeFileSync(CONTEXT_FILE, JSON.stringify(context, null, 2));
}

// Routes

// API info route
app.get('/api', (req, res) => {
  res.json({
    message: 'AI Hub - Your central hub for AI service integration',
    version: '1.0.0',
    endpoints: {
      'GET /queries': 'Get all queries',
      'GET /queries/:id': 'Get a specific query',
      'POST /queries': 'Add a new query',
      'DELETE /queries/:id': 'Delete a specific query',
      'DELETE /queries': 'Clear all queries',
      'GET /context': 'Get shared context',
      'POST /context': 'Update shared context',
      'DELETE /context': 'Clear all context',
      'GET /export': 'Export all data',
      'GET /health': 'Health check'
    }
  });
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

// Get all queries
app.get('/queries', (req, res) => {
  try {
    const queries = readQueries();
    const limit = parseInt(req.query.limit) || queries.length;
    const source = req.query.source;
    
    let filteredQueries = queries;
    if (source) {
      filteredQueries = queries.filter(q => q.source === source);
    }
    
    res.json({
      total: filteredQueries.length,
      queries: filteredQueries.slice(-limit)
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve queries' });
  }
});

// Get a specific query by ID
app.get('/queries/:id', (req, res) => {
  try {
    const queries = readQueries();
    const query = queries.find(q => q.id === req.params.id);
    
    if (query) {
      res.json(query);
    } else {
      res.status(404).json({ error: 'Query not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve query' });
  }
});

// Add a new query
app.post('/queries', (req, res) => {
  try {
    const { query, source, response, metadata } = req.body;
    
    if (!query || !source) {
      return res.status(400).json({ error: 'Query and source are required' });
    }
    
    const queries = readQueries();
    const newQuery = {
      id: Date.now().toString(),
      query,
      source,
      response: response || null,
      metadata: metadata || {},
      timestamp: new Date().toISOString()
    };
    
    queries.push(newQuery);
    writeQueries(queries);
    
    res.status(201).json({
      message: 'Query added successfully',
      query: newQuery
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add query' });
  }
});

// Get shared context
app.get('/context', (req, res) => {
  try {
    const context = readContext();
    res.json(context);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve context' });
  }
});

// Update shared context
app.post('/context', (req, res) => {
  try {
    const { key, value, source } = req.body;
    
    if (!key) {
      return res.status(400).json({ error: 'Key is required' });
    }
    
    const context = readContext();
    
    if (!context[key]) {
      context[key] = {
        value,
        sources: [source],
        lastUpdated: new Date().toISOString()
      };
    } else {
      context[key].value = value;
      if (source && !context[key].sources.includes(source)) {
        context[key].sources.push(source);
      }
      context[key].lastUpdated = new Date().toISOString();
    }
    
    writeContext(context);
    
    res.json({
      message: 'Context updated successfully',
      context: context[key]
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update context' });
  }
});

// Delete a specific query
app.delete('/queries/:id', (req, res) => {
  try {
    const queries = readQueries();
    const filteredQueries = queries.filter(q => q.id !== req.params.id);
    
    if (filteredQueries.length === queries.length) {
      return res.status(404).json({ error: 'Query not found' });
    }
    
    writeQueries(filteredQueries);
    res.json({ message: 'Query deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete query' });
  }
});

// Clear all queries
app.delete('/queries', (req, res) => {
  try {
    writeQueries([]);
    res.json({ message: 'All queries cleared successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to clear queries' });
  }
});

// Clear all context
app.delete('/context', (req, res) => {
  try {
    writeContext({});
    res.json({ message: 'All context cleared successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to clear context' });
  }
});

// Export all data
app.get('/export', (req, res) => {
  try {
    const queries = readQueries();
    const context = readContext();
    
    const exportData = {
      exportDate: new Date().toISOString(),
      queries,
      context
    };
    
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Content-Disposition', `attachment; filename="ai-hub-export-${Date.now()}.json"`);
    res.json(exportData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to export data' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`AI Hub server running on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT} for API information`);
});
