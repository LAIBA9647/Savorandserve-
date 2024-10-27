import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { FaDonate, FaHandsHelping, FaUserFriends, FaServicestack } from 'react-icons/fa';
import Typography from '@mui/material/Typography';
import { getUserProfile } from '../services/authService';
import './sidebar.css';
import logo from '../assets/images/enrollment.png';
import profile from '../assets/images/howItWorksImage.png';

const DonorDashboard = () => {

    const [mimWalletBalance, setMimWalletBalance] = useState(0.0);
    const [mimWalletUSD, setMimWalletUSD] = useState(0.0);
  
    const handleAddFunds = () => {
      // Implement logic to add funds to the MIM Wallet
      // Update mimWalletBalance and mimWalletUSD accordingly
    };
  
    return (
      <div className="app-container">
        <header className="header">
          <div className="logo">
            <img src={logo} alt="My Impact Meter Logo" />
            <span>MY IMPACT METER</span>
          </div>
          <div className="wallet">
            <span>MIM Wallet</span>
            <span>{mimWalletBalance} PKR | </span>
            <span>{mimWalletUSD} USD</span>
            <button onClick={handleAddFunds}>Add Funds</button>
          </div>
          <div className="user-profile">
            <img src={profile} alt="User Profile" />
          </div>
        </header>
  
        <div className="content">
          <aside className="sidebar">
            <div className="user-info">
              <h3>wajiha</h3>
              <p>wajihanoor848@gmail.com</p>
            </div>
            <nav className="menu">
              <ul>
                <li className="active">Dashboard</li>
                <li>Gift Impact Services</li>
              </ul>
            </nav>
            <ul className="gift-impact-services">
              <li>
                <img src="/path/to/grocery-icon.png" alt="Grocery" />
                <span>Grocery</span>
              </li>
              <li>
                <img src="/path/to/ngos-icon.png" alt="NGOs" />
                <span>NGOs</span>
              </li>
              <li>
                <img src="/path/to/education-icon.png" alt="Education" />
                <span>Education</span>
              </li>
            </ul>
          </aside>
  
          <main className="main-content">
            <section className="donate-to-ngos">
              <h3>Donate To NGOs</h3>
              <p>Donate to organizations directly of your choice</p>
              <img src="/path/to/ngo-image.png" alt="Donate to NGOs" />
            </section>
  
            <section className="impact-footprint">
              <h3>Impact Footprint</h3>
              <div className="impact-chart">
                {/* Implement impact chart visualization here */}
              </div>
              <ul className="impact-categories">
                <li>
                  <span className="grocery-color"></span> Grocery - 0
                </li>
                <li>
                  <span className="flood-relief-color"></span> Flood Relief - 0
                </li>
                <li>
                  <span className="impactech-color"></span> ImpacTech - 0
                </li>
                <li>
                  <span className="education-color"></span> Education - 0
                </li>
                <li>
                  <span className="direct-giving-color"></span> Direct Giving - 0
                </li>
                <li>
                  <span className="earn-tech-color"></span> Earn Tech - 0
                </li>
              </ul>
            </section>
  
            <section className="gift-services">
              <h3>Gift Services</h3>
              <div className="gift-service-cards">
                <div className="gift-service-card">
                  <h4>Grocery</h4>
                  <p>Gift grocery to your impactees</p>
                  <img src="/path/to/grocery-service-image.png" alt="Grocery Service" />
                </div>
                <div className="gift-service-card">
                  <h4>EarnTech</h4>
                  <p>Gift IT skills training to your Impactee</p>
                  <img src="/path/to/earntech-service-image.png" alt="EarnTech Service" />
                </div>
              </div>
            </section>
          </main>
        </div>
  
        <footer className="footer">
          {/* Implement footer content here */}
        </footer>
      </div> );
  };
  

export default DonorDashboard;