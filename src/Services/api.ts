import axios from 'axios';
import md5 from 'md5';

const baseUrl = 'http://gateway.marvel.com/v1/public/';

const publicKey = '09913cfd09e7a4ccf6f930ee2d486d1d';
const privateKey = '1886c6f758772e1152495b1033665ae6a788890c';

const ts = Number(new Date());

const hash = md5(ts + privateKey + publicKey);

const api = axios.create({
  baseURL: baseUrl,
  params: {
    ts,
    apikey: publicKey,
    hash,
  },
});

export default api;
