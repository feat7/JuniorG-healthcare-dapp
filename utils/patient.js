import axios from "axios";
import { runInAction } from "mobx";
import { apiServer } from "../config";
import { get } from ".";

export const getPatient = store => {
  const { user, ui } = store;
  ui.isLoading = true;
  return axios
    .get(`${apiServer}/api/patient`, { headers: { Authorization: `Bearer ${user.authToken}` } })
    .then(response =>
      runInAction(() => {
        patient.fetchPatientList = false;
        patient.patientList = response.data;
        // ui.successMessage = "Fetched";
        // ui.isSuccess = true;
      })
    )
    .catch(e => {
      patient.fetchPatientList = false;
      ui.errorMessage = get(["response", "data", "message"])(e) || e.message;
      ui.isError = true;
    })
    .finally(() => {
      ui.isLoading = false;
    });
};

export const addPatient = (store, params) => {
  const { auth, ui } = store;
  ui.isLoading = true;
  axios
    .post(`${apiServer}/api/patient`, params, { headers: { Authorization: `Bearer ${user.authToken}` } })
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

export const editPatient = (store, params) => {
  const { user, ui } = store;
  ui.isLoading = true;
  return axios
    .put(`${apiServer}/api/patient/update/${params.id}`, params, {
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

export const removePatient = (store, id) => {
  const { auth, ui } = store;
  ui.isLoading = true;
  axios
    .delete(`${apiServer}/api/patient/${id}`, { headers: { Authorization: `Bearer ${user.authToken}` } })
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