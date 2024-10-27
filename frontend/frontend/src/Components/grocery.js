import React from 'react';
import { Button } from '@mui/material';
import { FaHandsHelping, FaDonate } from 'react-icons/fa';
import './sidebar.css'; // CSS file
import logo from '../assets/images/logo.png';
import userProfilePic from '../assets/images/profile.png';

const groceryBoard = () => {
  return (
    <div className="dashboard">
      {/* Header */}
      <header className="dashboard-header">
        <div className="header-logo">
          <img src={logo} alt="My Impact Meter" />
          <span>MY IMPACT METER</span>
        </div>
        <div className="header-wallet">
          <span>MIM Wallet: 0.0 PKR | 0.0 USD</span>
          <Button variant="contained" color="primary">Add Funds</Button>
        </div>
        <div className="header-profile">
          <img src={userProfilePic} alt="User Profile" />
        </div>
      </header>

      {/* Sidebar */}
      <aside className="dashboard-sidebar">
        <div className="sidebar">
          <img src={userProfilePic} alt="Profile" className="user-profile" />
          <h3>Wajiha</h3>
          <p>wajihanoor848@gmail.com</p>
        </div>
        <nav className="sidebar-menu">
          <ul>
            <li><FaDonate /> Dashboard</li>
            <li className="active"><FaHandsHelping /> Grocery</li>
            <li><FaHandsHelping /> NGOs</li>
            <li><FaHandsHelping /> Education</li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="dashboard-content">
        <section className="content-grocery">
          <h3>Gift Grocery Voucher</h3>
          <img src="path_to_grocery_image" alt="Grocery" />
          <p>Satisfy your impactees' food needs. In Pakistan, 20% of the population is malnourished.</p>
        </section>

        <section className="content-impactees">
          <h4>Top 5 Impactees</h4>
          {/* Add Impactees data here */}
        </section>
      </main>
    </div>
  );
};

export default groceryBoard;
