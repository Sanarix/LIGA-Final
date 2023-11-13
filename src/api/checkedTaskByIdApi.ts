import axios from 'axios';
import { BASE_URL } from 'constants/baseUrl';

export const checkTaskByIdApi = ({ taskId }: { taskId: string }) =>
  axios.patch(`${BASE_URL}/${taskId}`, {
    isCompleted: true,
    isImportant: false,
  });
