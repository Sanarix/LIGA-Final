import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { Checkbox, PageContainer, TextField } from '../../components/index';
import { addTask, changeTask } from '../../store/slices/tasksList/tasksList.slice';
import { RootState } from '../../store/store';
import style from './TaskForm.module.css';

export function TaskForm() {
  const { id } = useParams();
  const editedTask = useSelector((state: RootState) => {
    return state.tasks.taskList.find((task) => task.id === Number(id));
  });
  const dispatch = useDispatch();
  const [taskName, setTaskName] = useState(editedTask?.name || '');
  const [taskDescr, setTaskDescr] = useState(editedTask?.info || '');
  const [isImportant, setIsImportant] = useState(editedTask?.isImportant || false);

  function clearForm() {
    setTaskName('');
    setTaskDescr('');
    setIsImportant(false);
  }

  function clickHandler(e: React.FormEvent) {
    e.preventDefault();
    if (id) {
      dispatch(
        changeTask({
          id: Number(id),
          name: taskName,
          info: taskDescr,
          isImportant: isImportant,
        })
      );
    } else {
      dispatch(addTask({ name: taskName, info: taskDescr, isImportant: isImportant }));
      clearForm();
    }
  }

  return (
    <PageContainer>
      <header className={style.header}>Todo List | {id ? 'EDIT TASK' : 'ADD TASK'}</header>
      <form className="task-form" onSubmit={(e) => clickHandler(e)}>
        <TextField
          label={'Task name'}
          value={taskName}
          onChange={(e) => {
            setTaskName(e.target.value);
          }}
        />
        <TextField
          label={'What to do (description)'}
          value={taskDescr}
          onChange={(e) => {
            setTaskDescr(e.target.value);
          }}
        />
        <Checkbox
          label={'Important'}
          onChange={() => {
            setIsImportant((prev) => !prev);
          }}
        />
        <button className={style['add-button']}>{id ? 'EDIT TASK' : 'ADD TASK'}</button>
      </form>
    </PageContainer>
  );
}
