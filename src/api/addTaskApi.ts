import axios from 'axios';
import { BASE_URL } from 'constants/baseUrl';
import type { AddTaskType } from 'types/task/Task.types';

export const addTaskApi = (taskData: AddTaskType) =>
  axios.post(BASE_URL, {
    ...taskData,
  });
