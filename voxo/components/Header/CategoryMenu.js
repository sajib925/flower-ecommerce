import React from "react";
import {BiChevronDown} from "react-icons/bi";

const CategoryMenu = () => {
  return (
    <div className="hidden sm:block ml-[20px] 2xl:ml-[30px]">
      <button className="btn flex items-center py-[6px] px-[12px] md:gap-x-[5px] md:py-[9px] md:px-[18px] relative">
        All categories
        <span className="hidden xl:block">
          <BiChevronDown size={22} />
        </span>
        <div className="w-10 h-10 bg-slate-800 absolute top-0 left-0 hidden"></div>
      </button>
    </div>
  );
};

export default CategoryMenu;
