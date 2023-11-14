import axios from 'axios';
import { BASE_URL } from 'constants/baseUrl';
import { DONE_TASKS, IMPORTANT_TASKS } from 'constants/searchTypes';

export const getTasksByNameApi = ({ taskName, searchQuery }: { taskName: string; searchQuery: string }) =>
  axios.get(BASE_URL, {
    params: {
      name_like: taskName,
      isCompleted: searchQuery === DONE_TASKS ? true : null,
      isImportant: searchQuery === IMPORTANT_TASKS ? true : null,
    },
  });
