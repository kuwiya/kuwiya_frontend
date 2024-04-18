import React from "react";

const AffordableYummy = ({ image }) => {
  return (
    <section className="mx-6 md:mx-16 lg:mx-[136px] my-16 relative font-lato font-bold text-base md:text-2xl lg:text-5xl h-[139px] md:h-auto">
      <div className="flex h-[139px] md:h-auto">
        <div className="flex-[64%] md:flex-[70%] lg:px-20 md:px-20 px-6 py-6 md:py-0 rounded-l-[10px] text-center flex flex-col justify-center items-center lg:gap-3 text-white bg-gradient-to-r from-[#F29309] from-[0%] via-[14%] via-[#8D5D1E] to-[#000000] to-[50%]">
          <h1 className="">Affordable yummy tasty</h1>
          <h1 className="lg:leading-[60px]">
            Advertise here to reach 2 million viewers
          </h1>
        </div>
        <div className="flex-[36%] md:flex-[30%]">
          <img
            src={image}
            alt=""
            className=" rounded-r-[10px] object-cover h-[139px] md:h-full"
          />
        </div>
      </div>
      <div className="bg-white h-5 md:h-6 w-[130px] absolute top-0 -left-12 md:-left-9 mt-5 -rotate-45"></div>
    </section>
  );
};

export default AffordableYummy;
