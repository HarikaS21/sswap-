import React from "react";
import { MdDashboard } from "react-icons/md";
import { FaSuitcase } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { SiMarketo } from "react-icons/si";
import { TbBrandLivewire } from "react-icons/tb";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { RiUserCommunityFill, RiWalletFill } from "react-icons/ri";


const menuItems = [
  { name: "Admin Dashboard", icon: <MdDashboard size={20} /> },
  { name: "User Management", icon: <FaSuitcase size={20} /> },
  { name: "Job Management", icon: <GiSkills size={20} /> },
  { name: "Dispute Resolution", icon: <SiMarketo size={20} /> },
  { name: "Verifications", icon: <TbBrandLivewire size={20} /> },
  { name: "Analytics", icon: <IoChatboxEllipsesOutline size={20} /> },
  { name: "Settings", icon: <RiUserCommunityFill size={20} /> },

];

const LeftSidebar = ({ onTabChange, activeTab }) => {
  return (
    <div className='w-[20%] min-h-screen flex flex-col gap-2 border-r border-gray-300 pr-5'>
      {menuItems.map((item) => (
        <div
          key={item.name}
          onClick={() => onTabChange(item.name)}
          className={`flex items-center gap-2 p-3 w-full rounded-xl cursor-pointer transition 
            ${activeTab === item.name 
              ? "bg-gray-300  text-gray-700" 
              : "hover:bg-gray-200 text-gray-700"
            }`}
        >
          {item.icon}
          <p className="text-[15px]">{item.name}</p>
        </div>
      ))}
    </div>
  )
}

export default LeftSidebar;
