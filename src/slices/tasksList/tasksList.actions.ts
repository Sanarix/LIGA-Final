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
import { setError } from 'src/slices/errors/error.slice';
import { getTasksApi } from 'api/getTasksApi';
import type { AddTaskType, ChangeTaskType, DeletedId, FetchedTasks } from 'types/task/Task.types';
import { removeTasksApi } from 'api/removeTasksApi';
import { getTasksByNameApi } from 'api/getTasksByNameApi';
import { checkTaskByIdApi } from 'api/checkedTaskByIdApi';
import { addTaskApi } from 'api/addTaskApi';
import { changeTaskApi } from 'api/changeTaskApi';

export const fetchTasks = () => async (dispatch: Dispatch) => {
  try {
    dispatch(setLoader());
    const axiosResponse: AxiosResponse<FetchedTasks> = await getTasksApi();
    if (Array.isArray(axiosResponse.data)) {
      dispatch(setTasks({ tasks: axiosResponse.data }));
    } else {
      throw new Error();
    }
  } catch (e) {
    console.log(e);
    dispatch(setError({ message: 'Произошла ошибка' }));
  } finally {
    dispatch(unsetLoader());
  }
};

export const fetchTasksByName =
  ({ taskName, searchQuery }: { taskName: string; searchQuery: string }) =>
  async (dispatch: Dispatch) => {
    try {
      dispatch(setLoader());

      const axiosResponse: AxiosResponse<FetchedTasks> = await getTasksByNameApi({ taskName, searchQuery });
      if (Array.isArray(axiosResponse.data)) {
        dispatch(setTasks({ tasks: axiosResponse.data, filter: searchQuery }));
      } else {
        throw new Error();
      }
    } catch (e) {
      console.log(e);
      dispatch(setError({ message: 'Произошла ошибка при получения задачи' }));
    } finally {
      dispatch(unsetLoader());
    }
  };

export const checkTaskById = (taskId: string) => async (dispatch: Dispatch) => {
  try {
    checkTaskByIdApi({ taskId });
    dispatch(checkTask(taskId));
  } catch (e) {
    console.log(e);
    throw new Error('Произошла ошибка');
  }
};

export const addTask = (taskData: AddTaskType) => async (dispatch: Dispatch) => {
  try {
    const axiosResponse: AxiosResponse<FetchedTasks> = await addTaskApi(taskData);
    if (axiosResponse.data) {
      dispatch(pushTask(axiosResponse.data));
    } else {
      throw new Error('Сервер не отвечает');
    }
  } catch (e) {
    console.log(e);
    throw new Error('Произошла ошибка');
  }
};

export const changeDataTask = (taskData: ChangeTaskType) => async (dispatch: Dispatch) => {
  try {
    const axiosResponse: AxiosResponse<FetchedTasks> = await changeTaskApi(taskData);
    if (axiosResponse.data) {
      dispatch(changeTask(axiosResponse.data));
    } else {
      throw new Error('Сервер не отвечает');
    }
  } catch (e) {
    console.log(e);
    throw new Error('Произошла ошибка');
  }
};

export const removeTaskById = (taskId: DeletedId) => async (dispatch: Dispatch) => {
  try {
    removeTasksApi(taskId);
    dispatch(deleteTask(taskId));
  } catch (e) {
    console.log(e);
    throw new Error('Возникла ошибка при удалении');
  }
};
