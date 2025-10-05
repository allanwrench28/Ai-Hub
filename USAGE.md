# AI Hub Usage Guide

## Getting Started

### Step 1: Start the Server

```bash
npm install
npm start
```

The server will run on `http://localhost:3000`.

### Step 2: Test the Installation

Run the test client to verify everything works:

```bash
node examples/test-client.js
```

## How It Works

AI Hub acts as a central repository for all your AI conversations. When you interact with any AI service (ChatGPT, Copilot, Grok, etc.), you can:

1. **Log your queries** - Store what you asked
2. **Access previous queries** - See what you've asked other AI services
3. **Share context** - Maintain persistent information across all services

## Integration Workflow

### For Each AI Service

1. **Before sending a query to the AI:**
   - Log the query to AI Hub
   - Retrieve recent queries from other AI services for context
   - Retrieve shared context (preferences, current projects, etc.)

2. **After receiving a response:**
   - Update the query with the response (optional)
   - Update shared context with new information

## Real-World Example

### Scenario: Working on a coding project

1. **On your phone with ChatGPT:**
   ```
   You: "I'm working on a Node.js REST API project"
   ChatGPT: [provides explanation]
   
   → AI Hub logs: query + response + context (current_project)
   ```

2. **On your PC with Copilot:**
   ```
   You: "Show me middleware example"
   
   → Copilot checks AI Hub
   → Sees you're working on a Node.js REST API
   → Provides context-aware code
   → Logs query to AI Hub
   ```

3. **On Twitter/X with Grok:**
   ```
   You: "What are best practices for REST APIs?"
   
   → Grok checks AI Hub
   → Sees your project context
   → Provides relevant advice
   → Logs to AI Hub
   ```

## API Usage Examples

### Logging a Query

**JavaScript (Node.js/Browser):**
```javascript
const response = await fetch('http://localhost:3000/queries', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    query: "Your question",
    source: 'chatgpt',
    response: 'AI response (optional)',
    metadata: { any: 'additional data' }
  })
});
const data = await response.json();
```

**cURL:**
```bash
curl -X POST http://localhost:3000/queries \
  -H "Content-Type: application/json" \
  -d '{
    "query": "Your question",
    "source": "chatgpt"
  }'
```

**Python:**
```python
import requests

response = requests.post('http://localhost:3000/queries', json={
    'query': 'Your question',
    'source': 'chatgpt',
    'metadata': {'model': 'gpt-4'}
})
data = response.json()
```

### Getting Previous Queries

**Get all queries:**
```bash
curl http://localhost:3000/queries
```

**Get last 5 queries:**
```bash
curl http://localhost:3000/queries?limit=5
```

**Get queries from specific source:**
```bash
curl http://localhost:3000/queries?source=chatgpt
```

### Managing Shared Context

**Update context:**
```bash
curl -X POST http://localhost:3000/context \
  -H "Content-Type: application/json" \
  -d '{
    "key": "user_preferences",
    "value": {"theme": "dark", "language": "en"},
    "source": "chatgpt"
  }'
```

**Get all context:**
```bash
curl http://localhost:3000/context
```

## Integration Tips

### For Custom AI Integrations

1. **Identify Integration Points**: Find where your AI service accepts input
2. **Add Pre-Query Hook**: Before sending to AI, log to AI Hub and retrieve context
3. **Add Post-Response Hook**: After getting AI response, update AI Hub

### For Browser Extensions

Create a browser extension that:
- Intercepts queries to AI services
- Logs them to AI Hub automatically
- Injects relevant context into prompts

### For Mobile Apps

Use the REST API directly from your mobile app to:
- Sync conversations across devices
- Share context between mobile and desktop AI interactions

## Best Practices

1. **Consistent Source Names**: Use the same source identifier for each AI service
2. **Meaningful Metadata**: Include useful metadata (model, language, device, etc.)
3. **Regular Context Updates**: Keep shared context fresh and relevant
4. **Privacy**: Don't log sensitive information
5. **Cleanup**: Periodically review and clean old queries

## Troubleshooting

### Server not starting?
- Check if port 3000 is available
- Try a different port: `PORT=8080 npm start`

### Queries not persisting?
- Check if `data/` directory exists and is writable
- Verify `queries.json` and `context.json` are created

### Integration not working?
- Ensure the server is running
- Check the API URL in your integration code
- Verify network connectivity
- Check server logs for errors

## Advanced Usage

### Running on a Network

To access from other devices on your network:

```bash
# Find your local IP (e.g., 192.168.1.100)
# Then update your integration code to use:
# http://192.168.1.100:3000
```

### Deploying to Cloud

For cloud deployment (Heroku, AWS, etc.):
1. Set `PORT` environment variable
2. Replace JSON file storage with a database
3. Add authentication
4. Enable HTTPS

## Support

For issues or questions:
- Check the main README.md
- Review the example integrations in `examples/`
- Open an issue on GitHub
