import axios from "axios";
import { apiServer } from "../config";
import { runInAction } from "mobx";

export const login = (userDetails, store) => {
  const { user } = store;
  return axios
    .post(`${apiServer}/api/users/login`, {
      user: userDetails
    })
    .then(response =>
      runInAction(() => {
        user.details = response.data;
        user.authToken = response.data.token;
        return true;
      })
    )
    .catch(e => false);
};

export const register = (userDetails, store) => {
  const { user } = store;
  return axios
    .post(`${apiServer}/api/users`, {
      user: userDetails
    })
    .then(response => {
      user.details = response.data;
      return true;
    })
    .catch(e => false);
};