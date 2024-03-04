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
        <Route path="/home" element={isLoggedIn ? <Home isLoggedIn={setIsLoggedIn} /> : <Navigate to="/" />} />
        <Route path="/employee" element={isLoggedIn ? <Employee /> : <LoginPage />} />
        <Route path="/" element={isLoggedIn ? <Home isLoggedIn={setIsLoggedIn} /> : <LoginPage />} />
      </Routes>
    </Router>
  );
};

export default App;
