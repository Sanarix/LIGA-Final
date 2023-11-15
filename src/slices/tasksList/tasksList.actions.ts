import { Dispatch } from 'redux';
import { AxiosResponse } from 'axios';
import {
  setLoader,
  unsetLoader,
  setTasks,
  checkTask,
  pushTask,
  changeTask,
  deleteTask,
} from 'src/slices/tasksList/tasksList.slice';
import { setError } from 'src/slices';
import { getTasksApi } from 'api/getTasksApi';
import type { AddTaskType, ChangeTaskType, DeletedId, FetchedTasks } from 'types/task/Task.types';
import { removeTasksApi } from 'api/removeTasksApi';
import { getTasksByNameApi } from 'api/getTasksByNameApi';
import { checkTaskByIdApi } from 'api/checkedTaskByIdApi';
import { addTaskApi } from 'api/addTaskApi';
import { changeTaskApi } from 'api/changeTaskApi';

export const fetchTasks = (searchQuery?: string) => async (dispatch: Dispatch) => {
  try {
    dispatch(setLoader());
    const axiosResponse: AxiosResponse<FetchedTasks> = await getTasksApi();
    if (Array.isArray(axiosResponse.data)) {
      dispatch(setError({ message: '' }));
      dispatch(setTasks({ tasks: axiosResponse.data, searchQuery }));
    } else {
      throw new Error();
    }
  } catch (e) {
    dispatch(setError({ message: 'Server is not responding' }));
  } finally {
    dispatch(unsetLoader());
  }
};

export const fetchTasksByName =
  ({ taskName }: { taskName: string }, searchQuery: string) =>
  async (dispatch: Dispatch) => {
    try {
      dispatch(setLoader());

      const axiosResponse: AxiosResponse<FetchedTasks> = await getTasksByNameApi({ taskName, searchQuery });
      if (Array.isArray(axiosResponse.data)) {
        dispatch(setTasks({ tasks: axiosResponse.data, searchQuery }));
      } else {
        throw new Error();
      }
    } catch (e) {
      dispatch(setError({ message: 'Task not found' }));
    } finally {
      dispatch(unsetLoader());
    }
  };

export const checkTaskById = (taskId: string) => async (dispatch: Dispatch) => {
  try {
    dispatch(setLoader());
    await checkTaskByIdApi({ taskId });
    dispatch(checkTask({ taskId }));
  } catch (e) {
    dispatch(setError({ message: 'Task not available' }));
  } finally {
    dispatch(unsetLoader());
  }
};

export const addTask = (taskData: AddTaskType) => async (dispatch: Dispatch) => {
  try {
    dispatch(setLoader());
    const axiosResponse: AxiosResponse<FetchedTasks> = await addTaskApi(taskData);
    if (axiosResponse.data) {
      dispatch(pushTask(axiosResponse.data));
    }
  } catch (e) {
    dispatch(setError({ message: 'Server is not responding' }));
  } finally {
    dispatch(unsetLoader());
  }
};

export const changeDataTask = (taskData: ChangeTaskType) => async (dispatch: Dispatch) => {
  try {
    dispatch(setLoader());
    const axiosResponse: AxiosResponse<FetchedTasks> = await changeTaskApi(taskData);
    if (axiosResponse.data) {
      dispatch(changeTask(axiosResponse.data));
    }
  } catch (e) {
    dispatch(setError({ message: 'Server is not responding' }));
  } finally {
    dispatch(unsetLoader());
  }
};

export const removeTaskById = (taskId: DeletedId) => async (dispatch: Dispatch) => {
  try {
    dispatch(setLoader());
    await removeTasksApi(taskId);
    dispatch(deleteTask(taskId));
  } catch (e) {
    dispatch(setError({ message: 'Task is not available' }));
  } finally {
    dispatch(unsetLoader());
  }
};
