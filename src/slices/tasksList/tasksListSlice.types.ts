import type { FetchedTasks } from 'src/types';

export type TasksState = {
  tasksData: FetchedTasks;
  isLoading: boolean;
};
