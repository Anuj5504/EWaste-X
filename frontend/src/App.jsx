import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import LeaderBoard from './components/LeaderBoard';
import ImpactDashboard from './components/ImpactDashboard';
import Profile from './components/Profile';
import Footer from './components/footer';
import Login from './components/Login';
import MainPage from './components/Mainpage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductInfo from './components/Productinfo';
import { Toaster } from 'react-hot-toast';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <div>

      <>
        <ToastContainer />
        <Toaster />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leaderboard" element={<LeaderBoard />} />
          <Route path="/impactdashboard" element={<ImpactDashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product/:id" element={<ProductInfo />} />
        </Routes>
        <Footer />
      </>
    </div>
  );
}

export default App;
