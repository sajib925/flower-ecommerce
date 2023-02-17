import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import logo from "../../images/logo.png"
import CategoryMenu from './CategoryMenu';
import Navbar from './Navbar';
import IconsMenu from './IconsMenu';

const Header = () => {
  return (
    <header className="bg-white">
      <div className="container mx-auto 2xl:py-5">
        <div className="flex items-center justify-between">
          <div className="">
            <Link href="/">
              <Image src={logo} alt="logo" />
            </Link>
          </div>
          <div className="">
            <CategoryMenu />
          </div>
          <div className="">
            <Navbar />
          </div>
          <div className="">
            <IconsMenu />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header