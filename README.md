---

# 🔖 Smart Bookmark

** A minimalist, real-time web organizer.**

 Smart Bookmark is a lightning-fast bookmark manager built for speed and privacy. No clutter—just your links, synced everywhere you need them instantly.

** [Live Demo](https://smart-bookmark-app.vercel.app/)** • **[Report Bug](https://www.google.com/search?q=https://github.com/Vamsi-Krishna-B/smart-bookmark-app/issues)**

---

### ✨ Features

* **Google One-Tap:** Instant, secure authentication via Google OAuth.
* **Living Data:** Real-time synchronization across multiple tabs using Supabase Realtime.
* **Privacy First:** Bulletproof security with **Row Level Security (RLS)** ensuring your bookmarks remain private.
* **Modern UI:** A responsive, sleek interface built with Next.js and Tailwind CSS.

### 🛠️ Tech Stack

| Component | Technology |
| --- | --- |
| **Framework** | Next.js (App Router) |
| **Styling** | Tailwind CSS |
| **Database & Auth** | Supabase (PostgreSQL) |
| **Deployment** | Vercel |

---

### 🧠 Challenges & Solutions

As an IT Professional, I focus on identifying bottlenecks and implementing scalable fixes. Here are the hurdles I cleared during development:

#### 1. OAuth Handshake & Configuration

* **Problem:** Google OAuth login kept failing or redirecting without authenticating.
* **Solution:** Corrected the credentials mismatch by mapping the **Supabase Callback URL** (`https://<project-id>.supabase.co/auth/v1/callback`) inside the Google Cloud Console.

#### 2. Environment-Specific Redirects

* **Problem:** Authentication worked on `localhost` but broke after deploying to Vercel.
* **Solution:** Updated the **Site URL** and **Redirect URLs** in the Supabase Dashboard. Transitioning from `localhost:3000` to the production Vercel URL was necessary for the auth provider to trust the live environment.

#### 3. Database Replication for Real-time

* **Problem:** Bookmarks wouldn't update across tabs without a manual refresh.
* **Solution:** Enabled **Postgres Replication** specifically for the `bookmarks` table in Supabase. This allowed the database to broadcast change events to the client-side listeners.

#### 4. Data Leakage Prevention (RLS)

* **Problem:** Initially, any authenticated user could query the database for all bookmarks.
* **Solution:** Implemented **Row Level Security (RLS)** policies. This ensures the database verifies the `auth.uid()` for every transaction, restricting data access to the owner only.

---

### 🚀 Quick Start

1. **Clone & Install**
```bash
git clone https://github.com/Vamsi-Krishna-B/smart-bookmark-app.git
cd smart-bookmark-app
npm install

```


2. **Environment Setup**
Create a `.env.local` file:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

```


3. **Run Locally**
```bash
npm run dev

```



---

**Would you like me to help you draft a "Contribution" section or a specific license for this repository?**
