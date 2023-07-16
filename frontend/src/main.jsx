import './index.css';
import 'react-toastify/dist/ReactToastify.min.css';

import AppRouter from './AppRouter';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import store from './store/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer position="top-center" autoClose={3500} />
    <Provider store={store}>
      <RouterProvider router={AppRouter()} />
    </Provider>
  </React.StrictMode>
);
