import React, { useEffect, useState } from "react";
import { Button } from "../../../../../../components/ui";
import { CouponDeals } from "../../../../../../constants";
import { Link } from "react-router-dom";

const CouponCard = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const [coupons, setCoupons] = useState([])
  const mobileCoupons = CouponDeals.slice(0, 3)


  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    
    if(width <= 500) {
      setCoupons(mobileCoupons)
    }
    else {
      setCoupons(CouponDeals)
    }

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [width])


  return (
    <div className="py-10">
      <div className="grid md:grid-cols-2 grid-cols-1 xl:grid-cols-3 gap-10 ">
        {coupons?.map((deal) => (
          <div
            className="flex items-center justify-center w-full h-full relative transition-all duration-300 ease-in-out hover:cursor-pointer hover:scale-95"
            key={deal.id}
          >
            <div className="flex items-center justify-between">
              <img src={deal.bg} className="" alt="" />
              <div className="absolute flex items-center justify-start gap-10 md:gap-[20px] lg:gap-10">
                <img src={deal.logo} className="pl-10" alt="brand_logo" />
                <img src={deal.divider} alt="" />
                <div className="flex items-start flex-col py-10">
                  <span
                    className={`uppercase font-work-sans font-semibold text-base lg:text-2xl ${
                      deal.id === 4 ? "text-[#1F1F1F]" : "text-[#FDFCFB]"
                    }`}
                  >
                    {deal.title}
                  </span>
                  <span
                    className={`font-work-sans font-medium text-nowrap text-base ${
                      deal.id === 4 ? "text-[#1F1F1F]" : "text-[#FDFCFB] "
                    }`}
                  >
                    {deal.brand}
                  </span>
                  <Link to={`/claim-coupon/${deal.id}`}>
                  <Button
                    children="claim"
                    backgroundColor={`${deal.id === 4 ? "#1F1F1F" : "#ffffff"}`}
                    textColor={`${deal.id === 4 ? "#ffffff" : "#1F1F1F"}`}
                    border={"none"}
                    borderRadius={"15px"}
                    className={
                      "uppercase !py-[5px] px-[10px] lg:!px-[8px] lg:!py-[5px] font-work-sans font-medium !text-[8px] md:!text-base w-fit mb-2"
                    }
                  />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CouponCard;
