export const LOGOUT = "LOGOUT";
export const AUTHENTICATE = "AUTHENTICATE";
export const SET_TRIED_LOGIN = "SET_TRIED_LOGIN";

import { AsyncStorage } from "react-native";
import { fetchFromAPI, getAPIAddress } from "../../helpers/networkService";

export const authenticate = (data) => {
  return async (dispatch, getState) => {
    saveLoginDataToStorage(data);
    dispatch({
      type: AUTHENTICATE,
      data: data,
    });
  };
};

export const setTriedLogin = () => {
  return {
    type: SET_TRIED_LOGIN,
  };
};

export const saveLoginDataToStorage = (data) => {
  AsyncStorage.setItem("loginData", JSON.stringify(data));
};

export const logIn = (login, password) => {
  console.log(getAPIAddress("auth/login"));
  return async (dispatch, getState) => {
    const response = await fetchFromAPI({
      method: "POST",
      url: getAPIAddress("auth/login"),
      data: {
        email: login,
        password: password,
      },
    });
    if (response && response?.token) {
      dispatch(
        authenticate({
          type: AUTHENTICATE,
          token: response?.token,
          refreshToken: response?.refreshToken,
          userId: response?.id,
          // roles: response?.roles,
        })
      );
    } else {
      if (response && response?.errorMsg) {
        throw new Error(JSON.stringify(response));
      } else throw new Error("Error");
    }
  };
};

export const logout = () => {
  return async (dispatch, getState) => {
    AsyncStorage.removeItem("loginData");
    // TODO: clear all state
    dispatch({ type: LOGOUT });
  };
};