import React from 'react';
import { Navigate } from 'react-router-dom';

function AuthGuarding({ children }) {
  function isLoaggedUser() {
    let user = JSON.parse(localStorage.getItem('rp_user'));
    if (user) {
      return true;
    }
  }

  return isLoaggedUser() ? children : <Navigate to="/login" />;
}

export default AuthGuarding;
