
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
// import About from './pages/About';
// import Features from './pages/Features';
// import Login from './pages/Login';
// import Signup from './pages/Signup';


const App = () => {
  return (
    <div>

    <Router>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<Home />} />
           <Route path="/signup" element={<SignUp/>} />
           <Route path="/dashboard" element={<Dashboard/>} />
               <Route path="/activies" element={<Activies/>} />
          {/* <Route path="about" element={<About />} />
          <Route path="features" element={<Features />} />
          <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} /> */}
        </Route>
         <Route path="/marketplace" element={<FreelanceMarketplace />} />
        <Route path="/livesessions" element={<LiveSessions />} />
          <Route path="/minigames" element={<Minigames />} />
      </Routes>
    </Router>
    <Footer/>
    </div>
  );
};

export default App;

