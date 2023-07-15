import React from 'react';
import { NavLink } from 'react-router-dom';
import { RiBarChartFill } from 'react-icons/ri';
import { BsCalendarWeek } from 'react-icons/bs';
import './Sidebar.css';

const Sidebar = () => {
  let user = JSON.parse(localStorage.getItem('rp_user'));
  let link;
  if (user.role === 'superadmin') {
    link = 'superadmin';
  } else if (user.role === 'admin') {
    link = 'admin';
  } else {
    link = 'user';
  }

  return (
    <div className="flex absolute flex-col w-[14%] h-screen opacity-80 left-0 top-0 bg-[#5CA495] ">
      <h2 className="mt-5 text-2xl px-6 text-[#fff]">RACE PLATFORM</h2>

      {user.role === 'user' ? (
        <div className="absolute top-[70px] w-full">
          <NavLink
            to={`/dashboard/${link}/race/`}
            className="text-white text-lg flex gap-2 relative items-center px-6 py-4"
          >
            <div className="w-[7px] h-full hidden absolute left-0 top-0 bg-[#AF9778]"></div>
            <div className="flex gap-2 items-center w-full">
              <RiBarChartFill />
              Race
            </div>
          </NavLink>
          <NavLink
            to={`/dashboard/${link}/calendar/`}
            className="text-white text-lg flex gap-2 relative items-center px-6 py-4"
          >
            <div className="w-[7px] h-full hidden absolute left-0 top-0 bg-[#AF9778]"></div>
            <div className="flex gap-2 items-center w-full">
              <BsCalendarWeek />
              Calendar
            </div>
          </NavLink>{' '}
        </div>
      ) : (
        <div className="absolute top-[70px] w-full">
          <NavLink
            to={`/dashboard/${link}/dashboard/`}
            className="text-white text-lg flex gap-2 relative items-center px-6 py-4"
          >
            <div className="w-[7px] h-full hidden absolute left-0 top-0 bg-[#AF9778]"></div>
            <div className="flex gap-2 items-center w-full">
              <RiBarChartFill />
              Dashboard
            </div>
          </NavLink>
          <NavLink
            to={`/dashboard/${link}/race/`}
            className="text-white text-lg flex gap-2 relative items-center px-6 py-4"
          >
            <div className="w-[7px] h-full hidden absolute left-0 top-0 bg-[#AF9778]"></div>
            <div className="flex gap-2 items-center w-full">
              <RiBarChartFill />
              Race
            </div>
          </NavLink>
          <NavLink
            to={`/dashboard/${link}/calendar/`}
            className="text-white text-lg flex gap-2 relative items-center px-6 py-4"
          >
            <div className="w-[7px] h-full hidden absolute left-0 top-0 bg-[#AF9778]"></div>
            <div className="flex gap-2 items-center w-full">
              <BsCalendarWeek />
              Calendar
            </div>
          </NavLink>{' '}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
