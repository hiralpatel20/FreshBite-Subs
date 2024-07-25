import React, { useState, useEffect } from 'react';
import NavbarAdmin from '../../components/NavbarAdmin/NavbarAdmin';
import Footer from '../../components/Footer/Footer';
import './OrderManagement.css';
import { useQuery, gql } from '@apollo/client';

// This is the graphQL schema to get orders
const GET_ORDERS = gql`
  query GetOrders {
    getOrders {
      id
      customerName
      address
      city
      postalCode
      items {
        name
        price
        quantity
        toppings
      }
    }
  }
`;

const OrderManagement = () => {

  // Here is the function to handle order status change
  const handleStatusChange = (id, status) => {
    setOrders(
      orders.map((order) => (order.id === id ? { ...order, status } : order))
    );
  };

  return (
    // This the basic design for the order management
    <div>
      <NavbarAdmin />
      <div className="admin-container">
        
        {/* Order Management Section */}
        <div className="order-management">
          <h2>Order Management</h2>
          <table className="order-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Status</th>
                <th>Total</th>
                <th>Items</th>
                <th>Change Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.status}</td>
                  <td>${order.total.toFixed(2)}</td>
                  <td>
                    {order.items.map((item) => (
                      <div key={item.id}>
                        {item.name} x {item.quantity}
                      </div>
                    ))}
                  </td>
                  <td>
                    <select
                      value={order.status}
                      onChange={(e) => handleStatusChange(order.id, e.target.value)}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Processing">Processing</option>
                      <option value="Completed">Completed</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OrderManagement;
