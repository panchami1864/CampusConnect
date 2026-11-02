
export default function DashboardCard({ title, value, icon, color }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border">
      <div className="flex justify-between items-center">
        <p className="text-gray-500">{title}</p>
        <span className="text-3xl">{icon}</span>
      </div>

      <h2 className="text-3xl font-bold mt-4 text-gray-800">
        {value}
      </h2>

      <p className={`text-sm mt-2 ${color}`}>
        Campus overview
      </p>
    </div>
  );
}