import React, { useState } from 'react';
import NavbarAdmin from '../../components/NavbarAdmin/NavbarAdmin';
import Footer from '../../components/Footer/Footer';
import './UpcomingOffers.css';

const UpcomingOffers = () => {

  // Here I added useState hook to manage the state of the offers.
  const [offers, setOffers] = useState([
    {
      id: 1,
      title: 'Buy One Get One Free',
      description: 'Enjoy our special offer - buy one sub and get another one free!',
      isPublished: false,
      promoCode: 'BOGO',
      discount: '50%' 
    },
    {
      id: 2,
      title: '20% Off on All Premium Subs',
      description: 'Get 20% off on all premium subs for a limited time!',
      isPublished: false,
      promoCode: 'PREM20',
      discount: '20%'
    },
    {
      id: 3,
      title: 'Free Chips with Every Order',
      description: 'Get a free pack of chips with every order above $10.',
      isPublished: false,
      promoCode: 'FREECHIPS',
      discount: '5%' 
    },
  ]);

    // Here I initialized state for a new offer with default values
    const [newOffer, setNewOffer] = useState({
      title: '',
      description: '',
      isPublished: false,
    });

  // Here I initialized the state to show visibility of the form
    const [showForm, setShowForm] = useState(false);

  // Here I created the function to handle publish button
  const handlePublish = (id) => {
    setOffers(
      offers.map((offer) => (offer.id === id ? { ...offer, isPublished: !offer.isPublished } : offer))
    );
  };

  //Here I initialized the functon to hande change in the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewOffer({ ...newOffer, [name]: value });
  };

  return (
    <>
    {/* Here I created simple design for this page */}
      <NavbarAdmin />
      <div className="admin-container">
        <h2>Upcoming Offers</h2>
        <div className="offers-list">
          {offers.map((offer) => (
            <div key={offer.id} className="offer-card">
              <h3>{offer.title}</h3>
              <p>{offer.description}</p>
              <p>Promo Code: {offer.promoCode}</p>
              <p>Status: {offer.isPublished ? 'Published' : 'Unpublished'}</p>
              <button
                className={offer.isPublished ? 'unpublish-btn' : 'publish-btn'}
                onClick={() => handlePublish(offer.id)}
              >
                {offer.isPublished ? 'Unpublish' : 'Publish'}
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UpcomingOffers;
