/**
 * Example integration for ChatGPT
 * This demonstrates how to send queries and responses to the AI Hub
 */

const AI_HUB_URL = 'http://localhost:3000';

/**
 * Send a query to the AI Hub before processing with ChatGPT
 */
async function logQuery(userQuery) {
  try {
    const response = await fetch(`${AI_HUB_URL}/queries`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: userQuery,
        source: 'chatgpt',
        metadata: {
          model: 'gpt-4',
          user: 'user123'
        }
      })
    });
    
    const data = await response.json();
    console.log('Query logged to AI Hub:', data.query.id);
    return data.query.id;
  } catch (error) {
    console.error('Failed to log query to AI Hub:', error);
    return null;
  }
}

/**
 * Get recent queries from other AI services for context
 */
async function getPreviousContext(limit = 10) {
  try {
    const response = await fetch(`${AI_HUB_URL}/queries?limit=${limit}`);
    const data = await response.json();
    return data.queries;
  } catch (error) {
    console.error('Failed to get context from AI Hub:', error);
    return [];
  }
}

/**
 * Update shared context with important information
 */
async function updateSharedContext(key, value) {
  try {
    const response = await fetch(`${AI_HUB_URL}/context`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        key,
        value,
        source: 'chatgpt'
      })
    });
    
    const data = await response.json();
    console.log('Context updated:', data);
  } catch (error) {
    console.error('Failed to update context:', error);
  }
}

// Example usage
async function main() {
  // Log a new query
  const queryId = await logQuery("What's the weather like today?");
  
  // Get previous queries for context
  const previousQueries = await getPreviousContext(5);
  console.log('Previous queries:', previousQueries);
  
  // Update shared context
  await updateSharedContext('user_location', 'New York');
  await updateSharedContext('user_preferences', { theme: 'dark', language: 'en' });
}

// Uncomment to run the example
// main();

module.exports = {
  logQuery,
  getPreviousContext,
  updateSharedContext
};
