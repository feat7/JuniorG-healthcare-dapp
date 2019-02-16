import axios from 'axios';
import {apiServer} from '../config';
import clientPersist from "client-persist";
import { get } from '.';

clientPersist.setDriver(clientPersist.SESSIONSTORAGE);

// CRUD Utility

export const addPatient = (patientDetails) => {
    return axios.post(`${apiServer}/api/patient`, { data: patientDetails }).then(response => response).catch(e => {
        clientPersist.setItem('errorMessage', get(["data", "message"])(e.response)).then(() => console.log('--saved--'));
        return false;
    });
};

export const getPatient = (id) => {
    return axios.get(`${apiServer}/api/patient/${id}`).then(response => response).catch(e => {
        clientPersist.setItem('errorMessage', get(["data", "message"])(e.response)).then(() => console.log('--saved--'));
        return false;
    });
};

export const updatePatient = (id, patientDetails) => {
    return axios.put(`${apiServer}/api/patient/update/${id}`, { data: patientDetails }).then(response => response).catch(e => {
        clientPersist.setItem('errorMessage', get(["data", "message"])(e.response)).then(() => console.log('--saved--'));
        return false;
    });
};

export const deletePatient = (id) => {
    return axios.delete(`${apiServer}/api/patient/${id}`).then(response => response).catch(e => {
        clientPersist.setItem('errorMessage', get(["data", "message"])(e.response)).then(() => console.log('--saved--'));
        return false;
    });
};