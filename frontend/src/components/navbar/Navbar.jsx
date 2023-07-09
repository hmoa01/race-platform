import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { IoNotifications } from 'react-icons/io5';
import { MdKeyboardArrowDown } from 'react-icons/md';
import Sidebar from '../sidebar/Sidebar';

const Navbar = () => {
  return (
    <div className="relative h-screen">
      <div className="flex h-[70px] bg-[#AF9778] items-center justify-between ">
        <div className="flex ml-[15%] text-white gap-1 items-center">
          <BiSearch />
          <p>Search race</p>
        </div>
        <div className="flex gap-2 items-center">
          <IoNotifications className="text-white text-xl" />
          <div className="h-8 w-[1px] bg-white"></div>
          <div className="flex items-center gap-[2px]">
            <p>Sueper Admin</p>
            <MdKeyboardArrowDown className="text-xl" />
          </div>
          <img alt="profile" src="" className="w-8 h-8 rounded-full mr-2" />
        </div>
      </div>
      <Sidebar />
    </div>
  );
};

export default Navbar;
