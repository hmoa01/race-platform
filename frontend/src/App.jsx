import './App.css';

import AppRouter from './AppRouter';
import { BrowserRouter } from 'react-router-dom';
import { restoreUser } from './store/userSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(restoreUser(JSON.parse(localStorage.getItem('rp_user'))));
  }, []);
  return (
    <BrowserRouter>
      <AppRouter></AppRouter>;
    </BrowserRouter>
  );
}

export default App;
