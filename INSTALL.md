# 🚀 Installation Guide for Complete Beginners

This guide is written for people who have **never used a terminal or command line before**. We'll walk you through every single step!

---

## 📋 What You'll Need

Before we start, you need two things installed on your computer:

### 1. **Git** (for downloading/cloning the code)

**What is Git?** Git is a tool that lets you download code from the internet (like from GitHub).

**How to get Git:**

- **Windows:** 
  1. Go to https://git-scm.com/download/win
  2. Download will start automatically
  3. Run the installer (click "Next" through all options - the defaults are fine)
  4. After installation, restart your computer

- **Mac:** 
  1. Open the "Terminal" app (find it in Applications → Utilities → Terminal)
  2. Type this command and press Enter: `git --version`
  3. If Git isn't installed, macOS will prompt you to install it - click "Install"

- **Linux:** 
  1. Open Terminal
  2. Type: `sudo apt-get install git` (Ubuntu/Debian) or `sudo yum install git` (Fedora)
  3. Press Enter and type your password when asked

**Check if Git is installed:**
- Open Terminal (Mac/Linux) or "Command Prompt" or "Git Bash" (Windows)
- Type: `git --version`
- Press Enter
- You should see something like "git version 2.x.x" ✓

### 2. **Node.js** (to run the AI Hub server)

**What is Node.js?** Node.js lets your computer run JavaScript code (which AI Hub is written in).

**How to get Node.js:**
1. Visit https://nodejs.org/
2. Download the **LTS version** (the green button that says "Recommended for Most Users")
3. Run the installer:
   - Windows: Double-click the downloaded file, click "Next" through all options
   - Mac: Double-click the downloaded file, follow the installation wizard
4. After installation, **restart your computer** (important!)

**Check if Node.js is installed:**
- Open Terminal (Mac/Linux) or "Command Prompt" (Windows)
- Type: `node --version`
- Press Enter
- You should see something like "v20.x.x" or similar ✓

---

## 🖥️ Opening Your Terminal/Command Prompt

Before we can install AI Hub, you need to know how to open the terminal:

### **Windows:**
1. Press the Windows key on your keyboard
2. Type "Command Prompt" or "cmd"
3. Click on "Command Prompt" to open it
4. **OR** if you installed Git, search for "Git Bash" instead (recommended!)

### **Mac:**
1. Press Command + Space (⌘ + Space)
2. Type "Terminal"
3. Press Enter

### **Linux:**
1. Press Ctrl + Alt + T
2. **OR** look for "Terminal" in your applications menu

You should now see a window with a black (or white) screen and some text - this is your terminal!

---

## 📥 Installation Steps

### ⚡ Option 1: Automated Setup (EASIEST - Recommended!)

This option does everything automatically for you!

#### **For Mac/Linux Users:**

1. **Open Terminal** (see instructions above)

2. **Navigate to where you want to install AI Hub:**
   - Type: `cd Desktop` (this will install on your Desktop)
   - Press Enter
   - *Note: You can use any folder you like instead of Desktop*

