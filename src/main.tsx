import React from 'react';
import ReactDOM from 'react-dom/client';

import AppWrapper from './AppWrapper';
import './assets/css/index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);
