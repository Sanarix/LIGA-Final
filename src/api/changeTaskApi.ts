import axios from 'axios';
import { BASE_URL } from 'constants/baseUrl';
import type { ChangeTask } from 'types/task/Task.types';

export const changeTaskApi = (taskData: ChangeTask) =>
  axios.patch(BASE_URL, {
    ...taskData,
  });
