

---

# 🔖 Smart Bookmark

**The minimalist way to organize your web.**

Smart Bookmark is a lightning-fast, real-time web manager built for speed and privacy. No clutter, no distractions—just your links, everywhere you need them.

**[Live Demo](https://smart-bookmark-app.vercel.app/)** 

---

### ✨ Features

* **Google One-Tap:** Instant, secure authentication via Google OAuth.
* **Living Data:** Real-time synchronization across multiple tabs and devices using Supabase Realtime.
* **Privacy First:** Bulletproof security with Row Level Security (RLS) ensuring your bookmarks remain yours alone.
* **Modern UI:** A responsive, sleek interface built with Tailwind CSS and Next.js.

### 🛠️ The Tech Stack

| Layer | Technology |
| --- | --- |
| **Framework** | Next.js (App Router) |
| **Styling** | Tailwind CSS |
| **Database** | Supabase (PostgreSQL) |
| **Auth** | Supabase Auth |
| **Deployment** | Vercel |

---

### 🧠 Lessons Learned

Building this app came with a few "aha!" moments that improved the architecture:

* **OAuth Workflows:** Navigating the handshake between Supabase and Google Cloud Console.
* **Postgres Replication:** Learning that Realtime isn't "magic"—it requires explicit table replication to broadcast changes.
* **Database Guardrails:** Implementing RLS policies to move beyond basic API security into true data-level authorization.

---

### 🚀 Quick Start

1. **Clone & Install**
```bash
git clone https://github.com/Vamsi-Krishna-B/smart-bookmark-app.git
cd smart-bookmark
npm install

```


2. **Environment Setup**
Create a `.env.local` file with your Supabase credentials:
```env
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key

```


3. **Run Locally**
```bash
npm run dev

```



---

Would you like me to generate a **custom banner image** or a **logo** for this README to make it even more visually striking?
