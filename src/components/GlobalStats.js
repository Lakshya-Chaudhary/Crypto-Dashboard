import React from 'react';
import './GlobalStats.css';

const GlobalStats = ({ globalData }) => {
  if (!globalData) {
    return <p>Loading global stats...</p>;
  }

  return (
    <div className="global-stats">
      <h2 className="global-stats-heading">Global Stats</h2>
      <div className="stats-container">
        <div className="stat-item">
          <button className="stat-button">
            Total Market Cap: ${globalData.total_market_cap.usd.toLocaleString()}
          </button>
        </div>
        <div className="stat-item">
          <button className="stat-button">
            Total Volume: ${globalData.total_volume.usd.toLocaleString()}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GlobalStats;
