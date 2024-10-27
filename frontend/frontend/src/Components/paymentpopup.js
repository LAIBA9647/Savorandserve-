import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import './payment.css'; 

const PaymentPopup = ({ isOpen, onClose }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [amount, setAmount] = useState(5000); // Amount in cents ($50)
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handlePaymentSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);
    const { token, error } = await stripe.createToken(cardElement);

    if (error) {
      setErrorMessage(error.message);
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/payment', {
        amount, // Amount in cents
        token: token.id, // Stripe token ID
      });

      if (response.data.success) {
        alert('Payment successful!');
        onClose(); // Close the popup upon success
      } else {
        setErrorMessage('Payment failed. Please try again.');
      }
    } catch (error) {
      setErrorMessage('An error occurred during payment.');
    }

    setIsLoading(false);
  };

  return isOpen ? (
    <div className="payment-popup">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h2>Complete Payment</h2>
        <form onSubmit={handlePaymentSubmit}>
          <label htmlFor="amount">Enter Amount (in cents):</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
          <CardElement />
          {errorMessage && <p className="error">{errorMessage}</p>}
          <button type="submit" disabled={!stripe || isLoading}>
            {isLoading ? 'Processing...' : `Pay $${(amount / 100).toFixed(2)}`}
          </button>
        </form>
      </div>
    </div>
  ) : null;
};

export default PaymentPopup;
