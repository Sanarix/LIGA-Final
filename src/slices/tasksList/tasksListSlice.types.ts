import type { FetchedTasks } from 'src/types/task/Task.types';

export type TasksState = {
  tasksData: FetchedTasks;
  isLoading: boolean;
};
