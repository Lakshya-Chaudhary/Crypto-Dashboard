import React from 'react';
import './FavouriteCryptos.css'; 

const FavouriteCryptos = ({ favourites, removeFromFavourites }) => {
  if (favourites.length === 0) {
    return <p>No favourite cryptos added yet.</p>;
  }

  return (
    <div>
      <h1>Favourites</h1>
      <div className="favourites-container">
        {favourites.map((crypto) => (
          <div key={crypto.id} className="favourite-item">
            <img src={crypto.image} alt={crypto.name} className="crypto-image" />
            <div className="crypto-info">
              <h2>{crypto.name}</h2>
              <p>{crypto.symbol.toUpperCase()}</p>
              <p>${crypto.current_price.toLocaleString()}</p>
              <button
                onClick={() => removeFromFavourites(crypto.id)} 
                className="remove-button"
              >
                Remove from Favourites
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavouriteCryptos;
