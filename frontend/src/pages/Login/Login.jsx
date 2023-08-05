import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import Button from '../../components/button/Button';
import { FcGoogle } from 'react-icons/fc';
import UserService from '../../services/userServices';
import racer from '../../assets/racer.png';
import { storeUser } from '../../store/userSlice';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import userService from '../../services/userServices';

const Login = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  const formik = useFormik({
    initialValues: {
      userName: '',
      password: '',
    },

    enableReinitialize: true,

    onSubmit: async (values) => {
      if (rememberMe) {
        localStorage.setItem('remember', JSON.stringify(values));
      }
      try {
        let res = await userService.loginUser(values);
        localStorage.setItem('rp_token', res.data.token);
        dispatch(storeUser(res.data.user));
        toast.success('Logged in successfully!');
        navigation(`/dashboard`);
      } catch (error) {
        error.handleGlobally();
      }
    },
  });

  useEffect(() => {
    const rememberUser = JSON.parse(localStorage.getItem('remember'));

    if (rememberUser) {
      formik.setValues(rememberUser);
      setRememberMe(true);
    }
  }, []);

  const handleGoogleLogin = async (body) => {
    try {
      let res = await UserService.loginWithGoogle(body);
      let { ...user } = res.data.user;
      let newUser = user;
      localStorage.setItem('rp_token', res.data.token);
      dispatch(storeUser(newUser));
      toast.success('Logged in successfully!');
      navigation(`/dashboard`);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="hidden md:block md:w-1/2">
        <img src={racer} alt="image not found" className="h-full w-full object-cover" />
      </div>
      <div className="lg:w-1/2 pt-[80px] justify-center lg:mt-[5%] lg:p md:w-1/2  flex">
        <div className="lg:w-[80%]">
          <h2 className="text-2xl text-[#AF9778] text-center">RACE PLATFORMA</h2>
          <p className="text-16px text-[#A6A7AD] mt-4 text-center">Welcome back! Please Login to your account.</p>
          <form className="flex flex-col items-center lg:flex mt-6" onSubmit={formik.handleSubmit}>
            <input
              type="text"
              onChange={formik.handleChange}
              value={formik.values.userName}
              name="userName"
              className="placeholder:text-[#43425D] p-[10px] border-b-2  w-[80%] lg:w-[80%] mb-[15px] focus:border-[#43425D] outline-none"
              placeholder="Username"
            />

            <input
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              className="placeholder:text-[#43425D] p-[10px] border-b-2 w-[80%] lg:w-[80%]  focus:border-[#43425D] outline-none"
              placeholder="Password"
            />
            <div className="flex justify-between w-[80%] mt-[25px]">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="rememberMe"
                  value={rememberMe}
                  onChange={handleRememberMe}
                  onSelect={() => handleRememberMe}
                  id="rememberMe"
                  className="mr-2"
                />
                <label htmlFor="rememberMe" className="flex items-center">
                  <span className="text-[#43425D]">Remember me</span>
                </label>
              </div>
              <div>
                <button className="text-[#43425D]">Forgot Password</button>
              </div>
            </div>
            <div className="mt-[40px] flex justify-between w-[80%]">
              <Button
                type="submit"
                text="Login"
                className="flex items-center justify-center h-[40px] w-[100px] lg:h-[50px] lg:w-[180px] rounded-sm bg-[#5ca595] text-[#ffffff] text-[20px]"
              />
              <Link to="/register">
                <Button
                  type="button"
                  text="Sign up"
                  className="flex items-center justify-center h-[40px] w-[100px] lg:h-[50px] lg:w-[180px] rounded-sm border-2 border-solid border-[#5ca595] text-[#5ca595] text-[20px]"
                />
              </Link>
            </div>
          </form>

          <div className="w-full flex justify-center">
            <GoogleOAuthProvider clientId="809946617269-lheck7cnr8m5l2pnaerju8hfkfs8djjr.apps.googleusercontent.com">
              <GoogleLogin
                onSuccess={(credentialResponse) => handleGoogleLogin({ token: credentialResponse.credential })}
                onError={(error) => console.log(error)}
              />
            </GoogleOAuthProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
