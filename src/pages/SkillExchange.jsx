// src/pages/SkillExchange.jsx
import { Bell, Search } from "lucide-react";

export default function SkillExchange() {
  return (
    <div className="px-6 py-6">
      {/* Header Bar */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold"></h1>
        <div className="flex items-center gap-6">
          <Bell className="w-6 h-6 text-gray-600 cursor-pointer" />
          <Search className="w-6 h-6 text-gray-600 cursor-pointer" />
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>

      {/* Hero Card */}
      <div className="bg-sky-100 rounded-xl p-8 mt-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800">
          Empower Your Growth Through Skill Exchange
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Unlock new opportunities by sharing your expertise and acquiring new
          skills from a vibrant community of professionals. Post what you offer,
          request what you need, and grow together.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 whitespace-nowrap">
            Offer a Skill
          </button>
          <button className="border px-6 py-2 rounded-lg text-gray-700 hover:bg-gray-100 whitespace-nowrap">
            Request a Skill
          </button>
        </div>
      </div>
      {/* ✅ Hero Card closed properly */}

      {/* Filters Section */}
      <div className="bg-white shadow rounded-xl p-4 mt-6 flex flex-wrap gap-4">
        <input
          type="text"
          placeholder="Search for skills or users..."
          className="flex-1 min-w-[200px] border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400"
        />
        <select className="flex-1 min-w-[200px] border rounded-lg px-3 py-2">
          <option>Category</option>
        </select>
        <select className="flex-1 min-w-[200px] border rounded-lg px-3 py-2">
          <option>Skill Level</option>
        </select>
        <select className="flex-1 min-w-[200px] border rounded-lg px-3 py-2">
          <option>Exchange Type</option>
        </select>
        <select className="flex-1 min-w-[200px] border rounded-lg px-3 py-2">
          <option>Availability</option>
        </select>
      </div>

      {/* Skills Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {[
          {
            img: "https://randomuser.me/api/portraits/women/44.jpg",
            title: "Advanced React Development",
            name: "Alice Smith",
            badge: "Offering",
            badgeColor: "bg-blue-500",
            desc: "I can teach advanced React patterns, Hooks, Context API, and state management",
            exchange: "Mentorship",
            level: "Expert",
          },
          {
            img: "https://randomuser.me/api/portraits/men/52.jpg",
            title: "Video Editing Basics",
            name: "Bob Johnson",
            badge: "Requesting",
            badgeColor: "bg-pink-500",
            desc: "Looking to learn the fundamentals of video editing using DaVinci Resolve or Adobe Premiere",
            exchange: "Direct Trade",
            level: "Beginner",
          },
          {
            img: "https://randomuser.me/api/portraits/women/22.jpg",
            title: "UI/UX Design Review",
            name: "Carol White",
            badge: "Offering",
            badgeColor: "bg-blue-500",
            desc: "Offering critical feedback and actionable advice on your UI/UX designs, focusing on usability and consistency",
            exchange: "Collaboration",
            level: "Expert",
          },
          {
            img: "https://randomuser.me/api/portraits/men/68.jpg",
            title: "Python for Data Analysis",
            name: "David Green",
            badge: "Requesting",
            badgeColor: "bg-pink-500",
            desc: "Seeking guidance on using Python libraries like Pandas and NumPy for data",
            exchange: "Mentorship",
            level: "Intermediate",
          },
          {
            img: "https://randomuser.me/api/portraits/women/65.jpg",
            title: "Content Writing for SEO",
            name: "Eva Brown",
            badge: "Offering",
            badgeColor: "bg-blue-500",
            desc: "I can provide lessons on crafting engaging and SEO-optimized content for websites.",
            exchange: "Direct Trade",
            level: "Expert",
          },
          {
            img: "https://randomuser.me/api/portraits/men/76.jpg",
            title: "Mobile App Wireframing",
            name: "Frank Black",
            badge: "Requesting",
            badgeColor: "bg-pink-500",
            desc: "Need help creating basic wireframes and user flows for a new mobile application idea.",
            exchange: "Collaboration",
            level: "Beginner",
          },
          {
            img: "https://randomuser.me/api/portraits/women/12.jpg",
            title: "Public Speaking Coaching",
            name: "Grace Lee",
            badge: "Offering",
            badgeColor: "bg-blue-500",
            desc: "I offer personalized coaching to improve your public speaking skills and reduce anxiety.",
            exchange: "Mentorship",
            level: "Expert",
          },
          {
            img: "https://randomuser.me/api/portraits/men/85.jpg",
            title: "Introduction to Blockchain",
            name: "Henry King",
            badge: "Requesting",
            badgeColor: "bg-pink-500",
            desc: "Seeking a mentor to explain blockchain technology and its applications.",
            exchange: "Direct Trade",
            level: "Beginner",
          },
          {
            img: "https://randomuser.me/api/portraits/women/36.jpg",
            title: "Digital Marketing Strategy",
            name: "Ivy Chen",
            badge: "Offering",
            badgeColor: "bg-blue-500",
            desc: "Providing insights and strategy development for effective digital marketing campaigns.",
            exchange: "Collaboration",
            level: "Expert",
          },
          {
            img: "https://randomuser.me/api/portraits/men/95.jpg",
            title: "Basic Photo Editing",
            name: "Jack Wilson",
            badge: "Requesting",
            badgeColor: "bg-pink-500",
            desc: "Looking to learn how to use Lightroom or Photoshop for basic photo enhancements.",
            exchange: "Mentorship",
            level: "Beginner",
          },
        ].map((card, i) => (
          <div
            key={i}
            className="bg-white shadow rounded-xl p-6 flex flex-col relative"
          >
            {/* Header Section */}
            <div className="flex items-center gap-4">
              <img
                src={card.img}
                alt={card.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="font-bold">{card.title}</h3>
                <p className="text-gray-600 text-sm">{card.name}</p>
              </div>
            </div>

            {/* Badge */}
            <span
              className={`${card.badgeColor} text-white text-xs px-3 py-1 rounded-full inline-block mt-3 self-start`}
            >
              {card.badge}
            </span>

            {/* Description */}
            <p className="text-gray-500 text-sm mt-3 flex-grow">{card.desc}</p>

            {/* Exchange + Level */}
            <p className="text-gray-700 mt-3 text-sm">
              <strong>Exchange:</strong> {card.exchange}
            </p>
            <p className="text-gray-700 text-sm">
              <strong>Level:</strong> {card.level}
            </p>

            {/* Small Button */}
            <div className="flex justify-end mt-4">
              <button className="text-xs border px-3 py-1 rounded-lg hover:bg-gray-100">
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
