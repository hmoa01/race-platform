import * as Yup from 'yup';

import Button from '../../components/button/Button';
import React from 'react';
import racer from '../../assets/racer.png';
import { useFormik } from 'formik';

const ResetPasswordPage = () => {
  const formik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      password: Yup.string().min(5).required('Password is required!'),
      verifyPassword: Yup.string()
        .required('Confirm password is required!')
        .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    }),
    enableReinitialize: true,
    onSubmit: async (values) => {},
  });

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="hidden md:block md:w-1/2">
        <img src={racer} alt="image not found" className="h-full w-full object-cover" />
      </div>
      <div className="lg:w-1/2 pt-[80px] justify-center lg:mt-[5%] lg:p md:w-1/2  flex">
        <div className="lg:w-[80%]">
          <h2 className="text-2xl text-[#AF9778] text-center">RACE PLATFORMA</h2>
          <p className="text-16px text-[#A6A7AD] mt-4 text-center">Enter your new password to change it.</p>
          <form className="flex flex-col items-center lg:flex mt-6">
            <input
              type="password"
              name="password"
              className="placeholder:text-[#43425D] p-[10px] border-b-2 w-[80%] lg:w-[80%] mb-[15px] focus:border-[#43425D] outline-none"
              placeholder="Enter new password"
            />
            <input
              type="confirmPassword"
              name="confirmPassword"
              className="placeholder:text-[#43425D] p-[10px] border-b-2 w-[80%] lg:w-[80%] mb-[15px] focus:border-[#43425D] outline-none"
              placeholder="Repeat password"
            />
            <Button
              type="submit"
              text="Send request"
              className="flex items-center justify-center  mt-[35px] h-[40px] w-[100px] lg:h-[50px] lg:w-[180px] rounded-sm bg-[#5ca595] text-[#ffffff] text-[20px]"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
