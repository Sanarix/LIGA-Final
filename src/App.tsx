import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TaskList, TaskForm } from './pages/index';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/TaskForm" element={<TaskForm />} />
        <Route path="/TaskForm/:id" element={<TaskForm />} />
      </Routes>
    </BrowserRouter>
  );
}
