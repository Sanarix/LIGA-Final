import type { TaskLocal } from '../../../types/task/TaskLocal.types';
export type ListProps = {
  tasks: TaskLocal[];
  navigate: (value: string) => void;
};
