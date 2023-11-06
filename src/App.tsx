import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { TaskList, TaskForm } from './pages/index';
import { store } from './store/store';

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/TaskForm" element={<TaskForm />} />
          <Route path="/TaskForm/:id" element={<TaskForm />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
