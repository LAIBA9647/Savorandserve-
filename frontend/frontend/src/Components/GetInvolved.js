import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Card, CardContent, Typography, Button, Container } from '@mui/material';
import { FaHandHoldingUsd, FaStore, FaHandsHelping } from 'react-icons/fa'; // Icons for Donor, Shopkeeper, and NGO
import involvedImage from '../assets/images/getinvolved.png'; // Image import for the "Get Involved" banner


const GetInvolved = () => {
  return (
    <div>
      {/* Main Content */}
      <main className="get-involved">
        {/* Container to limit max width */}
        <Container maxWidth="lg">
          <section>
            {/* Grid layout to place heading and image side by side */}
            <Grid container spacing={6} alignItems="center">
              {/* Left Side: Heading and Tagline */}
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h2"
                  color="error"
                  gutterBottom
                  style={{ fontWeight: 'bold', marginBottom: '20px', textAlign: 'left' }}
                >
                  GET INVOLVED
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="textSecondary"
                  gutterBottom
                  style={{ fontSize: '20px', marginBottom: '30px', textAlign: 'left' }}
                >
                  "Join Us in Making a Difference"
                </Typography>
              </Grid>

              {/* Right Side: Image */}
              <Grid item xs={12} md={6}>
                <div className="image-container">
                  <img
                    src={involvedImage}
                    alt="Get Involved Sign"
                    style={{ maxWidth: '100%', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
                  />
                </div>
              </Grid>
            </Grid>

            {/* Cards Section */}
            <Grid container spacing={4} justifyContent="center" style={{ marginTop: '40px' }}>
              {/* Donors Card */}
              <Grid item xs={12} sm={6} md={3}>
                <Card
                  className="card"
                  style={{
                    padding: '20px',
                    borderRadius: '15px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    transition: '0.3s',
                  }}
                >
                  <CardContent>
                    <FaHandHoldingUsd size={40} color="#e74c3c" style={{ marginBottom: '15px' }} /> {/* Icon */}
                    <Typography variant="h5" component="div" align="center" style={{ fontWeight: 'bold' }}>
                      DONORS
                    </Typography>
                    <Button
                      variant="contained"
                      color="error"
                      fullWidth
                      component={Link}
                      to="/donation-form"
                      style={{
                        marginTop: '20px',
                        backgroundColor: '#e74c3c',
                        fontWeight: 'bold',
                        borderRadius: '10px',
                      }}
                    >
                      Sign Up
                    </Button>
                  </CardContent>
                </Card>
              </Grid>

              {/* Shopkeepers Card */}
              <Grid item xs={12} sm={6} md={3}>
                <Card
                  className="card"
                  style={{
                    padding: '20px',
                    borderRadius: '15px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    transition: '0.3s',
                  }}
                >
                  <CardContent>
                    <FaStore size={40} color="#e74c3c" style={{ marginBottom: '15px' }} /> {/* Icon */}
                    <Typography variant="h5" component="div" align="center" style={{ fontWeight: 'bold' }}>
                      SHOPKEEPERS
                    </Typography>
                    <Button
                      variant="contained"
                      color="error"
                      fullWidth
                      component={Link}
                      to="/shopkeepers-signup"
                      style={{
                        marginTop: '20px',
                        backgroundColor: '#e74c3c',
                        fontWeight: 'bold',
                        borderRadius: '10px',
                      }}
                    >
                      Sign Up
                    </Button>
                  </CardContent>
                </Card>
              </Grid>

              {/* NGO Card */}
              <Grid item xs={12} sm={6} md={3}>
                <Card
                  className="card"
                  style={{
                    padding: '20px',
                    borderRadius: '15px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    transition: '0.3s',
                  }}
                >
                  <CardContent>
                    <FaHandsHelping size={40} color="#e74c3c" style={{ marginBottom: '15px' }} /> {/* Icon */}
                    <Typography variant="h5" component="div" align="center" style={{ fontWeight: 'bold' }}>
                      NGO
                    </Typography>
                    <Button
                      variant="contained"
                      color="error"
                      fullWidth
                      component={Link}
                      to="/ngo-signup"
                      style={{
                        marginTop: '20px',
                        backgroundColor: '#e74c3c',
                        fontWeight: 'bold',
                        borderRadius: '10px',
                      }}
                    >
                      Sign Up
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </section>
        </Container>
      </main>
    </div>
  );
};

export default GetInvolved;
