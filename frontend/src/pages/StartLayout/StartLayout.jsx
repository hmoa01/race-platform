import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const StartLayout = () => {
  const navigation = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('rp_user'));
    navigation(`/dashboard/${user.role}`);
  });
  return (
    <main>
      <Outlet />
    </main>
  );
};
export default StartLayout;
