
---

# 🔖 Smart Bookmark

**A minimalist, real-time bookmark manager for speed, privacy, and simplicity.**

Smart Bookmark helps you save and organize your important links without clutter. Your bookmarks stay **secure, synced in real time, and accessible anywhere**.

🔗 **Live Demo:** [https://smart-bookmark-app.vercel.app/](https://smart-bookmark-app.vercel.app/)
🐞 **Report Issues:** [https://github.com/Vamsi-Krishna-B/smart-bookmark-app/issues](https://github.com/Vamsi-Krishna-B/smart-bookmark-app/issues)

---

## ✨ Key Features

* **Google One-Tap Login**
  Secure authentication using Google OAuth.

* **Real-Time Sync**
  Changes reflect instantly across tabs and devices using Supabase Realtime.

* **Privacy First**
  Row Level Security (RLS) ensures users can access only their own bookmarks.

* **Clean & Responsive UI**
  Built with modern design using Next.js and Tailwind CSS.

* **Fast & Lightweight**
  Minimal interface focused purely on productivity.

---

## 🛠️ Tech Stack

| Layer          | Technology                              |
| -------------- | --------------------------------------- |
| Framework      | Next.js (App Router)                    |
| Styling        | Tailwind CSS                            |
| Backend        | Supabase (PostgreSQL + Auth + Realtime) |
| Authentication | Google OAuth                            |
| Deployment     | Vercel                                  |

---

## 🧠 Engineering Challenges & Solutions

### 1. Google OAuth Configuration

**Issue:** Login failed due to incorrect OAuth redirect handling.
**Fix:** Added the Supabase callback URL:

```
https://<project-id>.supabase.co/auth/v1/callback
```

to Google Cloud Console.

---

### 2. Production Authentication Failure

**Issue:** Authentication worked locally but failed after deployment.
**Fix:** Updated:

* **Site URL**
* **Redirect URLs**
  in the Supabase Dashboard to match the Vercel production domain.

---

### 3. Real-Time Data Sync

**Issue:** Bookmarks didn’t update across tabs automatically.
**Fix:** Enabled **Postgres Replication** for the `bookmarks` table and subscribed to Supabase Realtime events.

---

### 4. Data Privacy & Security

**Issue:** Users could access bookmarks of other users.
**Fix:** Implemented **Row Level Security (RLS)** using:

```
auth.uid() = user_id
```

This ensures complete data isolation.

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Vamsi-Krishna-B/smart-bookmark-app.git
cd smart-bookmark-app
npm install
```

---

### 2. Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

---

### 3. Run the App

```bash
npm run dev
```

Open: `http://localhost:3000`

---

## 📦 Project Highlights

* Built with modern full-stack architecture (Next.js + Supabase)
* Real-time database integration
* Secure authentication and data isolation
* Production deployment on Vercel
* Clean, scalable code structure

---

