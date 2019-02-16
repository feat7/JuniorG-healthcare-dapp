import axios from 'axios';
import apiServer from '../config';

export const register = async (userDetails) => {
    return axios.post(`${apiServer}/register`, { user: userDetails }).then(response => true).catch(e => false);
};

export const login = async (user) => {
    return axios.post(`${apiServer}/login`).then(response => true).catch(e => false);
};