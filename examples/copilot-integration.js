/**
 * Example integration for GitHub Copilot
 * This demonstrates how to send code-related queries to the AI Hub
 */

const AI_HUB_URL = 'http://localhost:3000';

/**
 * Send a coding query to the AI Hub
 */
async function logCodingQuery(query, codeContext) {
  try {
    const response = await fetch(`${AI_HUB_URL}/queries`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        source: 'copilot',
        metadata: {
          type: 'code',
          language: codeContext.language || 'unknown',
          file: codeContext.file || 'unknown'
        }
      })
    });
    
    const data = await response.json();
    console.log('Coding query logged:', data.query.id);
    return data.query.id;
  } catch (error) {
    console.error('Failed to log coding query:', error);
    return null;
  }
}

/**
 * Get recent coding queries from the hub
 */
async function getRecentCodingQueries() {
  try {
    const response = await fetch(`${AI_HUB_URL}/queries?source=copilot&limit=5`);
    const data = await response.json();
    return data.queries;
  } catch (error) {
    console.error('Failed to get coding queries:', error);
    return [];
  }
}

/**
 * Share code snippets or patterns in the context
 */
async function shareCodePattern(patternName, pattern) {
  try {
    const response = await fetch(`${AI_HUB_URL}/context`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        key: `code_pattern_${patternName}`,
        value: pattern,
        source: 'copilot'
      })
    });
    
    const data = await response.json();
    console.log('Code pattern shared:', data);
  } catch (error) {
    console.error('Failed to share code pattern:', error);
  }
}

// Example usage
async function main() {
  // Log a coding query
  await logCodingQuery(
    "How do I implement a REST API in Node.js?",
    { language: 'javascript', file: 'server.js' }
  );
  
  // Get recent coding queries
  const recentQueries = await getRecentCodingQueries();
  console.log('Recent coding queries:', recentQueries);
  
  // Share a useful code pattern
  await shareCodePattern('express_middleware', {
    description: 'Custom Express middleware pattern',
    code: 'app.use((req, res, next) => { /* logic */ next(); })'
  });
}

// Uncomment to run the example
// main();

module.exports = {
  logCodingQuery,
  getRecentCodingQueries,
  shareCodePattern
};
