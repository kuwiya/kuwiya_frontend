import React, { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { LuX } from 'react-icons/lu';
import {
  IoCartOutline,
  IoPersonOutline,
  IoHelpCircleOutline,
} from 'react-icons/io5';
import { Link } from 'react-router-dom';
import images from '../../../constants/images';
import Button from '../button';
import SearchIcon from './_components/SearchIcon';
import LocationIcon from './_components/LocationIcon';

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false); // initialize togglemenu state to keep track if mobile menu is open

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  return (
    <>
      <div
        className={`flex items-center px-6 lg:px-16 xl:px-24 justify-between h-16 md:h-24 fixed md:top-0 top-0 z-50 bg-none w-full transition-all ease-out duration-300 xl:gap-0 md:gap-8 animate-fade_in ${
          scrolling ? 'bg-primary transition-all ease  ' : ''
        }`}
      >
        <Link to="/" className="text-xl md:text-2xl">
          {scrolling ? (
            <img
              src={images.dark_logo}
              alt="kuwiya_logo"
              className="w-6 md:ml-10"
            />
          ) : (
            <img src={images.logo} alt="kuwiya_logo" className="w-6 md:ml-10" />
          )}
        </Link>
        {scrolling && (
          <div className="md:px-0 px-6 xl:px-4 flex items-center justify-center space-x-8 md:ml-12">
            <div className="md:space-x-6 hidden md:flex items-center ">
              <div className="flex items-center gap-2 xl:gap-4 font-work-sans font-medium text-[16px] text-black">
                <div className="px-3 py-3 flex items-center gap-2 border-[1px] border-[#B2B1B0] rounded-[10px] placeholder-slate-500">
                  <LocationIcon />
                  <input
                    type="text"
                    placeholder="Location"
                    name="location"
                    className="outline-none w-full"
                  />
                </div>
                <div className="p-2 w-full pl-3 flex items-center justify-between gap-5 border-[1px] border-[#B2B1B0] rounded-[10px] placeholder-slate-500">
                  <input
                    type="text"
                    placeholder="Enter your search..."
                    name="resturant_name"
                    className="outline-none w-full"
                  />
                  <span className="bg-[#131313] py-2 px-4 rounded-[10px]">
                    <SearchIcon />
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        <Link
          to="/market-place"
          className="items-center md:gap-4 xl:gap-8 hidden md:flex mx-10"
        >
          <Button
            children="Marketplace"
            backgroundColor={'transparent'}
            className={`rounded-[10px] uppercase font-work-sans font-medium transition-colors ease-in-out hover:!bg-darkyellow md:text-xs xl:text-base ${
              scrolling ? '!bg-darkyellow hover:!bg-black' : ''
            }`}
            padding={'10px 30px'}
          />
          {/* <Button
            children="Discounts"
            backgroundColor={'#ffffff'}
            textColor={'#000000'}
            border={'0'}
            className={`xl:w-[160px] md:w-[110px]  w-[10%] outline-none rounded-[10px] my-6 uppercase font-work-sans font-medium transition-all duration-75 ease-in-out hover:!bg-darkyellow md:text-xs xl:text-base ${
              scrolling ? '!bg-black !text-primary' : ''
            }`}
            padding={'10px'}
          /> */}
          {/* <Link to="/" className="text-white text-xl flex gap-2 items-center">
        <IoPersonOutline color="#fff" size={30} />
      </Link>
      <Link to="/" className="text-white text-xl flex gap-2 items-center">
        <IoHelpCircleOutline color="#fff" size={30} />
      </Link>
      <Link to="/" className="text-white text-xl flex gap-2 items-center">
        <IoCartOutline color="#fff" size={30} />
      </Link>
      <Link to="/" className="text-white text-xl flex gap-2 items-center">
        <IoNotificationsOutline color="#fff" size={30} />
      </Link> */}
        </Link>

        <div className="md:hidden block cursor-pointer">
          <GiHamburgerMenu
            color={`${scrolling ? '#000' : '#fff'}`}
            fontSize={27}
            onClick={() => setToggleMenu(true)}
          />
        </div>
      </div>
      {toggleMenu && (
        <div className="fixed top-0 left-0 w-full bg-[#000] transition-all duration-150 flex flex-col z-50 justify-center items-center animate-slideBottom overflow-none h-full">
          <LuX
            className="text-2xl absolute top-5 right-6 cursor-pointer"
            color="#fff"
            fontSize={27}
            onClick={() => setToggleMenu(false)}
          />
          <ul className="list-none w-full px-4">
            <Link to="/" className="text-white ml-6">
              <span className="uppercase text-xl md:text-3xl font-semibold">
                Kuw
                <span className="text-[#fac32a] tracking-wider font-bold">
                  iya
                </span>
              </span>
            </Link>
            <hr className="z-20- h-6 my-8 text-[#395d88] w-[70%] mx-auto" />
            <li className="m-6 mt-12 cursor-pointer text-primary text-xl">
              <div className="flex justify-between items-center">
                <Link to="/market-place" className="text-white font-semibold">
                  Marketplace
                </Link>
                <IoPersonOutline color="#fff" size={23} />
              </div>
            </li>
            <li className="m-6 mt-12 cursor-pointer text-primary text-xl">
              <div className="flex justify-between items-center">
                <Link to="/" className="text-white font-semibold">
                  Discounts
                </Link>
                <IoHelpCircleOutline color="#fff" size={23} />
              </div>
            </li>
            <li className="m-6 mt-12 cursor-pointer text-primary text-xl">
              <div className="flex justify-between items-center">
                <Link to="/" className="text-white font-semibold">
                  Cart
                </Link>
                <IoCartOutline color="#fff" size={23} />
              </div>
            </li>
          </ul>
          <div className="flex items-center space-x-10 absolute bottom-0 my-6">
            <Link to="/">
              <Button
                className="hover:scale-95 font-extrabold duration-300 center"
                textColor={'#000'}
                children="Sign Up"
                padding={'20px'}
              />
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
