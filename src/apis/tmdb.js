import axios from 'axios';

const API_KEY = 'c48342ac0c20fbe794e7ad515e8ae604';
const baseUrl = 'https://api.themoviedb.org/3/';

const tmdb = axios.create({
  baseURL: baseUrl,
  params: {
    api_key: API_KEY,
  },
});

export default tmdb;