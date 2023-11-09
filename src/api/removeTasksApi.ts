import axios from 'axios';

export const removeTasksApi = (id: number) => axios.delete(`http://37.220.80.108/tasks/${id}`);
