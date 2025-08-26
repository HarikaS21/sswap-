import {
  Bell,
  Search,
  MapPin,
  Clock,
  DollarSign,
  Heart,
  ChevronDown,
} from "lucide-react";

export default function JobListings() {
  return (
    <div className="px-6 py-6">
      {/* Header Bar */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Job Listings</h1>
        <div className="flex items-center gap-6">
          <Bell className="w-6 h-6 text-gray-600 cursor-pointer" />
          <Search className="w-6 h-6 text-gray-600 cursor-pointer" />
          <img
            src="https://randomuser.me/api/portraits/men/45.jpg"
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Post a Job
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mt-6">
        <input
          type="text"
          placeholder="Search for job titles, keywords, companies..."
          className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400"
        />
        <div className="flex justify-end">
          <p className="text-blue-500 text-sm mt-2 cursor-pointer">
            Advanced Search
          </p>
        </div>
      </div>

      {/* Filters Section */}
      <div className="bg-white shadow rounded-xl p-6 mt-6">
        <h2 className="text-lg font-semibold mb-4">Filter Jobs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Column 1 */}
          <div>
            <label className="font-medium text-sm">Skills Required</label>
            <select className="w-full border rounded-lg px-3 py-2 mt-2">
              <option>React</option>
              <option>Python</option>
              <option>Java</option>
              <option>Node.js</option>
            </select>
            <label className="font-medium text-sm mt-4 block">
              Experience Level
            </label>
            <select className="w-full border rounded-lg px-3 py-2 mt-2">
              <option>Any</option>
              <option>Fresher</option>
              <option>Mid-Level</option>
              <option>Senior</option>
            </select>
          </div>

          {/* Column 2 */}
          <div>
            <label className="font-medium text-sm">Budget/Salary</label>
            <select className="w-full border rounded-lg px-3 py-2 mt-2">
              <option>Any</option>
              <option>$50,000 - $70,000</option>
              <option>$70,000 - $100,000</option>
              <option>$100,000+</option>
            </select>
            <div className="mt-4 flex items-center gap-2">
              <input type="checkbox" />
              <span className="text-sm">Urgent Jobs</span>
            </div>
          </div>

          {/* Column 3 */}
          <div>
            <label className="font-medium text-sm">Time Commitment</label>
            <select className="w-full border rounded-lg px-3 py-2 mt-2">
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Contract</option>
            </select>
            <div className="mt-4 flex items-center gap-2">
              <input type="checkbox" />
              <span className="text-sm">Verified Employers</span>
            </div>
            <label className="font-medium text-sm mt-4 block">Location</label>
            <select className="w-full border rounded-lg px-3 py-2 mt-2">
              <option>Remote</option>
              <option>Hybrid</option>
              <option>On-site</option>
            </select>

            {/* Apply Filters inside Column 3 */}
            <div className="mt-6">
              <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Available Opportunities */}
      <h2 className="mt-8 text-xl font-semibold">Available Opportunities</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {[
          {
            title: "Senior Frontend Engineer",
            company: "Tech Solutions Inc.",
            location: "Remote",
            type: "Full-time",
            salary: "$120,000 - $150,000",
            logo: "https://img.icons8.com/color/48/000000/source-code.png",
            description:
              "Join our dynamic team to build cutting-edge web applications using modern frontend tools.",
            featured: true,
            highlight: true, // 🔹 Special flag for background
          },
          {
            title: "UX Designer",
            company: "Creative Minds Studio",
            location: "New York, NY",
            type: "Contract",
            salary: "$70/hr - $90/hr",
            logo: "https://img.icons8.com/color/48/000000/design.png",
            description:
              "Work with cross-functional teams to create intuitive and user-friendly product designs.",
          },
          {
            title: "Data Scientist",
            company: "Data Insights Corp.",
            location: "Hybrid (London, UK)",
            type: "Full-time",
            salary: "£80,000 - £100,000",
            logo: "https://img.icons8.com/color/48/000000/artificial-intelligence.png",
            description:
              "Analyze complex datasets and build ML models to drive strategic business decisions.",
          },
          {
            title: "Mobile App Developer",
            company: "Innovate Apps",
            location: "Remote",
            type: "Full-time",
            salary: "$100,000 - $130,000",
            logo: "https://img.icons8.com/color/48/000000/android-os.png",
            description:
              "Develop and maintain high-performance mobile apps for Android and iOS platforms.",
          },
          {
            title: "Product Manager",
            company: "Visionary Products",
            location: "San Francisco, CA",
            type: "Full-time",
            salary: "$130,000 - $160,000",
            logo: "https://img.icons8.com/color/48/000000/product.png",
            description:
              "Lead the product strategy and collaborate with teams to deliver impactful solutions.",
          },
          {
            title: "Cloud Solutions Architect",
            company: "Global Cloud Services",
            location: "Remote",
            type: "Full-time",
            salary: "$140,000 - $170,000",
            logo: "https://img.icons8.com/color/48/000000/cloud.png",
            description:
              "Design scalable cloud solutions with AWS, Azure, and security best practices.",
          },
        ].map((job, index) => (
          <div
            key={index}
            className={`shadow rounded-xl p-6 flex flex-col justify-between ${
              job.highlight ? "bg-sky-100" : "bg-white"
            }`}
          >
            {/* Top Section */}
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <img
                  src={job.logo}
                  alt={job.company}
                  className="w-10 h-10 rounded-md object-contain"
                />
                <div>
                  <h3 className="font-bold flex items-center gap-2">
                    {job.title}
                    {job.featured && (
                      <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                        Featured
                      </span>
                    )}
                  </h3>
                  <p className="text-gray-600 text-sm">{job.company}</p>
                </div>
              </div>
              <Heart className="w-5 h-5 text-gray-400 cursor-pointer hover:text-red-500" />
            </div>

            {/* Job Details */}
            <div className="mt-4 space-y-2 text-sm text-gray-600">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gray-500" /> {job.location}
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gray-500" /> {job.type}
              </p>
              <p className="flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-gray-500" /> {job.salary}
              </p>
            </div>

            {/* Description */}
            <p className="text-gray-500 text-sm mt-4">{job.description}</p>

            {/* Footer */}
            <div className="mt-6 flex justify-between items-center">
              <span className="text-gray-500 text-sm">2 days ago</span>
              <button
                className={`px-4 py-2 rounded-lg ${
                  job.featured
                    ? "bg-white text-blue-500 border border-blue-500 hover:bg-gray-100"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
              >
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Jobs */}
      <div className="mt-10 flex justify-center">
        <button className="flex items-center gap-2 bg-gray-100 px-6 py-3 rounded-lg shadow hover:bg-gray-200">
          Load More Jobs <ChevronDown className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
