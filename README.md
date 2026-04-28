# DevelopersHub - Full-Stack Agency Platform

A complete full-stack agency platform built with React, Node.js, Express, and MongoDB. This project includes a public-facing website with services, portfolio, blog system, and appointment booking, plus an admin dashboard for managing content.

## 🚀 Features

### Public Website
- **Home Page**: Showcasing agency services and features
- **Services Page**: Dynamic service listings with pricing and features
- **Portfolio**: Showcase of completed projects with technologies used
- **Blog System**: Blog posts with categories and search functionality
- **Contact Form**: Client inquiry submission and storage
- **Appointment Booking**: Schedule meetings with automatic storage

### Admin Panel
- **Authentication**: Secure JWT-based login for admins
- **Service Management**: Create, read, update, and delete services
- **Portfolio Management**: Manage portfolio items and projects
- **Blog Management**: Create, edit, publish/unpublish blog posts
- **Inquiry Management**: View, track, and manage client inquiries
- **Appointment Tracking**: View and manage scheduled appointments

## 📋 Tech Stack

**Frontend:**
- React 19.2.5
- React Router v6 (for routing)
- CSS3 (with custom styling)
- REST API client

**Backend:**
- Node.js with Express.js
- MongoDB with Mongoose ODM
- JWT (JSON Web Tokens) for authentication
- bcryptjs for password hashing
- CORS enabled for cross-origin requests
- Express Validator for form validation

**Database:**
- MongoDB (local or Atlas)

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)
- MongoDB (local installation or MongoDB Atlas account)

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create/update `.env` file in the backend directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/devhub
JWT_SECRET=your_super_secret_jwt_key_change_in_production_12345
ADMIN_EMAIL=admin@devhub.com
ADMIN_PASSWORD=admin123
NODE_ENV=development
```

4. Start the backend server:
```bash
npm start
# or for development with auto-reload:
npm run dev
```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the React development server:
```bash
npm start
```

The frontend will run on `http://localhost:3000`

### Running Both Frontend and Backend Together

From the root directory:
```bash
npm run dev
```

## 📂 Project Structure

```
Intershp_task/
├── backend/
│   ├── config/
│   │   └── db.js                 # MongoDB connection
│   ├── controllers/              # Business logic
│   │   ├── authController.js
│   │   ├── serviceController.js
│   │   ├── portfolioController.js
│   │   ├── blogController.js
│   │   ├── inquiryController.js
│   │   └── appointmentController.js
│   ├── middleware/
│   │   └── auth.js              # JWT authentication middleware
│   ├── models/                   # MongoDB schemas
│   │   ├── Admin.js
│   │   ├── Service.js
│   │   ├── Portfolio.js
│   │   ├── Blog.js
│   │   ├── Inquiry.js
│   │   └── Appointment.js
│   ├── routes/                   # API endpoints
│   │   ├── authRoutes.js
│   │   ├── serviceRoutes.js
│   │   ├── portfolioRoutes.js
│   │   ├── blogRoutes.js
│   │   ├── inquiryRoutes.js
│   │   └── appointmentRoutes.js
│   ├── .env                      # Environment variables
│   ├── index.js                  # Main server file
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/           # Reusable components
│   │   │   ├── Header.js
│   │   │   └── Footer.js
│   │   ├── context/              # React Context
│   │   │   └── AuthContext.js
│   │   ├── pages/                # Page components
│   │   │   ├── Home.js
│   │   │   ├── Services.js
│   │   │   ├── Portfolio.js
│   │   │   ├── Blog.js
│   │   │   ├── Contact.js
│   │   │   ├── AdminLogin.js
│   │   │   └── AdminDashboard.js
│   │   ├── services/             # API calls
│   │   │   └── api.js
│   │   ├── styles/               # CSS files
│   │   │   ├── globals.css
│   │   │   ├── Header.css
│   │   │   ├── Footer.css
│   │   │   ├── Home.css
│   │   │   ├── Services.css
│   │   │   ├── Portfolio.css
│   │   │   ├── Blog.css
│   │   │   ├── Contact.css
│   │   │   ├── Admin.css
│   │   │   └── AdminDashboard.css
│   │   ├── App.js                # Main app component
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   ├── package.json
│   └── .env (optional)
└── package.json (root)
```

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new admin
- `POST /api/auth/login` - Login admin (returns JWT token)

### Services
- `GET /api/services` - Get all services (public)
- `GET /api/services/:id` - Get service by ID (public)
- `POST /api/services` - Create service (admin only)
- `PUT /api/services/:id` - Update service (admin only)
- `DELETE /api/services/:id` - Delete service (admin only)

