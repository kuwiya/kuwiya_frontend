import React from "react";

const AffordableYummy = ({ image }) => {
  return (
    <section className="mx-6 md:mx-16 lg:mx-[136px] my-16 relative font-lato font-bold text-base md:text-2xl lg:text-5xl">
      <div className="flex">
        <div className="md:py-0 rounded-l-[10px] text-center flex flex-col justify-center items-center lg:gap-3 text-white bg-gradient-to-r from-[#F29309] from-[0%] via-[14%] via-[#8D5D1E] to-[#000000] to-[50%]">
          <div>
          Affordable yummy tasty Advertise here to reach 2 million viewers
          </div>
          {/* <h1 className=""></h1> */}
          {/* <h1 className="lg:px-20 md:px-20 px-9 lg:leading-[60px]">
            
          </h1> */}
        </div>
        <div className="">
          <img
            src={image}
            alt=""
            className=" rounded-r-[10px] object-contain"
          />
        </div>
      </div>
      <div className="bg-white h-5 md:h-6 w-[130px] absolute top-0 -left-12 md:-left-9 mt-5 -rotate-45"></div>
    </section>
  );
};

export default AffordableYummy;
