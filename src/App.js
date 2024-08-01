import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import CryptoList from './components/CryptoList';
import FavouriteCryptos from './components/FavouriteCryptos';
import GlobalStats from './components/GlobalStats';
import { getCryptos, getGlobalData } from './services/api';

function App() {
  const [cryptos, setCryptos] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [globalData, setGlobalData] = useState(null);

  useEffect(() => {
    const fetchCryptos = async () => {
      const data = await getCryptos();
      setCryptos(data);
    };

    const fetchGlobalData = async () => {
      const data = await getGlobalData();
      setGlobalData(data);
    };

    fetchCryptos();
    fetchGlobalData();
  }, []);

  useEffect(() => {
    const storedFavourites = JSON.parse(localStorage.getItem('favourites')) || [];
    setFavourites(storedFavourites);
  }, []);

  const handleFavourite = (crypto) => {
    const isFavourite = favourites.some(fav => fav.id === crypto.id);

    if (!isFavourite) {
      const newFavourites = [...favourites, crypto];
      setFavourites(newFavourites);
      localStorage.setItem('favourites', JSON.stringify(newFavourites));
      alert(`${crypto.name} has been added to favourites!`);
    } else {
      alert(`${crypto.name} is already in favourites.`);
    }
  };

  const removeFromFavourites = (id) => {
    const updatedFavourites = favourites.filter(fav => fav.id !== id);
    setFavourites(updatedFavourites);
    localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <GlobalStats globalData={globalData} />
            <CryptoList cryptos={cryptos} onFavourite={handleFavourite} />
          </>
        } />
        <Route path="/favourites" element={
          <FavouriteCryptos
            favourites={favourites}
            removeFromFavourites={removeFromFavourites} 
          />
        } />
      </Routes>
    </Router>
  );
}

export default App;
