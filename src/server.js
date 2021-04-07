require('dotenv').config();
const express = require('express');
const cors = require('cors');
const authRoutes = require('./Controllers/AuthController');
// const deckRoutes = require('./Controllers/DeckController');

const port = process.env.EXPRESS_PORT || 4000;
const app = express();

// middleware - JSON parsing
app.use(express.json());
app.use(cors()); // will accept request from any origin if we invoke like this

// middleware - API routes
app.use('/', authRoutes);
// app.use('/', deckRoutes);

// connection
app.listen(port, () => console.log(`Server is running on port ${port}`));