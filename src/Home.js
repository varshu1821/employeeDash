import React from 'react';
import { useEffect } from 'react';
import './home.css';

const Home = () => {
  useEffect(() => {
    const arrow = document.querySelector(".arrow");
const list = document.querySelector(".drop-down");
//Show the list on btn click
arrow.addEventListener("click", () => {
  list.classList.toggle("show");
  arrow.classList.toggle("up");
})
}, []);
  return (
  
    <header class="header">
    <div class="container">
      <div class="logo">LOGO</div>
      <nav class="navigation">
        <i class="fa-solid fa-plane nav-item"></i>
        <i class="fa-solid fa-bell nav-item"></i>
        <i class="fa-solid fa-message nav-item"></i>
        <div class="nav-item arrow">&#9001</div>
      </nav>
    </div>
    <div class="drop-down">
      <ul class="list">
        <li class="profile list-item">
          <span class="pro-img">R</span>
          <span class="name">Ruka Kane</span>
        </li>
        <li class="list-item">
          <i class="fas fa-cog icon"></i>
          <span>Settings</span>
          <div class="arrow-right">&#9001</div>
        </li>
        <li class="list-item">
          <i class="fa-solid fa-book icon"></i>
          <span>Tutorials</span>
          <div class="arrow-right">&#9001</div>
          </li>
        <li class="list-item">
          <i class="fa-solid fa-moon icon"></i>
          <span>Night Mode</span>
        </li>
        <li class="list-item">
          <i class="fa-solid fa-right-from-bracket icon"></i>
          <span>Log Out</span>
          
        </li>
      </ul>
    </div>
  </header>
  );
};

export default Home;
