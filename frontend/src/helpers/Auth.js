export const isAuth = () => {
  let user = JSON.parse(localStorage.getItem('rp_user'));
  if (user) {
    return true;
  }
  return false;
};
