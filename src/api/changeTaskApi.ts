import axios from 'axios';

export const changeTaskApi = (params: { name: string }) =>
  axios.patch(`http://37.220.80.108/tasks`, {
    params: params,
  });
