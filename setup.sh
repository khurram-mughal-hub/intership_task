#!/bin/bash

# DevelopersHub Quick Start Script

echo "🚀 DevelopersHub - Quick Start Setup"
echo "===================================="
echo ""

# Check Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

echo "✅ Node.js version: $(node -v)"
echo "✅ npm version: $(npm -v)"
echo ""

# Backend Setup
echo "📦 Setting up Backend..."
cd backend
npm install
echo "✅ Backend dependencies installed"
echo ""

# Frontend Setup
echo "📦 Setting up Frontend..."
cd ../frontend
npm install
echo "✅ Frontend dependencies installed"
echo ""

cd ../

echo "🎉 Setup Complete!"
echo ""
echo "📝 Next steps:"
echo "1. Update backend/.env with your MongoDB URI"
echo "2. Run 'npm run dev' to start both frontend and backend"
echo "3. Frontend: http://localhost:3000"
echo "4. Backend: http://localhost:5000"
echo "5. Admin Login: admin@devhub.com / admin123"
echo ""
echo "📖 See README.md for more information"
