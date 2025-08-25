import React from "react";
import { Calendar, Video } from "lucide-react";
//import Navbar from "../components/Navbar";
//import Sidebar from "../components/Sidebar";

const sessions = [
  {
    id: 1,
    title: "Mastering React Hooks for Beginners",
    host: "Jane Doe",
    date: "July 25, 2024 at 10:00 AM PST",
    category: "Web Development",
    image: "/liveimg2.jpg",
  },
  {
    id: 2,
    title: "Introduction to UI/UX Design Principles",
    host: "John Smith",
    date: "July 26, 2024 at 02:00 PM EST",
    category: "UI/UX Design",
    image: "/liveimg1.jpg",
  },
  {
    id: 3,
    title: "Advanced SEO Strategies for Digital Marketing",
    host: "Alice Johnson",
    date: "July 27, 2024 at 09:00 AM GMT",
    category: "Digital Marketing",
    image: "/liveimg3.jpg",
  },
];

const activeSessions = [
  {
    id: 101,
    title: "Your First Freelance Project: A Guide",
    host: "You",
    date: "Aug 01, 2024 at 04:00 PM PST",
    category: "Freelancing",
    image: "/sess1.jpg",
  },
  {
    id: 102,
    title: "Weekly Design Critique Session",
    host: "UI/UX Community",
    date: "Aug 02, 2024 at 01:00 PM EST",
    category: "UI/UX Design",
    image: "/sess2.jpg",
  },
];

const categories = [
  "Web Development",
  "UI/UX Design",
  "Digital Marketing",
  "Backend Development",
  "Content Creation",
  "Data Science",
  "Project Management",
  "Cybersecurity",
  "Cloud Computing",
  "Mobile App Dev",
  "Game Development",
  "AI & Machine Learning",
];

export default function LiveSessions() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navbar */}
      {/* <Navbar /> */}

      <div className="flex flex-1">
        {/* Sidebar */}
        {/* <aside className="hidden md:block w-64 border-r border-gray-200">
          <Sidebar />
        </aside> */}

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Header + Buttons */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="font-sans text-[30px] leading-[36px] font-bold text-[#171A1F]">
                Live Sessions
              </h1>
              <p className="mt-2 text-[16px] leading-[24px] font-sans text-[#565D6D]">
                Join, host, or connect in real-time workshops and video calls.
              </p>
            </div>

            <div className="flex gap-3">
              <button className="w-[186px] h-10 px-3 flex items-center justify-center gap-4 text-sm font-medium font-sans text-white bg-[#3892E5] rounded-md hover:bg-[#155FA4] active:bg-[#114A7F] disabled:opacity-40 transition">
                + Host New Session
              </button>
              <button className="w-[140px] h-10 px-3 flex items-center justify-center text-sm font-medium font-sans text-[#323743] border border-[#3892E5] rounded-md hover:text-[#262A33] hover:bg-gray-50 active:text-[#171A1F] disabled:opacity-40 transition">
                &lt;&gt; Join by Code
              </button>
            </div>
          </div>

          {/* Featured Sessions */}
          <h2 className="font-sans text-[24px] leading-[32px] font-bold text-[#171A1F] mt-8">
            Featured & Upcoming Sessions
          </h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sessions.map((s) => (
              <div
                key={s.id}
                className="bg-white rounded-[10px] shadow hover:shadow-md overflow-hidden transition"
              >
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-[160px] object-cover rounded-t-[10px]"
                />
                <div className="p-4">
                  <h3 className="font-sans text-[18px] font-semibold text-[#171A1F]">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-[14px] text-[#565D6D] font-sans">
                    Hosted by {s.host}
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    <Calendar className="w-4 h-4 text-[#3892E5]" />
                    <span className="text-[14px] text-[#171A1F] font-sans">{s.date}</span>
                  </div>
                  <span className="inline-flex mt-3 px-2 h-[22px] rounded-full text-[12px] font-semibold bg-[#F2F7FD] text-[#171A1F] font-sans">
                    {s.category}
                  </span>
                  <button className="mt-5 w-full h-10 flex items-center justify-center gap-4 text-[14px] font-medium text-white font-sans bg-[#3892E5] rounded-md hover:bg-[#155FA4] active:bg-[#114A7F] transition">
                    <Video className="w-4 h-4 text-white" /> Join Session
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Active Sessions */}
          <h2 className="text-2xl font-bold mt-8 text-neutral-900 font-sans">
            Your Active Sessions
          </h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {activeSessions.map((a) => (
              <div key={a.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                <img src={a.image} alt={a.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-neutral-900 font-sans">{a.title}</h3>
                  <p className="mt-1 text-sm text-neutral-600 font-sans">Hosted by {a.host}</p>
                  <div className="flex items-center gap-2 text-sm text-neutral-900 font-sans mt-2">
                    <Calendar className="w-4 h-4 text-blue-500" /> {a.date}
                  </div>
                  <span className="inline-flex mt-3 px-3 py-1 text-xs font-semibold rounded-full bg-[#F2F7FD] text-neutral-900 font-sans">
                    {a.category}
                  </span>
                  <button className="mt-4 w-full h-10 flex items-center justify-center gap-2 text-white text-sm font-medium font-sans rounded-md bg-blue-500 hover:bg-[#155FA4] active:bg-[#114A7F] transition">
                    <Video className="w-4 h-4" /> Join Session
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Direct Connection */}
          <h2 className="text-2xl font-bold mt-8 text-neutral-900 font-sans">Direct Connection</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-neutral-900 font-sans">
                Quick Connect (1-to-1 Video Call)
              </h3>
              <p className="mt-2 text-sm text-neutral-600 font-sans">
                Enter a User ID or name to start an instant video call.
              </p>
              <div className="mt-4 flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  placeholder="Enter User ID or Name"
                  className="flex-1 h-10 px-3 text-sm font-sans rounded-md border border-neutral-300 focus:ring-2 focus:ring-blue-200 outline-none"
                />
                <button className="flex items-center justify-center gap-2 h-10 px-4 text-sm font-medium text-white font-sans bg-pink-500 rounded-md hover:bg-[#DC388C] active:bg-[#B92170] transition">
                  <Video className="w-4 h-4" /> Start Call
                </button>
              </div>
            </div>

            <div className="bg-[#F2F7FD] rounded-xl shadow-sm p-6 flex flex-col items-center justify-center text-center">
              <Video className="w-12 h-12 text-blue-500" />
              <h3 className="mt-4 text-lg font-bold text-neutral-900 font-sans">Need a quick chat?</h3>
              <p className="mt-2 text-sm text-neutral-700 font-sans">
                Initiate 1-to-1 video calls with anyone on the platform.
              </p>
              <button className="mt-4 h-10 px-5 text-sm font-medium font-sans text-neutral-900 bg-white rounded-md border hover:bg-gray-50 transition">
                Go to Chat
              </button>
            </div>
          </div>

          {/* Explore Categories */}
          <h2 className="text-2xl font-bold mt-8 text-neutral-900 font-sans">Explore Session Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                className="flex items-center justify-center gap-2 h-10 px-4 rounded-full bg-neutral-100 text-sm font-semibold text-neutral-800 font-sans hover:bg-neutral-700 hover:text-white active:bg-neutral-800 transition"
              >
                {cat}
              </button>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
