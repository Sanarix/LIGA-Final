import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageContainer, SearchInput } from '../../components/index';
import { Task } from './task/Task';

export function TaskList() {
  const [searchText, setSearchText] = useState('');
  const tasks = [{ name: 'task1' }, { name: 'task2' }, { name: 'task3' }, { name: 'task4' }, { name: 'task5' }];
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
        {tasks.map((task, i) => {
          return (
            <Task key={i}>
              <p>{task.name}</p>
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
