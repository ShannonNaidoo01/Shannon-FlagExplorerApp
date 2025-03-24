app.get('/countries/:name', async (req, res) => {
  try {
    const { name } = req.params;
    const response = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
    const country = response.data[0];

    // Check if flag is available, otherwise use a default or handle gracefully
    const countryDetails = {
      name: country.name.common,
      population: country.population,
      capital: country.capital ? country.capital[0] : 'N/A', // Capital may be an array
      flag: country.flags ? country.flags[0] : 'N/A', // Assuming flag is an array
    };

    res.json(countryDetails);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
