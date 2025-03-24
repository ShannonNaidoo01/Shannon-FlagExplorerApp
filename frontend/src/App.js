import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    axios.get('/countries').then(response => {
      setCountries(response.data);
    });
  }, []);

  const handleFlagClick = (name) => {
    axios.get(`/countries/${name}`).then(response => {
      setSelectedCountry(response.data);
    });
  };

  return (
    <div className="App">
      <h1>Country Flags</h1>
      <div className="grid">
        {countries.map(country => (
          <img
            key={country.name}
            src={country.flag}
            alt={country.name}
            onClick={() => handleFlagClick(country.name)}
          />
        ))}
      </div>
      {selectedCountry && (
        <div className="details">
          <h2>{selectedCountry.name}</h2>
          <p>Population: {selectedCountry.population}</p>
          <p>Capital: {selectedCountry.capital}</p>
          <img src={selectedCountry.flag} alt={selectedCountry.name} />
        </div>
      )}
    </div>
  );
}

export default App;