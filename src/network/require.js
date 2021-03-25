import axios from 'axios';
export function require(config) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    // http://123.207.32.32:8000/home/multidata
    timeout: 5000,
  });
  instance.interceptors.request.use(
    (config) => {
      return config;
    },
    (err) => {}
  );
  instance.interceptors.response.use(
    (res) => {
      return res
    },
    (err) => {}
  );
  return instance(config);
}
