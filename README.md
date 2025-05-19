# Earthquake API Backend

A minimal Node.js + TypeScript backend with two endpoints using the USGS Earthquake API. Implements caching, rate limiting, and load testing.

## Endpoints

- `GET /earthquakes`: List recent earthquakes.
- `GET /earthquakes/:id`: Get details of a specific earthquake by ID.

## Features

- 🌍 Uses [USGS Earthquake API](https://earthquake.usgs.gov/fdsnws/event/1/)
- 🚀 Caching with `node-cache`
- 🔒 Rate limiting with `express-rate-limit`
- 🧪 Load tested using `autocannon`
- 🧪 Tested with Postman

## Run Locally

```bash
npm install
npm run dev
