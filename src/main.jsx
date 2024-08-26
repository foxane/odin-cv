import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { Analytics } from '@vervel/analytics/react';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Analytics />
  </StrictMode>,
);
