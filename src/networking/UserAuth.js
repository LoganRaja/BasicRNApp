import axios from 'axios';
import ApiUtils from './ApiUtils';
import getClient from './NonAuth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Constant} from '../res/ResRoot';

const setToken = async tokenObj => {
  try {
    await AsyncStorage.setItem(Constant.ACCESS_TOKEN, tokenObj.access_token);
    await AsyncStorage.setItem(Constant.REFRESH_TOKEN, tokenObj.refresh_token);
    await getLoggedinClient();
  } catch (error) {}
};

const getAccessToken = async () => {
  try {
    return await AsyncStorage.getItem(Constant.ACCESS_TOKEN);
  } catch (error) {}
};

const getRefreshToken = async () => {
  try {
    return await AsyncStorage.getItem(Constant.REFRESH_TOKEN);
  } catch (error) {}
};

const loggedinClient = axios.create({
  baseURL: ApiUtils.API_BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=UTF-8',
    'Cache-Control': 'no-cache',
  },
  timeout: 10 * 3000,
});
const getLoggedinClient = async () => {
  loggedinClient.defaults.headers.common.Authorization =
    'Bearer ' + (await getAccessToken());
  return loggedinClient;
};
export default getLoggedinClient;

// Intercept all requests
loggedinClient.interceptors.request.use(
  config => {
    console.log('Request:-', config.url);
    console.log('Request:-', config.data);
    return config;
  },
  error => {
    console.log('reqError:-', error);
    Promise.reject(error.config);
  },
);

// Intercept all responses
loggedinClient.interceptors.response.use(
  async response => {
    console.log('Response:-', response.data);
    return response.data;
  },
  async error => {
    console.log('resError:-', error); //error.response.code
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const client = await getClient();
      let obj = client.defaults.data;
      (obj.grant_type = 'refresh_token'),
        (obj.refresh_token = await getRefreshToken());
      return client
        .post(ApiUtils.AUTH_API_BASE_URL + 'token/', obj)
        .then(async res => {
          if (res.status === 200) {
            await setToken(res.data);
            originalRequest.headers.Authorization =
              'Bearer ' + res.data.access_token;

            return await axios(originalRequest).then(res => {
              return res.data;
            });
          }
        })
        .catch(error => {
          return Promise.reject(error);
        });
    }
    return Promise.reject(error);
  },
);

// const user = await getLoggedinClient();
//fullURL=https://differnt_base_url.com/endpoint
// user
//   .get('end_ponint') //if base url change means .get(fullURL)
//   .then(async res => {
//     console.log(res);
//   })
//   .catch(error => {
//     console.log(error);
//   });
