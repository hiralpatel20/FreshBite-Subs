import React, { useState } from 'react';
import './Checkout.css';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

const Checkout = ({ cartItems }) => {
  // Here I create the state to manage form data
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    city: '',
    postalCode: '',
    cardNumber: '',
    cardholderName: '',
    cvv: '',
    expiryDate: ''
  });

  // Here I created the function to handle the changes in form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Below code is to update form data based on the input name and value
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Here I created the function to handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  
  return (
   <div> 
    <Navbar />
    <div className="checkout-page">
      <h2>Checkout</h2>
      <div className="order-summary">
        <h3>Order Summary</h3>
        <div className="total">
          <span>Total:</span>
        </div>
      </div>
      <div className="shipping-form">
        <h3>Shipping Information</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            required
          />
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            required
          />
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City"
            required
          />
          <input
            type="text"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            placeholder="Postal Code"
            required
          />
          <h3>Payment Information</h3>
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            placeholder="Card Number"
            required
          />
          <input
            type="text"
            name="cardholderName"
            value={formData.cardholderName}
            onChange={handleChange}
            placeholder="Cardholder Name"
            required
          />
          <input
            type="text"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            placeholder="CVV"
            required
          />
          <input
            type="text"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleChange}
            placeholder="Expiry Date (MM/YYYY)"
            required
          />
          <button type="submit">Proceed to Payment</button>
        </form>
      </div>
    </div>
    <Footer />
  </div>
  );
};

export default Checkout;