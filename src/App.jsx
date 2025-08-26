import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import AdminDashboard from './components/Admin/Main/AdminDashboard'
import Profile from './components/SkillSeeker/Main/Profile/Profile'
import Wallet from './components/SkillSeeker/Main/Wallet/Wallet'
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



const Layout = ({ children }) => {
  const location = useLocation()

  // Hide Navbar & Footer on login page
  const hideLayout = location.pathname === "/login"

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {!hideLayout }
      
      <main className="flex-grow">{children}</main>
      
      {!hideLayout && <Footer />}
    </div>
  )
}

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
            <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/profile" element={<Profile />} />
                <Route path="/wallet" element={<Wallet />} />
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
               <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/profile" element={<Profile />} />
                <Route path="/wallet" element={<Wallet />} />
        </Routes>
      </Layout>
    </Router>
  );

}

export default App;

