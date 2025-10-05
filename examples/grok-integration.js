/**
 * Example integration for Grok
 * This demonstrates how to send queries to the AI Hub from Grok
 */

const AI_HUB_URL = 'http://localhost:3000';

/**
 * Send a query to the AI Hub from Grok
 */
async function logGrokQuery(query, metadata = {}) {
  try {
    const response = await fetch(`${AI_HUB_URL}/queries`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        source: 'grok',
        metadata: {
          platform: 'X/Twitter',
          ...metadata
        }
      })
    });
    
    const data = await response.json();
    console.log('Grok query logged:', data.query.id);
    return data.query.id;
  } catch (error) {
    console.error('Failed to log Grok query:', error);
    return null;
  }
}

/**
 * Get all queries from the hub for comprehensive context
 */
async function getAllContext() {
  try {
    const [queries, context] = await Promise.all([
      fetch(`${AI_HUB_URL}/queries`).then(r => r.json()),
      fetch(`${AI_HUB_URL}/context`).then(r => r.json())
    ]);
    
    return { queries: queries.queries, context };
  } catch (error) {
    console.error('Failed to get context:', error);
    return { queries: [], context: {} };
  }
}

/**
 * Update shared context from Grok
 */
async function updateGrokContext(key, value) {
  try {
    const response = await fetch(`${AI_HUB_URL}/context`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        key,
        value,
        source: 'grok'
      })
    });
    
    const data = await response.json();
    console.log('Grok context updated:', data);
  } catch (error) {
    console.error('Failed to update context:', error);
  }
}

// Example usage
async function main() {
  // Log a query from Grok
  await logGrokQuery("What are the latest trends in AI?", {
    timestamp: new Date().toISOString()
  });
  
  // Get all context from other AI services
  const fullContext = await getAllContext();
  console.log('Full context:', fullContext);
  
  // Update context with information from Grok
  await updateGrokContext('latest_trends', ['AI', 'Machine Learning', 'LLMs']);
}

// Uncomment to run the example
// main();

module.exports = {
  logGrokQuery,
  getAllContext,
  updateGrokContext
};
