# 💬 Discord Clone – MERN Stack

A full-stack Discord-like chat application built using the **MERN Stack**: **MongoDB, Express.js, React.js, and Node.js**. This project serves as a starter template for building real-time chat apps with user authentication and modular architecture.

---

## 🚀 Features

- 🔐 **User Authentication** – Sign up and login using JWT  
- 💬 **React Frontend** – Simple and clean chat interface  
- 🗄️ **MongoDB Database** – Store user and chat data  
- 🧱 **Modular Codebase** – Routes, controllers, and models are separated for clarity

---

## 📁 Project Structure
discord-clone-mern/
├── backend/
│   ├── controllers/
│   │   └── authController.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   └── authRoutes.js
│   ├── server.js
│   └── .env
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   └── Chat.js
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
├── .gitignore
└── README.md
---

## 🛠️ Setup Instructions

### ✅ Prerequisites

- [Node.js](https://nodejs.org/) installed
- [MongoDB](https://www.mongodb.com/) running locally or a MongoDB Atlas URI

---

### 🔧 Backend Setup

1. Navigate to the backend directory:
cd backend
2.	Install dependencies:
   npm install express mongoose dotenv cors bcrypt jsonwebtoken
  	MONGO_URI=mongodb://localhost:27017/discord-clone
JWT_SECRET=your_jwt_secret
PORT=5000
🔒 Environment File Example (backend/.env)
MONGO_URI=mongodb://localhost:27017/discord-clone
JWT_SECRET=your_jwt_secret
PORT=5000
📦 Tech Stack
	•	Frontend: React.js, JSX, CSS
	•	Backend: Node.js, Express.js
	•	Database: MongoDB
	•	Authentication: JWT, bcrypt
	•	API Testing: Postman (optional)
📄 License

This project is licensed under the MIT License.

⸻

👨‍💻 Author

Made with 💬 by Shiva
🎓 B.Tech AI & Data Science @ MKCE
⚡ MERN Stack | Full-Stack Developer | Always Building

⸻

🌟 Like this project?

Star the repo ⭐ and share with others who might find it helpful!
Let me know if you want matching sample code (`server.js`, `authController.js`, etc.) or want to deploy it (e.g., with Render or Vercel)!
