// routes/movies.js
const express = require('express');
const axios = require('axios');
const router = express.Router();
const dotenv = require('dotenv');
dotenv.config();

// Load environment variables
const TMDB_API_KEY = process.env.TMDB_API_KEY;


const BASE_URL = 'https://api.themoviedb.org/3';

// Error handler helper
const handleApiError = (res, error) => {
  console.error('API Error:', error.message);
  const status = error.response?.status || 500;
  const message = error.response?.data?.status_message || 'Server error';
  res.status(status).json({ error: message });
};

// Get popular movies
router.get('/popular', async (req, res) => {
  try {
    console.log('Request query:', req.query);
    const response = await axios.get(`${BASE_URL}/movie/popular`, {
      params: {
        api_key: TMDB_API_KEY,
        language: req.query.language || 'en-US',
        page: req.query.page || 1
      }
    });

    console.log('Response data:', response.data);
    res.json(response.data);
  } catch (error) {
    handleApiError(res, error);
  }
});

// Search movies
router.get('/search', async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/movie`, {
      params: {
        api_key: TMDB_API_KEY,
        query: req.query.query,
        language: req.query.language || 'en-US',
        page: req.query.page || 1
      }
    });
    res.json(response.data);
  } catch (error) {
    handleApiError(res, error);
  }
});

// Get movie details
router.get('/:id', async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${req.params.id}`, {
      params: {
        api_key: TMDB_API_KEY,
        language: req.query.language || 'en-US'
      }
    });
    res.json(response.data);
  } catch (error) {
    handleApiError(res, error);
  }
});

// Get movie credits
router.get('/:id/credits', async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${req.params.id}/credits`, {
      params: {
        api_key: TMDB_API_KEY,
        language: req.query.language || 'en-US'
      }
    });
    res.json(response.data);
  } catch (error) {
    handleApiError(res, error);
  }
});

// Get movie videos
router.get('/:id/videos', async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${req.params.id}/videos`, {
      params: {
        api_key: TMDB_API_KEY,
        language: req.query.language || 'en-US'
      }
    });
    res.json(response.data);
  } catch (error) {
    handleApiError(res, error);
  }
});

// Get similar movies
router.get('/:id/similar', async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${req.params.id}/similar`, {
      params: {
        api_key: TMDB_API_KEY,
        language: req.query.language || 'en-US',
        page: req.query.page || 1
      }
    });
    res.json(response.data);
  } catch (error) {
    handleApiError(res, error);
  }
});

module.exports = router;