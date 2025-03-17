# User Management REST API

## Overview
This is a simple RESTful API built using **TypeScript**, **Express.js**, and **Zod** for validation. The API provides basic **CRUD operations** for managing users, including authentication with **JWT**.

## Features
- User signup with validation.
- User login with authentication token.
- Retrieve all users.
- Retrieve a specific user by ID.
- Update user details.
- Delete a user.

---

## 🛠 Tech Stack
- **Node.js**
- **Express.js**
- **TypeScript**
- **Zod** (for validation)
- **MongoDB** (as the database)
- **bcrypt** (for password hashing)
- **jsonwebtoken** (for authentication)

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```sh
https://github.com/Arnab7456/Assignment-Backend-Developer
cd Assignment-Backend-Developer
```

### 2️⃣ Install Dependencies
We use `pnpm` for package management. If you haven't installed it yet, run:
```sh
npm install -g pnpm
```
Then install dependencies:
```sh
pnpm install
```

### 3️⃣ Set Up Environment Variables
Create a `.env` file in the root directory and configure the following variables:
```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4️⃣ Start the Server
```sh
pnpm dev
```
By default, the server runs on **http://localhost:3000**.

---

## 📌 API Endpoints

### ➤ 1. User Signup
**Endpoint:** `POST /api/user/signup`

**Request Body:**
```json
{
  "name": "Admin User1",
  "email": "arna1b@example.com",
  "password": "Aad@128",
  "age": 23
}
```

**Response:**
```json
{
  "success": true,
  "message": "User created successfully",
  "user": {
    "name": "Admin User1",
    "email": "arna1b@example.com",
    "age": 23,
    "_id": "67d89615cba50d56aee05e66",
    "createdAt": "2025-03-17T21:37:25.417Z"
  }
}
```

---

### ➤ 2. User Login
**Endpoint:** `POST /api/user/login`

**Request Body:**
```json
{
  "email": "arna1b@example.com",
  "password": "Aad@128"
}
```

**Response:**
```json
{
  "success": true,
  "message": "User logged in successfully",
  "token": "your_jwt_token"
}
```

---

### ➤ 3. Get All Users
**Endpoint:** `GET /api/user/all`

**Response:**
```json
{
  "success": true,
  "message": "Users fetched successfully",
  "users": [
    {
      "_id": "67d89615cba50d56aee05e66",
      "name": "Admin User1",
      "email": "arna1b@example.com",
      "age": 23
    }
  ]
}
```

---

### ➤ 4. Get User by ID
**Endpoint:** `GET /api/user/:id`

**Response:**
```json
{
  "success": true,
  "user": {
    "_id": "67d89615cba50d56aee05e66",
    "name": "Admin User1",
    "email": "arna1b@example.com",
    "age": 23
  }
}
```

---

### ➤ 5. Update User
**Endpoint:** `PUT /api/user/:id`

**Request Body:**
```json
{
  "name": "Updated User",
  "age": 24
}
```

**Response:**
```json
{
  "success": true,
  "message": "User updated successfully"
}
```

---

### ➤ 6. Delete User
**Endpoint:** `DELETE /api/user/:id`

**Response:**
```json
{
  "success": true,
  "message": "User deleted successfully"
}
```

---

## ✨ Author
- **Arnab**

Feel free to contribute or reach out for any queries! 🚀

