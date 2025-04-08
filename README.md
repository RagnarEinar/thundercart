# ⚡ Thundercart

**Thundercart** is a feature-rich e-commerce web app built using modern React tooling, TypeScript, and Firebase. It includes real-time product management, secure user authentication, Stripe integration (test mode), and a sleek UI with dark/light mode toggle. Designed as a **resume-worthy project** to demonstrate full-stack frontend capabilities.

---

## 🚀 Features

### 🏣 E-commerce Experience
- Browse products with images, prices, and descriptions
- Real-time search and filter options by category or keyword
- Add items to cart and proceed to secure checkout (Stripe test mode)
- Authenticated users can place orders and review items post-purchase

### 🔐 Firebase Authentication
- Email/password registration and login
- Session persistence with protected routes
- User roles: normal users and admin

### 📀 Firebase Realtime Database
- Product listings and order data are stored and synced in real time
- Efficient data flow using Firebase's SDK

### 🧑‍💼 Admin Dashboard
- Admin users have access to a dedicated dashboard
- Perform **CRUD operations** on all products
- Realtime UI updates on add/edit/delete using Firebase events
- Admin-only protected route

### 📟 Cart & Stripe Checkout
- Add to cart, view/update/remove items
- Stripe payment (test mode only)
- Order confirmation and storage in Firebase

### ✨ Post-Order Experience
- View order history
- Submit reviews and star ratings for purchased products

### 🎨 Theming
- Toggle between light and dark modes
- Theme state handled using `styled-components` and context

---

## 💪 Tech Stack

| Tech                  | Role                                       |
|----------------------|--------------------------------------------|
| React + TypeScript   | Frontend UI and type-safe logic            |
| Redux Toolkit        | State management                           |
| Redux-Saga           | Handle async flows                         |
| Firebase Auth        | Secure authentication                      |
| Firebase Realtime DB | Products and orders data (live updates)    |
| Stripe (Test Mode)   | Payment gateway                            |
| Styled Components    | Theming and UI styling                     |
| React Router         | Routing and navigation                     |

---


## 🔐 Authentication

- Register and login via Firebase Authentication
- Sessions persist with local storage
- Routes protected by user roles
- Admin routes accessible only to admin users (based on user claims or roles field)

---

## 📦 Admin Dashboard

Accessible only by admins. Features:

- Add new products (image URL, price, category, etc.)
- Edit product details
- Delete products
- Live sync with product listing page

---

## 💳 Stripe Test Payments

Use the following test card for successful payments:

```
Card Number: 4242 4242 4242 4242
Expiry: Any future date
CVC: Any 3 digits
ZIP: Any 5 digits
```

### 🔥 Simulate Stripe Payment Failures

Use the following test cards to simulate failed scenarios:

- **Card declined:** `4000 0000 0000 0002`
- **Insufficient funds:** `4000 0000 0000 9995`
- **Incorrect CVC:** `4000 0000 0000 0127`
- **Expired card:** `4000 0000 0000 0069`
- **Processing error:** `4000 0000 0000 0119`

More info: [Stripe Test Cards](https://stripe.com/docs/testing#international-cards)

---


## 👨‍💼 Author

**Thundercart** is developed by Yuvaraj T
Reach out on [LinkedIn](www.linkedin.com/in/yuvaraj-t-229a58333)

---

## 📄 License

This project is licensed under the MIT License.

