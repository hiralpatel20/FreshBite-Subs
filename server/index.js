const { ApolloServer, gql } = require('apollo-server-express');
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Below line is to load environment variables from .env file
dotenv.config();

const app = express();
app.use(cors());