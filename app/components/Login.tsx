"use client";

export default function Login({ onLogin }: { onLogin: () => void }) {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="glass p-10 rounded-2xl neon text-center w-80">
        <h1 className="text-3xl font-bold mb-6 text-blue-400">
          Smart Bookmark
        </h1>

        <button
          onClick={onLogin}
          className="w-full bg-blue-600 hover:bg-blue-700 transition py-3 rounded-lg font-semibold"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
