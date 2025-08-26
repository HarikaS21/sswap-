export default function MessageCard({ name, time, message }) {
  return (
    <div className="flex items-start gap-3 bg-white p-3 rounded-lg shadow">
      <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-white font-semibold">
        {name.charAt(0)}
      </div>
      <div>
        <p className="font-medium">{name}</p>
        <p className="text-sm text-gray-600">{message}</p>
        <span className="text-xs text-gray-400">{time}</span>
      </div>
    </div>
  );
}
