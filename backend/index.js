const express = require('express');
const axios = require('axios');
const path = require('path');
const cors = require('cors'); // Import cors
const app = express();
const port = process.env.PORT || 3000;

// Enable CORS for all origins (or restrict to frontend's domain)
app.use(cors()); // Allow CORS for all origins
// You can restrict it to only your frontend by passing a specific origin:
// app.use(cors({ origin: 'https://flag-explorer-frontend.azurewebsites.net' }));

// Serve static files from the React app (build folder)
app.use(express.static(path.join(__dirname, 'build')));

// Endpoint to retrieve a list of countries
app.get('/countries', async (req, res) => {
  try {
    const response = await axios.get('https://restcountries.com/v3.1/all');
    const countries = response.data.map(country => ({
      name: country.name.common,
      flag: country.flags[0]
    }));
    res.json(countries); // Send back the countries list as JSON
  } catch (error) {
    res.status(500).send(error.message); // Handle errors gracefully
  }
});

// Endpoint to retrieve details of a specific country
app.get('/countries/:name', async (req, res) => {
  try {
    const { name } = req.params;
    const response = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
    const country = response.data[0];
    const countryDetails = {
      name: country.name.common,
      population: country.population,
      capital: country.capital[0],
      flag: country.flags[0]
    };
    res.json(countryDetails); // Send country details as JSON
  } catch (error) {
    res.status(500).send(error.message); // Handle errors gracefully
  }
});

// Catch-all route to serve the React app (for frontend routing)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

module.exports = app;
