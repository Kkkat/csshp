
import axios from 'axios';

const URL = 'http://127.0.0.1:3600';

axios.defaults.baseURL = URL;
axios.defaults.withCredentials = false;

export function login (name, password) {
  return axios.post('/api/inline/user/login', {
    name: name,
    password: password
  });
}

export function register (name, password) {
  return axios.post('/api/inline/user/register', {
    name: name,
    password: password
  });
}

export function uploadCode (name, html, css, js, category) {
  return axios.post('/api/inline/module/uploadCode', {
    name: name,
    html: html,
    css: css,
    js: js,
    category: category
  });
}

export function getAllModules () {
  return axios.get('/api/inline/module/getAllModules');
}

export function getModule (_id) {
  return axios.get(`/api/inline/module/getModule?_id=${_id}`);
}
