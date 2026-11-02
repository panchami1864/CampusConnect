
import Link from "next/link";

export default function Sidebar() {
  const menu = [
    ["🏠", "Dashboard", "/"],
    ["👤", "My Profile", "/profile"],
    ["📢", "Announcements", "/announcements"],
    ["🎉", "Events", "/events"],
    ["📝", "Assignments", "/assignments"],
  ];

  return (
    <aside className="bg-white w-full lg:w-64 p-5 border-r">
      <h2 className="text-xl font-bold text-blue-600 mb-8">
        STUDENT MENU
      </h2>

      {menu.map((item) => (
        <Link
          href={item[2]}
          key={item[1]}
          className="flex gap-3 p-3 mb-2 rounded-lg text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition"
        >
          <span>{item[0]}</span>
          {item[1]}
        </Link>
      ))}
    </aside>
  );
}