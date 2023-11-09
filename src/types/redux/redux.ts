import { TaskLocal } from 'types/task/TaskLocal.types';

export interface ReduxStore {
  tasksList: {
    tasksData: TaskLocal[];
    isLoading: boolean;
  };
  errors: { value: string | null };
}
