import axios from 'axios';
import { BASE_URL } from 'constants/baseUrl';
import { DeletedId } from 'types/task/Task.types';

export const removeTasksApi = (task: DeletedId) => axios.delete(`${BASE_URL}/${task.taskId}`);
