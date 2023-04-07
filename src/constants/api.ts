import config from 'react-native-config';
const OAUTH = '/oauth';
const { BASE_URL } = config;
export const api = {
  LOGIN: BASE_URL + OAUTH + '/token',
};
