import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://shoppingcart-henna.vercel.app/',
});
