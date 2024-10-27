import React from 'react';
import { Grid, Typography, IconButton, Box } from '@mui/material';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import appleStoreImg from '../assets/images/Apple-Store-1.png'; // Import the Apple Store image
import googlePlayImg from '../assets/images/Google-Play-1-1.png'; // Import the Google Play image
import qrIosImg from '../assets/images/Impactor-QR-App-Store-.png'; // Import the QR iOS image
import qrAndroidImg from '../assets/images/Impactor-QR-Google-Play-.png'; // Import the QR Android image


const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#d81b45', // Set background color to #d81b60
        color: 'black', // All text should be black
        padding: '40px 20px',
      }}
    >
      <Grid container spacing={5} justifyContent="center">
        {/* Contact Us Section */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom sx={{ color: 'black' }}>
            Contact Us
          </Typography>
          <Typography variant="body2" sx={{ color: 'black' }}>
            📞+92 177931979
          </Typography>
          <Typography variant="body2" sx={{ color: 'black' }}>
            ✉️ savorserve@gmail.com
          </Typography>
          <Typography variant="body2" sx={{ color: 'black' }}>
          Air University Service Road E-9 / E-8, Islamabad, Pakistan, E-9, Islamabad
          </Typography>
          <Box mt={2}>
            <IconButton href="#" aria-label="Facebook" sx={{ color: 'black', '&:hover': { color: 'white' } }}>
              <FaFacebookF />
            </IconButton>
            <IconButton href="#" aria-label="Instagram" sx={{ color: 'black', '&:hover': { color: 'white' } }}>
              <FaInstagram />
            </IconButton>
            <IconButton href="#" aria-label="YouTube" sx={{ color: 'black', '&:hover': { color: 'white' } }}>
              <FaYoutube />
            </IconButton>
            <IconButton href="#" aria-label="LinkedIn" sx={{ color: 'black', '&:hover': { color: 'white' } }}>
              <FaLinkedinIn />
            </IconButton>
            <IconButton href="#" aria-label="Twitter" sx={{ color: 'black', '&:hover': { color: 'white' } }}>
              <FaTwitter />
            </IconButton>
          </Box>
        </Grid>

        {/* Company Section */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom sx={{ color: 'black' }}>
            Company
          </Typography>
          <Typography variant="body2">
            <a href="#" style={{ color: 'black', textDecoration: 'none' }}>EULA</a>
          </Typography>
          <Typography variant="body2">
            <a href="#" style={{ color: 'black', textDecoration: 'none' }}>Our Team</a>
          </Typography>
          <Typography variant="body2">
            <a href="#" style={{ color: 'black', textDecoration: 'none' }}>Privacy Policy</a>
          </Typography>
          <Typography variant="body2">
            <a href="#" style={{ color: 'black', textDecoration: 'none' }}>Terms & Conditions</a>
          </Typography>
        </Grid>

        {/* Download Our App Section */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom sx={{ color: 'black' }}>
            Download Our App
          </Typography>
          <Box display="flex" justifyContent="flex-start" mb={2}>
            <Box mr={2}>
              <a href="#">
                <img src={appleStoreImg} alt="Apple Store" style={{ height: 40 }} />
              </a>
            </Box>
            <Box>
              <a href="#">
                <img src={googlePlayImg} alt="Google Play" style={{ height: 40 }} />
              </a>
            </Box>
          </Box>
          <Box display="flex">
            <Box mr={2}>
              <img src={qrIosImg} alt="QR for iOS" style={{ height: 100 }} />
            </Box>
            <Box>
              <img src={qrAndroidImg} alt="QR for Android" style={{ height: 100 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
