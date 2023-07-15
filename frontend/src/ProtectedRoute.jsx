import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ user, children }) => {
  const navigation = useNavigate();

  useEffect(() => {
    if (!user) {
      return navigation('/');
    }
    if (user) {
      return navigation(`/dashboard/${user.role}`);
    }
  }, []);

  return children;
};

export default ProtectedRoute;
