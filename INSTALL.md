# 🚀 Installation Guide

## Prerequisites

You need **Node.js** installed on your computer.

**Don't have Node.js?**
1. Visit https://nodejs.org/
2. Download the **LTS version** (recommended)
3. Run the installer
4. Restart your terminal/command prompt

**Check if you have it:**
```bash
node --version
```
If you see a version number, you're good to go! ✓

---

## Installation Options

### ⚡ Option 1: Automated Setup (Easiest!)

**Mac/Linux:**
```bash
git clone https://github.com/allanwrench28/Ai-Hub.git
cd Ai-Hub
./setup.sh
```

**Windows:**
```bash
git clone https://github.com/allanwrench28/Ai-Hub.git
cd Ai-Hub
setup.bat
```

The script will:
- ✓ Check prerequisites
- ✓ Install dependencies
- ✓ Start the server
- ✓ Test everything works

---

### 🔧 Option 2: Manual Setup

```bash
# 1. Clone the repository
git clone https://github.com/allanwrench28/Ai-Hub.git
cd Ai-Hub

# 2. Install dependencies
npm install

# 3. Start the server
npm start
```

---

## Verify Installation

Once the server is running, verify it works:

### Method 1: Open in Browser
Open http://localhost:3000 in your web browser

You should see a beautiful purple dashboard! 🎨

### Method 2: Run Test Suite
In a new terminal:
```bash
npm test
```

You should see all tests pass with ✓ marks

### Method 3: Check Health
```bash
curl http://localhost:3000/health
```

You should see:
```json
{
  "status": "healthy",
  "timestamp": "..."
}
```

---

## Troubleshooting

### ❌ "npm: command not found"
**Problem:** Node.js is not installed or not in PATH

**Solution:** 
1. Install Node.js from https://nodejs.org/
2. Restart your terminal
3. Try again

### ❌ "Port 3000 already in use"
**Problem:** Another application is using port 3000

**Solution:** Use a different port
```bash
PORT=8080 npm start
```
Then visit http://localhost:8080

### ❌ "Cannot find module 'express'"
**Problem:** Dependencies not installed

**Solution:**
```bash
npm install
```

### ❌ "Permission denied: ./setup.sh"
**Problem:** Setup script not executable (Mac/Linux only)

**Solution:**
```bash
chmod +x setup.sh
./setup.sh
```

### ❌ Can't connect from phone/other device
**Problem:** Need to use your computer's IP address

**Solution:**
1. Find your computer's IP address:
   - **Mac:** System Preferences → Network
   - **Windows:** Run `ipconfig` in command prompt
   - **Linux:** Run `ip addr` or `ifconfig`
2. Use that IP instead of localhost
   - Example: `http://192.168.1.100:3000`

---

## Next Steps

✅ Installation complete! Now:

1. **Try the Web Dashboard**
   - Visit http://localhost:3000
   - Log a test query
   - Explore the features

2. **Check the Examples**
   - Look in the `examples/` folder
   - See integration code for ChatGPT, Copilot, Grok

3. **Read the Documentation**
   - [Quick Start Guide](QUICKSTART.md) - Basic usage
   - [Usage Guide](USAGE.md) - Advanced features
   - [README](README.md) - Overview

---

## Uninstalling

To remove AI Hub:

```bash
# Stop the server (Ctrl+C in the terminal where it's running)

# Remove the directory
cd ..
rm -rf Ai-Hub

# That's it!
```

---

## Getting Help

- **Documentation:** Check README.md, QUICKSTART.md, USAGE.md
- **Issues:** Open an issue on GitHub
- **Questions:** Check existing GitHub issues

---

**Happy AI Hub-ing! 🎉**
