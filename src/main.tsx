import React from 'react';
import ReactDOM from 'react-dom/client';

import AppWrapper from './AppWrapper';
import './assets/css/index.css';

const root = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);
