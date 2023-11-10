import type { FetchedTasks, Task } from 'src/types/task/Task.types';

export type TasksState = {
  tasksData: Required<FetchedTasks>;
  isLoading: boolean;
};
