import axios from 'axios';
import {apiServer} from '../config';
import clientPersist from "client-persist";
import { get } from '.';

clientPersist.setDriver(clientPersist.SESSIONSTORAGE);

export const register = async (userDetails) => {
    return axios.post(`${apiServer}/api/users`, { user: userDetails }).then(response => true).catch(e => {
        clientPersist.setItem('errorMessage', get(["data", "message"])(e.response)).then(() => console.log('--saved--'));
        return false;
    });
};

export const login = async (userDetails) => {
    return axios.post(`${apiServer}/api/users/login`, { user: userDetails }).then(response => {
        clientPersist.setItem('authToken', get(["data", "token"])(response)).then(() => console.log('--saved--'));
        clientPersist.setItem('userId', get(["data", "_id"])(response)).then(() => console.log('--saved--'));
        return true;
    }).catch(e => {
        clientPersist.setItem('errorMessage', get(["data", "message"])(e.response)).then(() => console.log('--saved--'));
        return true;
    });
};