const mongoose = require('mongoose');

// Here I defined the new schema for the order collection
const orderSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  postalCode: { type: String, required: true },
  items: [{
    name: String,
    price: Number,
    quantity: Number,
    toppings: String
  }]
});

// Here I created the order from the schema to interact with the orders collection
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;