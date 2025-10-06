# 🚀 Quick Start Guide for Beginners

Get your AI Hub running in 3 simple steps! This guide assumes you have Git and Node.js installed - if you don't, check [INSTALL.md](INSTALL.md) first.

---

## Step 1: Download and Install AI Hub (1 minute)

### What is "Terminal" or "Command Prompt"?

It's an app where you type commands to tell your computer what to do. Don't worry - we'll tell you exactly what to type!

**How to open it:**
- **Windows:** Press Windows key, type "Command Prompt" or "Git Bash", press Enter
- **Mac:** Press Command+Space, type "Terminal", press Enter  
- **Linux:** Press Ctrl+Alt+T

### Now let's download AI Hub!

**Easy way (automated setup):**

1. Copy this entire block of text:

   **For Mac/Linux:**
   ```bash
   git clone https://github.com/allanwrench28/Ai-Hub.git
   cd Ai-Hub
   ./setup.sh
   ```

   **For Windows:**
   ```bash
   git clone https://github.com/allanwrench28/Ai-Hub.git
   cd Ai-Hub
   setup.bat
   ```

2. Right-click in your terminal window and choose "Paste"
3. Press Enter
4. Wait a moment... You should see: `AI Hub server running on port 3000`

**Manual way (if automated doesn't work):**

Type (or paste) each line below, pressing Enter after each one:

```bash
git clone https://github.com/allanwrench28/Ai-Hub.git
```
*(Wait for download to complete)*

```bash
cd Ai-Hub
```

```bash
npm install
```
*(Wait for installation - this might take a minute)*

```bash
npm start
```

When you see this message, you're ready:
```
AI Hub server running on port 3000
Visit http://localhost:3000 for API information
```

✅ **Success!** AI Hub is now running on your computer!

---

## Step 2: Open the Web Dashboard (30 seconds)

### This is the easy part!

1. **Open your web browser** (Chrome, Firefox, Safari, Edge - any browser works!)

2. **In the address bar at the top** (where you normally type website addresses), type exactly:
   ```
   http://localhost:3000
   ```

3. **Press Enter**

4. **You should see a beautiful purple dashboard!** 🎉

The dashboard has:
- 📊 **Statistics** showing how many queries you've logged
- 📝 **A form to log queries** - try it out!
- 🔑 **Context management** - save information across AI services
- 📜 **Recent queries** - see your history
- 🔌 **API endpoints** - technical info (you can ignore this for now)

### Try It Out!

1. Find the "📝 Log a Query" section
2. In the "Query" box, type something like: `Hello, this is my first test!`
3. Click the blue "Log Query" button
4. You should see a green success message! ✓
5. Scroll down to "Recent Queries" - your query should appear there!

**Congratulations!** You just logged your first query! 🎉

---

## Step 3: Using AI Hub (Optional - For Later)

Now that AI Hub is running, you can:

### **Option A: Just Use the Web Dashboard**
- Everything you need is right there in your browser at `http://localhost:3000`
- No coding required!
- Log queries, view history, manage context - all with buttons and forms

### **Option B: Test with the Command Line** (More Advanced)

Want to see it work from the terminal? 

1. Open a **NEW** terminal window (keep the first one running!)
2. Navigate to AI Hub:
   ```bash
   cd Desktop/Ai-Hub
   ```
   *(Or wherever you installed it)*
3. Type:
   ```bash
   npm test
   ```
4. Press Enter
5. You'll see tests running with ✓ marks - this confirms everything works!

### **Option C: Integrate with Your AI Services** (Advanced)

Check the `examples/` folder in AI Hub for code samples showing how to connect:
- ChatGPT
- GitHub Copilot  
- Grok
- Any other AI service!

*See [USAGE.md](USAGE.md) for detailed integration instructions.*

---

## 🎯 Cool Things You Can Do

### **Use AI Hub on Multiple Devices**

Want to access AI Hub from your phone or another computer? Here's how:

1. **Find your computer's IP address:**
   - **Windows:** Open Command Prompt, type `ipconfig`, look for "IPv4 Address"
   - **Mac:** Apple menu → System Preferences → Network (IP shown there)
   - **Linux:** Open Terminal, type `hostname -I`
   
   You'll see something like: `192.168.1.100`

2. **On your phone or other device:**
   - Make sure it's on the **same WiFi network** as your computer
   - Open a web browser
   - Type: `http://YOUR-IP-ADDRESS:3000`
   - For example: `http://192.168.1.100:3000`

3. **Now you can:**
   - Log a query on your phone
   - See it appear on your PC
   - All your AI conversations sync across devices!

### **Example Scenario:**

**On your phone:**
1. Open `http://192.168.1.100:3000` (use your actual IP)
2. Log a query: "I want to build a REST API"
3. Select source: "ChatGPT"
4. Click "Log Query"

**On your PC:**
1. Open `http://localhost:3000`
2. Click "Refresh Queries"
3. You'll see the query from your phone!
4. Now when you ask Copilot on your PC, it knows you're working on a REST API!

**That's the power of AI Hub!** 🚀

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

---

## 🛑 How to Stop AI Hub

When you're done:

1. Go to the terminal window where AI Hub is running
2. Press **Ctrl+C** (hold Control, then press C)
3. The server will stop
4. You can close the terminal window

**To start it again later:**
1. Open Terminal/Command Prompt
2. Type: `cd Desktop/Ai-Hub` (or wherever you installed it)
3. Press Enter
4. Type: `npm start`
5. Press Enter
6. Open `http://localhost:3000` in your browser

---

## ❓ Common Questions

### "What's localhost:3000?"
- `localhost` means "this computer"
- `3000` is the "port" (like a door number) where AI Hub is running
- So `http://localhost:3000` means "the AI Hub running on this computer"

### "Do I need to keep the terminal window open?"
- Yes! As long as you want to use AI Hub, keep that terminal window open
- If you close it, AI Hub stops running
- You can minimize it, just don't close it

### "Can other people see my AI Hub?"
- Only people on your WiFi network can access it (if you share your IP address)
- It's not on the internet - it's just on your local network
- It's safe and private!

### "What if I get an error?"
- Check [INSTALL.md](INSTALL.md) - it has detailed troubleshooting for every error
- Most issues are solved by:
  - Making sure Node.js is installed
  - Running `npm install` in the Ai-Hub folder
  - Restarting your terminal

---

## 📚 Learn More

- **[README.md](README.md)** - Overview of what AI Hub can do
- **[INSTALL.md](INSTALL.md)** - Complete beginner's installation guide with troubleshooting
- **[USAGE.md](USAGE.md)** - Advanced features and API documentation
- **`examples/` folder** - Code samples for integrating with different AI services

---

## 🎉 You're All Set!

Your AI Hub is now running and ready to connect all your AI subscriptions! 

**What to do next:**
1. Play around with the web dashboard at `http://localhost:3000`
2. Try logging some test queries
3. When you're ready, check out the integration examples to connect your AI services

**Have fun!** 🚀
