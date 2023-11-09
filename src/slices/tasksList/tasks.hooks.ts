import { fetchTasks, removeTaskById } from './tasksList.actions';
import { ReduxStore } from 'types/redux/redux';
import { useAppDispatch, useAppSelector } from 'src/store';

export const useTasksSlice = () => {
  const isLoading = useAppSelector((state: ReduxStore) => state.tasksList.isLoading);
  const tasks = useAppSelector((state: ReduxStore) => state.tasksList.tasksData);
  const dispatch = useAppDispatch();

  return { isLoading, tasks, dispatch, fetchTasks, removeTaskById };
};
