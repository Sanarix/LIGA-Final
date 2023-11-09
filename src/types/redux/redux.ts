import { TaskLocal } from 'types/task/TaskLocal.types';

export interface ReduxStore {
  tasksList: {
    tasksData: TaskLocal[];
  };
}
