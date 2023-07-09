import React from 'react';
import racer from '../../assets/racer.png';
import Button from '../../components/button/Button';

const Login = () => {
  return (
    <div className="flex flex-row h-screen">
      <div className="w-1/2">
        <img
          src={racer}
          alt="image not found"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <div className="max-w-[500px]">
          <h2 className="text-2xl text-[#AF9778] text-center">
            RACE PLATFORMA
          </h2>
          <p className="text-16px text-[#A6A7AD] mt-4 text-center">
            Welcome back! Please Login to your account.
          </p>
          <form className="mt-6">
            <input
              type="text"
              name="Username"
              className="placeholder:text-[#43425D] p-[10px] border-b-2 w-full mb-[15px] focus:border-[#43425D] outline-none"
              placeholder="Username"
            />

            <input
              type="password"
              name="password"
              className="placeholder:text-[#43425D] p-[10px] border-b-2 w-full focus:border-[#43425D] outline-none"
              placeholder="Password"
            />
            <div className="flex justify-between mt-[25px]">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="rememberMe"
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
            <div className="mt-[40px] flex justify-between">
              <Button
                text="Login"
                className="flex items-center justify-center h-[50px] w-[180px] rounded-sm bg-[#5ca595] text-[#ffffff] text-[20px]"
              />
              <Button
                text="Sign up"
                className="flex items-center justify-center h-[50px] w-[180px] rounded-sm border-2 border-solid border-[#5ca595] text-[#5ca595] text-[20px]"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
