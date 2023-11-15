import {
  fetchTasks,
  fetchTasksByName,
  checkTaskById,
  removeTaskById,
  addTask,
  changeDataTask,
} from './tasksList.actions';
import { ReduxStore } from 'src/types';
import { useAppDispatch, useAppSelector } from 'src/store';

export const useTasksSlice = () => {
  const isLoading = useAppSelector((state: ReduxStore) => state.tasksList.isLoading);
  const tasks = useAppSelector((state: ReduxStore) => state.tasksList.tasksData);
  const dispatch = useAppDispatch();

  return {
    isLoading,
    tasks,
    dispatch,
    fetchTasks,
    fetchTasksByName,
    checkTaskById,
    removeTaskById,
    addTask,
    changeDataTask,
  };
};
