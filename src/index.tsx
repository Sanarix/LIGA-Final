import { createRoot } from 'react-dom/client';
import { initializeApp } from 'firebase/app';
import App from './App';
import { firebaseConfig } from 'src/firebase.config.js';

const app = initializeApp(firebaseConfig);
const container = document.getElementById('root');
const root = createRoot(container as HTMLElement);

root.render(<App />);
