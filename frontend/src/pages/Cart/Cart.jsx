import React, { useState } from 'react';
import './Cart.css';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

const Cart = () => {
  // Here I added the sample data as of now
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Item 1', price: 10, quantity: 1 },
    { id: 2, name: 'Item 2', price: 20, quantity: 2 },
    { id: 3, name: 'Item 3', price: 30, quantity: 1 }
  ]);

  // Here I added the promocode and discount 
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const offers = [
    { promoCode: 'BOGO', discount: 50 },
    { promoCode: 'PREM20', discount: 20 },
    { promoCode: 'FREECHIPS', discount: 5 }
  ];

  // Here I added the function to handle the quantity change for a cart item
  const handleQuantityChange = (id, quantity) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === id) {
        return { ...item, quantity: quantity < 1 ? 1 : quantity }; // Here I ensure that the quantity is not less than 1
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  // Here I added the function for removing the item from the cart
  const handleRemoveItem = (id) => {
    const updatedCartItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCartItems);
  };

  // Here I added the function to count the total amount of items in the cart
  const calculateTotal = () => {
    const total = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    return total - (total * discount / 100);
  };

  // Here I added the function to handle the promocode
  const handleApplyPromoCode = () => {
    const offer = offers.find(offer => offer.promoCode === promoCode);
    if (offer) {
      setDiscount(offer.discount);
    } else {
      alert('Invalid promo code');
      setDiscount(0);
    }
  };


  // Here I use navigate hook to navigate to the checkout page
  const navigate = useNavigate();
  const handleCheckout = () => {
    navigate('/Checkout');
  };

  return (
  <>
  <Navbar />
    <div className="cart-page">
      <h2>Shopping Cart</h2>
      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <div className="item-details">
              <span>{item.name}</span>
              <span>${item.price}</span>
            </div>
            <div className="item-actions">
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
              />
              <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="promo-code">
          <input
            type="text"
            placeholder="Enter promo code"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
          />
          <button onClick={handleApplyPromoCode}>Apply</button>
        </div>
      <div className="cart-total">
        <h3>Total: ${calculateTotal()}</h3>
        <button className="checkout-button" onClick={handleCheckout}>Proceed to Checkout</button>
      </div>
      <Footer />
    </div>
    </>
  );
};

export default Cart;