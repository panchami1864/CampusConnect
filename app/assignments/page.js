
"use client";

import { useApp } from "../../Context/AppContext";
import Navbar from "../../components/Navbar";
import Link from "next/link";

const assignments = [
  {
    id: 1,
    title: "Web Development Project",
    subject: "Web Technology",
    dueDate: "November 10, 2026",
    description: "Create a responsive college portal using Next.js and Tailwind CSS.",
  },
  {
    id: 2,
    title: "Database Assignment",
    subject: "Database Management",
    dueDate: "November 14, 2026",
    description: "Write SQL queries and perform database operations.",
  },
  {
    id: 3,
    title: "Java Programming",
    subject: "Object Oriented Programming",
    dueDate: "November 18, 2026",
    description: "Complete the Java programming exercises.",
  },
];

export default function AssignmentsPage() {
  const { completedAssignments, toggleAssignment } = useApp();

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="max-w-6xl mx-auto p-6 md:p-10">
        <Link href="/" className="text-blue-600 font-semibold">
          ← Back to Dashboard
        </Link>

        <h1 className="text-3xl font-bold text-slate-800 mt-6">
          My Assignments
        </h1>

        <p className="text-slate-500 mt-2">
          View your assignments and track your progress.
        </p>

        <div className="bg-white border rounded-xl p-5 mt-8">
          <p className="font-semibold text-slate-700">
            Completed: {completedAssignments.length} / {assignments.length}
          </p>

          <div className="w-full bg-gray-200 rounded-full h-3 mt-3">
            <div
              className="bg-green-500 h-3 rounded-full transition-all"
              style={{
                width: `${
                  (completedAssignments.filter((id) =>
                    assignments.some((item) => item.id === id)
                  ).length / assignments.length) * 100
                }%`,
              }}
            />
          </div>
        </div>

        <div className="space-y-5 mt-8">
          {assignments.map((assignment) => {
            const isCompleted = completedAssignments.includes(assignment.id);

            return (
              <div
                key={assignment.id}
                className="bg-white border rounded-xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-5"
              >
                <div>
                  <span className="text-sm text-blue-600 font-semibold">
                    {assignment.subject}
                  </span>

                  <h2
                    className={`text-xl font-bold mt-2 ${
                      isCompleted
                        ? "line-through text-gray-400"
                        : "text-slate-800"
                    }`}
                  >
                    {assignment.title}
                  </h2>

                  <p className="text-gray-600 mt-2">
                    {assignment.description}
                  </p>

                  <p className="text-sm text-gray-500 mt-3">
                    Due date: {assignment.dueDate}
                  </p>
                </div>

                <button
                  onClick={() => toggleAssignment(assignment.id)}
                  className={`px-5 py-3 rounded-lg font-semibold ${
                    isCompleted
                      ? "bg-green-100 text-green-700"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  {isCompleted ? "Completed ✓" : "Mark as Complete"}
                </button>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
