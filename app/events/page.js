"use client";

import { useApp } from "../../Context/AppContext";
import Navbar from "../../components/Navbar";
import Link from "next/link";

const events = [
  {
    id: 1,
    title: "Technical Fest 2026",
    date: "November 15, 2026",
    time: "10:00 AM",
    venue: "Main Auditorium",
    description: "Join technical competitions, project exhibitions and workshops.",
  },
  {
    id: 2,
    title: "Cultural Day",
    date: "November 20, 2026",
    time: "9:30 AM",
    venue: "College Ground",
    description: "Enjoy music, dance, performances and cultural activities.",
  },
  {
    id: 3,
    title: "Coding Competition",
    date: "November 25, 2026",
    time: "11:00 AM",
    venue: "Computer Lab",
    description: "Show your programming skills and solve exciting challenges.",
  },
];

export default function EventsPage() {
  const { registeredEvents, registerEvent } = useApp();

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="max-w-6xl mx-auto p-6 md:p-10">
        <Link href="/" className="text-blue-600 font-semibold">
          ← Back to Dashboard
        </Link>

        <h1 className="text-3xl font-bold text-slate-800 mt-6">
          College Events
        </h1>

        <p className="text-slate-500 mt-2">
          Explore upcoming events and register for your favourites.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {events.map((event) => {
            const isRegistered = registeredEvents.includes(event.id);

            return (
              <div
                key={event.id}
                className="bg-white rounded-2xl border p-6 shadow-sm"
              >
                <div className="text-4xl mb-4">🎉</div>

                <h2 className="text-xl font-bold text-slate-800">
                  {event.title}
                </h2>

                <p className="text-gray-600 mt-3">
                  {event.description}
                </p>

                <div className="text-sm text-gray-500 mt-5 space-y-2">
                  <p>📅 {event.date}</p>
                  <p>🕒 {event.time}</p>
                  <p>📍 {event.venue}</p>
                </div>

                <button
                  onClick={() => registerEvent(event.id)}
                  disabled={isRegistered}
                  className={`w-full mt-6 py-3 rounded-lg font-semibold ${
                    isRegistered
                      ? "bg-green-100 text-green-700 cursor-not-allowed"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  {isRegistered ? "Registered ✓" : "Register Now"}
                </button>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
