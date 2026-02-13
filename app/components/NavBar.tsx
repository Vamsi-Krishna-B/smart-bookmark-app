"use client";

export default function Navbar({ onLogout }: { onLogout: () => void }) {
  return (
    <div className="flex justify-between items-center mb-8 glass p-4 rounded-xl">
      <h1 className="text-2xl font-bold text-blue-400 tracking-wide">
        My Bookmarks
      </h1>

      <button
        onClick={onLogout}
        className="px-4 py-1 rounded bg-red-500 hover:bg-red-600 transition"
      >
        Logout
      </button>
    </div>
  );
}
