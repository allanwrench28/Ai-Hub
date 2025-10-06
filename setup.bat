@echo off
REM AI Hub - Easy Setup Script for Windows
REM This script automates the complete setup process

echo ==========================================
echo    AI Hub - Automated Setup
echo ==========================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo X Node.js is not installed!
    echo.
    echo Please install Node.js first:
    echo   - Visit: https://nodejs.org/
    echo   - Download and install the LTS version
    echo.
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('node --version') do set NODE_VERSION=%%i
echo √ Node.js is installed: %NODE_VERSION%

REM Check if npm is installed
where npm >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo X npm is not installed!
    echo npm should come with Node.js. Please reinstall Node.js.
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('npm --version') do set NPM_VERSION=%%i
echo √ npm is installed: %NPM_VERSION%
echo.

REM Install dependencies
echo Installing dependencies...
call npm install
if %ERRORLEVEL% NEQ 0 (
    echo X Failed to install dependencies
    pause
    exit /b 1
)
echo √ Dependencies installed successfully
echo.

echo ==========================================
echo    Setup Complete! 🎉
echo ==========================================
echo.
echo Your AI Hub is ready to run!
echo.
echo To start the server:
echo   npm start
echo.
echo Then test it with:
echo   node examples/test-client.js
echo.
echo Or visit http://localhost:3000 in your browser
echo.
pause
