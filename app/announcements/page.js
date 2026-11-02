"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";

export default function AnnouncementsPage() {
  const [announcements, setAnnouncements] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("campusAnnouncements");

    if (saved) {
      setAnnouncements(JSON.parse(saved));
    }

    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      localStorage.setItem(
        "campusAnnouncements",
        JSON.stringify(announcements)
      );
    }
  }, [announcements, loaded]);

  function addAnnouncement(e) {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      alert("Please fill in both fields.");
      return;
    }

    const newAnnouncement = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
      date: new Date().toLocaleDateString(),
    };

    setAnnouncements((prev) => [newAnnouncement, ...prev]);

    setTitle("");
    setDescription("");
  }

  function deleteAnnouncement(id) {
    setAnnouncements((prev) =>
      prev.filter((item) => item.id !== id)
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="max-w-5xl mx-auto p-6 md:p-10">

        <Link href="/" className="text-blue-600 font-semibold">
          ← Back to Dashboard
        </Link>

        <h1 className="text-3xl font-bold text-slate-800 mt-6">
          Announcements Management
        </h1>

        <p className="text-slate-500 mt-2">
          Manage important college announcements.
        </p>

        {/* Add Announcement Form */}
        <form
          onSubmit={addAnnouncement}
          className="bg-white p-6 rounded-2xl border shadow-sm mt-8"
        >
          <h2 className="text-xl font-bold mb-5">
            Add New Announcement
          </h2>

          <label className="block font-medium mb-2">
            Announcement Title
          </label>

          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter announcement title"
            className="w-full border rounded-lg p-3 mb-5 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <label className="block font-medium mb-2">
            Description
          </label>

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter announcement details"
            rows="4"
            className="w-full border rounded-lg p-3 mb-5 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold"
          >
            + Add Announcement
          </button>
        </form>

        {/* Announcement List */}
        <section className="mt-10">
          <h2 className="text-xl font-bold mb-5">
            Published Announcements ({announcements.length})
          </h2>

          {announcements.length === 0 ? (
            <div className="bg-white border rounded-xl p-8 text-center text-slate-500">
              No announcements added yet.
            </div>
          ) : (
            <div className="space-y-4">
              {announcements.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border rounded-xl p-5 flex flex-wrap justify-between gap-4"
                >
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-slate-800">
                      {item.title}
                    </h3>

                    <p className="text-slate-600 mt-2">
                      {item.description}
                    </p>

                    <p className="text-xs text-slate-400 mt-3">
                      Published: {item.date}
                    </p>
                  </div>

                  <button
                    onClick={() => deleteAnnouncement(item.id)}
                    className="bg-red-100 text-red-600 px-4 py-2 rounded-lg hover:bg-red-200"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>

      </main>
    </div>
  );
}
