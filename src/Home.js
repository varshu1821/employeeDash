import React from 'react';
import { Link } from 'react-router-dom';
import { RiLogoutBoxLine, RiHomeLine, RiUserLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import './home.css';


const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.setItem('isLoggedIn', 'false');
    navigate('/');
  };

  return (
    <div>
      <header>
        <h1>Employee Dashboard</h1>
        <div className="logout" onClick={handleLogout}>
          <RiLogoutBoxLine size={42}/>
          <h5>logout</h5>
        </div>
      </header>
      <main>
        <div className="container">
        <div className="dashboard">
            
            <h2>Welcome to the Employee Dashboard! Here you can access various features and information related to your employment.</h2>
            <br/>
            <ul>
              <h3>Search your fellow colleagues by clicking on user icon below</h3>
              <h3>Check your performance metrics and feedback</h3>
              <h3>Access company announcements and news</h3>
              <h3>Connect with your colleagues and teams</h3>
            </ul>
          </div>
        </div>
        <div className="container2">
        <Link to="/home"><RiHomeLine size={42}/><h4>Home</h4></Link>
        
        <Link to="/employee"><RiUserLine size={42}/><h4>Users</h4></Link>
        
        </div>
      </main>
      
    </div>
  );
};

export default Home;
