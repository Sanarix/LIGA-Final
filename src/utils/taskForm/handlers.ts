import { ChangeEvent } from 'react';
import { UseFormSetValue } from 'react-hook-form';
import { TaskFormType } from 'types/taskForm/TaskForm.types';

type taskFormHandlers = {
  onTaskNameChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onTaskInfoChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onIsImportantChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const getTaskFormHandlers: (setValue: UseFormSetValue<TaskFormType>) => taskFormHandlers = (setValue) => {
  const onTaskNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue('taskName', e.target.value);
  };
  const onTaskInfoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue('info', e.target.value);
  };
  const onIsImportantChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue('isImportant', e.target.checked);
  };

  return { onTaskNameChange, onTaskInfoChange, onIsImportantChange };
};
