"use client";

import Link from "next/link";
import Navbar from "../../components/Navbar";

export default function ProfilePage() {
  const student = {
    name: "K V Panchami",
    usn: "4SF25IS046",
    department: "Information Science and Engineering",
    semester: "3rd Semester",
    college: "Sahyadri College of Engineering and Management",
    email: "panchami.is25@sahyadri.edu.in",
    phone: "1234567890",
    section: "B",
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="max-w-5xl mx-auto p-6 md:p-10">

        <Link
          href="/"
          className="text-blue-600 font-semibold hover:underline"
        >
          ← Back to Dashboard
        </Link>

        <h1 className="text-3xl font-bold text-slate-800 mt-6">
          Student Profile
        </h1>

        <p className="text-slate-500 mt-2">
          View your personal and academic information.
        </p>

        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-sm border p-7 mt-8">

          <div className="flex flex-wrap items-center gap-5 border-b pb-6">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-4xl">
              👨‍🎓
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-800">
                {student.name}
              </h2>

              <p className="text-slate-500 mt-1">
                {student.department}
              </p>

              <span className="inline-block mt-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                Active Student
              </span>
            </div>
          </div>

          {/* Personal Details */}
          <h3 className="text-lg font-bold mt-7 mb-5">
            Personal Information
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div>
              <p className="text-sm text-slate-400">Student Name</p>
              <p className="font-semibold mt-1">{student.name}</p>
            </div>

            <div>
              <p className="text-sm text-slate-400">USN</p>
              <p className="font-semibold mt-1">{student.usn}</p>
            </div>

            <div>
              <p className="text-sm text-slate-400">Email Address</p>
              <p className="font-semibold mt-1">{student.email}</p>
            </div>

            <div>
              <p className="text-sm text-slate-400">Phone Number</p>
              <p className="font-semibold mt-1">{student.phone}</p>
            </div>

          </div>

          {/* Academic Details */}
          <h3 className="text-lg font-bold mt-10 mb-5">
            Academic Information
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div>
              <p className="text-sm text-slate-400">College</p>
              <p className="font-semibold mt-1">{student.college}</p>
            </div>

            <div>
              <p className="text-sm text-slate-400">Department</p>
              <p className="font-semibold mt-1">{student.department}</p>
            </div>

            <div>
              <p className="text-sm text-slate-400">Semester</p>
              <p className="font-semibold mt-1">{student.semester}</p>
            </div>

            <div>
              <p className="text-sm text-slate-400">Section</p>
              <p className="font-semibold mt-1">{student.section}</p>
            </div>

          </div>

        </div>

        <footer className="text-center text-slate-400 mt-10 text-sm">
          CampusConnect | Student Profile
        </footer>

      </main>
    </div>
  );
}