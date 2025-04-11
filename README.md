# Discord Clone - MERN Stack

This repository is a starter template for a Discord-like chat application built with the MERN stack.

## Features

- **User Authentication:** Registration and login using Express and JWT.
- **React Frontend:** A simple chat interface.
- **MongoDB:** Used for storing user data.
- **Modular Code Structure:** Separation of concerns with routes, controllers, and models.

## Repository Structure

  discord-clone-mern/ ├── backend/ │ ├── controllers/ │ │ └── authController.js │ ├── models/ │ │ └── User.js │ ├── routes/ │ │ └── authRoutes.js │ ├── server.js │ └── .env ├── frontend/ │ ├── public/ │ │ └── index.html │ ├── src/ │ │ ├── components/ │ │ │ └── Chat.js │ │ ├── App.js │ │ └── index.js │ └── package.json ├── .gitignore └── README.md

  
## Setup

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- [MongoDB](https://www.mongodb.com/) installed or a connection URI for a MongoDB Atlas cluster

### Backend Setup

1. Navigate to the `backend` folder:

   ```bash
   cd backend
npm install express mongoose dotenv cors bcrypt jsonwebtoken
MONGO_URI=mongodb://localhost:27017/discord-clone
JWT_SECRET=your_jwt_secret
PORT=5000
node server.js
cd frontend
npm install
npm start

