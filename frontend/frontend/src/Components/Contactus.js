import React, { useState } from 'react';  // Import useState for form state management
import { signUp } from '../services/authService';
import { Box, Typography, Grid, IconButton, TextField, Button } from '@mui/material';
import { MdOutlineSupportAgent, MdMailOutline, MdLocationOn, MdPhone } from 'react-icons/md';
import contactBg from '../assets/images/NGOheroimage2.png'; // Import the image

// Main Contact Us Component
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [responseMessage, setResponseMessage] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await signUp(formData);  // Call the signup API function
      setResponseMessage('Message sent successfully!');  // Set success message
    } catch (error) {
      setResponseMessage('Failed to send message. Please try again.');  // Set error message
    }
  };

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      {/* Contact Header Section */}
      <Box 
        sx={{
          backgroundImage: `url(${contactBg})`,  // Use the imported image here
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '400px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Typography variant="h3" color="white" fontWeight="bold">
          Get In Touch
        </Typography>
      </Box>

      {/* Contact Form Section */}
      <Box sx={{ padding: '50px 20px' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Send Us a Message
        </Typography>
        <Typography variant="body1" align="center" color="textSecondary">
          We value your feedback and are here to answer any questions. Use the form below, and our team member will get back to you in 24 hours.
        </Typography>

        {/* Form for sending a message */}
        <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: '600px', margin: '0 auto', marginTop: '30px' }}>
          <TextField 
            label="Your Name" 
            variant="outlined" 
            name="name"
            value={formData.name} 
            onChange={handleChange} 
            fullWidth 
            required 
            sx={{ marginBottom: '20px' }} 
          />
          <TextField 
            label="Your Email" 
            variant="outlined" 
            name="email"
            type="email"
            value={formData.email} 
            onChange={handleChange} 
            fullWidth 
            required 
            sx={{ marginBottom: '20px' }} 
          />
          <TextField 
            label="Your Message" 
            variant="outlined" 
            name="message"
            value={formData.message} 
            onChange={handleChange} 
            fullWidth 
            required 
            multiline 
            rows={4} 
            sx={{ marginBottom: '20px' }} 
          />
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Send Message
          </Button>
        </Box>

        {/* Response Message */}
        {responseMessage && (
          <Typography 
            variant="body1" 
            align="center" 
            color={responseMessage.includes('successfully') ? 'green' : 'red'} 
            sx={{ marginTop: '20px' }}
          >
            {responseMessage}
          </Typography>
        )}

        {/* Contact Details Grid */}
        <Grid container spacing={4} justifyContent="center" sx={{ marginTop: '40px' }}>
          <Grid item xs={12} md={3}>
            <Box sx={{ textAlign: 'center' }}>
              <IconButton size="large" color="primary">
                <MdOutlineSupportAgent size="40" />
              </IconButton>
              <Typography variant="h6">Online Support</Typography>
              <Typography variant="body2">support@savorandserve.com</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={3}>
            <Box sx={{ textAlign: 'center' }}>
              <IconButton size="large" color="primary">
                <MdMailOutline size="40" />
              </IconButton>
              <Typography variant="h6">Direct Mail</Typography>
              <Typography variant="body2">info@mysavorandserve.com</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={3}>
            <Box sx={{ textAlign: 'center' }}>
              <IconButton size="large" color="primary">
                <MdLocationOn size="40" />
              </IconButton>
              <Typography variant="h6">Our Office</Typography>
              <Typography variant="body2">
                AIR University Sector E-9 Islamabad, Pakistan 
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={3}>
            <Box sx={{ textAlign: 'center' }}>
              <IconButton size="large" color="primary">
                <MdPhone size="40" />
              </IconButton>
              <Typography variant="h6">Contact #</Typography>
              <Typography variant="body2">
                +92322 6460286 <br /> +1 (312) 885-2730
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default ContactUs;
