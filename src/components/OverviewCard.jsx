export default function OverviewCard({ icon, title, value }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center justify-center">
      <div className="text-2xl mb-2">{icon}</div>
      <p className="text-sm font-medium text-gray-500">{title}</p>
      <p className="text-xl font-semibold">{value}</p>
    </div>
  );
}
