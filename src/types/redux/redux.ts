import { FetchedTasks } from 'types/task/Task.types';

export interface ReduxStore {
  tasksList: {
    tasksData: FetchedTasks;
    isLoading: boolean;
  };
  errors: { value: string | null };
}
