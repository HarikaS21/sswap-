// src/pages/Dashboard.jsx
import Navbar from "../components/Navbar";
import { Briefcase, Star, Mail, LineChart } from "lucide-react";

export default function Dashboard() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      <div className="px-6 py-6">
        {/* Welcome Section */}
        <h1 className="text-2xl font-bold">Welcome back, Aisha! ✅</h1>
        <p className="text-gray-600">
          Your personalized hub for skill growth and opportunities.
        </p>

        {/* Overview */}
        <h2 className="mt-6 text-xl font-semibold">Your Overview</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          {/* Jobs Applied */}
          <div className="flex items-center justify-between bg-white shadow rounded-xl p-4">
            <div>
              <p className="text-sm font-medium text-gray-600">Jobs Applied</p>
              <p className="text-xl font-bold">18</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <Briefcase className="text-blue-500 w-6 h-6" />
            </div>
          </div>

          {/* Skills Acquired */}
          <div className="flex items-center justify-between bg-white shadow rounded-xl p-4">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Skills Acquired
              </p>
              <p className="text-xl font-bold">4</p>
            </div>
            <div className="bg-pink-100 p-3 rounded-full">
              <Star className="text-pink-500 w-6 h-6" />
            </div>
          </div>

          {/* Messages */}
          <div className="flex items-center justify-between bg-white shadow rounded-xl p-4">
            <div>
              <p className="text-sm font-medium text-gray-600">Messages</p>
              <p className="text-xl font-bold">7 New</p>
            </div>
            <div className="bg-red-100 p-3 rounded-full">
              <Mail className="text-red-500 w-6 h-6" />
            </div>
          </div>

          {/* Learning Hours */}
          <div className="flex items-center justify-between bg-white shadow rounded-xl p-4">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Learning Hours
              </p>
              <p className="text-xl font-bold">120h</p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <LineChart className="text-green-500 w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Jobs + Messages */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Job Recommendations */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold mb-4">Top Job Recommendations</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Job Card 1 */}
              <div className="bg-white shadow rounded-xl p-4">
                <h3 className="font-semibold text-lg">Junior UI/UX Designer</h3>
                <p className="text-sm text-gray-600">Innovate Solutions</p>
                <p className="text-sm text-gray-500">Remote</p>
                <p className="text-base font-bold mt-1">$45,000 - $55,000</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="px-3 py-1 text-xs rounded-full bg-sky-100 text-sky-700">Figma</span>
                  <span className="px-3 py-1 text-xs rounded-full bg-sky-100 text-sky-700">Sketch</span>
                  <span className="px-3 py-1 text-xs rounded-full bg-sky-100 text-sky-700">User Research</span>
                  {/* ✅ Forces "Prototyping" to next line */}
                  <div className="basis-full"></div>
                  <span className="px-3 py-1 text-xs rounded-full bg-sky-100 text-sky-700">Prototyping</span>
                </div>
              </div>

              {/* Job Card 2 */}
              <div className="bg-white shadow rounded-xl p-4">
                <h3 className="font-semibold text-lg">Frontend Developer (React)</h3>
                <p className="text-sm text-gray-600">Tech Global</p>
                <p className="text-sm text-gray-500">New York</p>
                <p className="text-base font-bold mt-1">$60,000 - $75,000</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="px-3 py-1 text-xs rounded-full bg-sky-100 text-sky-700">React</span>
                  <span className="px-3 py-1 text-xs rounded-full bg-sky-100 text-sky-700">JavaScript</span>
                  <span className="px-3 py-1 text-xs rounded-full bg-sky-100 text-sky-700">Tailwind</span>
                  <div className="basis-full"></div>
                  <span className="px-3 py-1 text-xs rounded-full bg-sky-100 text-sky-700">Git</span>
                </div>
              </div>

              {/* Job Card 3 */}
              <div className="bg-white shadow rounded-xl p-4">
                <h3 className="font-semibold text-lg">Data Analyst Intern</h3>
                <p className="text-sm text-gray-600">Quant Insights</p>
                <p className="text-sm text-gray-500">San Francisco</p>
                <p className="text-base font-bold mt-1">$25/hour</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="px-3 py-1 text-xs rounded-full bg-sky-100 text-sky-700">Python</span>
                  <span className="px-3 py-1 text-xs rounded-full bg-sky-100 text-sky-700">SQL</span>
                  <span className="px-3 py-1 text-xs rounded-full bg-sky-100 text-sky-700">Excel</span>
                  <div className="basis-full"></div>
                  <span className="px-3 py-1 text-xs rounded-full bg-sky-100 text-sky-700">Power BI</span>
                </div>
              </div>

              {/* Job Card 4 */}
              <div className="bg-white shadow rounded-xl p-4">
                <h3 className="font-semibold text-lg">Digital Marketing Specialist</h3>
                <p className="text-sm text-gray-600">BrandBloom Agency</p>
                <p className="text-sm text-gray-500">Remote</p>
                <p className="text-base font-bold mt-1">$50,000 - $65,000</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="px-3 py-1 text-xs rounded-full bg-sky-100 text-sky-700">SEO</span>
                  <span className="px-3 py-1 text-xs rounded-full bg-sky-100 text-sky-700">Google Ads</span>
                  <span className="px-3 py-1 text-xs rounded-full bg-sky-100 text-sky-700">Content Marketing</span>
                  <div className="basis-full"></div>
                  <span className="px-3 py-1 text-xs rounded-full bg-sky-100 text-sky-700">Analytics</span>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Messages */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Recent Messages</h2>
            <div className="flex flex-col gap-4">
              {/* Message 1 */}
              <div className="bg-white shadow rounded-xl p-4 flex items-center justify-between">
                <div className="flex gap-3 items-center">
                  <img
                    src="https://randomuser.me/api/portraits/men/12.jpg"
                    alt="Mentor Mike"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-semibold">Mentor Mike</p>
                    <p className="text-sm text-gray-600">
                      Your portfolio feedback is ready!
                    </p>
                  </div>
                </div>
                <span className="text-xs text-gray-500">2 min ago</span>
              </div>

              {/* Message 2 */}
              <div className="bg-white shadow rounded-xl p-4 flex items-center justify-between">
                <div className="flex gap-3 items-center">
                  <img
                    src="https://randomuser.me/api/portraits/women/45.jpg"
                    alt="Community Support"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-semibold">Community Support</p>
                    <p className="text-sm text-gray-600">
                      Your skill exchange request is live!
                    </p>
                  </div>
                </div>
                <span className="text-xs text-gray-500">1 hour ago</span>
              </div>

              {/* Message 3 */}
              <div className="bg-white shadow rounded-xl p-4 flex items-center justify-between">
                <div className="flex gap-3 items-center">
                  <img
                    src="https://randomuser.me/api/portraits/women/32.jpg"
                    alt="Sarah Chen"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-semibold">Sarah Chen</p>
                    <p className="text-sm text-gray-600">
                      Looking forward to the Figma session!
                    </p>
                  </div>
                </div>
                <span className="text-xs text-gray-500">Yesterday</span>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Live Sessions */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4">Upcoming Live Sessions</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=600&q=60"
                alt="Figma session"
                className="w-full h-32 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold">Mastering Figma for UI Design</h3>
                <p className="text-sm text-gray-600">Hosted by Sarah Chen</p>
                <p className="text-xs text-gray-500 mt-1">
                  📅 24 Nov 2024 at 10:00 AM PST
                </p>
              </div>
            </div>

            {/* ✅ Fixed Card 2 - React Hooks with IMAGE */}
            <div className="bg-white rounded-xl shadow overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=600&q=60"
                alt="React Hooks Session"
                className="w-full h-32 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold">Introduction to React Hooks</h3>
                <p className="text-sm text-gray-600">Hosted by Alex Johnson</p>
                <p className="text-xs text-gray-500 mt-1">
                  📅 25 Nov 2024 at 02:00 PM EST
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=60"
                alt="Data Analysis"
                className="w-full h-32 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold">Data Analysis with Python</h3>
                <p className="text-sm text-gray-600">Hosted by Maria Rodriguez</p>
                <p className="text-xs text-gray-500 mt-1">
                  📅 26 Nov 2024 at 01:00 PM GMT
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
