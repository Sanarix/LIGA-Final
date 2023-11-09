import axios from 'axios';
import { Task } from 'types/task/Task.types';

export const getTasksApi = () =>
  axios.get(`http://37.220.80.108/`, {
    params: { type: 'tasks' },
  });
