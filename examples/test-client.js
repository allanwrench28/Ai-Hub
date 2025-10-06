/**
 * Simple test client to demonstrate AI Hub functionality
 * Run this after starting the server with: node examples/test-client.js
 */

const API_URL = 'http://localhost:3000';

async function testAIHub() {
  console.log('=== AI Hub Test Client ===\n');

  try {
    // 1. Check server health
    console.log('1. Checking server health...');
    const healthResponse = await fetch(`${API_URL}/health`);
    const health = await healthResponse.json();
    console.log('✓ Server is healthy:', health);
    console.log();

    // 2. Log a query from ChatGPT
    console.log('2. Logging query from ChatGPT...');
    const chatGPTQuery = await fetch(`${API_URL}/queries`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: "How do I create a REST API?",
        source: 'chatgpt',
        response: 'You can create a REST API using Express.js in Node.js...',
        metadata: { model: 'gpt-4' }
      })
    });
    const chatGPTData = await chatGPTQuery.json();
    console.log('✓ Query logged:', chatGPTData.query.id);
    console.log();

    // 3. Log a query from Copilot
    console.log('3. Logging query from Copilot...');
    const copilotQuery = await fetch(`${API_URL}/queries`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: "Show me Express middleware example",
        source: 'copilot',
        metadata: { language: 'javascript' }
      })
    });
    const copilotData = await copilotQuery.json();
    console.log('✓ Query logged:', copilotData.query.id);
    console.log();

    // 4. Log a query from Grok
    console.log('4. Logging query from Grok...');
    const grokQuery = await fetch(`${API_URL}/queries`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: "What are the latest AI trends?",
        source: 'grok',
        metadata: { platform: 'X/Twitter' }
      })
    });
    const grokData = await grokQuery.json();
    console.log('✓ Query logged:', grokData.query.id);
    console.log();

    // 5. Get all queries
    console.log('5. Retrieving all queries...');
    const allQueriesResponse = await fetch(`${API_URL}/queries`);
    const allQueries = await allQueriesResponse.json();
    console.log(`✓ Total queries: ${allQueries.total}`);
    allQueries.queries.forEach(q => {
      console.log(`  - [${q.source}] ${q.query} (${q.timestamp})`);
    });
    console.log();

    // 6. Get queries from specific source
    console.log('6. Getting queries from ChatGPT only...');
    const chatGPTQueriesResponse = await fetch(`${API_URL}/queries?source=chatgpt`);
    const chatGPTQueries = await chatGPTQueriesResponse.json();
    console.log(`✓ ChatGPT queries: ${chatGPTQueries.total}`);
    console.log();

    // 7. Update shared context
    console.log('7. Updating shared context...');
    await fetch(`${API_URL}/context`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        key: 'user_preferences',
        value: { theme: 'dark', language: 'en', timezone: 'UTC' },
        source: 'chatgpt'
      })
    });
    console.log('✓ User preferences updated');

    await fetch(`${API_URL}/context`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        key: 'current_project',
        value: { name: 'AI Hub', language: 'Node.js', status: 'active' },
        source: 'copilot'
      })
    });
    console.log('✓ Current project updated');
    console.log();

    // 8. Retrieve shared context
    console.log('8. Retrieving shared context...');
    const contextResponse = await fetch(`${API_URL}/context`);
    const context = await contextResponse.json();
    console.log('✓ Shared context:');
    Object.keys(context).forEach(key => {
      console.log(`  - ${key}:`, JSON.stringify(context[key].value));
      console.log(`    Sources: ${context[key].sources.join(', ')}`);
    });
    console.log();

    console.log('=== All tests completed successfully! ===');

  } catch (error) {
    console.error('❌ Error:', error.message);
    console.log('\nMake sure the server is running with: npm start');
  }
}

// Run tests
testAIHub();
