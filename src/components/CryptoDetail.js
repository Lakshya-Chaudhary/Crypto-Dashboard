import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCryptoDetails } from '../services/api';

function CryptoDetail() {
    const { id } = useParams();
    const [crypto, setCrypto] = useState(null);
    const addToFavorites = (crypto) => {
        const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        localStorage.setItem('favorites', JSON.stringify([...savedFavorites, crypto]));
    };
    <button onClick={() => addToFavorites(crypto)}>Add to Favorites</button>

    useEffect(() => {
        async function fetchData() {
            const data = await getCryptoDetails(id);
            setCrypto(data);
        }
        fetchData();
    }, [id]);

    if (!crypto) return <div>Loading...</div>;

    return (
        <div>
            <h1>{crypto.name}</h1>
            <p>Symbol: {crypto.symbol}</p>
            <p>Market Cap: {crypto.market_data.market_cap.usd}</p>
            <p>Current Price: {crypto.market_data.current_price.usd}</p>
            <button>Add to Favorites</button>
        </div>
    );
}

export default CryptoDetail;
