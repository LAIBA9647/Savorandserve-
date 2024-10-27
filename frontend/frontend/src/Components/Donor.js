import React from 'react';
import './ImpactMeter.css';
import howItWorksImage from '../assets/images/howItWorksImage.png'; 
import enrollment from '../assets/images/enrollment.png';
import teamImage from '../assets/images/team.jpg';



const ImpactMeter = () => {
  return (
    <div className="landing-page">
     <section 
  className="hero" 
  style={{ 
    backgroundImage: `url(${teamImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '400px'
  }}
>
  <div className="hero-text">
    <h1>Create a Positive Footprint - Become a Savor Serve Member Today!</h1>
  </div>
</section>


      <section className="empower-section">
        <h2 className="custom">Empower your Giving with Savor Serve!</h2>
        <div className="video-text-container">
  <div className="video-section">
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/sample-video"
      title="YouTube video"
      frameBorder="0"
      allowFullScreen
    ></iframe>
  </div>
  <div className="text">
    <p>
      Transform lives with Savor Serve! Say goodbye to cash donations and empower beneficiaries in food, education, and health. Our user-friendly platform provides unique tracking IDs to redeem donated services. 
<br/>
<br/>
Choose from registered NGOs, supporting causes close to your heart. 
<br/>
<br/>
 Experience transparency, reliability, and equity. Sign up now to create your legacy with Savor Serve!
    </p>
  </div>
</div>

      </section>

      <section className="impact-section">
        <h3 className="custom">Are You Looking to Make a Positive Impact in the World?</h3>
        <div className="textt">
        <p>
        Every time you donate essential services, you have the power to help people break free from generational poverty and improve their lives. Your contributions, no matter how small, can have a big impact on someone's future. Join the movement today and become an Impactor!
        </p>
        <br/>
        <br/>
        <br/>
        </div>
        <button className="join-btn">Impactor Briefing Paper</button>
      </section>

      <section className="model-section">
        <h2  className="custom">Our Model</h2>
        <div className="model-items">
          <div className="model-item">
            <div className="icon">❤️</div>
            <h3 className="custom-heading">Give Directly to NGOs</h3>
            <p>Donate and contribute to causes and packages added by your favorite NGOs</p>
          </div>
          <div className="model-item">
            <div className="icon">👫</div>
            <h3 className="custom-heading">Make Impact Buddies</h3>
            <p>Just like friends on Facebook, invite your friends to become Impact Buddies and create impact together</p>
          </div>
          <div className="model-item">
            <div className="icon">🐾</div>
            <h3 className="custom-heading">Earn Impact Credits and Track your Impact</h3>
            <p>Earn impact credits each time you make a donation and monitor your total impact on the go!</p>
          </div>
        </div>
      </section>

      <section className="how-it-works">
      <img src={howItWorksImage} alt="How it Works" className="how-it-works-image" />
  <div className="steps-container">
    <div className="model-item">
      <div className="icon">👥</div>
      <h3 className="custom-heading">Add and Choose Impactee (deserving person)</h3>
      <p>Add beneficiaries by entering their phone and CNIC numbers OR Choose verified Impactees from NGO-provided lists.</p>
    </div>
    <div className="model-item">
      <div className="icon">🎁</div>
      <h3 className="custom-heading">Gift Essentail Services</h3>
      <br />
      <p>Donate essential services, such as food, education, or health to your Impactees and make a real difference in someone's life</p>
    </div>
    <div className="model-item">
      <div className="icon">💸</div>
      <h3 className="custom-heading">Impactees Redeem your Gift at Registered Providers</h3>
      <p>Impactees (deserving persons) can redeem your gift at registered service provides, such as grocery stores or educational institutes, with a Unique tracking ID</p>
    </div>
  </div>
</section>

<h2 className="custom">Watch Videos</h2>
<div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ flex: 1}}>
      <h3 className="v-head">Explainer Video</h3>
        <iframe
          width="80%"
          height="315"
          src="https://www.youtube.com/embed/sample-video-1"
          title="Video 1"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <div style={{ flex: 1}}>
      <h3 className="v-head">Demo Video</h3>
        <iframe
          width="80%"
          height="315"
          src="https://www.youtube.com/embed/sample-video-2"
          title="Video 2"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
    <br/>
    <br/>
    <br/>
    <button className="join-btn">View Demo Playlist</button>
    <br/>
    <br/>
    <br/>
    <h2 className="f-head">Impactor Features</h2>

<h2 className="s-head">Create Your Profile Seamlessly</h2>
<div className="picture-text-container">
      <div className="picture-section">
      <img src={enrollment} alt="Description" className="picture" />
      </div>
      <div className="text-section">
        <p>
          Our user-friendly sign-up process is simple, enabling you to effortlessly create your profile and become an 'impactor' in just few clicks.
        </p>
        <button className="join-btn">SignUp Demo</button>
      </div>
    </div>


    <h2 className="s-head">Add or Choose an Impactee</h2>
    <div className="picture-text-container">
      <div className="text-section-new">
        <p>
        Register an Impactee (beneficiary) of your choice by providing their phone number and CNIC number. You can also select an Impactee from a verified list created by registered NGOs on our platform. 
        </p>
        <button className="join-btn">Add Impectees Demo</button>
      </div>
      <div className="picture-section">
        <img src={enrollment} alt="Description" className="picture" />
      </div>
    </div>

    <h2 className="s-head">Gift Grocery To Impactees</h2>
<div className="picture-text-container">
      <div className="picture-section">
      <img src={enrollment} alt="Description" className="picture" />
      </div>
      <div className="text-section">
        <p>
Support families in need with grocery vouchers through MiM App. Choose an impactee, gift a voucher, and they'll receive an SMS with a unique tracking ID. Redeemable at registered grocery stores. Earn Impact credits when vouchers are redeemed
        </p>
        <button className="join-btn">Gift Grocery Demo</button>
      </div>
    </div>

    <h2 className="s-head">Gift Education to Impactees</h2>
<div className="picture-text-container">
  <div className="text-section-new">
    <p>
      Empower students through sponsored school admissions or fees. Offer vocational training to Impactees, improving career opportunities. Choose from registered Impactees or add new ones. Impactees receive tracking IDs for educational institute redemption.
    </p>
    <div className="button-group">
      <button className="join-btn">School Education Demo</button>
      <button className="join-btn">Vocational Training Demo</button>
    </div>
  </div>
  <div className="picture-section">
    <img src={enrollment} alt="Description" className="picture" />
  </div>
</div>


    
    <h2 className="s-head">Support and Contribute to Trusted NGOs</h2>
<div className="picture-text-container">
      <div className="picture-section">
      <img src={enrollment} alt="Description" className="picture" />
      </div>
      <div className="text-section">
        <p>

        My Impact Meter allows you to easily support trusted NGOs and their causes through flexible contribution packages. 
        </p>
        <div className="button-group">
      <button className="join-btn">NGO Package Demo</button>
      <button className="join-btn">NGO Cause Demo</button>
    </div>
      </div>
    </div>

    <h2 className="s-head">Make Impact Buddies</h2>
    <div className="picture-text-container">
      <div className="text-section-new">
        <p>
        Through My Impact meter you can Invite, connect, and collaborate with friends over shared interests and causes. You can do this by sharing Impactees with your Impact buddies as to work together towards shaping a better world and multiplying impact
        </p>
        <button className="join-btn">Add Impact Buddy Demo</button>
      </div>
      <div className="picture-section">
        <img src={enrollment} alt="Description" className="picture" />
      </div>
    </div>

    <h2 className="s-head">Track Impact Through Our Personalized Dashboard</h2>
<div className="picture-text-container">
      <div className="picture-section">
      <img src={enrollment} alt="Description" className="picture" />
      </div>
      <div className="text-section">
        <p>
        On your home screen you can view your Personalized impact dashboard to track your donations and set impact goals for yourself
        </p>
        <button className="join-btn">Impact Footprint Demo</button>
      </div>
    </div>

    <h2 className="s-head">Earn And Share Impact Credits and Badges</h2>
    <div className="picture-text-container">
      <div className="text-section-new">
        <p>
        Earn and share impact credits and badges through my impact meter to inspire others and ignite a movement for positive change
        </p>
        <button className="join-btn">Impact Badge Demo</button>
      </div>
      <div className="picture-section">
        <img src={enrollment} alt="Description" className="picture" />
      </div>
    </div>

    </div>
  );
};

const Donor = () => {
  return (
    <div>
      <h1 className="custom">Donor Page</h1>
      <p>Information about Donors goes here. Find out how you can make a difference through donations.</p>
    </div>
  );
};

const AnotherComponent = () => {
  return (
    <div>
      <Donor />
      <ImpactMeter />
    </div>
  );
};

export default AnotherComponent;
