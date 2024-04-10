import React from "react";

const AffordableYummy = ({ image }) => {
  return (
    <section className="mx-6 md:mx-16 lg:mx-[136px] my-16 relative font-lato font-bold text-lg md:text-2xl lg:text-5xl">
      <div className="flex">
        <div className="flex-[67%] rounded-l-[4px] text-center flex flex-col justify-center items-center lg:gap-3 text-white bg-gradient-to-r from-[#F29309] from-[0%] via-[14%] via-[#8D5D1E] to-[#000000] to-[50%]">
          <h1 className="">Affordable yummy tasty</h1>
          <h1 className="lg:px-20 md:px-20 lg:leading-[60px]">
            Advertise here to reach 2 million viewers
          </h1>
        </div>
        <div className="flex-[33%]">
          <img src={image} alt="" className="h-full" />
        </div>
      </div>
      <div className="bg-white h-3 md:h-6 w-[130px] absolute top-0 -left-14 md:-left-9 mt-5 -rotate-45"></div>
    </section>
  );
};

export default AffordableYummy;
