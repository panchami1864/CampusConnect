"use client";

import { useApp } from "../Context/AppContext";

export default function EventCard({ event }) {
  const { registeredEvents, registerEvent } = useApp();

  const registered = registeredEvents.includes(event.id);

  return (
    <div className="bg-white rounded-xl shadow-sm border p-5">
      <div className="text-4xl mb-3">{event.icon}</div>

      <h3 className="font-bold text-lg text-gray-800">
        {event.name}
      </h3>

      <p className="text-gray-500 text-sm mt-2">
        📅 {event.date}
      </p>

      <p className="text-gray-500 text-sm mt-2">
        📍 {event.location}
      </p>

      <button
        onClick={() => registerEvent(event.id)}
        className={`w-full mt-5 p-3 rounded-lg font-semibold ${
          registered
            ? "bg-green-100 text-green-700"
            : "bg-blue-600 text-white hover:bg-blue-700"
        }`}
      >
        {registered ? "Registered ✓" : "Register Now"}
      </button>
    </div>
  );
}