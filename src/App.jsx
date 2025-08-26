import Sidebar from "./components/sidebar/Sidebar.jsx";
import Chat from "./components/chatBox/Chat.jsx";
import Home from './pages/Home.jsx'
import Community from './pages/community/Community.jsx';
import Blog from "./pages/blog/Blog.jsx";
import Dashboard from "./pages/Dashboard";
import JobListings from "./pages/JobListings";
import SkillExchange from "./pages/SkillExchange";  
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Footer from './components/Footer';
// import SignUpForm from './components/Home/SignUp.jsx';
import Dashboard from './components/Home/Dashboard.jsx';
import SignUp from './components/Home/SignUp.jsx';
import Activies from './components/Home/Activies.jsx';
// import Activies from './components/Home/Activies.jsx';
import FreelanceMarketplace from "./pages/FreelancerMarketplace";
import LiveSessions from "./pages/LiveSessions";
import Minigames from "./pages/MiniGames";
function App() {
  return (
    <Router>
      <div className="flex h-screen">
        {/* Sidebar - 20% */}
        <div className="w-1/5  p-4">
          <Sidebar />
        </div>

        {/* Main content - 80% */}
        <div className="w-4/5 p-4 overflow-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/community" element={<Community/>} />
            <Route path="/blog" element={<Blog/>}/>
             <Route path="/" element={<Dashboard />} />
          <Route path="/jobs" element={<JobListings />} />
          <Route path="/skills" element={<SkillExchange />} /> 
          <Route path="/signup" element={<SignUp/>} />
           <Route path="/dashboard" element={<Dashboard/>} />
               <Route path="/activies" element={<Activies/>} />
                <Route path="/marketplace" element={<FreelanceMarketplace />} />
        <Route path="/livesessions" element={<LiveSessions />} />
          <Route path="/minigames" element={<Minigames />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

