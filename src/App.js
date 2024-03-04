import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import LoginPage from './LoginPage';
import Home from './Home'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

// Check for authentication status in local storage when the component mounts
useEffect(() => {
  const isAuthenticated = localStorage.getItem('isLoggedIn') === 'true';
  setIsLoggedIn(isAuthenticated);
}, []);

  return (
    <Router>
      <Routes> 

      <Route
          path="/home"
          element={isLoggedIn ? <Home /> : <Navigate to="/"/>}
      /> 

      <Route 
          path="/" 
          element={isLoggedIn ? <Home /> : <LoginPage/>} 
      /> 
      </Routes>
      
    </Router>
  );
};

export default App;
