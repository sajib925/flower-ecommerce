import React from "react";
import {FiDollarSign} from "react-icons/fi";
import {TbWorld} from "react-icons/tb";
import {BiSearch} from "react-icons/bi";
import {BiUser} from "react-icons/bi"
import {IoSettingsOutline} from "react-icons/io5";
import {CgShoppingCart} from "react-icons/cg"

const IconsMenu = () => {
  return (
    <ul className="flex items-center gap-[20px]">
      <li className="dropdown cursor-pointer">
        <a href="/" className="text-secondary">
          <FiDollarSign size={22} />
        </a>
        <div className="dropdown-menu"></div>
      </li>
      <li className="dropdown cursor-pointer">
        <a href="/" className="text-secondary">
          <TbWorld size={20} />
        </a>
        <div className="dropdown-menu"></div>
      </li>
      <li className="dropdown cursor-pointer">
        <div className="">
          <BiSearch size={22} />
        </div>
        <div className="dropdown-menu"></div>
      </li>
      <li className="dropdown cursor-pointer">
        <div className="">
          <BiUser size={22} />
        </div>
        <div className="dropdown-menu"></div>
      </li>
      <li className="dropdown cursor-pointer">
        <div className="">
          <IoSettingsOutline size={22} />
        </div>
        <div className="dropdown-menu"></div>
      </li>
      <li className="dropdown cursor-pointer">
        <button className="flex items-center gap-[18px] btn py-[14px] px-[30px]">
          <CgShoppingCart />
          <span>$0.00</span>
        </button>
        <div className="dropdown-menu"></div>
      </li>
    </ul>
  );
};

export default IconsMenu;
