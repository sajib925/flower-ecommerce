import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import img1 from "../../images/footer/1.jpg"
import img2 from "../../images/footer/2.jpg"
import img3 from "../../images/footer/3.jpg"
import img4 from "../../images/footer/4.jpg"
import logo1 from "../../images/5.png"
import logo2 from "../../images/logo.png"
import headphone from "../../images/footer/headphone.png"

const Footer = () => {
  return (
    <footer>
      <div className="py-[80px] border-y-2 border-y-search-border">
        <div className="container mx-auto px-[12px]">
          <div className="flex xl:flex-nowrap flex-wrap">
            <div className="w-[100%] md:w-[50%] xl:w-[25%] p-x-[12px] mt-[24px]">
              <div className="pr-[40px]">
                <Link
                  href="#"
                  className="flex items-center gap-x-[5px] mb-[30px]"
                >
                  <Image src={logo1} alt="logo" />
                  <Image src={logo2} alt="logo" />
                </Link>
                <ul className="">
                  <li className="text-[14px] font-rubik mb-[30px]">
                    <span className="font-bold text-secondary">Phone : </span>
                    <span className="text-search-icon">+91 98765 43210</span>
                  </li>
                  <li className="text-[14px] font-rubik mb-[30px]">
                    <span className="font-bold text-secondary">Address : </span>
                    <span className="text-search-icon">
                      1418 Riverwood Drive, Suite 3245 Cottonwood, CA 96052,
                      United States
                    </span>
                  </li>
                  <li className="text-[14px] font-rubik">
                    <span className="font-bold text-secondary">Email : </span>
                    <span className="text-search-icon">voxo123@gmail.com</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className=" max-md:w-[50%] md:grow p-x-[12px] mt-[24px]">
              <div className="">
                <h3 className="footer-title ">About Us</h3>
                <ul className="">
                  <li className="mt-[15px]">
                    <Link href="#" className="footer-link  ">
                      Home
                    </Link>
                  </li>
                  <li className="mt-[15px]">
                    <Link href="#" className="footer-link  ">
                      Shop
                    </Link>
                  </li>
                  <li className="mt-[15px]">
                    <Link href="#" className="footer-link  ">
                      About Us
                    </Link>
                  </li>
                  <li className="mt-[15px]">
                    <Link href="#" className="footer-link  ">
                      Blog
                    </Link>
                  </li>
                  <li className="mt-[15px]">
                    <Link href="#" className="footer-link  ">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="max-md:w-[50%] md:grow p-x-[12px] mt-[24px]">
              <div className="">
                <h3 className="footer-title ">New Categories</h3>
                <ul className="">
                  <li className="mt-[15px]">
                    <Link href="#" className="footer-link">
                      Latest Shoes
                    </Link>
                  </li>
                  <li className="mt-[15px]">
                    <Link href="#" className="footer-link">
                      Branded Jeans
                    </Link>
                  </li>
                  <li className="mt-[15px]">
                    <Link href="#" className="footer-link">
                      New Jackets
                    </Link>
                  </li>
                  <li className="mt-[15px]">
                    <Link href="#" className="footer-link">
                      Colorfull Hoodies
                    </Link>
                  </li>
                  <li className="mt-[15px]">
                    <Link href="#" className="footer-link">
                      Shiner Goggles
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="max-md:w-[50%] md:grow p-x-[12px] mt-[24px]">
              <div className="">
                <h3 className="footer-title ">Get Help</h3>
                <ul className="">
                  <li className="mt-[15px]">
                    <Link href="#" className="footer-link  ">
                      Your Order
                    </Link>
                  </li>
                  <li className="mt-[15px]">
                    <Link href="#" className="footer-link  ">
                      Your Account
                    </Link>
                  </li>
                  <li className="mt-[15px]">
                    <Link href="#" className="footer-link  ">
                      Track Order
                    </Link>
                  </li>
                  <li className="mt-[15px]">
                    <Link href="#" className="footer-link  ">
                      Your Wishlist
                    </Link>
                  </li>
                  <li className="mt-[15px]">
                    <Link href="#" className="footer-link  ">
                      Shopping FAQs
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="hidden sm:block sm:w-[50%] md:w-[50%] xl:w-[25%] mt-[24px]">
              <div className="">
                <h3 className="footer-title">Got Qustion ? Call Us 24/7</h3>
                <div className="flex items-center gap-x-[20px]">
                  <div className="w-[50px] h-[50px] rounded-full bg-footer-color flex items-center justify-center">
                    <Image src={headphone} height={20} width={20} alt="logo" />
                  </div>
                  <h3 className="text-secondary text-[16px] font-rubik font-medium lg:text-[20px]">
                    +91 98765 43210
                  </h3>
                </div>
                <p className="text-secondary text-[14px] font-rubik mt-[25px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                  ab dolorem nulla impedit saepe esse et? Ea, totam recusandae
                  doloribus ipsa esse voluptate quis nisi? Voluptate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-[25px]">
        <div className="container mx-auto px-[12px]">
          <div className="flex flex-col sm:justify-between sm:flex-row items-center">
            <div className="flex items-center gap-x-[10px] sm:gap-x-[20px] xl:gap-x-[30px]">
              <p className="text-secondary text-[14px]">We accept:</p>
              <Link href="#" className="">
                <Image src={img1} alt="" />
              </Link>
              <Link href="#" className="">
                <Image src={img2} alt="" />
              </Link>
              <Link href="#" className="">
                <Image src={img3} alt="" />
              </Link>
              <Link href="#" className="">
                <Image src={img4} alt="" />
              </Link>
            </div>
            <p className="text-secondary text-[14px]">
              © 2022, Voxo Theme. Made with heart by Pixelstrap
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer