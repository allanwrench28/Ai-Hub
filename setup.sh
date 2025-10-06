#!/bin/bash

# AI Hub - Easy Setup Script
# This script automates the complete setup process

set -e

echo "=========================================="
echo "   AI Hub - Automated Setup"
echo "=========================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed!"
    echo ""
    echo "Please install Node.js first:"
    echo "  - Visit: https://nodejs.org/"
    echo "  - Download and install the LTS version"
    echo ""
    exit 1
fi

NODE_VERSION=$(node --version)
echo "✓ Node.js is installed: $NODE_VERSION"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed!"
    echo "npm should come with Node.js. Please reinstall Node.js."
    exit 1
fi

NPM_VERSION=$(npm --version)
echo "✓ npm is installed: $NPM_VERSION"
echo ""

# Install dependencies
echo "Installing dependencies..."
npm install
echo "✓ Dependencies installed successfully"
echo ""

# Start the server in the background
echo "Starting AI Hub server..."
npm start &
SERVER_PID=$!
echo "✓ Server started (PID: $SERVER_PID)"
echo ""

# Wait for server to be ready
echo "Waiting for server to be ready..."
sleep 3

# Test the server
echo "Testing the server..."
if curl -s http://localhost:3000/health > /dev/null; then
    echo "✓ Server is running and healthy!"
    echo ""
    echo "=========================================="
    echo "   Setup Complete! 🎉"
    echo "=========================================="
    echo ""
    echo "Your AI Hub is now running at:"
    echo "  http://localhost:3000"
    echo ""
    echo "Next steps:"
    echo "  1. Open http://localhost:3000 in your browser"
    echo "  2. Try the test client: node examples/test-client.js"
    echo "  3. Check the QUICKSTART.md for usage examples"
    echo ""
    echo "To stop the server, run: kill $SERVER_PID"
    echo ""
else
    echo "❌ Server failed to start properly"
    kill $SERVER_PID 2>/dev/null || true
    exit 1
fi
