import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { LuX } from "react-icons/lu";
import {
  IoCartOutline,
  IoPersonOutline,
  IoHelpCircleOutline,
} from "react-icons/io5";
import images, { gps, play, store } from "../../../constants/images";
import { Link } from "react-router-dom";
import Button from "../button";
import SearchIcon from "./_components/SearchIcon";
import LocationIcon from "./_components/LocationIcon";
import { ArrowDown } from "../../../pages/marketplace/_components";
import { useHref } from "react-router-dom";
import { FooterLogo } from "../../../assets/icons";

const cities = [
  "Lagos",
  "Abuja",
  "Ibadan",
  "Ilorin",
  "Ogun",
  "Ilorin",
  "Osun",
  "Port Harcourt",
  "Uyo",
  "Benin",
  "Anambra",
  "Cross River",
  "Current",
];

const Navbar = ({ scrolling, shadow, bgBlack }) => {
  const [toggleMenu, setToggleMenu] = useState(false); // initialize togglemenu state to keep track if mobile menu is open
  const [isDropDownOpen, setIsDropDownOpen] = useState(false); // initialize the dropdown for choosing location
  const [location, setLocation] = useState("Location");
  const [search, setSearch] = useState(""); // initialize search state to keep track of search input

  const pathName = useHref();

  return (
    <>
      <div
        className={`flex items-center px-6 md:px-12 lg:px-24 justify-between h-16 md:h-24 fixed md:top-0 top-0 z-50 bg-none w-full transition-all ease-out duration-300 xl:gap-0 md:gap-3 animate-fade_in  ${
          scrolling ? "bg-primary transition-all ease  " : ""
        } ${shadow && "shadow-lg"}`}
      >
        <Link to="/" className="text-xl md:text-2xl">
          {scrolling ? (
            <img src={images.dark_logo} alt="kuwiya_logo" className="w-6 " />
          ) : (
            <img src={images.logo} alt="kuwiya_logo" className="w-6 " />
          )}
        </Link>
        {scrolling && (
          <div className="relative hidden md:flex items-center gap-2 md:gap-4 font-work-sans font-medium text-[16px] xl:w-[700px] text-black">
            <div
              onClick={() => setIsDropDownOpen(!isDropDownOpen)}
              className="p-2 lg:p-3 flex items-center gap-7 cursor-pointer border-[1px] border-[#B2B1B0] rounded-[10px]"
            >
              <div className="flex items-center gap-2">
                <LocationIcon />
                <span className="text-slate-500 whitespace-nowrap">
                  {location}
                </span>
              </div>
              <div className={`${isDropDownOpen ? "rotate-180" : ""}`}>
                <ArrowDown />
              </div>
              {isDropDownOpen && (
                <div className="absolute top-[100%] left-0 z-[999] flex flex-col gap-2 font-work-sans text-[#535252] bg-[#f5f5f5] rounded-b-lg font-medium text-center py-3">
                  {cities.map((city, index) => (
                    <span
                      key={index}
                      onClick={() => {
                        setLocation(city);
                        setIsDropDownOpen(false);
                      }}
                      className="hover:text-black cursor-pointer flex items-center px-[34px] last-of-type:pl-[10px] gap-2"
                    >
                      {city === "Current" && <img src={gps} alt="" />}
                      <span className={`${city === "Current" && "order-last"}`}>
                        {city}
                      </span>
                    </span>
                  ))}
                </div>
              )}
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                // redirect to marketplace page with search query in the url using window.location.href
                window.location.href = `/marketplace?q=${search}&l=${location}`;
                // setSearch(""); // clear search input after submitting
              }}
              action="/marketplace"
              method="GET"
              autoComplete="off"
              className="p-1 lg:p-2 w-full pl-3 flex items-center justify-between gap-5 border-[1px] border-[#B2B1B0] rounded-[10px] placeholder-slate-500"
            >
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                id="search"
                type="text"
                placeholder="Enter your search..."
                name="resturant_name"
                className="outline-none w-full"
              />
              <button
                type="submit"
                aria-label="search"
                className="bg-[#131313] py-2 px-4 rounded-[10px]"
              >
                <SearchIcon />
              </button>
            </form>
          </div>
        )}

        <Link
          to="/marketplace"
          className=" hidden md:block"
          onClick={() => {
            pathName.includes("/marketplace")
              ? (window.location.href = "/marketplace")
              : "";
          }}
        >
          {!bgBlack && (
            <Button
              children="Marketplace"
              backgroundColor={"transparent"}
              className={`rounded-[10px] uppercase font-work-sans font-medium transition-colors ease-in-out hover:!bg-darkyellow md:text-xs xl:text-base ${
                scrolling ? "!bg-darkyellow hover:!bg-black" : ""
              }`}
              // padding={"10px 30px"}
            />
          )}
          {bgBlack && (
            <Button
              children="Marketplace"
              backgroundColor={"#000000"}
              className={`rounded-[10px] border-black uppercase font-work-sans font-medium transition-colors ease-in-out hover:!bg-darkyellow md:text-xs xl:text-base `}
              // padding={"10px 30px"}
            />
          )}
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
            color={`${scrolling ? "#000" : "#fff"}`}
            fontSize={27}
            onClick={() => setToggleMenu(true)}
          />
        </div>
      </div>
      {toggleMenu && (
        <div className="fixed px-6 top-0 left-0 w-full bg-primary transition-all duration-150 flex flex-col z-50 pt-6 items-center animate-slideBottom overflow-hidden h-full">
          <LuX
            className="text-2xl absolute top-5 right-6 cursor-pointer"
            color="#101010"
            fontSize={27}
            onClick={() => setToggleMenu(false)}
          />
          <ul className="list-none w-full">
            <li className="mt-12 cursor-pointer text-primary text-xl">
              <div className="flex justify-between items-center">
                <Link
                  to="/marketplace"
                  className="text-[#101010B2] uppercase font-semibold"
                >
                  Marketplace
                </Link>
              </div>
            </li>
            <li className="mt-12 cursor-pointer text-primary text-xl">
              <div className="flex justify-between items-center">
                <Link
                  to="/restaurants"
                  className="text-[#101010B2] uppercase font-semibold"
                >
                  near me
                </Link>
              </div>
            </li>
            <li className="mt-12 cursor-pointer text-primary text-xl">
              <div className="flex justify-between items-center">
                <Link
                  to="/about-us"
                  className="text-[#101010B2] uppercase font-semibold"
                >
                  about us
                </Link>
              </div>
            </li>
            <li className="mt-12 cursor-pointer text-primary text-xl">
              <div className="flex justify-between items-center">
                <Link
                  to="/marketplace"
                  className="text-[#101010B2] uppercase font-semibold"
                >
                  contact us
                </Link>
              </div>
            </li>
          </ul>
          <div className="flex flex-col items-center space-y-6 my-6 w-full">
            <Link to="/subscription-plan" className="w-[100%] mx-auto">
              <Button
                className="hover:scale-95 font-extrabold uppercase text-primary w-full !text-base flex justify-center items-center"
                children="Subscribe"
                padding={"15px 30px"}
              />
            </Link>
            <Link to="/add-restaurant" className="w-[100%] mx-auto">
              <Button
                className="hover:scale-95 font-extrabold uppercase text-primary w-full !text-base flex justify-center items-center"
                backgroundColor={"#000"}
                children="add restaurant"
                padding={"15px 30px"}
              />
            </Link>
          </div>

          <div className="flex flex-col w-3/4 absolute bottom-6 left-0 px-6">
            <div className="flex gap-2 items-center">
              <img src={images.dark_logo} alt="logo" className="" />
              <span className="font-medium">
                There's more to love in the app
              </span>
            </div>

            <div className="flex gap-4 mt-3">
              <Link
                to="https://www.apple.com/app-store/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={store} alt="apple store" />
              </Link>
              <Link
                to="https://play.google.com/store/apps?hl=en&gl=US"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={play} alt="apple store" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
