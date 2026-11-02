
"use client";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/DashboardCard";
import Announcement from "../components/Announcement";
import EventCard from "../components/EventCard";
import { useApp } from "../Context/AppContext";

const announcements = [
  {
    title: "Internal Assessment",
    date: "November 5, 2026",
    description: "Internal assessment schedule will be announced soon.",
  },
  {
    title: "Technical Fest 2026",
    date: "November 8, 2026",
    description: "Registrations are open for technical competitions.",
  },
  {
    title: "Library Notice",
    date: "November 10, 2026",
    description: "Students are requested to return borrowed books on time.",
  },
];

const events = [
  {
    id: 1,
    title: "Tech Fest 2026",
    date: "November 15, 2026",
    description: "Technical competitions and project exhibitions.",
  },
  {
    id: 2,
    title: "Cultural Day",
    date: "November 20, 2026",
    description: "Music, dance and cultural performances.",
  },
  {
    id: 3,
    title: "Coding Competition",
    date: "November 25, 2026",
    description: "Show your programming skills.",
  },
];

const assignments = [
  { id: 1, title: "Web Development Project" },
  { id: 2, title: "Database Assignment" },
  { id: 3, title: "Java Programming" },
];

export default function Dashboard() {
  const { registeredEvents, completedAssignments, toggleAssignment } = useApp();

  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <div className="flex flex-col lg:flex-row">
        <Sidebar />

        <main className="flex-1 p-5 md:p-8">
          <div className="mb-8">
            <p className="text-blue-600 font-semibold">
              STUDENT DASHBOARD
            </p>

            <h1 className="text-3xl font-bold text-slate-800 mt-2">
              Welcome to CampusConnect!
            </h1>

            <p className="text-slate-500 mt-2">
              Your college activities, announcements and assignments in one place.
            </p>
          </div>

          {/* Dashboard Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            <DashboardCard
              title="Total Events"
              value={events.length}
              icon="🎉"
              color="blue"
            />

            <DashboardCard
              title="Registered Events"
              value={registeredEvents.length}
              icon="📅"
              color="green"
            />

            <DashboardCard
              title="Total Assignments"
              value={assignments.length}
              icon="📝"
              color="purple"
            />

            <DashboardCard
              title="Completed Assignments"
              value={completedAssignments.filter((id) =>
                assignments.some((item) => item.id === id)
              ).length}
              icon="✅"
              color="orange"
            />
          </div>

          {/* Announcements */}
          <section className="mt-10">
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-2xl font-bold text-slate-800">
                Latest Announcements
              </h2>

              <a
                href="/announcements"
                className="text-blue-600 font-semibold"
              >
                View All →
              </a>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
              {announcements.map((item, index) => (
                <Announcement key={index} {...item} />
              ))}
            </div>
          </section>

          {/* Events */}
          <section id="events" className="mt-10">
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-2xl font-bold text-slate-800">
                Upcoming Events
              </h2>

              <a href="/events" className="text-blue-600 font-semibold">
                View All →
              </a>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
              {events.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </section>

          {/* Assignments */}
          <section id="assignments" className="mt-10">
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-2xl font-bold text-slate-800">
                Assignment Tracker
              </h2>

              <a
                href="/assignments"
                className="text-blue-600 font-semibold"
              >
                View All →
              </a>
            </div>

            <div className="bg-white rounded-2xl border p-6 shadow-sm">
              {assignments.map((assignment) => {
                const completed = completedAssignments.includes(assignment.id);

                return (
                  <div
                    key={assignment.id}
                    className="flex justify-between items-center gap-4 border-b last:border-0 py-4"
                  >
                    <span className={completed ? "line-through text-gray-400" : "font-medium text-slate-700"}>
                      {assignment.title}
                    </span>

                    <button
                      onClick={() => toggleAssignment(assignment.id)}
                      className={`px-4 py-2 rounded-lg text-sm font-semibold ${
                        completed
                          ? "bg-green-100 text-green-700"
                          : "bg-blue-600 text-white"
                      }`}
                    >
                      {completed ? "Completed ✓" : "Mark Complete"}
                    </button>
                  </div>
                );
              })}
            </div>
          </section>

          <footer className="text-center text-gray-400 text-sm mt-12 pb-5">
            © 2026 CampusConnect | Smart College Management Portal
          </footer>
        </main>
      </div>
    </div>
  );
}

