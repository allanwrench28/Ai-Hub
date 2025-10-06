# 🤖 AI Hub

**Your centralized hub for all AI services** - Share queries and context seamlessly across ChatGPT, Copilot, Grok, and more!

---

## ⚡ Get Started in 30 Seconds

> **First time?** See [INSTALL.md](INSTALL.md) for detailed installation guide with troubleshooting.

### Option 1: Automated Setup (Recommended)

**On Mac/Linux:**
```bash
git clone https://github.com/allanwrench28/Ai-Hub.git
cd Ai-Hub
./setup.sh
```

**On Windows:**
```bash
git clone https://github.com/allanwrench28/Ai-Hub.git
cd Ai-Hub
setup.bat
```

### Option 2: Manual Setup

```bash
git clone https://github.com/allanwrench28/Ai-Hub.git
cd Ai-Hub
npm install
npm start
```

**That's it!** 🎉 Now open http://localhost:3000 in your browser!

---

## 🎯 What is AI Hub?

AI Hub is a **simple server** that lets all your AI services (ChatGPT, GitHub Copilot, Grok, etc.) share:
- ✅ Your questions and conversations
- ✅ Context across devices (phone, PC, tablet)
- ✅ Preferences and history

**Why?** So you can start a conversation on your phone and continue it on your PC with full context!

## ✨ Features

- 🌐 **Web Dashboard** - Easy point-and-click interface (no coding needed!)
- 🔄 **Query Sharing** - All AI services can log and access queries
- 📝 **Shared Context** - Persistent context across all AI services
- 🔍 **History** - Access complete conversation history
- 🚀 **Simple API** - Easy integration with any AI service
- 💾 **Local Storage** - All data stays on your computer

---

## 🚀 Using AI Hub

### Web Dashboard (Easiest Way!)

1. Start the server: `npm start`
2. Open http://localhost:3000 in your browser
3. Use the dashboard to:
   - Log queries
   - View history
   - Update context
   - See statistics

**No coding required!** Everything can be done from your browser.

### Command Line (For Advanced Users)

Test the server:
```bash
npm test
# or
node examples/test-client.js
```

---

## 🎓 Real-World Example

**Scenario:** You're building a web app

1. **On your phone (ChatGPT):** "I want to build a REST API"
   - ChatGPT logs this to AI Hub
   
2. **On your PC (Copilot):** Opens your code editor
   - Copilot reads from AI Hub and sees you're working on a REST API
   - Gives you relevant code suggestions!

3. **Later (Grok):** "What are the best practices for REST APIs?"
   - Grok knows the context from previous conversations

**All your AI services working together!**

---

## 📚 Next Steps

- **Integration Examples**: Check the `examples/` folder for ChatGPT, Copilot, and Grok integration code
- **Detailed Guide**: See [QUICKSTART.md](QUICKSTART.md) for step-by-step instructions
- **Advanced Usage**: See [USAGE.md](USAGE.md) for API details and advanced features
- **Architecture**: See [ARCHITECTURE.md](ARCHITECTURE.md) to understand how it works

---

## 🔌 API Quick Reference

All endpoints are available at `http://localhost:3000`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Web dashboard |
| GET | `/health` | Server health check |
| GET | `/queries` | Get all queries |
| POST | `/queries` | Log a new query |
| GET | `/context` | Get shared context |
| POST | `/context` | Update context |

**Full API documentation available in the web dashboard!**

---

## ⚙️ Configuration

**Change the port:**
```bash
PORT=8080 npm start
```

**Data is stored in:** `./data/` directory
- `queries.json` - All your queries
- `context.json` - Shared context

---

## ❓ Troubleshooting

**Problem: "Port already in use"**
```bash
PORT=8080 npm start
```

**Problem: "Can't connect from other devices"**
- Use your computer's IP address instead of `localhost`
- Example: `http://192.168.1.100:3000`

**Problem: "npm not found"**
- Install Node.js from https://nodejs.org/

**Need more help?** Check [QUICKSTART.md](QUICKSTART.md) or open an issue!

---

## 🔒 Security Note

AI Hub is designed for **personal use**. If you want to use it in production:
- Add authentication
- Use a real database (PostgreSQL, MongoDB)
- Add HTTPS
- Implement rate limiting

---

## 🤝 Contributing

Contributions welcome! Feel free to:
- Open issues for bugs or feature requests
- Submit pull requests
- Improve documentation
- Share integration examples

---

## 📄 License

MIT - Use it however you want!

---

## 🌟 Quick Links

- **Web Dashboard**: http://localhost:3000
- **Health Check**: http://localhost:3000/health
- **Test Client**: `npm test`
- **Installation Guide**: [INSTALL.md](INSTALL.md) ⭐ Start here!
- **Quick Start**: [QUICKSTART.md](QUICKSTART.md)
- **Detailed Usage**: [USAGE.md](USAGE.md)
- **Examples**: [/examples](./examples)
