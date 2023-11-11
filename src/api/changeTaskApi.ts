import axios from 'axios';
import { BASE_URL } from 'constants/baseUrl';
import type { ChangeTaskType } from 'types/task/Task.types';

export const changeTaskApi = (taskData: ChangeTaskType) =>
  axios.patch(`${BASE_URL}/${taskData.id}`, {
    ...taskData,
  });
