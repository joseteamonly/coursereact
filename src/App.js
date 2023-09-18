import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [countries, setCountries] = useState([])
  const [searchName, setSearchName] = useState('Colombia')
  const [message, setMessage] = useState('');
  const [showDetails, setShowDetails] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    if (searchName.trim() !== '') {
      axios
        .get(`https://restcountries.com/v3.1/name/${searchName}`)
        .then((response) => {
          console.log('promise fulfilled');
          const data = response.data;

          if (data.length > 10) {
            setMessage('Demasiados resultados. Por favor, sé más específico en tu consulta.');
            setCountries([]);
            setShowDetails(false);
          } else if (data.length === 0) {
            setMessage('No se encontraron resultados.');
            setCountries([]);
            setShowDetails(false);
          } else {
            setMessage('');
            setCountries(data);
            setShowDetails(false);
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
    else {
      setMessage('');
      setCountries([]);
      setShowDetails(false);
    }
  }, [searchName])

  const handleSearchName = (event) => {
    setSearchName(event.target.value)
  }

  const handleShowDetails = (country) => {
    setSelectedCountry(country);
    setShowDetails(true);
  };

  return (
    <div>
      <form>
        <div>
          Buscar País: <input value={searchName} onChange={handleSearchName} />
        </div>
      </form>
      <div>
        <h2>Países</h2>
        {message && <p>{message}</p>}
        {countries.length > 1 && (
          <ul>
            {countries.map((country) => (
              <li key={country.id}>
                {country.name.common}{' '}
                <button onClick={() => handleShowDetails(country)}>Mostrar Detalles</button>
              </li>
            ))}
          </ul>
        )}
        {countries.length === 1 || showDetails ? (
          <div>
            <h3>{selectedCountry?.name?.common || countries[0].name?.common }</h3>
            <p>Capital: {selectedCountry?.capital || countries[0].capital}</p>
            <p>Población: {selectedCountry?.population || countries[0].population}</p>
            <p>Área: {selectedCountry?.area ||  countries[0].area} km²</p>
            <p>Idiomas:</p>
            <ul>
              {(selectedCountry?.languages)&&
                Object.values((selectedCountry.languages)).map((language, index) => (
                  <li key={index}>{language}</li>
                ))}
            </ul>
            <img src={selectedCountry?.flags?.png || countries[0].flags?.png } alt={`Bandera de ${selectedCountry?.name?.common || countries[0].name?.common}`} />
          </div>
        ) : null}
      </div>
    </div>
  );
};


export default App