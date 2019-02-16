import axios from 'axios';
import {apiServer} from '../config';
import clientPersist from "client-persist";
import { get } from '.';

clientPersist.setDriver(clientPersist.SESSIONSTORAGE);

// CRUD Utility

export const addTransaction = (transactionDetails) => {
    return axios.post(`${apiServer}/api/transaction`, { data: transactionDetails }).then(response => true).catch(e => {
        clientPersist.setItem('errorMessage', get(["data", "message"])(e.response)).then(() => console.log('--saved--'));
        return false;
    });
};

export const getTransaction = (id) => {
    return axios.get(`${apiServer}/api/transaction/${id}`).then(response => true).catch(e => {
        clientPersist.setItem('errorMessage', get(["data", "message"])(e.response)).then(() => console.log('--saved--'));
        return false;
    });
};

export const updateTransaction = (id, transactionDetails) => {
    return axios.put(`${apiServer}/api/transaction/update/${id}`, { data: transactionDetails }).then(response => true).catch(e => {
        clientPersist.setItem('errorMessage', get(["data", "message"])(e.response)).then(() => console.log('--saved--'));
        return false;
    });
};

export const deleteTransaction = (id) => {
    return axios.delete(`${apiServer}/api/transaction/${id}`).then(response => true).catch(e => {
        clientPersist.setItem('errorMessage', get(["data", "message"])(e.response)).then(() => console.log('--saved--'));
        return false;
    });
};