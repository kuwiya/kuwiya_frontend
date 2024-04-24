import React from "react";
import { Link } from "react-router-dom";
import { useCouponsMarketplaceData } from "../../../../../../hooks";
import { SubtractIcon } from "../../../../../../assets/icons";

const CouponCard = () => {
  const { isLoading, data, isError, error } = useCouponsMarketplaceData();

  const couponsData = data?.data;

  const coupons = screen.width < 768 ? couponsData?.slice(0, 3) : couponsData;

  if (isLoading) {
    return (
      <div className="text-base md:text-xl lg:text-2xl text-center font-semibold">
        Loading...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-base md:text-xl lg:text-2xl text-center font-semibold">
        Error: {error.message}
      </div>
    );
  }

  return (
    // swagger endpoint
    <div className="py-10">
      <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-10 ">
        {coupons?.map((deal, index) => (
          // <div
          //   className="flex items-center w-full h-full relative transition-all duration-300 ease-in-out hover:cursor-pointer hover:scale-95"
          //   key={deal?.id}
          // >
          //     <div className="absolute flex items-center justify-start gap-10 md:gap-[20px] lg:gap-5">
          //       <img
          //         src={deal?.restaurant?.logo}
          //         className="pl-10"
          //         alt="brand_logo"
          //       />
          //       <span className="border border-white border-dashed h-full"></span>
          //       <div className="-mt-2.5 md:mt-0 flex items-start flex-col gap-2 md:gap-0 md:py-10">
          //         <span
          //           className={`uppercase font-work-sans font-semibold text-base lg:text-2xl ${
          //             deal?.id === 4 ? "text-[#1F1F1F]" : "text-[#FDFCFB]"
          //           }`}
          //         >
          //           {deal?.percentage_off}% off
          //         </span>
          //         <span
          //           className={`-mt-2.5 md:mt-0 font-work-sans font-medium text-nowrap text-base ${
          //             deal.id === 4 ? "text-[#1F1F1F]" : "text-[#FDFCFB] "
          //           }`}
          //         >
          //           {deal?.restaurant?.name}
          //         </span>
          //         <Link to={`/claim-coupon/${deal?.id}`}>
          //           <button
          //             type="button"
          //             className={`${
          //               deal?.id === 4
          //                 ? "bg-[#1F1F1F] text-white"
          //                 : "bg-[#ffffff] text-black"
          //             } uppercase h-[25px] w-[79.51px] text-[10px] rounded-[10px] font-medium`}
          //           >
          //             claim
          //           </button>
          //         </Link>
          //       </div>
          //     </div>
          // </div>
          <div key={deal?.id} className="relative w-[342px] h-[104px]">
            <div>
              <SubtractIcon
                width={342}
                height={104}
                fillColor={index % 2 === 0 ? "" : "#1F1F1F"}
              />
            </div>
            <div className="absolute top-0 right-0 left-0 bottom-0 flex items-center gap-4 lg:gap-3">
              <div className="mx-3 lg:mx-2">
                <img
                  src={deal?.restaurant?.logo}
                  className="pl-10"
                  alt="brand_logo"
                />
              </div>
              <span className="border border-white border-dashed h-full"></span>
              <div className="text-white -mt-2.5 md:mt-0 flex items-start flex-col gap-2 md:gap-0 md:py-10">
                <span
                  className={`uppercase font-work-sans font-semibold text-base lg:text-2xl`}
                >
                  {parseInt(deal?.percentage_off)}% off
                </span>
                <span
                  className={`-mt-2.5 md:mt-0 font-work-sans font-medium text-nowrap text-base `}
                >
                  {deal?.restaurant?.name}
                </span>
                <Link to={`/claim-coupon/${deal?.id}`}>
                  <button
                    type="button"
                    className={`bg-[#ffffff] text-black uppercase h-[25px] w-[79.51px] text-[10px] rounded-[10px] font-medium`}
                  >
                    claim
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CouponCard;
