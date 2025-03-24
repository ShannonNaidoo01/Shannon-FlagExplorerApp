const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

app.get('/countries', async (req, res) => {
  try {
    const response = await axios.get('https://restcountries.com/v3.1/all');
    const countries = response.data.map(country => ({
      name: country.name.common,
      flag: country.flags[0]
    }));
    res.json(countries);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

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
    res.json(countryDetails);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Export the app for testing
module.exports = app;

// Start the server only when running in production (or locally)
if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}
