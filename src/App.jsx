import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import AdminDashboard from './components/Admin/Main/AdminDashboard'
import Profile from './components/SkillSeeker/Main/Profile/Profile'
import Wallet from './components/SkillSeeker/Main/Wallet/Wallet'



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
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
