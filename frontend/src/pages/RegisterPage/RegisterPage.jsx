import { useState } from 'react';
import racer from '../../assets/racer.png';
import Button from '../../components/button/Button';
import { useFormik } from 'formik';
import userService from '../../services/userServices';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { PiEyeBold, PiEyeClosedBold } from 'react-icons/pi';

const Register = () => {
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();
  const [viewPass, setViewPass] = useState(true);
  const [viewComfPass, setViewComfPass] = useState(true);

  const hanldeAgree = () => {
    setAgree(!agree);
  };
  const handleViewPass = () => {
    return setViewPass(!viewPass);
  };
  const handleViewComfPass = () => {
    return setViewComfPass(!viewComfPass);
  };

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      userName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },

    validationSchema: Yup.object({
      firstName: Yup.string().required('First name is required'),
      lastName: Yup.string().required('Last name is required'),
      userName: Yup.string().required('Username is required'),
      email: Yup.string().required('Email is required'),
      password: Yup.string().required('Password is required'),
      confirmPassword: Yup.string()
        .required('Field is required')
        .test('passwords-match', 'Passwords must match', function (value) {
          return this.parent.password === value;
        }),
    }),

    enableReinitialize: true,

    onSubmit: async (values) => {
      try {
        let res = await userService.registerUser(values);
        if (res.status === 200) {
          toast.success('Registration successful', { autoClose: 1000 });
          setTimeout(() => navigate('/'), 2000);
        } else {
          toast.warning('User already registered', { autoClose: 1000 });
        }
      } catch (error) {
        console.log(error);
      }
      formik.resetForm();
    },
  });

  const showError = (name) =>
    formik.errors[name] && formik.touched[name] && formik.errors[name];

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="hidden md:block md:w-1/2">
        <img
          src={racer}
          alt="image not found"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="lg:w-1/2 pt-[80px] justify-center lg:mt-[5%] lg:p md:w-1/2  flex">
        <div className="lg:w-[80%]">
          <h2 className="text-2xl text-[#AF9778] text-center">
            RACE PLATFORMA
          </h2>
          <p className="text-16px text-[#A6A7AD] mt-4 text-center">
            Please complete to create your account.
          </p>
          <form
            className="flex flex-col items-center lg:flex mt-6"
            onSubmit={formik.handleSubmit}
          >
            <div className="w-[80%] lg:flex lg:gap-8">
              <div className="w-full">
                <p className="w-full text-[14px] text-red-600">
                  {showError('firstName')}
                </p>
                <input
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                  name="firstName"
                  className="placeholder:text-[#43425D] p-[10px] border-b-2 w-full mb-[20px] focus:border-[#43425D] outline-none"
                  placeholder="First name"
                />
              </div>
              <div className="w-full">
                <p className="w-full text-[14px] text-red-600">
                  {showError('lastName')}
                </p>
                <input
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                  name="lastName"
                  className="placeholder:text-[#43425D] p-[10px] border-b-2 w-full mb-[20px] focus:border-[#43425D] outline-none"
                  placeholder="Last name"
                />
              </div>
            </div>
            <div className="w-full text-center ">
              <p className="w-full text-[14px] text-red-600">
                {showError('userName')}
              </p>
              <input
                type="text"
                onChange={formik.handleChange}
                value={formik.values.userName}
                name="userName"
                className="placeholder:text-[#43425D] p-[10px] border-b-2  w-[80%] lg:w-[80%] mb-[20px] focus:border-[#43425D] outline-none"
                placeholder="Username"
              />
            </div>
            <div className="w-full text-center ">
              <p className="w-full text-[14px] text-red-600">
                {showError('email')}
              </p>
              <input
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                name="email"
                className="placeholder:text-[#43425D] p-[10px] border-b-2  w-[80%] lg:w-[80%] mb-[20px] focus:border-[#43425D] outline-none"
                placeholder="Email"
              />
            </div>
            <div className="relative w-full text-center ">
              <p className="w-full text-[14px] text-red-600">
                {showError('password')}
              </p>
              <input
                type={`${viewPass ? 'password' : 'text'}`}
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                className="placeholder:text-[#43425D] p-[10px]  border-b-2 w-[80%] lg:w-[80%]  mb-[20px] focus:border-[#43425D] outline-none"
                placeholder="Password"
              />
              <button
                type="button"
                className="absolute text-[20px] text-[#8281aa] bottom-[30px]  right-8 md:right-7 lg:right-14 2xl:right-20 cursor-pointer  hover:text-violet-300 hover:transition-all hover:duration-300"
                onClick={handleViewPass}
              >
                {viewPass ? <PiEyeBold /> : <PiEyeClosedBold />}
              </button>
            </div>
            <div className="relative w-full text-center ">
              <p className="w-full text-[14px] text-red-600">
                {showError('confirmPassword')}
              </p>
              <input
                type={`${viewComfPass ? 'password' : 'text'}`}
                name="confirmPassword"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                className="placeholder:text-[#43425D] p-[10px]  border-b-2 w-[80%] lg:w-[80%]  focus:border-[#43425D] outline-none"
                placeholder="Confirm Password"
              />
              <button
                type="button"
                className="absolute text-[20px] text-[#8281aa] bottom-[10px]  right-8 md:right-7 lg:right-14 2xl:right-20 cursor-pointer  hover:text-violet-300 hover:transition-all hover:duration-300"
                onClick={handleViewComfPass}
              >
                {viewComfPass ? <PiEyeBold /> : <PiEyeClosedBold />}
              </button>
            </div>

            <div className="w-[80%] flex justify-start mt-[25px]">
              <div className="flex">
                <input
                  type="checkbox"
                  name="agree"
                  value={agree}
                  onChange={hanldeAgree}
                  id="agree"
                  className="mr-2 cursor-pointer"
                />
                <label className="flex ">
                  <span className="text-[#43425D]">
                    I agree with terms and conditions
                  </span>
                </label>
              </div>
            </div>
            <div className="mt-[40px] flex">
              {agree ? (
                <Button
                  type="submit"
                  text="Sign up"
                  className="flex items-center justify-center h-[40px] w-[100px] lg:h-[50px] lg:w-[180px] rounded-sm bg-[#5ca595] hover:bg-[#387769] transition-all duration-300 text-[#ffffff] text-[20px]"
                />
              ) : (
                <Button
                  type="button"
                  text="Sign up"
                  className="flex items-center justify-center h-[40px] w-[100px] lg:h-[50px] lg:w-[180px] rounded-sm bg-[#7dddc8] text-[#ffffff] text-[20px]"
                />
              )}
            </div>
          </form>
          <div className="flex justify-center mt-8">
            <p className="w-80%">
              Already have an account ?{' '}
              <Link to="/">
                <span className="underline text-blue-600 hover:text-blue-800 transition-all duration-300">
                  Sign in
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
