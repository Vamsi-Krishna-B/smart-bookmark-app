"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

import Login from "./components/Login";
import Navbar from "./components/NavBar";
import BookmarkForm from "./components/BookmarkForm";
import BookmarkList from "./components/BookmarkList";

type Bookmark = {
  id: string;
  title: string;
  url: string;
};

export default function Page() {
  const [session, setSession] = useState<any>(null);
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(true);

  // Auth
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setLoading(false);
      if (data.session) fetchBookmarks();
    });

    const { data } = supabase.auth.onAuthStateChange((_e, session) => {
      setSession(session);
      if (session) fetchBookmarks();
      else setBookmarks([]);
    });

    return () => {
      data.subscription.unsubscribe();
    };
  }, []);

  // Realtime
  useEffect(() => {
    if (!session) return;

    const channel = supabase
      .channel("bookmarks-realtime")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "bookmarks" },
        fetchBookmarks
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [session]);

  const login = async () => {
    await supabase.auth.signInWithOAuth({ provider: "google" });
  };

  const logout = async () => {
    await supabase.auth.signOut();
  };

  const fetchBookmarks = async () => {
    const { data } = await supabase
      .from("bookmarks")
      .select("*")
      .order("created_at", { ascending: false });

    setBookmarks(data || []);
  };

  const addBookmark = async () => {
    if (!title || !url) return;

    await supabase.from("bookmarks").insert({
      title,
      url,
      user_id: session.user.id,
    });

    setTitle("");
    setUrl("");
  };

  const deleteBookmark = async (id: string) => {
    await supabase.from("bookmarks").delete().eq("id", id);
  };

  if (loading) return <div className="p-10">Loading...</div>;

  if (!session) return <Login onLogin={login} />;

  return (
  <div className="min-h-screen p-6">
    <div className="max-w-2xl mx-auto">
      <Navbar onLogout={logout} />

      <BookmarkForm
        title={title}
        url={url}
        setTitle={setTitle}
        setUrl={setUrl}
        onAdd={addBookmark}
      />

      <BookmarkList bookmarks={bookmarks} onDelete={deleteBookmark} />
    </div>
  </div>
);
}
