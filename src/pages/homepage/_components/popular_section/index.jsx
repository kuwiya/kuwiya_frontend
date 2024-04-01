import React from "react";
import images from "../../../../constants/images";
import Button from "../../../../components/ui/button";
import { Link } from "react-router-dom";

const PopularResturants = () => {
  return (
    <div className="flex md:flex-row justify-between flex-col px-10 xl:px-40 md:px-28 py-10 md:gap-10 xl:gap-0 w-[100%] mx-auto overflow-hidden">
      <img
        src={images.resturant_circle}
        className="xl:w-[40%] md:w-1/2 w-full animate-[spin_4.5s_linear_infinite]"
        alt=""
      />
      <div className="flex items-start flex-col w-full md:w-[100%] xl:w-1/2 space-y-8 pt-14">
        <span className="uppercase text-darkyellow font-bold md:text-xl xl:text-[28px]">
          our popular restaurants
        </span>
        <span className="font-medium text-3xl md:text-[50px] xl:text-[96px] font-work-sans">
          250+
        </span>
        <span className="font-medium text-base md:text-xl xl:text-2xl font-work-sans">
          Featured resturants in Nigeria
        </span>
        <span className="font-normal md:text-sm xl:text-base font-work-sans">
          Lorem ipsum dolor sit amet consectetur. Cras quisque ultrices arcu
          blandit tempor facilisi tellus. Amet in eget ornare sit egestas.
        </span>
        <Link to="/restaurants">
          <Button
            children="explore"
            borderRadius={"5px"}
            padding={"10px 30px"}
            className={
              "xl:text-base md:text-sm uppercase font-work-sans font-medium hover:scale-90 transition-transform delay-200 ease-linear"
            }
          />
        </Link>
      </div>
    </div>
  );
};

export default PopularResturants;
