// server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const moviesRouter = require('./routes/movies');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/movies', moviesRouter);

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Server is running' });
});

app.get('/workflows', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'workflows worked' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});