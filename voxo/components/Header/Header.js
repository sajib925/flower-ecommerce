import Image from "next/image";
import Link from "next/link";
import React, {useState} from "react";
import logo1 from "../../images/5.png";
import logo2 from "../../images/logo.png";
import CategoryMenu from "./CategoryMenu";
import Navbar from "./Navbar";
import IconsMenu from "./IconsMenu";
import {HiBars3} from "react-icons/hi2";

const Header = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const handleMobileMenu = () => {
    setIsMobileMenu((isMobileMenu) => !isMobileMenu);
  };
  return (
    <header className="bg-white py-5 relative">
      <div className="container mx-auto px-[12px]">
        <div className="flex items-center justify-between relative">
          <div className="flex items-center ">
            <Link href="/" className="flex items-center mr-[20px]">
              <Image src={logo1} alt="logo" width={25} height={25} className="mr-[5px]"/>
              <Image src={logo2} alt="logo" />
            </Link>
            <CategoryMenu />
            <div className="ml-[16px] xl:hidden" onClick={handleMobileMenu}>
              <HiBars3 size={22} />
            </div>
          </div>

          <div
            className={`max-xl:fixed max-xl:top-0 z-10 ease-in-out duration-500 max-xl:w-[100%] max-xl:h-full max-xl:bg-bg-overlay
            ${isMobileMenu ? "right-0" : "-right-[100%] "}`}
          >
            <Navbar handleMobileMenu={handleMobileMenu} />
          </div>
          <div className="">
            <IconsMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
