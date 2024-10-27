import React, { useState } from "react";
import { Button } from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaDonate, FaHandsHelping, FaUserFriends, FaServicestack, FaHistory } from "react-icons/fa";
import "./sidebar.css";
import logo from "../assets/images/logo.png"; // SAS logo
import profile from "../assets/images/setting.png"; // Profile placeholder
import palestine from "../assets/images/palestine.png"; // Profile placeholder
import cardiac from "../assets/images/cardiac.jpg"; // Profile placeholder
import Earthquake from "../assets/images/turkey.jpg"; // Profile placeholder
import Qstudents from "../assets/images/Qstudents.jpg"; // Profile placeholder
import PaymentPopup from './paymentpopup'; // Payment popup component
import { Link } from 'react-router-dom';

const NGOboard = () => {
    const [walletBalance, setWalletBalance] = useState(0.0);
  const [walletUSD, setWalletUSD] = useState(0.0);

  const handleAddFunds = () => {
    // Add funds logic
  };


  const togglePopup = () => {
   //setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="sas-container">
      <header className="sas-header">
        <div className="sas-logo">
          <img src={logo} alt="Savor and Serve Logo" />
        </div>
        <div className="sas-wallet">
          <span>Wallet</span>
          <span>{walletBalance.toFixed(2)} PKR | </span>
          <span>{walletUSD.toFixed(2)} USD</span>
          <button className="read-more" onClick={handleAddFunds}>Add Funds</button>
        </div>
        <div className="sas-profile">
          <img src={profile} alt="User Profile" />
        </div>
      </header>

      <div className="sas-content">
        <aside className="sas-sidebar">
          <div className="sas-user-info">
            <h3>User</h3>
            <p>User@gmail.com</p>
          </div>
           <nav className="sas-menu">
            <ul>
            <li > Menu</li>
            <li>
                <Link to="/userboard">
                  <FaUserFriends /> Dashboard
                </Link>
              </li>
              <li > Gift Impact Services</li>
              <li>
                <Link to="/grocery">
                  <FaHandsHelping /> Grocery
                </Link>
              </li >
              <li className="active"><FaDonate /> NGOs</li>
              <li><FaServicestack /> Education</li>
              <li className="heading"> Others</li>
              <li><FaDonate /> Impactees</li>
              <li><FaHandsHelping /> Impact Buddies</li>
              <li><FaHistory /> History</li>
            </ul>
          </nav>
        </aside>

        <div className="donation-cards">
      {/* First Row of Cards */}
      <div className="donation-card">
        <img src={palestine} alt="Palestine Relief" />
        <h3>Palestine Relief</h3>
        <p>Created By: Alkhidmat Foundation Pakistan</p>
        <div className="progress-bar">
          <div className="filled-bar" style={{ width: '70.14%' }}></div>
        </div>
        <div className="target-info">
          <p>Target: 1000000 PKR</p>
          <p>70.14%</p>
        </div>
        <button className="read-more-button" onClick={togglePopup}>Donate</button>
      </div>

      <div className="donation-card">
        <img src={cardiac} alt="Support Cardiac Patients" />
        <h3>Support Cardiac Patients in Pakistan</h3>
        <p>Created By: Transparent Hands Trust</p>
        <div className="progress-bar">
          <div className="filled-bar" style={{ width: '53.36%' }}></div>
        </div>
        <div className="target-info">
          <p>Target: 1000000 PKR</p>
          <p>53.36%</p>
        </div>
        <button className="read-more-button">Donate</button>
      </div>

      {/* Second Row of Cards */}
      <div className="donation-card">
        <img src={Earthquake} alt="Support Education" />
        <h3>Save Lives In Turkiye & Syria Earthquake</h3>
        <p>Created By: Alkhidmat Foundation Pakistan</p>
        <div className="progress-bar">
          <div className="filled-bar" style={{ width: '65.45%' }}></div>
        </div>
        <div className="target-info">
          <p>Target: 1500000 PKR</p>
          <p>65.45%</p>
        </div>
        <button className="read-more-button">Donate</button>
      </div>

      <div className="donation-card">
        <img src={Qstudents} alt="Support Healthcare" />
        <h3>Pay monthly expense of 100 Quran students </h3>
        <p>Created By: Trust Jamiat Talim ul Quran</p>
        <div className="progress-bar">
          <div className="filled-bar" style={{ width: '45.78%' }}></div>
        </div>
        <div className="target-info">
          <p>Target: 800000 PKR</p>
          <p>45.78%</p>
        </div>
        <button className="read-more-button">Donate</button>
      </div>
        </div>
      </div>
    </div>
  );
};
export default NGOboard;