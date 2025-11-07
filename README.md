# 💬 Real-Time Chat App

A full-stack real-time chat application that allows multiple users to send and receive messages instantly.  
Built using **React.js**, **Node.js**, **Express.js**, **Socket.io**, and **MongoDB** with secure **JWT authentication**.

🔗 **Live Demo:** [Real-Time Chat App](https://real-time-chat-app-69au.onrender.com/login)

---

## 🚀 Features

- 🔐 **User Authentication** – Login and Signup using JWT for secure access  
- ⚡ **Real-Time Messaging** – Instant message delivery using Socket.io  
- 😊 **Emojis Support** – Expressive chatting experience  
- 🕒 **Timestamps** – Shows when messages are sent and received  
- 🎨 **Theme Customization** – Users can switch between light and dark themes  
- 👋 **Join/Leave Notifications** – Displays when a user joins or leaves the chat  
- 💾 **Persistent Storage** – All chats and user data are stored in MongoDB  

---

## 🧠 Tech Stack

**Frontend:**
- React.js  
- HTML5, CSS3, JavaScript  
- Axios (for API calls)  
- Socket.io Client  
- Tailwind CSS *(if used)*  

**Backend:**
- Node.js  
- Express.js  
- Socket.io  
- JWT (for authentication)  
- bcrypt.js (for password encryption)  

**Database:**
- MongoDB (using Mongoose ODM)

**Deployment:**
- Backend: Render  
- Database: MongoDB Atlas  

---

## ⚙️ Installation & Setup

Follow these steps to run the project locally 👇

### 1️⃣ Clone the repository

git clone https://github.com/your-username/real-time-chat-app.git
cd real-time-chat-app


### 2️⃣ Setup Backend
cd backend
npm install

Create a .env file inside the backend folder and add the following:

PORT=5001
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

Run the backend server:
npm start

### 3️⃣ Setup Frontend
cd frontend
npm install
npm run dev


Open your browser and go to:

http://localhost:5173


Contributions, issues, and feature requests are welcome. This Project has Some Bugs too... : )
Feel free to fork this repository and submit a pull request with improvements.

If you find this project helpful, don’t forget to ⭐ star the repo!
