import axios from "axios";
import { getAPIAddress } from "./src/helpers/networkService";
import * as authActions from './src/store/actions/auth';

const setupAxios = (store) => {
  // add user token to axios if provided
  axios.interceptors.request.use(
    config => {
      const { auth: { token: authToken } } = store.getState();
      if(!config.url) console.error('request.url is undefined');
      // if ( authToken && isValidUrl4Token(config.url)) {
      if ( authToken) {
        config.headers.Authorization = `Bearer ${authToken}`;
      }
      return config;
    },
    err => Promise.reject(err)
  );
}

export default setupAxios;