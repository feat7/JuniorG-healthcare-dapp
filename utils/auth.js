import axios from "axios";
import { apiServer } from "../config";
import { runInAction } from "mobx";
import web3 from '../ethereum/web3';

export const login = (userDetails, store) => {
  const { user, ui } = store;
  return axios
    .post(`${apiServer}/api/users/login`, {
      user: userDetails
    })
    .then(response =>
      runInAction(() => {
        user.details = response.data;
        user.authToken = response.data.token;
        return response.data;
      })
    )
    .catch(e => runInAction(() => {
      ui.isError = true;
      ui.errorMessage = e.response.data.message;
      return false;
    }));
};

export const register = (userDetails, store) => {
  const { user } = store;
  return axios
    .post(`${apiServer}/api/users`, {
      user: userDetails
    })
    .then(response => {
      user.details = response.data;
      return response.data;
    })
    .catch(e =>  runInAction(() => {
      ui.isError = true;
      ui.errorMessage = e.response.data.message;
      return false;
    }));
};