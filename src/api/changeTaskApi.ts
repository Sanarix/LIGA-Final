import axios from 'axios';
import { BASE_URL } from 'constants/baseUrl';

export const changeTaskApi = (params: { name: string }) =>
  axios.patch(BASE_URL, {
    params: params,
  });
