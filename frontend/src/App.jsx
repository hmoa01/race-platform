import Navbar from './components/navbar/Navbar';
import Login from './pages/Login/Login';
import { Outlet } from 'react-router-dom';
import axios from 'axios';
import './App.css';

axios.defaults.baseURL = 'http://localhost:4000/';

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Login />
    </>
  );
}

export default App;
