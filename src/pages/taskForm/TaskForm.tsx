import { useParams } from 'react-router-dom';
import { Checkbox, PageContainer, TextField } from '../../components/index';
import style from './TaskForm.module.css';

export function TaskForm() {
  const { id } = useParams();
  return (
    <PageContainer>
      <header className={style.header}>Todo List | {id ? 'EDIT TASK' : 'ADD TASK'}</header>
      <form className="task-form">
        <TextField label={'Task name'} />
        <TextField label={'What to do (description)'} />
        <Checkbox label={'Important'} />
        <button className={style['add-button']}>{id ? 'EDIT TASK' : 'ADD TASK'}</button>
      </form>
    </PageContainer>
  );
}
