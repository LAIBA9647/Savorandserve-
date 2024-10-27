import React, { useState } from "react";
import { useEffect } from 'react';
import { Button } from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaDonate, FaHandsHelping, FaUserFriends, FaServicestack, FaHistory } from "react-icons/fa";
import "./sidebar.css";
import logo from "../assets/images/logo.png"; // SAS logo
import profile from "../assets/images/setting.png"; // Profile placeholder
import chart from "../assets/images/circle.png"; // Profile placeholder
import grocery from "../assets/images/basket.png"; // Profile placeholder
import earn from "../assets/images/earn.png"; // Profile placeholder
import education from "../assets/images/graduation.png"; // Profile placeholder
import health from "../assets/images/healthcare.png"; // Profile placeholder
import ngo from "../assets/images/ngoimg.png"; // Profile placeholder
import vouchar from '../assets/images/vouchar.jpeg';
import payment from '../assets/images/payment.png';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const [walletBalance, setWalletBalance] = useState(0.0);
  const [walletUSD, setWalletUSD] = useState(0.0);
  const [voucherAmount, setVoucherAmount] = useState('');
const [user, setUser] = useState({ name: '', email: '' });


  const handleAddFunds = () => {
    // Add funds logic
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
        <aside className="sas-sidebar-dashboard">
        <div className="sas-user-info">
            {/* Display fetched user data */}
            <h3>User</h3>
            <p>User@gmail.com</p>
          </div>
          <nav className="sas-menu">
            <ul>
            <li > Menu</li>
              <li className="active"><FaUserFriends /> Dashboard</li>
              <li > Gift Impact Services</li>
              <li>
                <Link to="/grocery">
                  <FaHandsHelping /> Grocery
                </Link>
              </li>
              <li>
                <Link to="/ngoboard">
                  <FaDonate /> NGOs
                </Link>
              </li>
              <li><FaServicestack /> Education</li>
              <li className="heading"> Others</li>
              <li><FaDonate /> Impactees</li>
              <li><FaHandsHelping /> Impact Buddies</li>
              <li><FaHistory /> History</li>
            </ul>
          </nav>
        </aside>

        <main className="sas-main-content-cards">
          <section className="sas-donate-ngos">
            <h3>Donate To NGOs</h3>
            <p>Donate to organizations of your choice</p>
            <img src={ngo} alt="Donate to NGOs" />
          </section>

          <section className="sas-impact-footprint">
            <h3>Impact Footprint</h3>
            <div className="sas-impact-chart">
            <img src={chart} alt="Donate to NGOs" />
            </div>
            <ul className="sas-impact-categories">
              <li>
                <span className="grocery-color"></span> Grocery - 0
              </li>
              <li>
                <span className="education-color"></span> Education - 0
              </li>
              <li>
                <span className="health-color"></span> Health - 0
              </li>
              <li>
                <span className="direct-giving-color"></span> Direct Giving - 0
              </li>
            </ul>
          </section>
              <div className="sas-gift-card-history"> 
                <h4 className="h4">Recent Transaction</h4>
                <img src={payment} alt="data image" />
                <p className="no-data">No Data Found</p>
              </div>

          <section className="sas-gift-services-cards">
            <h3>Gift Services</h3>
            <div className="sas-gift-cards">
              <div className="sas-gift-card">
                <h4><Link to="/grocery">Grocery</Link></h4>
                <p>Gift grocery to your impactees</p>
                <img src={grocery} alt="Grocery Service" />
              </div>
              <div className="sas-gift-card">
                <h4>EarnTech</h4>
                <p>Gift IT skills training to your Impactee</p>
                <img src={earn} alt="EarnTech Service" />
              </div>
              <div className="sas-gift-card">
                <h4>Education</h4>
                <p>Support education for your impactees</p>
                <img src={education} alt="Education Service" />
              </div>
              <div className="sas-gift-card">
                <h4>Healthcare</h4>
                <p>Provide healthcare services to those in need</p>
                <img src={health} alt="Healthcare Service" />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};
export default Dashboard;