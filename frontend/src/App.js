import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    // Update the API URL to your backend's full URL (backend deployed on Azure)
    axios.get('https://flag-explorer-backend.azurewebsites.net/countries')
      .then(response => {
        setCountries(response.data);
      })
      .catch(error => {
        console.error('Error fetching countries:', error);
      });
  }, []);

  const handleFlagClick = (name) => {
    // Update the API URL for country details (backend deployed on Azure)
    axios.get(`https://flag-explorer-backend.azurewebsites.net/countries/${name}`)
      .then(response => {
        setSelectedCountry(response.data);
      })
      .catch(error => {
        console.error(`Error fetching details for ${name}:`, error);
      });
  };

  return (
    <div className="App">
      <h1>Country Flags</h1>
      <div className="grid">
        {countries.map(country => (
          <div key={country.name} className="country-card">
            <img
              src={country.flag}
              alt={country.name}
              onClick={() => handleFlagClick(country.name)}
              className="country-flag"
            />
            <p>{country.name}</p>
          </div>
        ))}
      </div>
      {selectedCountry && (
        <div className="details">
          <h2>{selectedCountry.name}</h2>
          <p><strong>Population:</strong> {selectedCountry.population}</p>
          <p><strong>Capital:</strong> {selectedCountry.capital}</p>
          <img src={selectedCountry.flag} alt={selectedCountry.name} />
        </div>
      )}
    </div>
  );
}

export default App;