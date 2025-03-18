import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles.css';
import Menu from './components/Menu/Menu';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Menu />
  </React.StrictMode>
);