### Portfolio
- `GET /api/portfolio` - Get all portfolio items (public)
- `GET /api/portfolio/:id` - Get portfolio item by ID (public)
- `POST /api/portfolio` - Create portfolio item (admin only)
- `PUT /api/portfolio/:id` - Update portfolio item (admin only)
- `DELETE /api/portfolio/:id` - Delete portfolio item (admin only)

### Blog
- `GET /api/blogs` - Get published blogs (public)
- `GET /api/blogs/:slug` - Get blog by slug (public)
- `GET /api/blogs/admin/all` - Get all blogs (admin only)
- `POST /api/blogs` - Create blog (admin only)
- `PUT /api/blogs/:id` - Update blog (admin only)
- `DELETE /api/blogs/:id` - Delete blog (admin only)

### Inquiries
- `POST /api/inquiries` - Submit inquiry (public)
- `GET /api/inquiries` - Get all inquiries (admin only)
- `GET /api/inquiries/:id` - Get inquiry by ID (admin only)
- `PUT /api/inquiries/:id` - Update inquiry status (admin only)
- `DELETE /api/inquiries/:id` - Delete inquiry (admin only)

### Appointments
- `POST /api/appointments` - Book appointment (public)
- `GET /api/appointments` - Get all appointments (admin only)
- `GET /api/appointments/:id` - Get appointment by ID (admin only)
- `PUT /api/appointments/:id` - Update appointment (admin only)
- `DELETE /api/appointments/:id` - Delete appointment (admin only)

## 🔐 Admin Credentials (Default)

For testing purposes, use these default credentials:
- **Email**: admin@devhub.com
- **Password**: admin123

**⚠️ Important**: Change these credentials in production!

## 📝 Creating Your First Admin

To create a new admin, make a POST request to `/api/auth/register`:

```json
{
  "name": "Your Name",
  "email": "your-email@example.com",
  "password": "your-secure-password"
}
```

## 🗄️ MongoDB Setup

### Option 1: Local MongoDB
1. Install MongoDB Community Edition
2. Start MongoDB service
3. Default connection: `mongodb://localhost:27017/devhub`

### Option 2: MongoDB Atlas (Cloud)
1. Create account at https://www.mongodb.com/cloud/atlas
2. Create a free cluster
3. Get connection string
4. Update `MONGODB_URI` in `.env`:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/devhub?retryWrites=true&w=majority
```

## 🚀 Deployment Guide

### Backend Deployment (Heroku/Vercel/Railway)

1. Create a production `.env` file with secure values
2. Push to Git repository
3. Connect to hosting platform
4. Set environment variables in platform settings
5. Deploy!

### Frontend Deployment (Vercel/Netlify)

1. Build the React app:
```bash
npm run build
```

2. Deploy the `build` folder to your hosting platform
3. Update API URL if backend is on different domain

## 📖 Database Models

### Admin Model
- name (String)
- email (String, unique)
- password (String, hashed)
- role (String: admin, superadmin)
- timestamps

### Service Model
- title (String)
- description (String)
- icon (String)
- price (Number)
- duration (String)
- features (Array)
- order (Number)
- timestamps

### Portfolio Model
- title (String)
- description (String)
- image (String)
- category (String)
- technologies (Array)
- link (String)
- order (Number)
- timestamps

### Blog Model
- title (String)
- slug (String, auto-generated)
- author (String)
- content (String)
- excerpt (String)
- image (String)
- category (String)
- tags (Array)
- views (Number)
- published (Boolean)
- timestamps

### Inquiry Model
- name (String)
- email (String)
- phone (String)
- service (String)
- message (String)
- status (String: new, contacted, in-progress, completed, rejected)
- priority (String: low, medium, high)
- notes (String)
- timestamps

### Appointment Model
- name (String)
- email (String)
- phone (String)
- service (String)
- date (Date)
- time (String)
- duration (Number)
- message (String)
- status (String: pending, confirmed, completed, cancelled)
- confirmationEmail (Boolean)
- timestamps

## 🐛 Troubleshooting

### Backend won't start
- Check if port 5000 is already in use
- Verify MongoDB is running and connection string is correct
- Check `.env` file for required variables

### Frontend can't connect to backend
- Ensure backend is running on `http://localhost:5000`
- Check CORS is enabled in Express
- Verify API base URL in `frontend/src/services/api.js`

### MongoDB connection error
- Verify MongoDB is running
- Check connection string in `.env`
- For MongoDB Atlas, allow IP address in network access

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [Express.js Guide](https://expressjs.com)
- [MongoDB Manual](https://docs.mongodb.com)
- [JWT Introduction](https://jwt.io)

## 📄 License

This project is open-source and available for educational purposes.

## 👤 Author

Created as a Full-Stack Agency Platform template.

---

**Last Updated**: April 2024

For more information or support, please contact info@devhub.com
