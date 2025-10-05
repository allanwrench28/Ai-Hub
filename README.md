# AI Hub

A centralized hub for all your AI subscriptions (ChatGPT, Copilot, Grok, and more) to share data and queries seamlessly across devices and platforms.

## Overview

AI Hub provides a simple REST API that allows different AI services to:
- Share queries and responses
- Maintain shared context across conversations
- Access conversation history from any AI service
- Work seamlessly whether you're on your phone, PC, or any other device

## Features

- 🔄 **Query Sharing**: All AI services can log and access queries
- 📝 **Shared Context**: Maintain persistent context that all AI services can read and update
- 🔍 **Query History**: Access complete conversation history across all AI services
- 🌐 **Cross-Platform**: Works on any device with internet access
- 🚀 **Simple REST API**: Easy integration with any AI service
- 💾 **Persistent Storage**: All data is stored locally in JSON files

## Quick Start

### Installation

1. Clone the repository:
```bash
git clone https://github.com/allanwrench28/Ai-Hub.git
cd Ai-Hub
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```

The server will start on `http://localhost:3000` by default.

## API Endpoints

### Home
- `GET /` - API information and available endpoints

### Health Check
- `GET /health` - Server health status

### Queries
- `GET /queries` - Get all queries
  - Query params: `limit` (number), `source` (string)
- `GET /queries/:id` - Get a specific query by ID
- `POST /queries` - Add a new query
  ```json
  {
    "query": "Your question here",
    "source": "chatgpt|copilot|grok|other",
    "response": "Optional response",
    "metadata": {}
  }
  ```

### Context
- `GET /context` - Get all shared context
- `POST /context` - Update shared context
  ```json
  {
    "key": "context_key",
    "value": "context_value",
    "source": "chatgpt|copilot|grok|other"
  }
  ```

## Integration Examples

The `examples/` directory contains integration examples for:
- ChatGPT (`chatgpt-integration.js`)
- GitHub Copilot (`copilot-integration.js`)
- Grok (`grok-integration.js`)

### Example Usage

#### Logging a Query
```javascript
const response = await fetch('http://localhost:3000/queries', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    query: "What's the weather like?",
    source: 'chatgpt'
  })
});
```

#### Getting Previous Queries
```javascript
const response = await fetch('http://localhost:3000/queries?limit=10');
const data = await response.json();
console.log(data.queries);
```

#### Updating Shared Context
```javascript
const response = await fetch('http://localhost:3000/context', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    key: 'user_preferences',
    value: { theme: 'dark', language: 'en' },
    source: 'chatgpt'
  })
});
```

## Use Cases

1. **Cross-Device Continuity**: Start a conversation on your phone with ChatGPT, continue on your PC with Copilot
2. **Context Preservation**: Share important context (user preferences, project details) across all AI services
3. **Query History**: Access your complete AI interaction history from any service
4. **Multi-AI Collaboration**: Different AI services can reference each other's responses

## Data Storage

All data is stored locally in the `data/` directory:
- `queries.json` - All queries and responses
- `context.json` - Shared context data

## Configuration

You can customize the server port by setting the `PORT` environment variable:
```bash
PORT=8080 npm start
```

## Security Considerations

This is a basic implementation intended for personal use. For production deployment:
- Add authentication/authorization
- Use a proper database instead of JSON files
- Implement rate limiting
- Add HTTPS support
- Sanitize all user inputs

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT
