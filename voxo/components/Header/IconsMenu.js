import React, {useState} from "react";
import {FiDollarSign} from "react-icons/fi";
import {TbWorld} from "react-icons/tb";
import {BiSearch} from "react-icons/bi";
import {BiUser} from "react-icons/bi";
import {IoSettingsOutline} from "react-icons/io5";
import {CgShoppingCart} from "react-icons/cg";
import SearchPopup from "./SearchPopup";
import Link from "next/link";

const IconsMenu = () => {
  const [isSearchPopup, setIsSearchPopup] = useState(false);
  const handleSearchPopup = () => {
    setIsSearchPopup((isSearchPopup) => !isSearchPopup);
  };
  return (
    <ul className="flex items-center gap-[20px]">
      <li className="dropdown cursor-pointer relative">
        <Link href="/" className="text-secondary">
          <FiDollarSign size={22} />
        </Link>
        <div className="dropdown-menu dropdown-box">
          <ul className="py-[10px]">
            <li className="dropdown-item">
              <Link href="#" className="dropdown-link">
                USD
              </Link>
            </li>
            <li className="dropdown-item">
              <Link href="#" className="dropdown-link">
                EUR
              </Link>
            </li>
            <li className="dropdown-item">
              <Link href="#" className="dropdown-link">
                GBP
              </Link>
            </li>
            <li className="dropdown-item">
              <Link href="#" className="dropdown-link">
                IND
              </Link>
            </li>
          </ul>
        </div>
      </li>
      <li className="dropdown cursor-pointer relative">
        <Link href="/" className="text-secondary">
          <TbWorld size={20} />
        </Link>
        <div className="dropdown-menu dropdown-box">
          <ul className="py-[10px]">
            <li className="dropdown-item">
              <Link href="#" className="dropdown-link">
                English
              </Link>
            </li>
            <li className="dropdown-item">
              <Link href="#" className="dropdown-link">
                Franch
              </Link>
            </li>
            <li className="dropdown-item">
              <Link href="#" className="dropdown-link">
                Spanish
              </Link>
            </li>
          </ul>
        </div>
      </li>
      <li className="dropdown cursor-pointer relative">
        <div className="" onClick={handleSearchPopup}>
          <BiSearch size={22} />
        </div>
        <div
          className={`absolute top-0 right-0 ease-in-out duration-500 z-50 
        ${isSearchPopup ? "w-full scale-100" : "w-0 scale-0"}
      `}
        >
          <SearchPopup handleSearchPopup={handleSearchPopup} />
        </div>
      </li>
      <li className="dropdown cursor-pointer relative sm:block">
        <div className="">
          <BiUser size={22} />
        </div>
        <div className="dropdown-menu dropdown-box">
          <ul className="py-[10px]">
            <li className="dropdown-item">
              <Link href="#" className="dropdown-link">
                Login
              </Link>
            </li>
            <li className="dropdown-item">
              <Link href="#" className="dropdown-link">
                Register
              </Link>
            </li>
            <li className="dropdown-item">
              <Link href="#" className="dropdown-link">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </li>
      <li className="dropdown cursor-pointer relative sm:block">
        <div className="">
          <IoSettingsOutline size={22} />
        </div>
        <div className="dropdown-menu dropdown-box">
          <ul className="py-[10px]">
            <li className="dropdown-item">
              <Link href="#" className="dropdown-link"></Link>
            </li>
            <li className="dropdown-item">
              <Link href="#" className="dropdown-link"></Link>
            </li>
            <li className="dropdown-item">
              <Link href="#" className="dropdown-link"></Link>
            </li>
          </ul>
        </div>
      </li>
      <li className="dropdown cursor-pointer">
        <button className="flex items-center gap-[18px] btn py-[6px] px-[11px] md:py-[7px] lg:px-[14px] xl:py-[10px] xl:px-[20px] 2xl:py-[12px] 2xl:px-[30px]">
          <CgShoppingCart />
          <span>$0.00</span>
        </button>
        <div className="dropdown-menu"></div>
      </li>
    </ul>
  );
};

export default IconsMenu;
