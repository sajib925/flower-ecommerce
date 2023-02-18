import React from "react";
import {BiSearch} from "react-icons/bi";
import {IoMdClose} from "react-icons/io";

const SearchPopup = ({handleSearchPopup}) => {
  return (
    <div className="flex items-center w-full border border-search-border bg-white">
      <span className="py-[6px] px-[12px] text-search-icon">
        <BiSearch size={20} />
      </span>
      <input type="text" placeholder="Search here.." className="w-[100%] py-[14px] px-[30px] text-[14px] outline-none" />
      <span className="py-[6px] px-[12px] text-search-icon" onClick={handleSearchPopup}>
        <IoMdClose size={20}  />
      </span>
    </div>
  );
};

export default SearchPopup;
