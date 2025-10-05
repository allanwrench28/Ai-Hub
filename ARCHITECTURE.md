# AI Hub Architecture

## System Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                          AI Hub Server                          │
│                      (Node.js + Express)                        │
│                     http://localhost:3000                        │
└────────────┬────────────────────────────────────┬───────────────┘
             │                                    │
             ├── REST API Endpoints               ├── Data Storage
             │   • POST /queries                  │   • queries.json
             │   • GET  /queries                  │   • context.json
             │   • POST /context                  │
             │   • GET  /context                  │
             └────────────────────────────────────┘
                           │
          ┌────────────────┼────────────────┐
          │                │                │
          ▼                ▼                ▼
    ┌──────────┐     ┌──────────┐    ┌──────────┐
    │ ChatGPT  │     │ Copilot  │    │   Grok   │
    │ (Phone)  │     │   (PC)   │    │ (Tablet) │
    └──────────┘     └──────────┘    └──────────┘
```

## Data Flow

### 1. Query Logging Flow

```
User → AI Service → AI Hub → Store → Share with Other Services
```

**Example:**
```
1. You ask ChatGPT on phone: "How do I create a REST API?"
2. ChatGPT integration logs to AI Hub
3. Query stored in queries.json
4. Later, Copilot on PC retrieves this context
5. Copilot provides code specific to REST APIs
```

### 2. Context Sharing Flow

```
AI Service A → Update Context → AI Hub → AI Service B reads context
```

**Example:**
```
1. ChatGPT sets context: user_preferences = {"theme": "dark"}
2. Stored in context.json
3. Copilot reads context
4. Copilot generates code with dark theme colors
```

## Component Details

### Server (server.js)
- **Framework**: Express.js
- **Port**: 3000 (configurable)
- **Features**:
  - CORS enabled for cross-origin access
  - JSON body parsing
  - File-based storage

### Storage Layer
- **Type**: JSON files (simple, portable)
- **Location**: `./data/` directory
- **Files**:
  - `queries.json`: All queries and responses
  - `context.json`: Shared context data

### API Endpoints

#### Queries
- `GET /queries` - Retrieve queries
- `GET /queries/:id` - Get specific query
- `POST /queries` - Add new query

#### Context
- `GET /context` - Get shared context
- `POST /context` - Update context

#### Utility
- `GET /` - API documentation
- `GET /health` - Health check

## Data Models

### Query Object
```json
{
  "id": "1759705844418",
  "query": "Your question here",
  "source": "chatgpt",
  "response": "AI response (optional)",
  "metadata": {
    "model": "gpt-4",
    "device": "mobile"
  },
  "timestamp": "2025-10-05T23:10:44.418Z"
}
```

### Context Object
```json
{
  "user_preferences": {
    "value": {
      "theme": "dark",
      "language": "en"
    },
    "sources": ["chatgpt", "copilot"],
    "lastUpdated": "2025-10-05T23:10:44.433Z"
  }
}
```

## Integration Pattern

### Recommended Integration Flow

```
┌─────────────────────────────────────────────────────────────┐
│ 1. User submits query to AI service                         │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│ 2. Before processing:                                        │
│    • Log query to AI Hub                                     │
│    • Retrieve recent queries for context                     │
│    • Retrieve shared context                                 │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│ 3. Process query with AI service (with added context)       │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│ 4. After receiving response:                                 │
│    • Update query with response (optional)                   │
│    • Update shared context if needed                         │
└─────────────────────────────────────────────────────────────┘
```

## Security Considerations

**Current Implementation (Development):**
- ❌ No authentication
- ❌ No HTTPS
- ❌ File-based storage
- ✅ CORS enabled (for development)

**Production Recommendations:**
- ✅ Add API key authentication
- ✅ Use HTTPS
- ✅ Use proper database (MongoDB, PostgreSQL)
- ✅ Add rate limiting
- ✅ Input validation and sanitization
- ✅ Restrict CORS to specific origins

## Scalability

### Current Setup
- Single server instance
- File-based storage
- Suitable for personal use

### Production Considerations
- Use database for persistence
- Add caching layer (Redis)
- Implement horizontal scaling
- Add load balancer
- Use message queue for async processing

## Extension Points

### 1. Additional AI Services
Easy to add:
- Claude
- Bard
- Perplexity
- Custom AI models

### 2. Storage Backends
Can replace with:
- SQLite
- PostgreSQL
- MongoDB
- Redis

### 3. Authentication
Can add:
- API keys
- OAuth
- JWT tokens
- User sessions

### 4. Features
Can extend with:
- Search functionality
- Query analytics
- Export/import
- Webhooks
- WebSocket for real-time updates
