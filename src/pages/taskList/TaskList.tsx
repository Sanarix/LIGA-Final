import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { PageContainer, SearchInput } from '../../components/index';
import { RootState } from '../../store/store';
import { Task } from './task/Task';

export function TaskList() {
  const [searchText, setSearchText] = useState('');
  const data = useSelector((state: RootState) => {
    return state;
  });

  const navigate = useNavigate();

  return (
    <PageContainer className="task-list">
      <header className="header">
        <h1 className="">Todo List</h1>
        <form id="seacrh-from">
          <SearchInput
            onChange={function (text: string): void {
              setSearchText(text);
            }}
            value={searchText}
          />
        </form>
      </header>
      <div className="tasks-wrapper">
        {data.tasks.taskList.map((task, i) => {
          return (
            <Task key={i}>
              <p>{task.name}</p>
              <p>{task.info}</p>
              <button
                onClick={() => {
                  navigate(`/TaskForm/${task.id}`);
                }}>
                Edit
              </button>
            </Task>
          );
        })}
      </div>
      <button
        className="button"
        onClick={() => {
          navigate('/TaskForm');
        }}>
        Add Task
      </button>
    </PageContainer>
  );
}
