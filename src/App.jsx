import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import Chat from "./components/chatBox/Chat.jsx";
import Home from './pages/Home.jsx'
import Community from './pages/community/Community.jsx';
import Blog from "./pages/blog/Blog.jsx";
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
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
