import './Sidebar.css';

import { BsCalendarWeek } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import React from 'react';
import { RiBarChartFill } from 'react-icons/ri';

const Sidebar = () => {
  let user = JSON.parse(localStorage.getItem('rp_user'));

  return (
    <div className="flex absolute flex-col w-[14%] h-screen opacity-80 left-0 top-0 bg-[#5CA495] ">
      <h2 className="mt-5 text-2xl px-6 text-[#fff]">RACE PLATFORM</h2>
      <div className="absolute top-[70px] w-full">
        <NavLink to={`/dashboard`} className="text-white text-lg flex gap-2 relative items-center px-6 py-4" end>
          <div className="w-[7px] h-full hidden absolute left-0 top-0 bg-[#AF9778]"></div>
          <div className="flex gap-2 items-center w-full">
            <RiBarChartFill />
            Dashboard
          </div>
        </NavLink>
        <NavLink to={`/dashboard/race/`} className="text-white text-lg flex gap-2 relative items-center px-6 py-4">
          <div className="w-[7px] h-full hidden absolute left-0 top-0 bg-[#AF9778]"></div>
          <div className="flex gap-2 items-center w-full">
            <RiBarChartFill />
            Race
          </div>
        </NavLink>
        <NavLink
          to={`/dashboard/contestants/`}
          className="text-white text-lg flex gap-2 relative items-center px-6 py-4"
        >
          <div className="w-[7px] h-full hidden absolute left-0 top-0 bg-[#AF9778]"></div>
          <div className="flex gap-2 items-center w-full">
            <RiBarChartFill />
            Contestants
          </div>
        </NavLink>
        <NavLink to={`/dashboard/calendar/`} className="text-white text-lg flex gap-2 relative items-center px-6 py-4">
          <div className="w-[7px] h-full hidden absolute left-0 top-0 bg-[#AF9778]"></div>
          <div className="flex gap-2 items-center w-full">
            <BsCalendarWeek />
            Calendar
          </div>
        </NavLink>{' '}
      </div>
    </div>
  );
};

export default Sidebar;
