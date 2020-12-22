import axios from 'axios';

/** Base Url */
const instance = axios.create({
   baseURL: 'https://api.themoviedb.org/3',
});

export default instance;
