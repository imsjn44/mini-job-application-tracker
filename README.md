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
- Pagination (optional feature)

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
- ⚡ Server Actions-based full CRUD


## 💻 Setup Instructions

Follow this structured guide to configure and run the application locally.

### 📋 Prerequisites

Ensure you have the following installed on your local machine:
- **Node.js** (v18.x or higher)
- **npm** (v9.x or higher)
- **PostgreSQL** instance running locally or hosted on the cloud

---

### 📦 Step 1: Clone & Navigate
Pull the repository down to your local machine and switch to the project directory:
```bash
git clone https://github.com
cd mini-job-application-tracker
```

---

### 🛠️ Step 2: Install Dependencies
Install all required package dependencies defined in `package.json`:
```bash
npm install
```

---

### 🔑 Step 3: Environment Configuration
1. Create a new environment variable file in the root directory:
   ```bash
   touch .env
   ```
2. Open the `.env` file and append your PostgreSQL connection string:
   ```env
   DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE_NAME?schema=public"
   ```
   *💡 Local Example:* `postgresql://postgres:password@localhost:5432/job_tracker`

---

### 🗄️ Step 4: Database & ORM Setup
Generate the typed Prisma Client and run the schema migrations to map your PostgreSQL database:

1. **Generate Prisma Client:**
   ```bash
   npx prisma generate
   ```
2. **Run Database Migrations:**
   ```bash
   npx prisma migrate dev --name init
   ```
3. **Seed Initial Mock Data (Optional):**
   ```bash
   npx prisma db seed
   ```

---

### 🚀 Step 5: Launch the Application

#### Development Mode
To start the live-reloading development server:
```bash
npm run dev
```
Once compilation completes, view your application at **[http://localhost:3000](http://localhost:3000)**.

#### Production Mode
To test a optimized production build locally:
```bash
npm run build
npm run start
```

---

### 🔍 Step 6: Useful Database Tools
If you want to view, search, or modify database entries through an interactive GUI workspace instead of a CLI database manager, open Prisma Studio:
```bash
npx prisma studio
```
This will automatically host a dashboard client locally on **[http://localhost:5555](http://localhost:5172)**.


