import React, { useState } from 'react';
import './CryptoList.css'; //task 3 - remove from index.css

const CryptoList = ({ cryptos, onFavourite }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCryptos = cryptos.filter(crypto =>
    crypto.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="crypto-list">
      <input
        type="text"
        placeholder="Search cryptos..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-bar"
      />
      <div className="crypto-container">
        {filteredCryptos.map(crypto => (
          <div key={crypto.id} className="crypto-item">
            <img src={crypto.image} alt={crypto.name} className="crypto-image" />
            <div className="crypto-info">
              <h2>{crypto.name}</h2>
              <p>{crypto.symbol.toUpperCase()}</p>
              <p>${crypto.current_price.toLocaleString()}</p>
              <button onClick={() => onFavourite(crypto)} className="favourite-button">
                Add to Favourites
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoList;
