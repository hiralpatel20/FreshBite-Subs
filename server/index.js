const { ApolloServer, gql } = require('apollo-server-express');
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Below line is to load environment variables from .env file
dotenv.config();

const app = express();
app.use(cors());


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