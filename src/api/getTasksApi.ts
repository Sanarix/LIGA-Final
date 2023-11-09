import axios from 'axios';

export const getTasksApi = () => axios.get(`http://37.220.80.108/tasks`);
