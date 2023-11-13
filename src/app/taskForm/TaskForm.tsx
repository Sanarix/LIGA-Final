import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { memo, useState, ChangeEvent } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import style from './TaskForm.module.css';
import type { TaskFormType } from './TaskForm.types';
import { validationSchema } from './TaskFormValidationSchema';
import { Checkbox, PageContainer, TextField } from 'src/components';
import { ReduxStore } from 'types/redux/redux';
import { useTasksSlice } from 'src/slices/tasksList/tasks.hooks';

function TaskForm() {
  const { id } = useParams();
  const editedTask = useSelector((state: ReduxStore) => {
    return state.tasksList.tasksData.find((task) => task.id === Number(id));
  });

  const { addTask, changeDataTask, dispatch } = useTasksSlice();

  const navigate = useNavigate();

  const defaultFormValues: TaskFormType = {
    taskName: editedTask?.name || '',
    info: editedTask?.info || '',
    isImportant: editedTask?.isImportant || false,
  };

  const { handleSubmit, control, setValue } = useForm<TaskFormType>({
    defaultValues: defaultFormValues,
    resolver: yupResolver(validationSchema),
  });

  const onTaskNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue('taskName', e.target.value);
  };
  const onTaskInfoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue('info', e.target.value);
  };
  const onIsImportantChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue('isImportant', e.target.checked);
  };

  function clickHandler(data: TaskFormType) {
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
      <header className={style.header}>Todo List | {id ? 'EDIT TASK' : 'ADD TASK'}</header>
      <form className="task-form" onSubmit={handleSubmit(clickHandler)}>
        <Controller
          control={control}
          name="taskName"
          render={({ field, fieldState: { error } }) => (
            <TextField label={'Task name'} value={field.value} onChange={onTaskNameChange} />
          )}></Controller>

        <Controller
          control={control}
          name="info"
          render={({ field, fieldState: { error } }) => (
            <TextField label={'What to do (description)'} value={field.value} onChange={onTaskInfoChange} />
          )}></Controller>

        <Controller
          control={control}
          name="isImportant"
          render={({ field, fieldState: { error } }) => (
            <Checkbox checked={field.value} label={'Important'} onChange={onIsImportantChange} />
          )}></Controller>

        <button className={style['add-button']}>{id ? 'EDIT TASK' : 'ADD TASK'}</button>
      </form>
    </PageContainer>
  );
}

export const MemoTaskForm = memo(TaskForm);
