# Authentication Frontend Application

A React-based authentication frontend that provides **Signup and Login** functionality with robust **form validations using Joi**.  
Users can log in **only if they have previously signed up**, with authentication backed by a **PostgreSQL database**.

---

## 🚀 Live Demo

🔗 Deployed Application:  
https://whimsical-griffin-cf1e2e.netlify.app/

> Replace this with your actual deployment URL (Vercel / Netlify / Render).

---

## ✨ Features

- User **Signup** and **Login**
- **Joi-based form validation**
- Prevents authentication for non-registered users
- Real-time validation error messages
- Clean and responsive UI
- PostgreSQL-backed authentication system
- Secure and structured authentication flow

---

## 🖥️ User Interface

- Signup Page with Joi validations
- Login Page with credential verification
- Error messages for invalid input
- Success and failure authentication feedback

---

## 🛠️ Tech Stack

### Frontend
- **React**
- **JavaScript (ES6+)**
- **Joi** – schema-based form validation
- HTML5 & CSS3

### Backend
- Authentication API (e.g., Node.js & Express)

### Database
- **PostgreSQL**
  - Stores registered user data
  - Used to verify login credentials

---

## 🔐 Authentication Flow

1. User signs up via the Signup form.
2. Joi validates input fields (email, password, etc.).
3. Valid user data is stored in PostgreSQL.
4. During login:
   - Joi validates input.
   - Backend checks credentials against PostgreSQL.
5. Login is allowed **only if the user exists and credentials match**.

---

## ✅ Joi Validations Implemented

- Required field validation
- Email format validation
- Password length and strength checks
- Custom validation error messages
- Prevents form submission on invalid input

---

## ⚙️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/your-username/authentication-frontend.git

# Navigate to the project directory
cd authentication-frontend

# Install dependencies
npm install

# Start the React app
npm start
 
