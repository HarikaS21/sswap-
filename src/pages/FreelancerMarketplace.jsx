import React, { useState } from "react";
import { Star } from "lucide-react";
//import Navbar from "../components/Navbar.jsx";
//import Sidebar from "../components/Sidebar.jsx";

const freelancers = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "Senior UI/UX Designer",
    rating: 4.9,
    reviews: 120,
    skills: ["Figma", "Sketch", "Prototyping", "User Research"],
    badges: ["Top Rated", "Expert"],
    image: "img1.jpg",
    category: "Design",
    price: 50,
  },
  {
    id: 2,
    name: "Bob Williams",
    role: "Full-Stack Web Developer",
    rating: 4.8,
    reviews: 95,
    skills: ["React", "Node.js", "TypeScript", "SQL"],
    badges: ["Top Rated"],
    image: "img2.jpg",
    category: "Development",
    price: 40,
  },
  {
    id: 3,
    name: "Charlie Brown",
    role: "Digital Marketing Specialist",
    rating: 4.7,
    reviews: 78,
    skills: ["SEO", "SEM", "Content Strategy", "Social Media"],
    badges: ["Rising Talent"],
    image: "img3.jpg",
    category: "Marketing",
    price: 25,
  },
];

const categories = ["Design", "Development", "Marketing"];
const ratings = ["4.5+", "4.0+"];
const prices = ["$20/hr", "$50/hr"];

export default function FreelanceMarketplace() {
  const [category, setCategory] = useState("");

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navbar */}
      {/* <Navbar /> */}

      <div className="flex flex-1">
        {/* Sidebar */}
        {/* <div className="hidden md:block w-64">
          <Sidebar />
        </div> */}

        {/* Main Content */}
        <div className="flex-1 flex flex-col p-4 sm:p-6">
          {/* Header */}
          <h1 className="font-sans text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#171A1F]">
            Freelancer Marketplace
          </h1>
          <p className="mt-2 max-w-2xl text-sm sm:text-base lg:text-lg font-sans text-[#585a5f]">
            Discover top talent for your projects. Browse portfolios, filter by
            skills, and connect with professionals tailored to your needs.
          </p>

          {/* Filters Section */}
          <div className="mt-6 bg-white p-4 sm:p-6 rounded-[10px] border border-[#DEE1E6] shadow-sm">
            <h2 className="font-sans text-lg sm:text-xl lg:text-2xl font-semibold text-[#171A1F] mb-4">
              Find Your Talent
            </h2>
            <div className="flex flex-wrap gap-3">
              {/* Category */}
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full sm:w-48 h-10 px-3 text-sm sm:text-base font-sans text-[#565D6D] bg-white border border-[#DEE1E6] rounded-md"
              >
                <option value="">Category</option>
                {categories.map((cat, i) => (
                  <option key={i}>{cat}</option>
                ))}
              </select>

              {/* Search */}
              <input
                type="text"
                placeholder="Search by Skill..."
                className="flex-1 min-w-[150px] h-10 px-3 text-sm sm:text-base font-sans text-[#565D6D] bg-white border border-[#DEE1E6] rounded-md"
              />

              {/* Rating */}
              <select className="w-full sm:w-40 h-10 px-3 text-sm sm:text-base font-sans text-[#565D6D] bg-white border border-[#DEE1E6] rounded-md">
                <option>Min. Rating</option>
                {ratings.map((rate, i) => (
                  <option key={i}>{rate}</option>
                ))}
              </select>

              {/* Price */}
              <select className="w-full sm:w-44 h-10 px-3 text-sm sm:text-base font-sans text-[#565D6D] bg-white border border-[#DEE1E6] rounded-md">
                <option>Max. Price</option>
                {prices.map((price, i) => (
                  <option key={i}>{price}</option>
                ))}
              </select>

              {/* Buttons */}
              <div className="flex gap-2 w-full sm:w-auto">
                <button className="flex-1 sm:flex-none px-4 sm:px-5 h-10 font-sans text-sm sm:text-base font-medium text-white bg-[#3892E5] rounded-md hover:bg-[#155FA4]">
                  Apply Filters
                </button>
                <button className="flex-1 sm:flex-none px-4 h-10 font-sans text-sm sm:text-base font-medium text-[#565D6D] bg-transparent rounded-md">
                  Reset
                </button>
              </div>
            </div>
          </div>

          {/* Freelancer Cards */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {freelancers.map((freelancer) => (
              <div
                key={freelancer.id}
                className="bg-white p-6 rounded-[10px] border border-[#DEE1E6] shadow-sm flex flex-col items-center text-center"
              >
                {/* Avatar */}
                <img
                  src={freelancer.image}
                  alt={freelancer.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover mb-4"
                />

                {/* Name */}
                <h2 className="font-sans text-lg sm:text-xl font-semibold text-[#171A1F]">
                  {freelancer.name}
                </h2>

                {/* Role */}
                <p className="mt-1 text-sm sm:text-base font-sans text-[#565D6D]">
                  {freelancer.role}
                </p>

                {/* Rating */}
                <div className="mt-2 flex items-center justify-center text-[#F59E0B]">
                  <Star className="w-4 h-4 fill-[#F59E0B]" />
                  <span className="ml-1 text-sm font-sans">
                    {freelancer.rating} ({freelancer.reviews} reviews)
                  </span>
                </div>

                {/* Skills */}
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {freelancer.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-[#F3F4F6] text-xs sm:text-sm font-sans font-medium text-[#171A1F] hover:bg-[#424856] hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Badges */}
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {freelancer.badges?.map((badge, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-[#E670AD33] text-xs sm:text-sm font-sans font-medium text-[#171A1F]"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <button className="mt-6 w-full py-2 text-sm sm:text-base font-sans font-medium text-white bg-[#3892E5] rounded-md hover:bg-[#155FA4]">
                  View Profile
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
