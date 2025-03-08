# Movie App Server

A Node.js backend service for a movie application that interfaces with the TMDB (The Movie Database) API. This service provides a simplified and optimized interface for retrieving movie data to be consumed by frontend applications.

## Features

- **Movie Data**: Access to popular movies, movie details, cast information, and more
- **Search Functionality**: Search movies by title or keywords
- **Health Check**: Endpoint to verify server status
- **Environment Configuration**: Easy setup with environment variables
- **CI/CD**: Automated deployment via GitHub Actions to AWS EC2

## API Endpoints

Returns server status information.

### Popular Movies
```
GET /api/movies/popular
```
Parameters:
- `language` (optional): Language code (default: 'en-US')
- `page` (optional): Page number (default: 1)

### Search Movies
```
GET /api/movies/search
```
Parameters:
- `query`: Search term
- `language` (optional): Language code (default: 'en-US')
- `page` (optional): Page number (default: 1)

### Movie Details
```
GET /api/movies/:id
```
Parameters:
- `id`: Movie ID
- `language` (optional): Language code (default: 'en-US')

### Movie Credits
```
GET /api/movies/:id/credits
```
Parameters:
- `id`: Movie ID
- `language` (optional): Language code (default: 'en-US')

### Similar Movies
```
GET /api/movies/:id/similar
```
Parameters:
- `id`: Movie ID
- `language` (optional): Language code (default: 'en-US')
- `page` (optional): Page number (default: 1)

## Technologies Used

- Express.js - Web framework
- Axios - HTTP client
- Dotenv - Environment variable management
- CORS - Cross-origin resource sharing
- PM2 - Process manager
- GitHub Actions - CI/CD automation

## Environment Variables

Create a `.env` file in the root directory and add the following:

```
PORT=5000
TMDB_API_KEY=YOUR_API_KEY
```

## Deployment

This project is configured for automated deployment to AWS EC2 using GitHub Actions. The workflow is triggered on pushes to the `main` branch.

### Deployment Architecture

- **Hosting**: AWS EC2 (Amazon Linux 2023)
- **Process Management**: PM2
- **Reverse Proxy**: Nginx
- **CI/CD**: GitHub Actions
