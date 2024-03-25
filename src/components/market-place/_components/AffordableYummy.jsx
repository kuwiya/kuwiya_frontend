import React from "react";

const AffordableYummy = ({ image }) => {
  return (
    <section className="mx-10 my-16 relative">
      <div className="flex ">
        <div className="flex-[67%] rounded-l-xl flex flex-col justify-center items-center gap-6 text-white bg-gradient-to-r from-[#F29309] from-[0%] via-[14%] via-[#8D5D1E] to-[#000000] to-[50%]">
          <h1 className="font-bold text-xl lg:text-5xl">
            Affordable yummy tasty
          </h1>
          <h1 className="font-bold text-xl lg:text-5xl">
            Affordable yummy tasty
          </h1>
        </div>
        <div className="flex-[33%]">
          <img src={image} alt="" />
        </div>
      </div>
      <div className="bg-white h-6 w-[130px] absolute top-0 -left-9 mt-5 -rotate-45"></div>
    </section>
  );
};

export default AffordableYummy;
