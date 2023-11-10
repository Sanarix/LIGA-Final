import axios from 'axios';
import { BASE_URL } from 'constants/baseUrl';

export const getTasksApi = () => axios.get(BASE_URL);
