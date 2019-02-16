import axios from 'axios';
import {apiServer} from '../config';
import clientPersist from "client-persist";
import { get } from '.';

clientPersist.setDriver(clientPersist.SESSIONSTORAGE);

// CRUD Utility

export const addHospital = (hospitalDetails) => {
    return axios.post(`${apiServer}/api/hospital`, { data: hospitalDetails }).then(response => response).catch(e => {
        clientPersist.setItem('errorMessage', get(["data", "message"])(e.response)).then(() => console.log('--saved--'));
        return false;
    });
};

export const getHospital = (id) => {
    return axios.get(`${apiServer}/api/hospital/${id}`).then(response => response).catch(e => {
        clientPersist.setItem('errorMessage', get(["data", "message"])(e.response)).then(() => console.log('--saved--'));
        return false;
    });
};

export const updateHospital = (id, hospitalDetails) => {
    return axios.put(`${apiServer}/api/hospital/update/${id}`, { data: hospitalDetails }).then(response => response).catch(e => {
        clientPersist.setItem('errorMessage', get(["data", "message"])(e.response)).then(() => console.log('--saved--'));
        return false;
    });
};

export const deleteHospital = (id) => {
    return axios.delete(`${apiServer}/api/hospital/${id}`).then(response => response).catch(e => {
        clientPersist.setItem('errorMessage', get(["data", "message"])(e.response)).then(() => console.log('--saved--'));
        return false;
    });
};