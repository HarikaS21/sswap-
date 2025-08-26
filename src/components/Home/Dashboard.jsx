import { AiOutlineCalendar } from "react-icons/ai"; 
import { FaRedo } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-22">
      <div className="max-w-7xl mx-auto">
        {/* Header Card */}
        <div className="mb-6 bg-white border border-gray-100 rounded-2xl shadow-sm p-4 sm:p-5">
          <div className="flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200"
              alt="Samantha Lee"
              className="h-12 w-12 rounded-full object-cover ring-2 ring-gray-100"
            />
            <h1 className="text-2xl font-bold text-gray-900">
              Hello, Samantha Lee!
            </h1>
          </div>
        </div>

        {/* Subheading */}
        <h2 className="text-base font-semibold text-gray-900 mb-4">
          Dashboard Overview
        </h2>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Applicants */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-md font-semibold text-gray-900">Applicants</h3>
              <span className="text-sm text-gray-500">Last 30 days</span>
            </div>
            <div className="text-4xl font-bold text-blue-600">128</div>
            <p className="text-sm text-gray-600 mb-6">total applicants</p>
            <div className="flex justify-between">
              <div className="text-center">
                <p className="font-bold text-pink-600">35</p>
                <p className="text-sm text-gray-600">New</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-pink-600">80</p>
                <p className="text-sm text-gray-600">Screened</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-pink-600">13</p>
                <p className="text-sm text-gray-600">Interviewed</p>
              </div>
            </div>
          </div>

          {/* Job Postings */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-md font-semibold text-gray-900">Job Postings</h3>
              <span className="text-sm text-gray-500 flex items-center gap-1">
                <AiOutlineCalendar className="text-gray-400" />
                Today
              </span>
            </div>
            <div className="text-4xl font-bold text-blue-600">12</div>
            <p className="text-sm text-gray-600 mb-6">active postings</p>
            <div className="flex justify-between">
              <div className="text-center">
                <p className="font-bold text-pink-600">8</p>
                <p className="text-sm text-gray-600">Open</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-pink-600">4</p>
                <p className="text-sm text-gray-600">Draft</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-pink-600">2</p>
                <p className="text-sm text-gray-600">Filled</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-md font-semibold text-gray-900">Messages</h3>
              <span className="text-sm text-gray-500 flex items-center gap-1">
                <AiOutlineCalendar className="text-gray-400" />
                Today
              </span>
            </div>
            <div className="text-4xl font-bold text-blue-600">7</div>
            <p className="text-sm text-gray-600 mb-6">unread messages</p>
            <div className="flex justify-between">
              <div className="text-center">
                <p className="font-bold text-pink-600">3</p>
                <p className="text-sm text-gray-600">Interviews</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-pink-600">4</p>
                <p className="text-sm text-gray-600">Follow-ups</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <h2 className="text-base font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <div className="text-4xl mb-3">👤</div>
            <h3 className="font-semibold text-gray-900 mb-2">Source New Talent</h3>
            <p className="text-sm text-gray-600 mb-4">
              Discover and connect with top candidates for your open positions using
              advanced search and filtering tools.
            </p>
            <button className="bg-blue-600 text-white px-14 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition">
              Start Sourcing
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <div className="text-4xl mb-3">⚗️</div>
            <h3 className="font-semibold text-gray-900 mb-2">Optimize Interview Process</h3>
            <p className="text-sm text-gray-600 mb-4">
              Streamline your interview scheduling, create custom evaluation forms,
              and provide timely feedback.
            </p>
            <button className="bg-blue-600 text-white px-14 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition">
              Manage Interviews
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <div className="text-4xl mb-3">📢</div>
            <h3 className="font-semibold text-gray-900 mb-2">Post a New Job</h3>
            <p className="text-sm text-gray-600 mb-4">
              Quickly publish new job openings to reach a wide pool of qualified
              candidates across the platform.
            </p>
            <button className="bg-blue-600 text-white px-14 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition">
              Create Job Post
            </button>
          </div>
        </div>
        
        {/* Activity Feed Section */}
        <section className="bg-white p-6 rounded-xl shadow">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Activity Feed</h2>
            <button className="flex items-center text-blue-500 hover:underline text-sm">
              <FaRedo className="mr-1" /> Refresh
            </button>
          </div>

          <div className="divide-y divide-gray-200">
            {[
              {
                img: "https://randomuser.me/api/portraits/men/32.jpg",
                text: <>You received 3 new applications for <span className="text-blue-600 font-medium cursor-pointer">Senior Product Designer</span>.</>,
                time: "2 hours ago"
              },
              {
                img: "https://randomuser.me/api/portraits/men/45.jpg",
                text: <>You scheduled an interview with <span className="text-blue-600 font-medium  cursor-pointer">Alex Johnson</span> for the Marketing Manager role.</>,
                time: "5 hours ago"
              },
              {
                img: "https://randomuser.me/api/portraits/men/12.jpg",
                text: <>Your job posting for <span className="text-blue-600 font-medium  cursor-pointer">Frontend Developer</span> went live.</>,
                time: "Yesterday"
              },
              {
                img: "https://randomuser.me/api/portraits/women/65.jpg",
                text: <><span className="text-blue-600 font-medium  cursor-pointer">Project Coordinator</span> position has been filled.</>,
                time: "2 days ago"
              },
              {
                img: "https://randomuser.me/api/portraits/men/20.jpg",
                text: <>You sent a follow-up message to <span className="text-blue-600 font-medium  cursor-pointer">Emily White</span> regarding her application.</>,
                time: "3 days ago"
              }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 py-4">
                <img src={item.img} alt="user" className="w-8 h-8 rounded-full" />
                <div>
                  <p className="text-gray-700">{item.text}</p>
                  <span className="text-sm text-gray-500">{item.time}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
