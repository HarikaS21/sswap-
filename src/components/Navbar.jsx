// 
// import { Bell, Search } from "lucide-react"; // using lucide-react icons

// export default function Navbar() {
//   return (
//     <div className="flex justify-end items-center gap-4 p-4 bg-white shadow-sm">
//       {/* Search Icon */}
//       <Search className="w-5 h-5 cursor-pointer text-gray-600" />

//       {/* Notification Bell */}
//       <Bell className="w-5 h-5 cursor-pointer text-gray-600" />

//       {/* Profile Image */}
//       <div className="w-9 h-9 rounded-full bg-green-300 flex items-center justify-center cursor-pointer">
//         <span className="font-bold text-sm text-white">A</span>
//       </div>
//     </div>
//   );
// }

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white p-4 shadow-md fixed top-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">✨ logo</div>
        <div className="space-x-6">
          <Link to="/about" className="text-gray-600 hover:text-gray-800">About Us</Link>
          <Link to="/features" className="text-gray-600 hover:text-gray-800">Features</Link>
          <Link to="/login" className="text-gray-600 hover:text-gray-800">Login</Link>
          <Link to="/signup" className="text-gray-600 hover:text-gray-800">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
