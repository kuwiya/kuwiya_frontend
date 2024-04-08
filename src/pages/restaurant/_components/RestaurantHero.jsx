import React, { useState } from "react";
import ArrowIcon from "../../homepage/_components/featured_section/_components/featured_card/arrow_icon";

const RestaurantHero = ({ restaurant }) => {
  const [bgImageIndex, setBgImageIndex] = useState(0);

  const bgImages = restaurant.images.map((image) => image);

  // Handle next and previous button clicks to change background image index
  const handleNext = () => {
    if (bgImageIndex === bgImages.length - 1) return;
    setBgImageIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (bgImageIndex === 0) return;
    setBgImageIndex((prev) => prev - 1);
  };

  return (
    <section className="lg:px-[9rem] md:px-[5rem] px-[2rem]">
      <div className="relative">
        <div>
          <img
            src={bgImages[bgImageIndex]}
            alt=""
            className="w-full object-cover"
          />
        </div>
        <div className="absolute top-[50%] left-5 right-5 translate-y-[-50%] z-[999] flex justify-between">
          <div
            onClick={handlePrev}
            className={`bg-[#FDFCFB] ${
              bgImageIndex === 0 ? "opacity-50" : "opacity-100"
            } cursor-pointer rotate-180 w-fit px-5 py-4 rounded-[100%] hover:bg-[#000000] transition-all delay-150 ease-linear`}
          >
            <ArrowIcon fillColor={"#F8A434"} />
          </div>
          <div
            onClick={handleNext}
            className={`bg-[#FDFCFB] ${
              bgImageIndex === 3 ? "opacity-50" : "opacity-100"
            } cursor-pointer w-fit px-5 py-4 rounded-[100%] hover:bg-[#000000] transition-all delay-150 ease-linear`}
          >
            <ArrowIcon fillColor={"#F8A434"} />
          </div>
        </div>
        <div className="absolute -bottom-5 lg:bottom-0 left-0 right-0  py-8 flex gap-1 justify-center items-center z-[999]">
          <span
            className={`border-[1px] border-solid border-white w-[10px] h-[10px] ${
              bgImageIndex === 0 || bgImageIndex === 4
                ? "bg-white"
                : "bg-transparent"
            } rounded-full transition-all delay-250 ease-linear`}
          ></span>
          <span
            className={`border-[1px] border-solid border-white w-[10px] h-[10px] ${
              bgImageIndex === 1 ? "bg-white" : "bg-transparent"
            } rounded-full transition-all delay-250 ease-linear`}
          ></span>
          <span
            className={`border-[1px] border-solid border-white w-[10px] h-[10px] ${
              bgImageIndex === 2 ? "bg-white" : "bg-transparent"
            } rounded-full transition-all delay-250 ease-linear`}
          ></span>
          <span
            className={`border-[1px] border-solid border-white w-[10px] h-[10px] ${
              bgImageIndex === 3 ? "bg-white" : "bg-transparent"
            } rounded-full transition-all delay-250 ease-linear`}
          ></span>
        </div>
      </div>
    </section>
  );
};

export default RestaurantHero;
