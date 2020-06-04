import React from 'react';
import { ToastContainer } from 'react-toastify';
import './App.css';

import Routes from './routes';

function App() {
  return (
    <div>
      <ToastContainer autoClose={4000} />
      <Routes />
    </div>
  );
}

export default App;
