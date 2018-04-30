import {getJSON} from 'jquery';

import axios from 'axios';
const api = process.env.REACT_APP_API_URL;

const apiRecords = process.env.REACT_APP_API_URL;

export const getAllRecords = () => getJSON(`${apiRecords}/api/v1/records`);

export const createRecord = (body) => axios.post(`${api}/api/v1/records`, body);

export const updateRecord = (id, body) => axios.put(`${api}/api/v1/records/${id}`, body);

export const removeRecord = (id) => axios.delete(`${api}/api/v1/records/${id}`);


