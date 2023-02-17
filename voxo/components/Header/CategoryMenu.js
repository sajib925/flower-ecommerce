import React from "react";
import {BiChevronDown} from "react-icons/bi";

const CategoryMenu = () => {
  return (
    <div>
      <button className="btn flex items-center gap-x-[5px] py-[9px] px-[18px] relative drpdwnp">
        All categories
        <BiChevronDown size={22} />
        <div className="w-10 h-10 bg-slate-800 absolute top-0 left-0 hidden drpdwnc"></div>
      </button>
    </div>
  );
};

export default CategoryMenu;
