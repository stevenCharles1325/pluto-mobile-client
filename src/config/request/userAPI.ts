import axios from 'axios';
import Config from 'react-native-config';

const userAPI = axios.create({
  baseURL: Config.API_USER_URL,
  headers: {
    'Accept-Language': 'en',
  },
});

export default userAPI;
