# 📝 PostBloging – Modern Full-Stack Blog Application

**Live Demo:** https://postbloging-1.onrender.com

PostBloging is a full-stack blog platform that allows users to create, edit, delete, and explore blog posts with authentication, image uploads, and a modern responsive UI.

---

## 🚀 Features

* User Authentication (Register / Login with JWT)
* Create, Edit, Delete Blog Posts
* Image Upload with Cloud Storage Integration
* Like and Category Support
* Responsive Modern UI
* RESTful API Architecture
* MongoDB Database Integration
* Secure Environment Variable Configuration
* Production Deployment on Render

---

## 🛠️ Tech Stack

**Frontend**

* React.js
* React Router
* Axios
* CSS / Modern UI Components

**Backend**

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication
* Multer & Cloudinary for Image Uploads

**Deployment**

* Render (Frontend & Backend)
* MongoDB Atlas (Database)

---

## 📂 Project Structure

```
PostBloging/
│
├── backend/
│   ├── config/
│   ├── models/
│   ├── router/
│   ├── middleware/
│   ├── uploads/
│   └── server.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/PostBloging.git
cd PostBloging
```

### 2. Backend Setup

```bash
cd backend
npm install
npm run dev
```

Create `.env` file inside **backend**:

```
PORT=3001
DATABASE_URI=your_mongodb_uri
JWT_SECRET=your_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

### 3. Frontend Setup

```bash
cd frontend
npm install
npm start
```

Create `.env` file inside **frontend**:

```
REACT_APP_API_URL=http://localhost:3001
```

---

## 🌐 Deployment

**Frontend:** https://postbloging-1.onrender.com
**Backend:** Render Web Service
**Database:** MongoDB Atlas
**Image Storage:** Cloudinary

---

## 📌 Future Improvements

* Comment System
* Bookmark Posts
* User Profiles
* Rich Text Editor
* Notifications

---

## 👨‍💻 Author

Developed as a full-stack portfolio project demonstrating modern MERN stack deployment and production practices.
