import { Dispatch } from 'redux';
import { AxiosResponse } from 'axios';
import { setLoader, unsetLoader, setTasks } from 'src/slices/tasksList/tasksList.slice';
import { setError } from 'src/slices/errors/error.slice';
import { getTasksApi } from 'api/getTasksApi';
import { Task } from 'types/task/Task.types';

export const fetchTasks = () => async (dispatch: Dispatch) => {
  try {
    dispatch(setLoader());

    const axiosResponse: AxiosResponse<Task[]> = await getTasksApi();
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
