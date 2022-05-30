import axios from 'axios'

export const BASE_URL = 'https://hn.algolia.com/api/v1'

const instance = axios.create({
  baseURL: BASE_URL,
});

instance.interceptors.request.use((config) => {
  config.params = config.params || {};
  return config;
});

export default instance