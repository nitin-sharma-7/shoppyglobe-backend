# 🛍️ ShoppyGlobe Backend

Welcome to the backend of **ShoppyGlobe**, an eCommerce application built with **Node.js**, **Express**, **MongoDB**, and **JWT authentication**.

## 🚀 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB** & **Mongoose**
- **dotenv**
- **JWT (jsonwebtoken)**
- **Nodemon**

## 📦 Products API

### GET `/products`

- Fetch all products from the database.
- Returns all products if no specific ID is provided.

### GET `/products/:id`

- Fetch a single product using its dynamic `id`.

---

## 👤 User Authentication API

### POST `/register`

- Register a new user.
- **Required in body**:
  - `username`
  - `password`
  - `email`
  - `mobile`

### POST `/login`

- Login user and receive a JWT token.
- **Required in body**:
  - `username`
  - `password`
- **Returns**: JWT token to access protected routes.

---

## 🛒 Cart API

### POST `/cart`

- Add an item to the user's cart.
- **Headers**: `Authorization: Bearer <token>`
- **Required in body**:
  - `productId`
  - `quantity`

**Note**: Prevents duplicate cart items and allows access to authorized users only.

---

### PUT `/cart/:id`

- Update the quantity of a specific item in the cart.
- **Headers**: `Authorization: Bearer <token>`
- **Required in body**: `quantity`

---

### DELETE `/cart/:id`

- Delete a cart item by ID.
- **Headers**: `Authorization: Bearer <token>`

---

## 🔐 Middleware

- JWT authentication for protected routes.
- Duplicate cart entry prevention.

---

## 📦 Setup & Run Locally

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/shoppyglobe-backend.git
cd shoppyglobe-backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create a `.env` File

```env
PORT=5000
MONGODB_URI=your_mongo_uri
JWT_SECRET=your_secret_key
```

### 4. Start the Server

```bash
npm run dev
```

---

## 📫 Author

**Nitin Sharma**  
Frontend Developer | MERN Stack Learner

---

## 📜 License

This project is licensed under the MIT License.
