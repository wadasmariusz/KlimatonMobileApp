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
  return async (dispatch, getState) => {
    const response = await fetchFromAPI({
      method: "POST",
      url: getAPIAddress("account/sign-in"),
      data: {
        email: login,
        password: password,
        rememberMe: true,
      },
    });
    if (response && response?.accessToken) {
      dispatch(
        authenticate({
          type: AUTHENTICATE,
          token: response?.accessToken,
          refreshToken: response?.refreshToken,
          userId: response?.id,
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

export const register = (firstName, lastName, email, password, confirmPassword) => {
  console.log({
    email: email,
    password: password,
    confirmPassword: confirmPassword,
    firstName: firstName,
    lastName: lastName,
  });
  console.log(getAPIAddress('account/sign-up'));
  return async (dispatch, getState) => {
    const response = await fetchFromAPI({
      method: 'POST',
      url: getAPIAddress('account/sign-up'),
      data: {
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        firstName: firstName,
        lastName: lastName,
      }
    })
    if (response != null && response.token != null) {
      dispatch(authenticate({
        type: AUTHENTICATE,
        token: response?.token,
        userId: response?.userId,
      }))
    }
    else {
      if (response != null && response.errorMsg != null) {
        throw new Error(JSON.stringify(response))
      } else throw new Error("Error")
    }
  }
}