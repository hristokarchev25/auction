import axios from '../../axios';

import { LOGIN_USER, REGISTER_USER, AUTH_USER, LOGOUT_USER } from "./types";

export function loginUser(dataToSubmit) {
    const request = axios
      .post("/users/login", dataToSubmit)
      .then((response) => response.data)
      .catch((error) => console.error("Error:", error));
  
    return {
      type: LOGIN_USER,
      payload: request,
    };
  };

  export function registerUser(dataToSubmit) {
    const request = axios
      .post(`/users/register`, dataToSubmit)
      .then((response) => response.data)
      .catch((error) => console.error("Error:", error));
  
    return {
      type: REGISTER_USER,
      payload: request,
    };
  };