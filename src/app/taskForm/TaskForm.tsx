import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { memo, useState } from 'react';
import style from './TaskForm.module.css';
import { Checkbox, PageContainer, TextField } from 'src/components/index';
import { changeTask } from 'src/slices/tasksList/tasksList.slice';
import { ReduxStore } from 'types/redux/redux';
import { useTasksSlice } from 'src/slices/tasksList/tasks.hooks';

function TaskForm() {
  const { id } = useParams();
  const editedTask = useSelector((state: ReduxStore) => {
    return state.tasksList.tasksData.find((task) => task.id === Number(id));
  });
  const [taskName, setTaskName] = useState(editedTask?.name || '');
  const [taskDescr, setTaskDescr] = useState(editedTask?.info || '');
  const [isImportant, setIsImportant] = useState(editedTask?.isImportant || false);

  const { addTask, dispatch } = useTasksSlice();

  const navigate = useNavigate();

  function clickHandler(e: React.FormEvent) {
    e.preventDefault();
    if (id) {
      dispatch(
        changeTask({
          id: id,
          name: taskName,
          info: taskDescr,
          isImportant: isImportant,
        })
      );
    } else {
      dispatch(addTask({ name: taskName, info: taskDescr, isImportant: isImportant }));
    }
    navigate('/', { replace: true });
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

export const MemoTaskForm = memo(TaskForm);
