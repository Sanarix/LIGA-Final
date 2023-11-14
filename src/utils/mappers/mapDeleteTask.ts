import { DeletedId } from 'types/task/Task.types';

export const mapDeleteTask = (taskNumberId: number | undefined): DeletedId => {
  return { taskId: String(taskNumberId) };
};
