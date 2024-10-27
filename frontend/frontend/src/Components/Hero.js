import React, { useEffect, useState } from 'react';
import axios from 'axios';
import heroBackground from '../assets/images/heroBackground.png';

const Hero = () => {
  const [heroText, setHeroText] = useState('');

  useEffect(() => {
    const fetchHeroContent = async () => {
      try {
        const response = await axios.get('/api/homepage'); // Assuming the hero content is part of the homepage data
        setHeroText(response.data.message); // Set the hero message from backend
      } catch (error) {
        console.error('Error fetching hero content', error);
      }
    };

    fetchHeroContent();
  }, []);

  return (
    <section className="hero" style={{ backgroundImage: `url(${heroBackground})` }}>
      <div className="overlay"></div>
      <div className="hero-content">
        <h1>{heroText}</h1>
        <p>Join us in our mission to provide food for those in need.</p>
        <a href="/getinvolved"><button>Get Involved</button></a>
        <button>Donate Now</button>
        <p>Connecting Donors, Service Providers, and Beneficiaries</p>
      </div>
    </section>
  );
};

export default Hero;
