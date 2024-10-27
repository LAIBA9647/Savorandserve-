import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from '../assets/images/logo.png'; // Correct import
import { FaTwitter, FaFacebookF, FaYoutube } from 'react-icons/fa'; // Import social icons from react-icons

const Header = () => {
  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Savor and Serve" />
        </Link>
      </div>

      {/* Navigation Bar */}
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          
          {/* Roles Dropdown Menu */}
          <li className="dropdown">
            <span className="dropbtn">Roles</span> {/* Display "Roles" as button */}
            <ul className="dropdown-content">
              <li><Link to="/roles/ngos">NGOs</Link></li>
              <li><Link to="/roles/grocery-supplier">Grocery Supplier</Link></li>
              <li><Link to="/roles/donor">Donor</Link></li>
            </ul>
          </li>

          <li><Link to="/getinvolved">Get Involved</Link></li>
          <li><Link to="/contactus">Contact</Link></li>
          <li><Link to="/login">Login</Link></li>

          {/* Social Media Icons */}
          <li>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
