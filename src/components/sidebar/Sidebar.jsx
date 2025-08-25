import {
  Home,
  Briefcase,
  Handshake,
  Store,
  Video,
  Gamepad,
  MessageSquare,
  Users,
  BookOpen,
  User,
  Wallet,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const menuItems = [
  { name: "Dashboard", icon: Home, path: "/dashboard" },
  { name: "Jobs", icon: Briefcase, path: "/jobs" },
  { name: "Skill Exchange", icon: Handshake, path: "/skill-exchange" },
  { name: "Marketplace", icon: Store, path: "/marketplace" },
  { name: "Live Sessions", icon: Video, path: "/live-sessions" },
  { name: "Games", icon: Gamepad, path: "/games" },
  { name: "Chat", icon: MessageSquare, path: "/chat" },
  { name: "Community", icon: Users, path: "/community" },
  { name: "Blog", icon: BookOpen, path: "/blog" },
  { name: "Profile", icon: User, path: "/profile" },
  { name: "Wallet", icon: Wallet, path: "/wallet" },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="z-[9999]">
      {/* 🔹 Mobile Top Bar with Toggle */}
      <div className="lg:hidden flex items-center justify-between px-4 py-3 bg-white w-fit border-b shadow-md">
        <span className="font-semibold hidden md:block text-gray-700">My App</span>
        <button
          onClick={() => setOpen(true)}
          className="p-2 rounded-md hover:bg-gray-100 focus:outline-none"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* 🔹 Sidebar */}
      <div
        className={`fixed lg:static top-0 left-0 h-screen w-64 bg-white border-r border-gray-200 flex flex-col rounded-xl shadow-md transform transition-transform duration-300 
        ${open ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        {/* 🔹 X Close Button (only mobile) */}
        <div className="lg:hidden flex justify-end p-4 ">
          <button
            onClick={() => setOpen(false)}
            className="p-2 rounded-md hover:bg-gray-100 focus:outline-none cursor-pointer"
          >
            <X size={24} />
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex-1 p-2 overflow-y-auto">
          {menuItems.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className={({ isActive }) =>
                `flex items-center p-2 mb-1 rounded-lg cursor-pointer transition focus:outline-none 
                ${
                  isActive
                    ? "bg-gray-200 text-blue-600 font-medium"
                    : "hover:bg-gray-100"
                }`
              }
              onClick={() => setOpen(false)} // close sidebar when clicking on mobile
            >
              <item.icon size={20} className="text-gray-600" />
              <span className="ml-3 text-sm">{item.name}</span>
            </NavLink>
          ))}
        </div>

        {/* Logout Button */}
        <div className="p-4 border-t border-gray-200">
          <button className="w-full flex items-center justify-center p-3 bg-red-100 text-red-600 hover:bg-red-200 rounded-lg cursor-pointer transition focus:outline-none">
            <LogOut size={20} className="text-red-600" />
            <span className="ml-3 text-sm font-medium">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}

// import {
//   Home,
//   Briefcase,
//   Handshake,
//   Store,
//   Video,
//   Gamepad,
//   MessageSquare,
//   Users,
//   BookOpen,
//   User,
//   Wallet,
//   LogOut,
//   Menu,
//   X,
// } from "lucide-react";
// import { NavLink } from "react-router-dom";
// import { useState } from "react";

// const menuItems = [
//   { name: "Dashboard", icon: Home, path: "/dashboard" },
//   { name: "Jobs", icon: Briefcase, path: "/jobs" },
//   { name: "Skill Exchange", icon: Handshake, path: "/skill-exchange" },
//   { name: "Marketplace", icon: Store, path: "/marketplace" },
//   { name: "Live Sessions", icon: Video, path: "/live-sessions" },
//   { name: "Games", icon: Gamepad, path: "/games" },
//   { name: "Chat", icon: MessageSquare, path: "/chat" },
//   { name: "Community", icon: Users, path: "/community" },
//   { name: "Blog", icon: BookOpen, path: "/blog" },
//   { name: "Profile", icon: User, path: "/profile" },
//   { name: "Wallet", icon: Wallet, path: "/wallet" },
// ];

// export default function Sidebar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       {/* 🔹 Mobile Top Bar with Toggle */}
//       <div className="lg:hidden flex items-center justify-between px-4 py-3 bg-white border-b shadow-md">
//         <span className="font-semibold text-gray-700">My App</span>
//         <button
//           onClick={() => setOpen(!open)}
//           className="p-2 rounded-md hover:bg-gray-100 focus:outline-none"
//         >
//           {open ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* 🔹 Sidebar */}
//       <div
//         className={`fixed lg:static top-0 left-0 h-screen w-64 bg-white border-r border-gray-200 flex flex-col rounded-xl shadow-md transform transition-transform duration-300
//         ${open ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
//       >
//         {/* Menu Items */}
//         <div className="flex-1 p-2 overflow-y-auto">
//           {menuItems.map((item, index) => (
//             <NavLink
//               to={item.path}
//               key={index}
//               className={({ isActive }) =>
//                 `flex items-center p-2 mb-1 rounded-lg cursor-pointer transition focus:outline-none
//                 ${
//                   isActive
//                     ? "bg-gray-200 text-blue-600 font-medium"
//                     : "hover:bg-gray-100"
//                 }`
//               }
//               onClick={() => setOpen(false)} // close sidebar when clicking on mobile
//             >
//               <item.icon size={20} className="text-gray-600" />
//               <span className="ml-3 text-sm">{item.name}</span>
//             </NavLink>
//           ))}
//         </div>

//         {/* Logout Button */}
//         <div className="p-4 border-t border-gray-200">
//           <button className="w-full flex items-center justify-center p-3 bg-red-100 text-red-600 hover:bg-red-200 rounded-lg cursor-pointer transition focus:outline-none">
//             <LogOut size={20} className="text-red-600" />
//             <span className="ml-3 text-sm font-medium">Logout</span>
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }
