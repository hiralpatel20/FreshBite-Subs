const { ApolloServer, gql } = require('apollo-server-express');
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const Order = require('./Model/Order');

// Below line is to load environment variables from .env file
dotenv.config();

const app = express();
app.use(cors());

// Below code is to define the GraphQL schema
// Reference: https://conestoga.desire2learn.com/d2l/le/content/1001970/viewContent/21346158/View 
const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    password: String!
    role: String!
  }

  input OrderInput {
    customerName: String!
    address: String!
    city: String!
    postalCode: String!
    items: [OrderItemInput!]!
  }

  input OrderItemInput {
    name: String!
    price: Float!
    quantity: Int!
    toppings: String
  }

  type Order {
    id: ID!
    customerName: String!
    address: String!
    city: String!
    postalCode: String!
    items: [OrderItem!]!
  }

  type OrderItem {
    name: String!
    price: Float!
    quantity: Int!
    toppings: String
  }

  type Order {
    id: ID!
    message: String
  }

  type Query {
    getUserByEmail(email: String!): User
    getOrders: [Order!]!
  }

  type Mutation {
    signup(username: String!, email: String!, password: String!, role: String!): User
    login(email: String!, password: String!): User
    createOrder(input: OrderInput!): Order
  }
`;

// Connection to Mongodb using mongoose
// Reference: https://conestoga.desire2learn.com/d2l/le/content/1001970/viewContent/21346159/View 
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log('MongoDB connected');
  }).catch(err => {
    console.error('MongoDB connection error:', err);
  });

// Here I define User schema using Mongoose Schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
});

// Here I create User model
const User = mongoose.model('User', userSchema);

// Here I define resolvers for GraphQL operations
const resolvers = {
  Query: {
    // This resolver is for querying user by email
    getUserByEmail: async (_, { email }) => {
      try {
        const user = await User.findOne({ email });
        return user;
      } catch (error) {
        throw new Error(`Error retrieving user by email: ${error.message}`);
      }
    },
    // This resolver is for fetching the orders
    getOrders: async () => {
      try {
        // This below line is to fetch order fromt he database and set to the descending order
        const orders = await Order.find().sort({ _id: -1 });
        return orders;
      } catch (error) {
        throw new Error(`Error retrieving orders: ${error.message}`);
      }
    },
  },
  Mutation: {
    // This resolver is for user signup
    signup: async (_, { username, email, password, role }) => {
      try {
        const newUser = await User.create({ username, email, password, role });
        return newUser;
      } catch (error) {
        throw new Error(`Error creating user: ${error.message}`);
      }
    },
    // This resolver is for user login
    login: async (_, { email, password }) => {
      try {
        const user = await User.findOne({ email, password });
        if (!user) {
          throw new Error('User not found or password incorrect');
        }
        return user;
      } catch (error) {
        throw new Error(`Error logging in: ${error.message}`);
      }
    },

    // This below mutation is for creating the new order 
    createOrder: async (_, { input }) => {
      try {
        // This save order to database based on the input
        const newOrder = await Order.create(input);
        return {
          id: newOrder._id,
          message: 'Your order has been successfully stored!' // this is the success message 
        };
      } catch (error) {
        throw new Error(`Error creating order: ${error.message}`);
      }
    },
  },
};


// Below is the function to start ApolloServer with defined schema and resolvers
async function startServer() {
    const server = new ApolloServer({
      typeDefs,
      resolvers,
    });
  
    await server.start();
  
    // Below line is to apply ApolloServer middleware to Express app
    server.applyMiddleware({ app });
  
    // Below code is to start the Express server
    app.listen({ port: process.env.PORT || 4000 }, () =>
      console.log(`Server running at http://localhost:${process.env.PORT || 4000}${server.graphqlPath}`)
    );
  }
  
  // Here I call the function to start the server
  startServer();