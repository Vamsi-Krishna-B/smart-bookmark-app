"use client";

export default function BookmarkForm({
  title,
  url,
  setTitle,
  setUrl,
  onAdd,
}: any) {
  return (
    <div className="glass p-6 rounded-xl mb-6 neon">
      <div className="flex flex-col gap-4">
        <input
          className="bg-black/40 border border-gray-700 p-3 rounded focus:outline-none focus:border-blue-500"
          placeholder="Bookmark Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          className="bg-black/40 border border-gray-700 p-3 rounded focus:outline-none focus:border-blue-500"
          placeholder="https://example.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />

        <button
          onClick={onAdd}
          className="bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold transition neon"
        >
          Add Bookmark
        </button>
      </div>
    </div>
  );
}
