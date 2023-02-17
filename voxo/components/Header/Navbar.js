import Link from 'next/link';
import React from 'react'
import {BiChevronDown} from "react-icons/bi";

const Navbar = () => {
  return (
    <div>
      <div className=""></div>
      <ul className="flex items-center justify-center gap-x-[30px]">
        <li className="hidden">
          <div className="">Menu</div>
        </li>
        <li className="">
          <Link href="/" className="navLink">
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
}

export default Navbar