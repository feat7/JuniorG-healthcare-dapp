import axios from "axios";
import { runInAction } from "mobx";
import { apiServer } from "../config";
import { get } from ".";

export const getTransaction = store => {
  const { user, ui } = store;
  ui.isLoading = true;
  return axios
    .get(`${apiServer}/api/transaction`, { headers: { Authorization: `Bearer ${user.authToken}` } })
    .then(response =>
      runInAction(() => {
        patient.fetchTransactionList = false;
        patient.transactionList = response.data;
        // ui.successMessage = "Fetched";
        // ui.isSuccess = true;
      })
    )
    .catch(e => {
      patient.fetchTransactionList = false;
      ui.errorMessage = get(["response", "data", "message"])(e) || e.message;
      ui.isError = true;
    })
    .finally(() => {
      ui.isLoading = false;
    });
};

export const addTransaction = (store, params) => {
  const { auth, ui } = store;
  ui.isLoading = true;
  axios
    .post(`${apiServer}/api/transaction`, params, { headers: { Authorization: `Bearer ${user.authToken}` } })
    .then(response =>
      runInAction(() => {
        Actions.ListClients();
        ui.isLoading = false;
        ui.successMessage = response.data.message;
        ui.isSuccess = true;
        getClient(store);
      })
    )
    .catch(e => runInAction(() => {
      ui.isLoading = false;
      ui.errorMessage = get(["response", "data", "message"])(e) || e.message;
      ui.isError = true;
    }));
};

export const editTransaction = (store, params) => {
  const { user, ui } = store;
  ui.isLoading = true;
  return axios
    .put(`${apiServer}/api/transaction/update/${params.id}`, params, {
      headers: { Authorization: `Bearer ${user.authToken}` }
    })
    .then(response =>
      runInAction(() => {
        ui.successMessage = "Edited";
        ui.isSuccess = true;
        getClient(store);
      })
    )
    .catch(e => runInAction(() => {
      ui.errorMessage = get(["response", "data", "message"])(e) || e.message;
      ui.isError = true;
    }))
    .finally(() => {
      ui.isLoading = false;
    });
};

export const removeTransaction = (store, id) => {
  const { auth, ui } = store;
  ui.isLoading = true;
  axios
    .delete(`${apiServer}/api/transaction/${id}`, { headers: { Authorization: `Bearer ${user.authToken}` } })
    .then(response =>
      runInAction(() => {
        ui.successMessage = "DELETED";
        ui.isSuccess = true;
        ui.isLoading = false;
        getClient(store);
      })
    )
    .catch(e => runInAction(() => {
      ui.isError = true;
      ui.errorMessage = get(["response", "data", "message"])(e) || e.message;
      ui.isLoading = false;
    }));
};