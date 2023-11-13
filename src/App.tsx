import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { MemoTaskList, MemoTaskForm } from 'src/app/index';
import { store } from 'src/store';
import './App.css';

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MemoTaskList />} />
          <Route path="/TaskForm" element={<MemoTaskForm />} />
          <Route path="/TaskForm/:id" element={<MemoTaskForm />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
