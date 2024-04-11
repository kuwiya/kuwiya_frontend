import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useDiscountedDealsData } from "../../../hooks";
import { Clock, Star } from "../../marketplace/_components";
import ArrowIcon from "../../homepage/_components/featured_section/_components/featured_card/arrow_icon";

const SimilarDiscountCard = ({ restaurantName }) => {
  const [isLeftArrowVisible, setIsLeftArrowVisible] = useState(false);

  const scrollRef = useRef(null);

  const { isLoading, data, isError, error } = useDiscountedDealsData();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error}</div>;
  }

  const availableDiscounts = data?.data;

  const filteredDiscounts = () => {
    return availableDiscounts.filter((availableDisc) => {
      return availableDisc.restaurantName === restaurantName;
    });
  };

  //   console.log(filteredDiscounts());

  //To check for left scroll and to handle the arrow visibility change
  const handleWheel = (e) => {
    if (!scrollRef.current) return;

    const scrollContainer = scrollRef.current;
    if (scrollContainer.scrollLeft < 1) {
      setIsLeftArrowVisible(false);
    } else {
      setIsLeftArrowVisible(true);
    }
  };

  //Handles arrow movement
  const handleLeftArrow = () => {
    if (!scrollRef.current) return;
    const scrollContainer = scrollRef.current;
    scrollContainer.scrollLeft -= 80;
    if (scrollContainer.scrollLeft > 1) {
      setIsLeftArrowVisible(true);
    } else {
      setIsLeftArrowVisible(false);
    }
  };

  const handleRightArrow = () => {
    if (!scrollRef.current) return;
    const scrollContainer = scrollRef.current;
    scrollContainer.scrollLeft += 80;
    if (scrollContainer.scrollLeft > 1) {
      setIsLeftArrowVisible(true);
    } else {
      setIsLeftArrowVisible(false);
    }
  };

  // console.log(scrollCont.scrollWidth);

  return (
    <section>
      <div className={`relative `}>
        <div
          ref={scrollRef}
          onWheel={handleWheel}
          className={`bg-[#EFEFEF] flex gap-[5px] md:gap-4 overflow-x-scroll no-scrollbar p-[5px] md:p-3 md:px-2 lg:p-6`}
          id="scroll"
        >
          {filteredDiscounts().map((availableDisc) => (
            <Link
              to={`/marketplace/${availableDisc.id}`}
              key={availableDisc.id}
              className="bg-white rounded-[10px]"
            >
              <div
                style={{
                  backgroundImage: `url(${availableDisc.mealImageUrl})`,
                }}
                className="relative bg-no-repeat bg-cover h-[82px] md:h-[151px] lg:h-[256px] w-[122px] md:w-[190px] lg:w-[310px] rounded-t-xl"
              >
                <p className="flex flex-col gap-1 justify-between text-white text-[8px] md:text-[11px] lg:text-[13px]">
                  <span className="bg-[#3187FA] w-fit p-1 md:p-2 lg:p-3 lg:pr-10 md:pr-7 pr-3 rounded-r-2xl mt-4 md:mt-8">
                    #{availableDisc.id} most liked
                  </span>
                  <span className="bg-[#13B959] w-fit p-1 md:p-2 lg:p-3 rounded-r-2xl">
                    {availableDisc.discPercentage}% Discount
                  </span>
                </p>
                <div className="absolute bottom-2 right-2 z-10 p-[5px] bg-white rounded-full w-10 h-10 hidden lg:flex items-center justify-center">
                  <img src={availableDisc.restaurantLogoUrl} alt="" />
                </div>
              </div>
              <div className="relative text-[#00000073] space-y-1 lg:space-y-3 p-1 md:px-3 md:py-2">
                <h1 className="text-[7px] md:text-base font-semibold text-black">
                  {availableDisc.mealName}
                </h1>
                <p className="text-[#E18000] text-[6px] md:text-[10px]">
                  {availableDisc.restaurantName} - Restaurant
                </p>
                <div className="absolute top-16 right-2 z-10 bg-white rounded-full w-[23px] h-[23px] hidden md:flex lg:hidden items-center justify-center">
                  <img src={availableDisc.restaurantLogoUrl} alt="" />
                </div>
                <div className="flex md:gap-2 md:flex-wrap lg:flex-nowrap justify-between md:justify-normal lg:justify-between items-center text-[5px] md:text-[11px] lg:text-[13px] font-medium">
                  <p className="">₦{availableDisc.price}</p>
                  <p className="bg-[#00000073] h-3 md:h-5 w-[1px]"></p>
                  <p className="hidden md:flex lg:hidden gap-[2px] items-center">
                    <span className="">
                      <Star width={11} height={11} />
                    </span>
                    <span>{availableDisc.rating}</span>
                    <span>({availableDisc.reviewCount})</span>
                  </p>
                  <p className="flex gap-[2px] items-center justify-between">
                    <span className="hidden lg:block">
                      <Clock />
                    </span>
                    <span className="hidden md:block lg:hidden">
                      <Clock width={11} height={11} />
                    </span>
                    <span className="md:hidden">
                      <Clock width={8} height={8} />
                    </span>
                    <span>{availableDisc.duration}</span>
                  </p>
                  <p className="md:hidden bg-[#00000073] h-3 md:h-5 w-[1px]"></p>
                  <p className="flex md:hidden lg:flex gap-[2px] items-center">
                    <span className="hidden lg:block">
                      <Star />
                    </span>
                    <span className="hidden md:block lg:hidden">
                      <Star width={11} height={11} />
                    </span>
                    <span className="md:hidden">
                      <Star width={8} height={8} />
                    </span>
                    <span>{availableDisc.rating}</span>
                    <span>({availableDisc.reviewCount})</span>
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="absolute top-[50%] left-0 right-0 translate-y-[-50%] z-[999] flex justify-between">
          <div
            onClick={handleLeftArrow}
            className={`${
              isLeftArrowVisible ? "bg-[#101010]" : "bg-transparent"
            } cursor-pointer rotate-180 w-fit p-2 md:px-4 md:py-3 rounded-[100%]`}
          >
            {isLeftArrowVisible && (
              <ArrowIcon
                width={screen.width < 768 && 12}
                height={screen.width < 768 && 12}
              />
            )}
          </div>
          <div
            onClick={handleRightArrow}
            className="bg-[#101010] cursor-pointer w-fit p-2 md:px-4 md:py-3 rounded-[100%]"
          >
            <ArrowIcon
              width={screen.width < 768 && 12}
              height={screen.width < 768 && 12}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimilarDiscountCard;
