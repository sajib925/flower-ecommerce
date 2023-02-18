import Link from "next/link";
import React from "react";
import {BiChevronDown} from "react-icons/bi";
import {MdKeyboardArrowRight} from "react-icons/md"

const Navbar = ({handleMobileMenu}) => {
  return (
    <div className="max-xl:w-[300px] max-xl:h-full max-xl:ml-auto max-xl:bg-white">
      <ul className="flex items-center justify-center gap-x-[30px] flex-col xl:flex-row">
        <li className="block xl:hidden navItem">
          <div
            className="font-rubik font-medium text-lg text-secondary pb-[10px] pt-[20px] px-[20px] flex items-center justify-between"
            onClick={handleMobileMenu}
          >
            Menu
            <MdKeyboardArrowRight size={22} />
          </div>
        </li>
        <li className="navItem">
          <Link
            href="/"
            className="navLink"
          >
            Home
            <BiChevronDown size={22} />
          </Link>
        </li>
        <li className="navItem">
          <Link href="/" className="navLink">
            Shop
            <BiChevronDown size={22} />
          </Link>
        </li>
        <li className="navItem">
          <Link href="/" className="navLink">
            Product
            <BiChevronDown size={22} />
          </Link>
        </li>
        <li className="navItem">
          <Link href="/" className="navLink">
            Page
            <BiChevronDown size={22} />
          </Link>
        </li>
        <li className="navItem">
          <Link href="/" className="navLink">
            Blog
            <BiChevronDown size={22} />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
