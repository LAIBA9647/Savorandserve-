import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SecDonor from '../assets/images/SecDonor.png';
import SecNGO from '../assets/images/SecNGO.png';
import SecGrocery from '../assets/images/SecGrocery.png';
import './app.css'; 

const Section = () => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const fetchSections = async () => {
      try {
        const response = await axios.get('/api/homepage');
        setSections(response.data.sections);
      } catch (error) {
        console.error('Error fetching section data', error);
      }
    };

    fetchSections();
  }, []);

  return (
    <section className="section">
      <br />
      <h2>Empowering Generosity, Transforming Lives!</h2>
      <p>
        "We bring together the generosity of donors, the dedication of NGOs, and the essential contributions of grocery suppliers ..."
      </p>

      <div className="icons">
        {sections.map((section, index) => (
          <div className="icon" key={index}>
            <img
              src={
                section.title === 'Donor'
                  ? SecDonor
                  : section.title === 'NGOs'
                  ? SecNGO
                  : SecGrocery
              }
              alt={section.title}
            />
            {section.title}
          </div>
        ))}
      </div>
    </section>
  );
};

const App = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/roles/donor'); // Adjust to the actual path of the donors activity
  };

  const handleClick1 = () => {
    navigate('/roles/grocery-supplier'); // Adjust to the actual path of the donors activity
  };
  const handleClick2 = () => {
    navigate('/getinvolved'); // Adjust to the actual path of the donors activity
  };
  const handleClick3 = () => {
    navigate('/roles/ngos'); // Adjust to the actual path of the donors activity
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Grocery Supplier</h2>
        <p>Connect with suppliers to provide fresh produce.</p>
        <ul className="resources">
          <li><a href="#">📄 Read Briefing Paper</a></li>
          <li><a href="#">🎥 Explainer Video</a></li>
          <li><a href="#">🎬 Demo Video</a></li>
        </ul>
        <button className="read-more" onClick={handleClick1}>Read More</button>
      </div>

      <div className="card">
        <h2>Get Involved</h2>
        <p>Supporting the impactee through your donations and resources.</p>
        <ul className="resources">
          <li><a href="#">📄 Read Briefing Paper</a></li>
          <li><a href="#">🎥 Explainer Video</a></li>
          <li><a href="#">🎬 Demo Video</a></li>
        </ul>
        <button className="read-more" onClick={handleClick2}>Read More</button>
      </div>

      <div className="card">
        <h2>Impactor (Donor)</h2>
        <p>The one who wants to create an impact (the donor).</p>
        <ul className="resources">
          <li><a href="#">📄 Read Briefing Paper</a></li>
          <li><a href="#">🎥 Explainer Video</a></li>
          <li><a href="#">🎬 Demo Video</a></li>
        </ul>
        <button className="read-more" onClick={handleClick}>Read More</button>
      </div>

      <div className="card">
        <h2>NGO</h2>
        <p>Not for Profits, Universities and others who can directly receive donations.</p>
        <ul className="resources">
          <li><a href="#">📄 Read Briefing Paper</a></li>
          <li><a href="#">🎥 Explainer Video</a></li>
          <li><a href="#">🎬 Demo Video</a></li>
        </ul>
        <button className="read-more" onClick={handleClick3}>Read More</button>
      </div>
    </div>
  );
};

const AnotherComponent = () => {
  return (
    <div>
      <Section />
      <App />
    </div>
  );
};

export default AnotherComponent;
