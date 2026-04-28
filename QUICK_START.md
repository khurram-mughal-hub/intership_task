# 🚀 DevelopersHub - Quick Start Guide

Get your Full-Stack Agency Platform up and running in 5 minutes!

## Prerequisites

Make sure you have installed:
- **Node.js** v14+ (Download from [nodejs.org](https://nodejs.org))
- **MongoDB** (Local or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account)

## ⚡ Quick Setup

### Step 1: Clone/Navigate to Project
```bash
cd Intershp_task
```

### Step 2: Run Setup Script

**For Windows:**
```bash
setup.bat
```

**For Mac/Linux:**
```bash
bash setup.sh
```

Or manually install:
```bash
cd backend && npm install && cd ../frontend && npm install && cd ..
```

### Step 3: Configure Backend

1. Open `backend/.env`
2. Keep the default values or update MongoDB URI if using MongoDB Atlas
3. Change admin password if desired

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/devhub
JWT_SECRET=your_super_secret_jwt_key_change_in_production_12345
ADMIN_EMAIL=admin@devhub.com
ADMIN_PASSWORD=admin123
NODE_ENV=development
```

### Step 4: Start the Application

From the root directory:
```bash
npm run dev
```

This will start:
- ✅ **Frontend**: http://localhost:3000
- ✅ **Backend**: http://localhost:5000

## 🔐 Admin Login

Access the admin panel at: **http://localhost:3000/admin/login**

**Default Credentials:**
- Email: `admin@devhub.com`
- Password: `admin123`

## 📍 Navigation

### Public Website
- Home: http://localhost:3000/
- Services: http://localhost:3000/services
- Portfolio: http://localhost:3000/portfolio
- Blog: http://localhost:3000/blog
- Contact: http://localhost:3000/contact

### Admin Panel
- Login: http://localhost:3000/admin/login
- Dashboard: http://localhost:3000/admin/dashboard

## 🔌 Test Backend APIs

Use **Postman** or **curl** to test APIs:

### Create Admin (if needed)
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Admin User",
    "email": "test@example.com",
    "password": "password123"
  }'
```

### Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@devhub.com",
    "password": "admin123"
  }'
```

### Get All Services
```bash
curl http://localhost:5000/api/services
```

## 🗄️ MongoDB Setup

### Option 1: Using Local MongoDB
Ensure MongoDB is running:
```bash
# On Windows
mongod

# On Mac (if installed via Homebrew)
brew services start mongodb-community

# On Linux
sudo systemctl start mongod
```

### Option 2: Using MongoDB Atlas (Cloud)
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account
3. Create a cluster
4. Get your connection string
5. Update `MONGODB_URI` in `backend/.env`:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/devhub?retryWrites=true&w=majority
```

## 📁 Project Structure Summary

```
.
├── backend/
│   ├── controllers/     # Business logic
│   ├── models/          # MongoDB schemas
│   ├── routes/          # API endpoints
│   ├── middleware/      # Authentication
│   ├── config/          # Database config
│   ├── index.js         # Main server
│   └── .env             # Environment variables
├── frontend/
│   ├── src/
│   │   ├── pages/       # Page components
│   │   ├── components/  # Reusable components
│   │   ├── services/    # API calls
│   │   ├── context/     # React context
│   │   └── styles/      # CSS files
│   └── public/          # Static files
└── README.md            # Full documentation
```

## 🆘 Troubleshooting

### Port 5000 Already in Use
```bash
# Kill the process using port 5000
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Mac/Linux
lsof -i :5000
kill -9 <PID>
```

### Port 3000 Already in Use
Update in `frontend/src/services/api.js` or use:
```bash
PORT=3001 npm start
```

### MongoDB Connection Error
- Verify MongoDB is running
- Check connection string in `.env`
- For Atlas, allow your IP in network access

### CORS Errors
- Ensure backend is running on localhost:5000
- Verify CORS is enabled in `backend/index.js`

## 🎯 Next Steps

1. **Add Sample Data**:
   - Login to admin panel
   - Add services, portfolio items, blog posts
   - Submit test inquiries from contact form

2. **Customize**:
   - Update company name/logo
   - Change colors in CSS files
   - Add your content

3. **Deploy**:
   - See [Deployment Guide](README.md#-deployment-guide) in README.md

## 📚 Learn More

- [Full README Documentation](README.md)
- [API Endpoints Reference](README.md#-api-endpoints)
- [Database Models Reference](README.md#-database-models)

## 💡 Tips

- Hot-reload enabled: Changes auto-refresh without restarting
- Admin panel is fully functional for CRUD operations
- All APIs require JWT authentication (except registration/login)
- Database auto-creates on first connection

## 🚀 You're All Set!

Start building your agency platform. Happy coding! 🎉

---

**Need Help?** Check [README.md](README.md) for detailed documentation.
