# 📌 Mini Job Application Tracker

A full-stack job application tracking web app built using **Next.js (App Router)** with **Server Actions** and **PostgreSQL (Prisma)**.  
This project was developed as part of the **InternSathi Full Stack Internship assignment**.

---

## 🚀 Live Demo
(Optional but recommended)  
https://your-live-demo-link.com

---

## 📂 GitHub Repository
https://github.com/your-username/job-application-tracker

---

## 📌 Project Overview

This application helps users track their job applications across different hiring stages.

### Users can:
- Add new job applications
- View all applications in a dashboard
- Edit existing applications
- Delete applications with confirmation
- Filter applications by status (Applied, Interviewing, Offer, Rejected)
- Search by company name or job title (optional feature)

---

## 🛠️ Tech Stack

### Frontend + Backend
- Next.js 14+ (App Router)
- React
- TypeScript
- Server Actions
- Server Components & Client Components
- Tailwind CSS

### Database
- PostgreSQL

### ORM
- Prisma

---

## ⚙️ Architecture

This project uses **Next.js Server Actions** instead of REST APIs.

- Server Actions handle:
  - Create application
  - Update application
  - Delete application

- Server Components handle data fetching
- Client Components handle UI interactions and forms

---

## 📊 Features

### Core Features
- 📄 Application List Page
- ➕ Add Application Form
- ✏️ Edit Application
- ❌ Delete Application with confirmation
- 🔍 Filter by status
- ⚡ Server Actions-based full CRUD


###⚙️ Setup Instructions
1. Clone the Repository
git clone https://github.com/your-username/job-application-tracker.git
cd job-application-tracker
2. Install Dependencies
npm install
3. Configure Environment Variables

Create a .env file:

DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DATABASE_NAME

Example:

DATABASE_URL=postgresql://postgres:password@localhost:5432/job_tracker
4. Setup Database (Prisma)

Generate Prisma client:

npx prisma generate

Run migrations:

npx prisma migrate dev

(Optional) Open Prisma Studio:

npx prisma studio
5. Run Development Server
npm run dev

Open:

http://localhost:3000
6. Build for Production (Optional)
npm run build
npm start
7. Seed Database (Optional)
npx prisma db seed
📸 Screenshots / Demo
Dashboard

Add screenshot here

/screenshots/dashboard.png
Add Application

Add screenshot here

/screenshots/add.png
Edit Application

Add screenshot here


(Optional but recommended)
https://your-demo-video-link.com

📁 Project Structure
/app
  /actions        → Server Actions (CRUD logic)
  /components     → UI Components
  /app/(routes)   → Pages (list, add, edit)

 /lib             → Prisma client
 /prisma          → Schema & migrations


