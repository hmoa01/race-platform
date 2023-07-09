import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Provider } from 'react-redux';

import axios from 'axios';
import './index.css';
import store from './store/store.js';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

axios.defaults.baseURL = 'http://localhost:4000/';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    <ToastContainer position="top-center" autoClose={1000} />
  </React.StrictMode>
);
