import Image from "next/image";
import Link from "next/link";
import React, {useState} from "react";
import logo from "../../images/logo.png";
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
      <div className="container mx-auto ">
        <div className="flex items-center justify-between px-[12px]">
          <div className="flex items-center ">
            <Link href="/" className="block mr-[20px]">
              <Image src={logo} alt="logo" />
            </Link>
            <CategoryMenu />
            <div className="ml-[16px] xl:hidden" onClick={handleMobileMenu}>
              <HiBars3 size={22} />
            </div>
          </div>

          <div
            className={`max-xl:fixed max-xl:top-0 mx-xl:z-10 ease-in-out duration-500 max-xl:w-[100%] max-xl:h-full
            ${isMobileMenu
                ? "right-0"
                : "-right-[100%] "}` 
              
            }
          >
            {/* <div className="max-xl:fixed max-xl:top-0 max-xl:right-0 max-xl:bottom-0 max-xl:left-0 max-xl:bg-red"></div> */}
            <Navbar handleMobileMenu={handleMobileMenu}/>
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
