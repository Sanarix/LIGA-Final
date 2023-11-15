import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { memo, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './TaskForm.module.css';
import { validationSchema } from './TaskFormValidationSchema';
import type { TaskFormType } from 'src/types';
import { Checkbox, PageContainer, TextField } from 'src/components';
import { ReduxStore } from 'types/redux/redux.types';
import { useTasksSlice } from 'src/slices';
import { getTaskFormHandlers, mapTaskId } from 'src/utils';

function TaskForm() {
  const { id } = useParams();
  const { addTask, changeDataTask, dispatch, fetchTasks } = useTasksSlice();

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  const navigate = useNavigate();

  const editedTask = useSelector((state: ReduxStore) => {
    return state.tasksList.tasksData.find((task) => task.id === mapTaskId(id));
  });

  const defaultFormValues: TaskFormType = {
    taskName: editedTask?.name || '',
    info: editedTask?.info || '',
    isImportant: editedTask?.isImportant || false,
  };

  const { handleSubmit, control, setValue } = useForm<TaskFormType>({
    defaultValues: defaultFormValues,
    resolver: yupResolver(validationSchema),
  });

  const { onTaskNameChange, onTaskInfoChange, onIsImportantChange } = getTaskFormHandlers(setValue);

  function submitHandler(data: TaskFormType) {
    if (id) {
      dispatch(
        changeDataTask({
          id: id,
          ...data,
          name: data.taskName, // потому что в типах именно name
        })
      );
    } else {
      dispatch(
        addTask({
          ...data,
          name: data.taskName, // потому что в типах именно name
        })
      );
    }
    navigate('/', { replace: true });
  }

  return (
    <PageContainer>
      <header className={styles.header}>Todo List | {id ? 'EDIT TASK' : 'ADD TASK'}</header>
      <form className={styles['task-form']} onSubmit={handleSubmit(submitHandler)}>
        <Controller
          control={control}
          name="taskName"
          render={({ field, fieldState: { error } }) => (
            <div className="controller-container">
              <TextField
                label={'Task name'}
                value={field.value || defaultFormValues.taskName}
                onChange={onTaskNameChange}
                containerClassName={error?.message ? 'invalid' : ''}
                inputClassName={error?.message ? `${styles['invalid-input']}` : `${styles.input}`}
              />
              <div className={styles['invalid-feedback']}>{error?.message}</div>
            </div>
          )}></Controller>

        <Controller
          control={control}
          name="info"
          render={({ field, fieldState: { error } }) => (
            <div className="controller-container">
              <TextField
                label={'What to do (description)'}
                value={field.value || defaultFormValues.info}
                onChange={onTaskInfoChange}
                containerClassName={error?.message ? 'invalid' : ''}
                inputClassName={error?.message ? `${styles['invalid-input']}` : `${styles.input}`}
              />
              <div className={styles['invalid-feedback']}>{error?.message}</div>
            </div>
          )}></Controller>

        {editedTask?.isCompleted ? (
          <></>
        ) : (
          <Controller
            control={control}
            name="isImportant"
            render={({ field }) => (
              <Checkbox
                checked={field.value || defaultFormValues.isImportant}
                label={'Important'}
                onChange={onIsImportantChange}
                containerClassName={styles['input-container']}
              />
            )}></Controller>
        )}

        <button className={styles['button']}>{id ? 'EDIT TASK' : 'ADD TASK'}</button>
        <button type="button" className={styles['button']} onClick={() => navigate('/', { replace: true })}>
          Back
        </button>
      </form>
    </PageContainer>
  );
}

export const MemoTaskForm = memo(TaskForm);
