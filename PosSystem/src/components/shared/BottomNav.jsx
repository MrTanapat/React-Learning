import React from "react";
import { CiCircleMore } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { MdOutlineReorder, MdTableBar } from "react-icons/md";
import { BiSolidDish } from "react-icons/bi";

const BottomNav = () => {
  return (
    <div className="flexed bottom-0 left-0 right-0 bg-[#262626] p-2 h-16 flex justify-around">
      <button className="flex items-center justify-center text-[#f5f5f5] bg-[#343434] w-[200px] rounded-xl">
        <FaHome className="inline mr-4 size={20}" />
        Home
      </button>
      <button className="flex items-center justify-center text-[#ababab] w-[200px]">
        <MdOutlineReorder className="inline mr-4 size={20}" />
        Orders
      </button>
      <button className="flex items-center justify-center text-[#ababab] w-[200px]">
        <MdTableBar className="inline mr-4 size={20}" />
        Tables
      </button>
      <button className="flex items-center justify-center text-[#ababab] w-[200px]">
        <CiCircleMore className="inline mr-4 size={20}" />
        More
      </button>

      <button className="absolute bottom-4 bg-[#F6B100] text-[#f5f5f5] rounded-full p-3 items-center">
        <BiSolidDish size={30} />
      </button>
    </div>
  );
};

export default BottomNav;
