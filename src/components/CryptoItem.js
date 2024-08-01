import React from 'react';

function CryptoItem({ crypto, onFavourite }) {
  return (
    <div className="crypto-item">
      <h3>{crypto.name}</h3>
      <p>Current Price: ${crypto.current_price}</p>
      <button onClick={() => onFavourite(crypto)}>Favourite</button>
    </div>
  );
}

export default CryptoItem;
