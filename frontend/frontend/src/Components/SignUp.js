import React, { useState } from 'react';
import { TextField, Button, Grid, MenuItem, InputAdornment } from '@mui/material';
import { AccountCircle, Lock, Email, Phone, Public, Visibility, VisibilityOff } from '@mui/icons-material';
import { Google as GoogleIcon, Apple as AppleIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/images/NGOheroimage.png'; // Background Image import
import axios from 'axios';

// Signup function to send data to the backend
const signUp = async (userData) => {
  try {
    const response = await axios.post('http://localhost:5000/api/auth/signup', userData);
    console.log('Signup successful:', response.data);
    return response.data;
  } catch (error) {
    console.error('Signup failed:', error.response ? error.response.data : error.message);
  }
};

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState('');
  const [userName, setUserName] = useState(''); // State for user name
  const [email, setEmail] = useState(''); // State for email
  const [password, setPassword] = useState(''); // State for password
  const [mobileNumber, setMobileNumber] = useState(''); // State for mobile number
  const [gender, setGender] = useState(''); // State for gender
  const [country, setCountry] = useState(''); // State for country

  const navigate = useNavigate();
  
  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Handle role selection
  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };
  

  // Handle signup submission
  const handleSignUp = async () => {
    const userData = {
      username: userName,
      email,
      password,
      role,
      mobileNumber,
      gender,
      country
    };

    const result = await signUp(userData);
    if (result) {
      navigate('/login'); // Redirect to the login on successful signup
    }
  };

  return (
    <div className="signup-container">
      {/* Left side with background image */}
      <div className="signup-left" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="fade-overlay"></div>
      </div>

      {/* Right side with signup form */}
      <div className="signup-right">
        <div className="right-text">
          <h1>SAVOR AND SERVE</h1>
          <p>Small Act, Big Impact</p>
        </div>
        <form onSubmit={(e) => { e.preventDefault(); handleSignUp(); }}>
          <Grid container spacing={2}>
            {/* User Name */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Enter Your User Name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            {/* Email */}
            <Grid item xs={12} sm={6}>
              <input
                fullWidth
                label="Enter Your Email Address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            {/* Mobile Number */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Enter Your Mobile Number"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Phone />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            {/* Gender */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                select
                label="Select Your Gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </TextField>
            </Grid>

            {/* Country */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Select Your Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Public />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            {/* Role Selection */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                select
                label="Select Your Role"
                value={role}
                onChange={handleRoleChange}
              >
                <MenuItem value="donor">Donor</MenuItem>
                <MenuItem value="NGO">NGO</MenuItem>
                <MenuItem value="grocery supplier">Grocery Supplier</MenuItem>
              </TextField>
            </Grid>

            {/* Password */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type={showPassword ? 'text' : 'password'}
                label="Enter Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button onClick={togglePasswordVisibility}>
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </Button>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            {/* Confirm Password (optional, if required) */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type={showPassword ? 'text' : 'password'}
                label="Confirm Password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button onClick={togglePasswordVisibility}>
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </Button>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            {/* Sign Up Button */}
            <Grid item xs={12}>
              <Button fullWidth variant="contained" color="primary" type="submit">
                Sign Up
              </Button>
            </Grid>

            {/* Social Logins */}
            <Grid item xs={12}>
              <div style={{ textAlign: 'center', margin: '20px 0' }}>OR</div>
            </Grid>

            <Grid item xs={12}>
              <Button fullWidth variant="outlined" startIcon={<GoogleIcon />}>
                Continue with Google
              </Button>
            </Grid>

            <Grid item xs={12}>
              <Button fullWidth variant="outlined" startIcon={<AppleIcon />}>
                Continue with Apple
              </Button>
            </Grid>

            {/* Already have an account */}
            <Grid item xs={12} style={{ textAlign: 'center' }}>
              Already have an account? <a href="/login">Login</a>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
