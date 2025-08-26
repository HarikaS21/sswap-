import { FaUsers, FaUsersCog, FaGraduationCap, FaComments, FaGamepad, FaLock } from 'react-icons/fa';

const Main = () => {
  return (
    <main className="w-full bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">How Skill Exchange Platform Empowers You</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center transition-all duration-300 hover:scale-105 hover:bg-opacity-90">
            <FaUsers className="mx-auto mb-4 h-12 w-12 text-blue-500" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Diverse Talent Pool</h3>
            <p className="text-gray-600">Connect with a vast network of professionals offering a wide range of skills and expertise.</p>
          </div>
          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center transition-all duration-300 hover:scale-105 hover:bg-opacity-90">
            <FaUsersCog className="mx-auto mb-4 h-12 w-12 text-blue-500" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Project Collaboration</h3>
            <p className="text-gray-600">Seamlessly find partners for projects, big or small, and manage your team efficiently.</p>
          </div>
          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center transition-all duration-300 hover:scale-105 hover:bg-opacity-90">
            <FaGraduationCap className="mx-auto mb-4 h-12 w-12 text-blue-500" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Skill Development</h3>
            <p className="text-gray-600">Exchange knowledge, learn new skills, and enhance your professional profile through engaging interactions.</p>
          </div>
          {/* Card 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center transition-all duration-300 hover:scale-105 hover:bg-opacity-90">
            <FaComments className="mx-auto mb-4 h-12 w-12 text-blue-500" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-time Communication</h3>
            <p className="text-gray-600">Utilize integrated chat and video call tools for instant and effective collaboration.</p>
          </div>
          {/* Card 5 */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center transition-all duration-300 hover:scale-105 hover:bg-opacity-90">
            <FaGamepad className="mx-auto mb-4 h-12 w-12 text-blue-500" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Gamified Learning</h3>
            <p className="text-gray-600">Boost your skills with fun mini-games, earn XP, and climb the leaderboards.</p>
          </div>
          {/* Card 6 */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center transition-all duration-300 hover:scale-105 hover:bg-opacity-90">
            <FaLock className="mx-auto mb-4 h-12 w-12 text-blue-500" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure Transactions</h3>
            <p className="text-gray-600">Manage your earnings and payments with our reliable and transparent wallet system.</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;