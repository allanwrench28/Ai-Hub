# 🤖 AI Hub

**Your centralized hub for all AI services** - Share queries and context seamlessly across ChatGPT, Copilot, Grok, and more!

---

## ⚡ Get Started in 30 Seconds

> **👋 Never used a terminal before?** Don't worry! See [INSTALL.md](INSTALL.md) for a complete beginner's guide with step-by-step instructions for everything!

### What You Need First

Before starting, make sure you have these installed:
- **Git** (for downloading the code) - [How to install Git](INSTALL.md#1-git-for-downloadingcloning-the-code)
- **Node.js** (to run AI Hub) - [How to install Node.js](INSTALL.md#2-nodejs-to-run-the-ai-hub-server)

Not sure if you have them? [Check here](INSTALL.md#prerequisites)

### Option 1: Automated Setup (Easiest!)

**What to do:**
1. Open Terminal (Mac/Linux) or Command Prompt (Windows) - [How do I open it?](INSTALL.md#-opening-your-terminalcommand-prompt)
2. Copy and paste these commands one at a time, pressing Enter after each:

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

3. **That's it!** Open your web browser and go to: `http://localhost:3000`

### Option 2: Manual Setup

If the automated setup doesn't work, try this:

1. Open Terminal (Mac/Linux) or Command Prompt (Windows)
2. Copy and paste these commands one at a time, pressing Enter after each:

```bash
git clone https://github.com/allanwrench28/Ai-Hub.git
cd Ai-Hub
npm install
npm start
```

3. Open your web browser and go to: `http://localhost:3000`

**Need help?** Check [INSTALL.md](INSTALL.md) for detailed instructions with screenshots and troubleshooting!

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
- 🔍 **Smart Search** - Search and filter your query history in real-time
- 🚀 **Simple API** - Easy integration with any AI service
- 💾 **Local Storage** - All data stays on your computer
- 🌙 **Dark Mode** - Toggle between light and dark themes
- 📥 **Data Export** - Backup all your data as JSON
- 🗑️ **Data Management** - Clear all data or delete individual queries
- 🔒 **Privacy First** - Your data never leaves your device
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile

---

## 🚀 Using AI Hub

### Web Dashboard (Easiest Way!)

1. Start the server: `npm start`
2. Open http://localhost:3000 in your browser
3. Use the dashboard to:
   - Log queries from different AI services
   - View and search query history
   - Update shared context
   - See statistics
   - **Export your data** for backup
   - **Clear data** when needed
   - **Toggle dark mode** for comfortable viewing
   - Delete individual queries

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
| DELETE | `/queries/:id` | Delete a specific query |
| DELETE | `/queries` | Clear all queries |
| GET | `/context` | Get shared context |
| POST | `/context` | Update context |
| DELETE | `/context` | Clear all context |
| GET | `/export` | Export all data as JSON |

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

## 🔒 Privacy & Security

**Your data stays private!** AI Hub stores all data locally on your device:
- All queries and context stored in `./data/` directory on your computer
- **No external servers** - your data never leaves your device
- Full control - export or delete your data anytime
- Data files excluded from git to prevent accidental commits

### For Personal Use
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
