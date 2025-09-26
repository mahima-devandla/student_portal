# 🎓 Student Portal

A full-stack web application to manage students, courses, and academic data.  
This portal provides a centralized platform for administrators, teachers, and students to interact with academic information seamlessly.  

---

## ✨ Features
- 🧑‍🎓 Student Management – Add, edit, view, and delete student records  
- 📚 Course & Enrollment – Manage courses and assign students  
- 📊 Dashboard & Analytics – Visualize enrollment and course data  
- 🔐 Authentication & Roles – Secure login for admin, teacher, and student  
- 📱 Responsive UI – Works across desktop, tablet, and mobile  
- 🛠 Full-stack – Backend API + Frontend UI + Database integration  

---

## 🛠 Tech Stack
- **Backend:** Node.js + Express.js  
- **Database:** MongoDB (Mongoose ORM) *(replace with MySQL/PostgreSQL if different)*  
- **Frontend:** React.js + Vite  
- **Styling:** Tailwind CSS / Bootstrap  
- **Authentication:** JWT (JSON Web Tokens)  
- **Deployment:** Netlify / Vercel (frontend) + Heroku / AWS (backend)  

---

## 📂 Repository Structure
student_portal/
├── backend/ # Express API, routes, models, controllers
│ ├── config/ # Database & environment config
│ ├── controllers/ # Business logic
│ ├── models/ # DB schemas
│ ├── routes/ # API routes
│ ├── server.js # Entry point
│ └── package.json
│
├── frontend/ # React frontend
│ ├── public/ # Static assets
│ ├── src/ # React components, pages, utils
│ ├── vite.config.js # Vite config
│ └── package.json
│
├── README.md
└── LICENSE

yaml
Copy code

---

## 🔧 Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/mahima-devandla/student_portal.git
cd student_portal
2. Backend setup
bash
Copy code
cd backend

# Install dependencies
npm install

# Create a .env file inside backend/ with:
# PORT=5000
# MONGO_URI=your_mongodb_connection_string
# JWT_SECRET=your_secret_key

# Run database migrations / seed (if applicable)
# npm run migrate

# Start backend server
npm start
Backend runs on http://localhost:5000

3. Frontend setup
bash
Copy code
cd ../frontend

# Install dependencies
npm install

# Start frontend dev server
npm run dev
Frontend runs on http://localhost:5173

4. Build for production
bash
Copy code
cd frontend
npm run build
5. Run tests (optional)
bash
Copy code
# Backend tests
cd backend
npm test

# Frontend tests
cd frontend
npm test
