import * as Yup from 'yup';

import RaceServices from '../../services/RaceServices';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import { useState } from 'react';

const CreateRacePage = () => {
  const [welcomePackage, setWelcomePackage] = useState(false);

  const handleWelcomePackage = () => {
    setWelcomePackage((prev) => !prev);
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      dateOfRace: '',
      location: '',
      description: '',
      startTime: '',
      endTime: '',
      welcomePackage: welcomePackage,
    },

    validationSchema: Yup.object({
      name: Yup.string().required('Race name is required'),
      dateOfRace: Yup.date().required('Date of race is required'),
      location: Yup.string().required('Location is required'),
      description: Yup.string().required('Description is required'),
      startTime: Yup.string().required('Start time is required'),
      endTime: Yup.string().required('End time is required'),
      welcomePackage: Yup.boolean(),
    }),

    enableReinitialize: true,

    onSubmit: async (values) => {
      try {
        let res = await RaceServices.createRace(values);
        console.log('res');
        console.log(res);
        if (res.status === '200') {
          toast.success('Race is created!');
        } else {
          toast.warning('Something went wrong!');
        }
      } catch (error) {
        console.log(error);
        error.handleGlobally();
      }
    },
  });

  const showError = (name) => formik.errors[name] && formik.touched[name] && formik.errors[name];

  return (
    <div className="lg:w-[80%] mt-4">
      <h2 className="text-xl text-[#AF9778] text-center">CREATE RACE</h2>
      <p className="text-16px text-[#A6A7AD] mt-2 text-center">Please complete to create race.</p>
      <form className="flex flex-col items-center lg:flex mt-3 gap-2" onSubmit={formik.handleSubmit}>
        <div className="flex flex-col w-full items-center gap-1">
          <label>
            Race name <span className="w-full text-[14px] text-red-600">{showError('name')}</span>
          </label>

          <input
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
            name="name"
            className="placeholder:text-[#43425D] p-[5px] border-b-2 w-[70%]  focus:border-[#43425D] outline-none"
            placeholder="Race name"
          />
        </div>
        <div className="flex w-full flex-col  items-center gap-1">
          <label>
            Date of race <span className="w-full text-[14px] text-red-600">{showError('dateOfRace')}</span>
          </label>
          <input
            type="date"
            onChange={formik.handleChange}
            value={formik.values.dateOfRace}
            name="dateOfRace"
            className="placeholder:text-[#43425D] p-[5px] border-b-2 w-[70%] focus:border-[#43425D] outline-none"
            placeholder="Date of race"
          />
        </div>
        <div className="flex w-full flex-col  items-center gap-3">
          <label>
            Location <span className="w-full text-[14px] text-red-600">{showError('location')}</span>
          </label>
          <input
            type="text"
            onChange={formik.handleChange}
            value={formik.values.location}
            name="location"
            className="placeholder:text-[#43425D] p-[5px] border-b-2  w-[70%]  focus:border-[#43425D] outline-none"
            placeholder="Location"
          />
        </div>
        <div className="flex w-full flex-col  items-center gap-3">
          <label>
            Description <span className="w-full text-[14px] text-red-600">{showError('description')}</span>
          </label>
          <input
            type="text"
            onChange={formik.handleChange}
            value={formik.values.description}
            name="description"
            className="placeholder:text-[#43425D] p-[5px] border-b-2  w-[70%]  focus:border-[#43425D] outline-none"
            placeholder="Description"
          />
        </div>
        <div className="flex w-full flex-col  items-center gap-3">
          <label>
            Start time <span className="w-full text-[14px] text-red-600">{showError('startTime')}</span>
          </label>
          <input
            type="text"
            name="startTime"
            value={formik.values.startTime}
            onChange={formik.handleChange}
            className="placeholder:text-[#43425D] p-[5px]  border-b-2 w-[70%]  focus:border-[#43425D] outline-none"
            placeholder="Start time"
          />
        </div>
        <div className="flex w-full flex-col  items-center gap-3">
          <label>
            End time <span className="w-full text-[14px] text-red-600">{showError('endTime')}</span>
          </label>
          <input
            type="text"
            name="endTime"
            value={formik.values.endTime}
            onChange={formik.handleChange}
            className="placeholder:text-[#43425D] p-[5px]  border-b-2 w-[70%]  focus:border-[#43425D] outline-none"
            placeholder="End time"
          />
        </div>
        <div className="flex justify-start items-center gap-3">
          <div className="flex">
            <input
              type="checkbox"
              name="welcomePackage"
              value={welcomePackage}
              onChange={handleWelcomePackage}
              id="welcomePackage"
              className="mr-2 cursor-pointer"
            />
            <label className="flex ">
              <span className="text-[#43425D]">Welcome package</span>
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="text-[20px] border border-[#8281aa] rounded-md p-1 text-[#AF9778] bottom-[30px]  cursor-pointer my-2 hover:text-violet-300 hover:transition-all hover:duration-300"
        >
          CREATE RACE
        </button>
      </form>
    </div>
  );
};

export default CreateRacePage;
