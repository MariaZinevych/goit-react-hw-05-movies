// 7a1a96151b65b7a2369b7dfff5707ea0

import axios from 'axios';

const API_KEY = '7a1a96151b65b7a2369b7dfff5707ea0';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchTrending = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return response.data.results;
};

export const fetchMoviesId = async () => {
  const response = await axios.get(`movie/{movie_id}?api_key=${API_KEY}`);
  return response.data.results;
};
