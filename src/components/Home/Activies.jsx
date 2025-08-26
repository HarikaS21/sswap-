import React from "react";
import { FaGift, FaDollarSign, FaEnvelope, FaEye } from "react-icons/fa";

const Activies = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Welcome Header */}
      <h1 className="text-2xl font-bold mt-22">Welcome Back, Alex!</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="p-6 rounded-lg bg-white border border-white shadow-lg text-center">
          <FaGift className="text-2xl mx-auto mb-2 text-blue-500" />
          <p className="font-semibold">Applied Jobs</p>
          <p className="text-xl font-bold">14</p>
        </div>
        <div className="p-6 rounded-lg bg-white border border-white shadow-lg text-center">
          <FaDollarSign className="text-2xl mx-auto mb-2 text-green-500" />
          <p className="font-semibold">Active Offers</p>
          <p className="text-xl font-bold">3</p>
        </div>
        <div className="p-6 rounded-lg bg-white border border-white shadow-lg text-center">
          <FaEnvelope className="text-2xl mx-auto mb-2 text-purple-500" />
          <p className="font-semibold">New Messages</p>
          <p className="text-xl font-bold">7</p>
        </div>
        <div className="p-6 rounded-lg bg-white border border-white shadow-lg text-center">
          <FaEye className="text-2xl mx-auto mb-2 text-indigo-500" />
          <p className="font-semibold">Profile Views</p>
          <p className="text-xl font-bold">189</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Recent Activities */}
        <div className="lg:col-span-2 p-6 rounded-lg bg-white border border-white shadow-lg">
          <h2 className="text-lg font-bold mb-4">Recent Activities</h2>
          <ul className="space-y-4">
            <li className="flex justify-between items-center">
              <p>📩 New message from Acme Corp regarding Project A</p>
              <span className="text-gray-500 text-sm">5 min ago</span>
            </li>
            <li className="flex justify-between items-center">
              <p>🎁 Job application for UI/UX Designer updated to 'Interview'</p>
              <span className="text-gray-500 text-sm">2 hours ago</span>
            </li>
            <li className="flex justify-between items-center">
              <p>💲 Skill offer for 'React Dev' accepted by Jane Doe</p>
              <span className="text-gray-500 text-sm">1 day ago</span>
            </li>
            <li className="flex justify-between items-center">
              <p>👀 Your profile received 12 new views this week</p>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </li>
          </ul>
        </div>

        {/* Right Side */}
        <div className="space-y-6">
          {/* Portfolio Completion */}
          <div className="p-6 rounded-lg bg-white border border-white shadow-lg">
            <h2 className="font-bold mb-2">Portfolio Completion</h2>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
              <div className="bg-blue-500 h-2 rounded-full w-3/4"></div>
            </div>
            <p className="text-sm text-gray-600 mb-2">
              Complete your profile to unlock more opportunities.
            </p>
            <a
              href="#"
              className="text-blue-500 text-sm font-medium flex items-center"
            >
              Edit Profile <span className="ml-1">↗</span>
            </a>
          </div>

          {/* Skills & Achievements */}
          <div className="p-6 rounded-lg bg-white border border-white shadow-lg">
            <h2 className="font-bold mb-2">Skills & Achievements</h2>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-pink-100 text-pink-600 text-sm font-medium">
                React.js
              </span>
              <span className="px-3 py-1 rounded-full bg-red-100 text-red-600 text-sm font-medium">
                UI/UX Design
              </span>
              <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-600 text-sm font-medium">
                TypeScript
              </span>
              <span className="px-3 py-1 rounded-full bg-green-100 text-green-600 text-sm font-medium">
                Node.js
              </span>
              <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm font-medium">
                🏅 Top Contributor
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 🔽 Applied Jobs & Skill Exchange Offers Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Applied Jobs */}
        <div className="p-6 rounded-lg bg-white border border-white shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Applied Jobs</h2>
            <a href="#" className="text-blue-500 text-sm font-medium flex items-center">
              View All <span className="ml-1">↗</span>
            </a>
          </div>
          <ul className="space-y-4">
<li className="p-4 border border-white rounded-lg shadow-sm">

              <h3 className="font-semibold">Senior Web Developer</h3>
              <p className="text-gray-600 text-sm">Tech Innovations Inc.</p>
              <span className="px-2 py-1 text-xs bg-orange-100 text-orange-600 rounded-full">Interview</span>
              <p className="text-gray-500 text-sm mt-1">Applied on 2024-07-15</p>
            </li>
           <li className="p-4 border border-white rounded-lg shadow-sm">

              <h3 className="font-semibold">UI/UX Designer</h3>
              <p className="text-gray-600 text-sm">Creative Agency</p>
              <span className="px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded-full">Pending</span>
              <p className="text-gray-500 text-sm mt-1">Applied on 2024-07-12</p>
            </li>
           <li className="p-4 border border-white rounded-lg shadow-sm">

              <h3 className="font-semibold">Backend Engineer</h3>
              <p className="text-gray-600 text-sm">Global Solutions</p>
              <span className="px-2 py-1 text-xs bg-red-100 text-red-600 rounded-full">Rejected</span>
              <p className="text-gray-500 text-sm mt-1">Applied on 2024-07-10</p>
            </li>
          </ul>
        </div>

        {/* Skill Exchange Offers */}
        <div className="p-6 rounded-lg bg-white border border-white shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Skill Exchange Offers</h2>
            <a href="#" className="text-blue-500 text-sm font-medium flex items-center">
              View All <span className="ml-1">↗</span>
            </a>
          </div>
          <ul className="space-y-4">
        <li className="p-4 border border-white rounded-lg shadow-sm">

              <h3 className="font-semibold">Frontend Development</h3>
              <p className="text-gray-600 text-sm">Requested: UI/UX Design</p>
              <span className="px-2 py-1 text-xs bg-pink-100 text-pink-600 rounded-full">Active</span>
              <p className="text-gray-500 text-sm mt-1">From: Alice Johnson</p>
            </li>
        <li className="p-4 border border-white rounded-lg shadow-sm">

              <h3 className="font-semibold">Content Writing</h3>
              <p className="text-gray-600 text-sm">Requested: SEO Optimization</p>
              <span className="px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded-full">Pending</span>
              <p className="text-gray-500 text-sm mt-1">From: Bob Williams</p>
            </li>
     <li className="p-4 border border-white rounded-lg shadow-sm">

              <h3 className="font-semibold">Video Editing</h3>
              <p className="text-gray-600 text-sm">Requested: Graphic Design</p>
              <span className="px-2 py-1 text-xs bg-green-100 text-green-600 rounded-full">Completed</span>
              <p className="text-gray-500 text-sm mt-1">From: Charlie Brown</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Activies;
