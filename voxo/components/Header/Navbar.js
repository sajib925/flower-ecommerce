import Link from "next/link";
import React from "react";
import {BiChevronDown} from "react-icons/bi";

const Navbar = ({handleMobileMenu}) => {
  return (
    <div className="max-xl:w-[300px] max-xl:ml-auto max-xl:bg-white">
      <ul className="flex items-center justify-center gap-x-[30px] flex-col xl:flex-row">
        <li className="block xl:hidden">
          <div className="" onClick={handleMobileMenu}>Menu</div>
        </li>
        <li className="">
          <Link href="/" className="navLink max-xl:inline-flex mx-xl:items-center mx-xl:justify-center">
            Home
            <BiChevronDown size={22} />
          </Link>
        </li>
        <li className="">
          <Link href="/" className="navLink">
            Shop
            <BiChevronDown size={22} />
          </Link>
        </li>
        <li className="">
          <Link href="/" className="navLink">
            Product
            <BiChevronDown size={22} />
          </Link>
        </li>
        <li className="">
          <Link href="/" className="navLink">
            Page
            <BiChevronDown size={22} />
          </Link>
        </li>
        <li className="">
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
