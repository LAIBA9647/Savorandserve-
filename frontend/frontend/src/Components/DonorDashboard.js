import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaDonate, FaHandsHelping, FaUserFriends, FaServicestack, FaHistory } from 'react-icons/fa';
import logo from '../assets/images/logo.png';
import profile from '../assets/images/setting.png';
import vouchar from '../assets/images/vouchar.jpeg';
import payment from '../assets/images/payment.png';
import { Link } from 'react-router-dom';

const Signupboard = () => {
  const [walletBalance, setWalletBalance] = useState(0.0);
  const [walletUSD, setWalletUSD] = useState(0.0);
  const [voucherAmount, setVoucherAmount] = useState('');

  const handleInputChange = (event) => {
    setVoucherAmount(event.target.value);
  };

  const handleSubmit = () => {
    if (!voucherAmount || isNaN(voucherAmount) || parseFloat(voucherAmount) < 1000) {
      toast.error('Please enter a valid number. Voucher amount must be at least 1000!');
    } else {
      toast.success('Voucher amount is valid.');
    }
  };
  
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
              <li className="active"><FaHandsHelping /> Grocery</li>
              <li>
                <Link to="/ngoboard">
                  <FaDonate /> NGOs
                </Link>
              </li>
              <li><FaServicestack /> Education</li>
              <li > Others</li>
              <li><FaDonate /> Impactees</li>
              <li><FaHandsHelping /> Impact Buddies</li>
              <li><FaHistory /> History</li>
            </ul>
          </nav>
        </aside>

        <main className="sas-main-content">
        <section className="image-conatiner">
          <img src={vouchar} alt="Sidebar Image" className="sidebar-image" />
          <div className="centered-textbox">Gift Grocery Vouchars</div>
          </section>

          <section className="sas-gift-services">
            <div className="card-header">Top 5 Impactees</div>
            <div className="sas-gift-service-cards">
              <div className="sas-gift-service-card">
                <h4 className="h4">Grocery</h4>
                <p>Gift grocery to your impactees</p>
                <input
                  type="text"
                  placeholder="Enter Gift Voucher Amount"
                  value={voucherAmount}
                  onChange={handleInputChange}
                />
                <ToastContainer />
                <h2 className="red-head">Amount should be greater than 1000 PKR</h2>
                <h2 className="label-text">*Your Impactee will be sent a tracking ID on their phone and a list of supported grocery shops from where they can collect grocery for the amount you have gifted based on their own needs</h2>
                <button className="read-more-button" onClick={handleSubmit}>Add Funds</button>
              </div>
              <div className="sas-gift-service-card">
                {/* Additional card content */}
              </div>
              <div className="sas-gift-service-card"> 
                <h4 className="h4">Recent Transaction</h4>
                <img src={payment} alt="data image" />
                <p className="no-data">No Data Found</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Signupboard;
