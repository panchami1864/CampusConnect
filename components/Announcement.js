export default function Announcement({ title, date, description }) {
  return (
    <div className="border-b py-4 last:border-0">
      <div className="flex justify-between gap-3">
        <h3 className="font-semibold text-gray-800">
          {title}
        </h3>

        <span className="text-sm text-gray-400">
          {date}
        </span>
      </div>

      <p className="text-gray-500 text-sm mt-2">
        {description}
      </p>
    </div>
  );
}