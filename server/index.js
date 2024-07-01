const { ApolloServer, gql } = require('apollo-server-express');
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

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

  type Query {
    getUserByEmail(email: String!): User
  }

  type Mutation {
    signup(username: String!, email: String!, password: String!, role: String!): User
    login(email: String!, password: String!): User
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