3. **Download AI Hub from GitHub:**
   - Copy this entire command:
     ```
     git clone https://github.com/allanwrench28/Ai-Hub.git
     ```
   - Right-click in your Terminal window and choose "Paste"
   - Press Enter
   - Wait for the download to complete (you'll see progress messages)

4. **Go into the AI Hub folder:**
   - Type: `cd Ai-Hub`
   - Press Enter

5. **Run the automatic setup:**
   - Type: `./setup.sh`
   - Press Enter
   - The script will now:
     - Check if you have Node.js ✓
     - Download required files ✓
     - Start the server ✓
     - Test that everything works ✓

6. **Done!** The server is now running! You should see:
   ```
   AI Hub server running on port 3000
   Visit http://localhost:3000 for API information
   ```

7. **Open your web browser** (Chrome, Firefox, Safari, etc.) and go to:
   ```
   http://localhost:3000
   ```
   You should see the beautiful AI Hub dashboard! 🎉

#### **For Windows Users:**

1. **Open Command Prompt or Git Bash** (see instructions above)
   - We recommend Git Bash if you have it!

2. **Navigate to where you want to install AI Hub:**
   - Type: `cd Desktop` (this will install on your Desktop)
   - Press Enter
   - *Note: You can use any folder you like instead of Desktop*

3. **Download AI Hub from GitHub:**
   - Copy this entire command:
     ```
     git clone https://github.com/allanwrench28/Ai-Hub.git
     ```
   - Right-click in your terminal window and choose "Paste"
   - Press Enter
   - Wait for the download to complete

4. **Go into the AI Hub folder:**
   - Type: `cd Ai-Hub`
   - Press Enter

5. **Run the automatic setup:**
   - Type: `setup.bat`
   - Press Enter
   - The script will now:
     - Check if you have Node.js ✓
     - Download required files ✓
     - Show you're ready to start! ✓

6. **Start the server:**
   - Type: `npm start`
   - Press Enter
   - Wait a moment... You should see:
     ```
     AI Hub server running on port 3000
     Visit http://localhost:3000 for API information
     ```

7. **Open your web browser** (Chrome, Firefox, Edge, etc.) and go to:
   ```
   http://localhost:3000
   ```
   You should see the beautiful AI Hub dashboard! 🎉

---

### 🔧 Option 2: Manual Setup (If Automatic Setup Doesn't Work)

Follow these detailed steps:

#### **Step 1: Download AI Hub**

1. **Open your Terminal/Command Prompt** (see instructions above)

2. **Navigate to where you want to install AI Hub:**
   - Type: `cd Desktop` and press Enter
   - (Or choose a different folder, like `cd Documents`)

3. **Download (clone) the code:**
   - Copy and paste this command:
     ```
     git clone https://github.com/allanwrench28/Ai-Hub.git
     ```
   - Press Enter
   - You'll see messages like "Cloning into 'Ai-Hub'..." - this is normal!
   - Wait until it says "done"

#### **Step 2: Go into the AI Hub folder**

- Type: `cd Ai-Hub`
- Press Enter
- You're now inside the AI Hub folder!

#### **Step 3: Install dependencies**

AI Hub needs some additional code files to work. Let's download them:

- Type: `npm install`
- Press Enter
- You'll see lots of text scrolling by - this is normal!
- Wait until you see something like "added XX packages" and get your cursor back

#### **Step 4: Start the server**

- Type: `npm start`
- Press Enter
- Within a few seconds, you should see:
  ```
  AI Hub server running on port 3000
  Visit http://localhost:3000 for API information
  ```

#### **Step 5: Open in your browser**

- Open your web browser (Chrome, Firefox, Safari, Edge, etc.)
- In the address bar at the top, type:
  ```
  http://localhost:3000
  ```
- Press Enter
- You should see the AI Hub dashboard! 🎉

---

## ✅ How to Know It's Working

### **The Web Dashboard (Easiest Way)**

1. Make sure the server is running (you should see "AI Hub server running on port 3000" in your terminal)
2. Open your web browser
3. Type in the address bar: `http://localhost:3000`
4. Press Enter
5. You should see a beautiful purple dashboard with:
   - A "Server Running" green badge at the top
   - Statistics showing "0 Total Queries" and "0 Context Keys"
   - Forms to log queries and update context
   - A list of recent queries (empty for now)

If you see this, **it's working!** 🎉

### **Testing with Sample Data (Optional)**

Want to make sure everything really works? Let's log a test query:

1. In the web dashboard, find the "📝 Log a Query" section
2. In the "Query" box, type: `Test - is this working?`
3. Leave "Source" as "ChatGPT"
4. Click the blue "Log Query" button
5. You should see a green success message: "✓ Query logged successfully!"
6. Scroll down to "📜 Recent Queries" - you should see your test query appear!

**That's it!** AI Hub is fully working and ready to use! 🚀

---

## 🛑 How to Stop the Server

When you're done using AI Hub:

1. Go back to your Terminal/Command Prompt window (where the server is running)
2. Press `Ctrl + C` on your keyboard (hold Ctrl, then press C)
3. The server will stop
4. You can now close the terminal window

To start it again later:
1. Open Terminal/Command Prompt
2. Type: `cd Desktop/Ai-Hub` (or wherever you installed it)
3. Press Enter
4. Type: `npm start`
5. Press Enter

---

## 🔧 Troubleshooting for Beginners

### ❌ "git is not recognized" or "git: command not found"
**What this means:** Git is not installed on your computer

**How to fix:**
1. Go back to the "What You'll Need" section above
2. Follow the instructions to install Git
3. **Restart your terminal/command prompt** after installing
4. Try again

### ❌ "npm: command not found" or "npm is not recognized"
**What this means:** Node.js is not installed, or your terminal doesn't know where to find it

**How to fix:**
1. Go back to the "What You'll Need" section above
2. Follow the instructions to install Node.js
3. **Important:** Restart your computer after installing Node.js
4. Open a new terminal/command prompt window
5. Try again

### ❌ "Permission denied: ./setup.sh" (Mac/Linux only)
**What this means:** The setup script doesn't have permission to run

**How to fix:**
1. In your terminal, type: `chmod +x setup.sh`
2. Press Enter
3. Now type: `./setup.sh`
4. Press Enter
5. It should work now!

### ❌ "Port 3000 already in use" or "EADDRINUSE"
**What this means:** Something else on your computer is already using port 3000

**How to fix:**
1. Stop the server (press Ctrl+C)
2. Close any other programs that might be using port 3000
3. Try starting again: `npm start`

**OR** use a different port:
1. Instead of `npm start`, type: `PORT=8080 npm start` (Mac/Linux)
2. Or: `set PORT=8080 && npm start` (Windows)
3. Press Enter
4. Then open `http://localhost:8080` instead of 3000

### ❌ Terminal says "Cannot find module 'express'" or similar
**What this means:** The required code files didn't download properly

**How to fix:**
1. Make sure you're in the Ai-Hub folder (type: `cd Ai-Hub` and press Enter)
2. Type: `npm install`
3. Press Enter
4. Wait for it to finish (you'll see "added XX packages")
5. Type: `npm start`
6. Press Enter

### ❌ "cd: No such file or directory" or "cannot find the path"
**What this means:** The folder doesn't exist where you're trying to go

**How to fix:**
1. First, see where you are now. Type: `pwd` (Mac/Linux) or `cd` (Windows)
2. Press Enter
3. You'll see your current location
4. Make sure you downloaded AI Hub to your Desktop (or remember where you put it)
5. Type: `cd Desktop/Ai-Hub` and press Enter (adjust if you put it somewhere else)

### ❌ The terminal/command prompt closed or crashed
**What this means:** Something went wrong, but it's easy to fix!

**How to fix:**
1. Open a new terminal/command prompt window
2. Navigate to AI Hub: `cd Desktop/Ai-Hub` (or wherever you installed it)
3. Press Enter
4. Start the server: `npm start`
5. Press Enter

### ❌ Can't access from phone or another computer
**What this means:** You need to use your computer's actual IP address, not "localhost"

**How to find your computer's IP address:**

**Windows:**
1. Open Command Prompt
2. Type: `ipconfig`
3. Press Enter
4. Look for "IPv4 Address" - it will be something like `192.168.1.100`

**Mac:**
1. Click the Apple menu → System Preferences → Network
2. Your IP address is shown - something like `192.168.1.100`

**Linux:**
1. Open Terminal
2. Type: `hostname -I`
3. Press Enter
4. You'll see your IP address

**Then on your phone or other device:**
- Instead of `http://localhost:3000`
- Use `http://YOUR-IP-ADDRESS:3000`
- For example: `http://192.168.1.100:3000`

### 😰 Still Having Problems?

If nothing above helps:

1. **Take a screenshot** of the error message you're seeing
2. **Note what you were trying to do** when it happened
3. **Open an issue** on GitHub: https://github.com/allanwrench28/Ai-Hub/issues
4. Include your screenshot and explain what happened

We'll help you get it working!

---

## 🎯 What's Next?

✅ **Installation complete!** Now you can:

### 1. **Start Using AI Hub Right Away**
   - The web dashboard is open at http://localhost:3000
   - Try logging your first query!
   - All features are point-and-click - no coding needed

### 2. **Learn the Basics**
   - Check out [QUICKSTART.md](QUICKSTART.md) for a quick tutorial
   - Read [README.md](README.md) to understand what AI Hub can do

### 3. **Advanced Usage (Optional)**
   - Look in the `examples/` folder for code samples
   - See [USAGE.md](USAGE.md) for API details
   - Learn how to integrate with ChatGPT, Copilot, etc.

---

## 🗑️ Uninstalling AI Hub

If you want to remove AI Hub from your computer:

1. **Stop the server** (if it's running):
   - Go to the terminal window where AI Hub is running
   - Press Ctrl+C

2. **Delete the folder:**
   - **Windows:** Go to your Desktop (or wherever you installed it), right-click the "Ai-Hub" folder, choose "Delete"
   - **Mac:** Drag the "Ai-Hub" folder from your Desktop to the Trash
   - **Linux:** In terminal, type: `rm -rf ~/Desktop/Ai-Hub` and press Enter

3. **That's it!** AI Hub is completely removed.

---

## 📞 Need More Help?

- **Read the documentation:** [README.md](README.md) | [QUICKSTART.md](QUICKSTART.md) | [USAGE.md](USAGE.md)
- **Ask a question:** Open an issue at https://github.com/allanwrench28/Ai-Hub/issues
- **Check existing questions:** Someone else might have had the same problem!

---

**You did it! Welcome to AI Hub! 🎉**
