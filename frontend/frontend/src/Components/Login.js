import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import backgroundImage from '../assets/images/NGOheroimage.png';

const Login = () => {
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 
  const [showPassword, setShowPassword] = useState(false); 
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log('Login credentials:', { email, password }); // Log input values

    // Check if fields are filled
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    try {
      // Send login request to the server
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email: email.trim(),
        password: password.trim(),
      });

      console.log('Login successful:', response.data);

      // Ensure response contains token
      if (response.data.token) {
        localStorage.setItem('token', response.data.token); // Store token in local storage
        navigate('/userboard'); // Redirect to dashboard
      } else {
        setError('Login failed: No token received');
      }
    } catch (err) {
      console.error(err); // Log the error
      // Handle error responses
      if (err.response) {
        // Server responded with a status other than 200 range
        setError('Login failed: ' + (err.response.data.message || 'Invalid credentials'));
      } else if (err.request) {
        // Request was made but no response was received
        setError('Login failed. No response from the server.');
      } else {
        // Something happened in setting up the request
        setError('Login failed. An unknown error occurred.');
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-left" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="fade-overlay"></div>
      </div>
      <div className="login-right">
        <div className="right-text">
          <h1>SAVOR AND SERVE</h1>
          <p>Small Act, Big Impact</p>
        </div>
        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <div className="input-with-icon">
              <FaEnvelope className="input-icon" />
              <input
                type="email"
                id="email"
                placeholder="Enter Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value.trim())}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <div className="input-with-icon">
              <FaLock className="input-icon" />
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="Enter Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value.trim())}
                required
              />
              <span onClick={togglePasswordVisibility} className="password-toggle-icon">
                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </span>
            </div>
          </div>

          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="btn-login">Log in</button>
        </form>
        <div className="create-account">
          <p>Don't have an account? <Link to="/SignUp">Create Account</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;