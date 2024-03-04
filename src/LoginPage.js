
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addUser, findUserByEmail } from './db'; // Importing in-memory database functions
import './style.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyIcon from '@mui/icons-material/Key';
import VisibilityIcon from '@mui/icons-material/Visibility';


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleLogin = () => {
    // Validate email and password
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    // Check if user exists in the database
    const user = findUserByEmail(email);
    if (!user || user.password !== password) {
      alert('Invalid email or password');
      return;
    }

    // Redirect to home page upon successful login
    navigate('/home');
    // setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');

  };

  const handleSignup = () => {
    // Validate email and password
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    // Check if user already exists
    const existingUser = findUserByEmail(email);
    if (existingUser) {
      alert('User already exists, please log-in');
      return;
    }

    // Add new user to the database
    addUser({ email, password });
    alert('Successfully signed-up, now try log-in')
    navigate('/');
  };

function show() {
  var p = document.getElementById('pwd');
  p.setAttribute('type', 'text');
}

function hide() {
  var p = document.getElementById('pwd');
  p.setAttribute('type', 'password');
}

const handlePassword = () => {
  if(showPassword){
    hide();
    setShowPassword(false);
  }else{
    show();
    setShowPassword(true);
  }
}

  return (
    <div class="overlay">
      <form>
          <div class="con">
            <header class="head-form">
             <h2>Log In</h2>
             <p>login here using your username and password</p>
             {error && <p className="error">{error}</p>}

            </header>
            <br/>
            <div class="field-set">
     
             <span class="input-item">
                <AccountCircleIcon/>              
            </span>
              
               <input class="form-input" type="email" value={email} id="txt-input" placeholder="@UserName" onChange={(e) => setEmail(e.target.value)} required/>
              <br/>
     
     
            <span class="input-item">
              <i class="fa fa-key"><KeyIcon/></i>
             </span>
             <input class="form-input" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
             <span class="input-item" onClick={handlePassword}>
              <i id="eye"> <VisibilityIcon/></i>
             </span>
             
     
     
               <br/>
               <button class="log-in" onClick={handleLogin}> Log In </button>
               <br/>
               <button class="btn submits sign-up" onClick={handleSignup}>Sign Up 
      <i class="fa fa-user-plus" aria-hidden="true"></i>
      </button>
   </div>
     <div class="other">
      {/* <button class="btn submits frgt-pass">Forgot Password</button> */}
      

   </div>
     

  </div>
  

</form>
</div>
  );
};

export default LoginPage;

