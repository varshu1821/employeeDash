import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import LoginPage from './LoginPage';
import Home from './Home';
import Employee from './employee';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(isAuthenticated);
  }, []);

  return (
    <Router>
      <Routes>
      {/* <Route path="/" element={isLoggedIn ? <Home/> : <LoginPage />} />
        <Route path="/home" element={isLoggedIn ? <Home/> : <Navigate to="/" />} />
        <Route path="/employee" element={isLoggedIn ? <Employee /> : <LoginPage />} />
      </Routes> */}
      <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/employee" element={<Employee />} />
      </Routes>
    </Router>
  );
};

export default App;
