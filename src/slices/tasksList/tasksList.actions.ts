import { Dispatch } from 'redux';
import { AxiosResponse } from 'axios';
import { setLoader, unsetLoader, setTasks, deleteTask } from 'src/slices/tasksList/tasksList.slice';
import { setError } from 'src/slices/errors/error.slice';
import { getTasksApi } from 'api/getTasksApi';
import { DeletedId, FetchedTasks } from 'types/task/Task.types';
import { removeTasksApi } from 'api/removeTasksApi';
import { getTasksByParamsApi } from 'api/getTasksByParamsApi';

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

export const fetchTasksByParams =
  ({ taskName }: { taskName: string }) =>
  async (dispatch: Dispatch) => {
    try {
      dispatch(setLoader());

      const axiosResponse: AxiosResponse<FetchedTasks> = await getTasksByParamsApi({ taskName });
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

export const removeTaskById = (taskId: DeletedId) => async (dispatch: Dispatch) => {
  try {
    removeTasksApi(taskId);
    dispatch(deleteTask(taskId));
  } catch (e) {
    console.log(e);
    throw new Error('Возникла ошибка при удалении');
  }
};
