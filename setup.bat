@echo off

REM DevelopersHub Quick Start Script for Windows

echo.
echo 🚀 DevelopersHub - Quick Start Setup
echo ====================================
echo.

REM Check Node.js
node -v >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js first.
    pause
    exit /b 1
)

echo ✅ Node.js version: 
node -v

echo ✅ npm version:
npm -v
echo.

REM Backend Setup
echo 📦 Setting up Backend...
cd backend
call npm install
echo ✅ Backend dependencies installed
echo.

REM Frontend Setup
echo 📦 Setting up Frontend...
cd ..\frontend
call npm install
echo ✅ Frontend dependencies installed
echo.

cd ..\

echo 🎉 Setup Complete!
echo.
echo 📝 Next steps:
echo 1. Update backend\.env with your MongoDB URI
echo 2. Run 'npm run dev' to start both frontend and backend
echo 3. Frontend: http://localhost:3000
echo 4. Backend: http://localhost:5000
echo 5. Admin Login: admin@devhub.com / admin123
echo.
echo 📖 See README.md for more information
echo.
pause
