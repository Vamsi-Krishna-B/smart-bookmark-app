"use client";

type Bookmark = {
  id: string;
  title: string;
  url: string;
};

export default function BookmarkList({
  bookmarks,
  onDelete,
}: {
  bookmarks: Bookmark[];
  onDelete: (id: string) => void;
}) {
  if (bookmarks.length === 0) {
    return <p className="text-gray-400">No bookmarks yet</p>;
  }

  return (
    <div className="space-y-4">
      {bookmarks.map((b) => (
        <div
          key={b.id}
          className="glass p-4 rounded-xl flex justify-between items-center neon"
        >
          <div className="max-w-[70%]">
            <p className="font-semibold text-lg break-words">
              {b.title}
            </p>

            <a
              href={b.url}
              target="_blank"
              className="text-blue-400 text-sm break-words hover:underline"
            >
              {b.url}
            </a>
          </div>

          <button
            onClick={() => onDelete(b.id)}
            className="text-red-400 hover:text-red-600 transition"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
