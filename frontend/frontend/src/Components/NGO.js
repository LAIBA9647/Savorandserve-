import React from 'react';
import { Button, Box, Typography, Container, Card, CardContent } from '@mui/material';
import { FaBuilding, FaCheck, FaHandsHelping } from 'react-icons/fa';

// Importing local images
import heroImage from '../assets/images/NGOheroimage2.png';   // Replace with your actual file name
import floodImage from '../assets/images/NGOheroimage3.png'; // Replace with your actual file name

const NGO = () => {
  return (
    <Container>
      {/* Hero Section */}
      <Box sx={{ position: 'relative', textAlign: 'center', mb: 6 }}>
        <img
          src={heroImage}  // Using local image
          alt="Hero"
          style={{ width: '100%', height: '50vh', objectFit: 'cover', opacity: 0.8 }}
        />
        <Box sx={{ position: 'absolute', top: '20%', left: '50%', transform: 'translate(-50%, -20%)', color: 'white' }}>
          <Typography variant="h3" fontWeight="bold">
            Boost Your NGO’s Impact and Access New Funding Opportunities With Us!
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Join our platform for low-cost, convenient, and easy funding.
          </Typography>
          <Button variant="contained" color="primary" sx={{ mt: 4 }}>
            Sign Up Now
          </Button>
        </Box>
      </Box>

      {/* Welcome Section */}
      <Box sx={{ textAlign: 'center', py: 4 }}>
        <Typography variant="h4">Welcome to SAVOR AND SERVE</Typography>
        <Typography variant="body1" sx={{ mt: 2, maxWidth: '80%', mx: 'auto' }}>
          If you’re an NGO, join our platform to receive low-cost, convenient, and easy funding.
          Consider us a completely new funding stream in addition to your current ones.
          SAVOR AND SERVE is an online centralized platform that enables you to make a meaningful IMPACT.
        </Typography>
      </Box>

      {/* Platform for NGOs Section */}
      <Card sx={{ my: 4, p: 4, backgroundColor: '#e0f4ff' }}>
        <CardContent>
          <Typography variant="h4">Platform for NGOs</Typography>
          <Box sx={{ mt: 2 }}>
            <FaBuilding size={32} style={{ marginRight: '1rem' }} />
            <ul>
              <li>There are many NGOs in Pakistan doing great social work. Many people want to donate to NGOs instead of supporting families directly.</li>
              <li>SAVOR AND SERVE provides a robust and easy-to-use facility for Donors to donate to their preferred NGO.</li>
              <li>NGOs will be able to see all the donations, who is donating, the number of donations, donated amount with dates, the progress of causes, and more.</li>
              <li>NGOs can add verified Beneficiaries on the platform by entering their name, phone number, and CNIC.</li>
              <li>Donors can choose any impactee they want to help from the list of Beneficiaries added by the NGO.</li>
            </ul>
          </Box>
        </CardContent>
      </Card>

      {/* Register Your NGO Section */}
      <Box sx={{ textAlign: 'center', py: 4, background: 'linear-gradient(to right, #ffe29f, #ffa99f)' }}>
        <Typography variant="h4">Register Your NGO Now</Typography>
        <FaCheck size={32} style={{ marginTop: '1rem' }} />
        <Typography variant="body1" sx={{ mt: 2 }}>
          Take the Next Step - Submit Your Application for Approval.
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 3 }}>
          Register Now
        </Button>
      </Box>

      {/* Community Section */}
      <Card sx={{ my: 4, p: 4, backgroundColor: '#f7f3f2' }}>
        <CardContent>
          <Typography variant="h4" sx={{ textAlign: 'center' }}>Join Our Community of SAVOR AND SERVE</Typography>
          <img
            src={floodImage}  // Using local image
            alt="Flood"
            style={{ width: '100%', height: '40vh', objectFit: 'cover', marginTop: '1rem' }}
          />
          <Typography variant="body1" sx={{ mt: 2 }}>
            Pakistan's monsoon floods have affected 33 million people, causing over 1100 deaths and leaving many injured and homeless.
            We need your help to make a meaningful impact.
          </Typography>
          <Button variant="contained" color="primary" sx={{ mt: 3, display: 'block', margin: '0 auto' }}>
            Sign Up Now
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};

export default NGO;
