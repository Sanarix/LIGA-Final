import axios from 'axios';
import { BASE_URL } from 'constants/baseUrl';

export const getTasksByParamsApi = ({ taskName }: { taskName: string }) =>
  axios.get(BASE_URL, {
    params: { name_like: taskName },
  });
