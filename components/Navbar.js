export default function Navbar() {
  return (
    <nav className="bg-white px-6 py-4 border-b flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-bold text-blue-600">
          CampusConnect
        </h1>
        <p className="text-sm text-gray-500">
          Smart College Management Portal
        </p>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-xl">🔔</span>
        <div className="bg-blue-100 rounded-full p-3">
          👨‍🎓
        </div>
        <span className="font-semibold text-gray-700">
          Student
        </span>
      </div>
    </nav>
  );
}

