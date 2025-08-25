import { Bell, Search } from "lucide-react"; // using lucide-react icons

export default function Navbar() {
  return (
    <div className="flex justify-end items-center gap-4 p-4 bg-white shadow-sm">
      {/* Search Icon */}
      <Search className="w-5 h-5 cursor-pointer text-gray-600" />

      {/* Notification Bell */}
      <Bell className="w-5 h-5 cursor-pointer text-gray-600" />

      {/* Profile Image */}
      <div className="w-9 h-9 rounded-full bg-green-300 flex items-center justify-center cursor-pointer">
        <span className="font-bold text-sm text-white">A</span>
      </div>
    </div>
  );
}
