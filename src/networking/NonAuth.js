import axios from 'axios';
import ApiUtils from './ApiUtils';

const client = axios.create({
  baseURL: ApiUtils.AUTH_API_BASE_URL,
  data: {
    client_id: ApiUtils.AUTH_API_CLIENT_ID,
    client_secret: ApiUtils.AUTH_API_CLIENT_SECRET,
  },
});

const getClient = async () => {
  return client;
};
export default getClient;

// Intercept all request
client.interceptors.request.use(
  config => {
    console.log('Request:-', config.data);
    return config;
  },
  error => {
    console.log('reqError:-', error);
    Promise.reject(error);
  },
);

// Intercept all responses
client.interceptors.response.use(
  async response => {
    console.log('Response:-', response.data);
    return response;
  },
  error => {
    console.log('resError:-', error);
    return Promise.reject(error);
  },
);

// const client = await getClient();
// let obj = client.defaults.data;
// (obj.username = email), (obj.password = password), (obj.grant_type = 'password');
// client
//   .post('token/', obj)
//   .then(async (res) => {
//     await CredentialsManager.setToken(res.data);
//     this.setState({ loading: false });
//
//   })
//   .catch((error) => {
//     let message =
//       error?.response?.status == 400
//         ? 'Email Id and Password combination is wrong'
//         : 'Something wrong happened, please try again after some time';
//     this.setState({ visible: true, loading: false, errorMessage: message });
//   });
