import React, { useState, useEffect } from 'react';
import NavbarAdmin from '../../components/NavbarAdmin/NavbarAdmin';
import Footer from '../../components/Footer/Footer';
import './OrderManagement.css';
import { useQuery, useMutation, gql } from '@apollo/client';

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

// Here I added the mutation to update the status
const UPDATE_ORDER_STATUS = gql`
  mutation UpdateOrderStatus($id: ID!, $status: String!) {
    updateOrderStatus(id: $id, status: $status) {
      id
      status
    }
  }
`;

const OrderManagement = () => {
  // Here i used apollo client's useQuery hook to fetch the orders
  const { loading, error, data } = useQuery(GET_ORDERS);

  // Here I initialized the state to hold the orders
  const [orders, setOrders] = useState([]);

  // This is the effect hook to update state when data is changed
  useEffect(() => {
    if (data && data.getOrders) {
      setOrders(data.getOrders);
    }
  }, [data]); 

  // Here is the function to handle order status change
  const handleStatusChange = (id, status) => {
    setOrders(
      orders.map((order) => (order.id === id ? { ...order, status } : order))
    );
  };

  // This condition is to load the message while data is being fetched
  if (loading) return <p>Loading...</p>;
  // This condition is for display error message if there is an error
  if (error) return <p>Error: {error.message}</p>;

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
                <th>Customer Name</th>
                <th>Address</th>
                <th>City</th>
                <th>Postal Code</th>
                <th>Items</th>
                <th>Change Status</th>
              </tr>
            </thead>
            <tbody>
            {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.customerName}</td>
                  <td>{order.address}</td>
                  <td>{order.city}</td>
                  <td>{order.postalCode}</td>
                  <td>
                    {order.items.map((item, index) => (
                      <div key={index}>
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
