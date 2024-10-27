import React from 'react'; 
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Hero from './Components/Hero';
import Section from './Components/Section';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Login from './Components/Login';
import Signup from './Components/SignUp';
import DonorDashboard from './Components/DonorDashboard';
import ContactUs from './Components/Contactus';
import GetInvolved from './Components/GetInvolved'; 
import NGO from './Components/NGO'; // Import NGO component
import GrocerySupplier from './Components/GrocerySupplier'; // Import GrocerySupplier component
import Donor from './Components/Donor'; // Import Donor component
import Dashboard from './Components/userboard'; 
import NGOBoard from './Components/ngoboard'; // Ensure the path is correct
import './App.css';
import { loadStripe } from '@stripe/stripe-js'; 
import { Elements } from '@stripe/react-stripe-js';


const stripePromise = loadStripe('pk_test_51Q7gIj2NqV1ja1EYOMOgjSsn2YdaqcXizho1Yg343bXWPw4u6ywbxzWnUTwDQ5Ct0aRDBcZhersI82g5mrFuzTmZ00bhzcJv5F'); // Use your actual public key here


function App() {
  const location = useLocation();
  
  // Define the routes that should not display Header and Footer
  const noHeaderFooterRoutes = ['/SignUp', '/login', '/grocery', '/ngoboard', '/userboard'];

  // Check if the current location is in the noHeaderFooterRoutes list
  const shouldShowHeaderFooter = !noHeaderFooterRoutes.includes(location.pathname);

  return (
    <div className="App">
      {/* Only show Header if the current path is not in noHeaderFooterRoutes */}
      {shouldShowHeaderFooter && <Header />}
      


      <Routes>
        <Route path="/" element={<><Hero /><Section /></>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/donate" element={<DonorDashboard />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/getinvolved" element={<GetInvolved />} />
        <Route path="/roles/ngos" element={<NGO />} />
        <Route path="/roles/grocery-supplier" element={<GrocerySupplier />} />
        <Route path="/roles/donor" element={<Donor />} />
        <Route path="/grocery" element={<DonorDashboard />} />
        <Route path="/userboard" element={<Dashboard />} />
                {/* Wrap payment-related components in Elements */}
                <Route 
          path="/donate" 
          element={
            <Elements stripe={stripePromise}>
              <NGOBoard />
            </Elements>
          } 
        />
        <Route path="/ngoboard" element={<NGOBoard />} />

      </Routes>
      
      {/* Only show Footer if the current path is not in noHeaderFooterRoutes */}
      {shouldShowHeaderFooter && <Footer />}
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
