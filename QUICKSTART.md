# Quick Start Guide

Get your AI Hub running in 3 simple steps!

## Step 1: Install & Start (1 minute)

**Easy way (automated):**
```bash
git clone https://github.com/allanwrench28/Ai-Hub.git
cd Ai-Hub
./setup.sh          # Mac/Linux
# or
setup.bat           # Windows
```

**Manual way:**
```bash
git clone https://github.com/allanwrench28/Ai-Hub.git
cd Ai-Hub
npm install
npm start
```

You should see:
```
AI Hub server running on port 3000
Visit http://localhost:3000 for API information
```

## Step 2: Test It (30 seconds)

**Option A: Web Dashboard (Easiest!)**

Open http://localhost:3000 in your browser!

You'll see a beautiful dashboard where you can:
- ✅ Log queries
- ✅ View history  
- ✅ Update context
- ✅ See statistics

**Option B: Command Line**

Open a new terminal and run:
```bash
npm test
```

You should see all tests pass with ✓ marks.

## Step 3: Use It!

### Scenario: Multi-Device AI Conversations

**On your phone (ChatGPT):**

Open http://YOUR_COMPUTER_IP:3000 in your phone's browser
- Log a query: "I want to build a REST API"
- Select source: ChatGPT
- Click "Log Query"

**On your PC (Copilot):**

Open http://localhost:3000 in your browser
- Click "Refresh Queries"
- See the query from your phone!
- Now Copilot knows you're working on a REST API!

**Advanced (Command Line):**
```bash
# From phone or any device
curl -X POST http://YOUR_COMPUTER_IP:3000/queries \
  -H "Content-Type: application/json" \
  -d '{"query": "I want to build a REST API", "source": "chatgpt"}'

# From PC
curl http://localhost:3000/queries?limit=5
```

## What Just Happened?

1. ✅ You started a central hub for all AI services
2. ✅ Logged a query from ChatGPT
3. ✅ Retrieved that context from Copilot
4. ✅ Your AI services can now share data!

## Next Steps

- **Read full documentation**: See `README.md`
- **Check integration examples**: Look in `examples/` folder
- **Read detailed usage**: See `USAGE.md`

## Common Use Cases

### 1. Cross-Device Continuity
Start a conversation on your phone, continue on your PC with full context.

### 2. Multi-AI Collaboration
Ask ChatGPT for ideas, have Copilot write the code, use Grok for research - all sharing context.

### 3. Persistent Memory
All your AI conversations are saved and searchable.

## Quick Reference

| What | Command |
|------|---------|
| Start server | `npm start` |
| Test server | `node examples/test-client.js` |
| Add query | `POST /queries` |
| Get queries | `GET /queries` |
| Update context | `POST /context` |
| Get context | `GET /context` |

## Troubleshooting

**Port already in use?**
```bash
PORT=8080 npm start
```

**Can't connect from other devices?**
- Use your computer's IP address instead of `localhost`
- Example: `http://192.168.1.100:3000`

## Need Help?

- Check `README.md` for full documentation
- Check `USAGE.md` for detailed examples
- Review code in `examples/` directory
- Open an issue on GitHub

## That's It! 🚀

Your AI Hub is now running and ready to connect all your AI subscriptions!
