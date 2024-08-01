import axios from 'axios';

const BASE_URL = 'https://api.coingecko.com/api/v3';
//Fetching API from 3 different API endpoints
// Fetch list of cryptocurrencies with market data
export const getCryptos = async () => {
  const response = await axios.get(`${BASE_URL}/coins/markets`, {
    params: {
      vs_currency: 'usd',
    },
  });
  return response.data;
};

// Fetch detailed information about a specific cryptocurrency
export const getCryptoDetails = async (id) => {
  const response = await axios.get(`${BASE_URL}/coins/${id}`);
  return response.data;
};

// Fetch global cryptocurrency market data
export const getGlobalData = async () => {
  const response = await axios.get(`${BASE_URL}/global`);
  return response.data.data;
};
