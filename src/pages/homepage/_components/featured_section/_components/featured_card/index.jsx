// import { IoMdStar } from "react-icons/io";
import DiscountTag from "./discount_tag";
import ArrowIcon from "./arrow_icon";
import { useEffect, useRef, useState } from "react";
import StarIcon from "./start_icon";
import { FeaturedDeals } from "../../../../../../constants";

const FeaturedCard = () => {
  const scrollRef = useRef(null);
  const [isLeftArrowVisible, setIsLeftArrowVisible] = useState(false);

  //Handles keyboard arrows movement
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!scrollRef.current) return;
      const scrollContainer = scrollRef.current;

      //Left arrow key
      if (e.key === "ArrowLeft") {
        scrollContainer.scrollLeft -= 50;
      }
      //Right arrow key
      else if (e.key === "ArrowRight") {
        scrollContainer.scrollLeft += 50;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

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

  const handleWheel = (e) => {
    if (!scrollRef.current) return;

    const scrollContainer = scrollRef.current;
    if (scrollContainer.scrollLeft < 1) {
      setIsLeftArrowVisible(false);
    } else {
      setIsLeftArrowVisible(true);
    }
  };

  return (
    <div className="relative mx-auto max-w-full px-10 flex-1 flex">
      <div
        ref={scrollRef}
        onWheel={handleWheel}
        className="flex w-fit no-scrollbar overflow-x-scroll overflow-y-hidden items-center md:gap-10 py-6 gap-8 pl-0 md:pl-2"
      >
        {FeaturedDeals.map((deal) => (
          <div
            className="relative my-6 md:my-0 min-w-[450px] flex flex-col items-center md:items-start gap-2 font-work-sans shadow-lg rounded-[10px] py-10 px-16 md:p-4 hover:scale-90 hover:cursor-pointer transition-all"
            key={deal.id}
          >
            <img
              src={deal.image}
              className="w-full relative"
              alt="deal_image"
            />

            <span className="font-medium text-base md:text-2xl">
              {deal.title}
            </span>
            <div className="md:space-x-4 space-x-2">
              <span className="text-sm md:text-base font-medium opacity-45">
                ₦ {deal.old_price}
              </span>{" "}
              <div className="absolute top-[26.7rem] left-0">
                <p className="-rotate-[165.11deg] border-t-[1px] border-[#DE1F05] border-solid w-[70.23px]"></p>{" "}
                <p className="-rotate-[19.98deg] border-b-[1px] border-[#DE1F05] border-solid w-[70.23px]"></p>
              </div>
              <span className="text-sm md:text-base font-medium">
                ₦ {deal.new_price}
              </span>
            </div>

            <div className="space-x-2">
              <span className="font-normal text-sm md:text-base">
                {deal.brand} -
              </span>
              <span className="font-light text-xs">{deal.location}</span>
            </div>
            <span className="font-normal text-sm md:text-base flex items-center gap-2">
              {deal.rating}
              <span className="flex">
                {/* <IoMdStar color="#FFCE31" size={20} /> */}
                <StarIcon />
              </span>
            </span>
            <div className="absolute top-8 left-[-14px]">
              <DiscountTag />
              <span className="text-white text-[11px] font-semibold absolute top-3 left-2">
                {100 -
                  Math.round(
                    (parseInt(deal.new_price) / parseInt(deal.old_price)) * 100
                  )}
                %<br />
                OFF
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute top-[50%] left-0 right-0 translate-y-[-50%] z-[999] flex justify-between">
        <div
          onClick={handleLeftArrow}
          className={`${
            isLeftArrowVisible ? "bg-[#101010]" : "bg-transparent"
          } cursor-pointer rotate-180 w-fit px-5 py-4 rounded-[100%]`}
        >
          {isLeftArrowVisible && <ArrowIcon />}
        </div>
        <div
          onClick={handleRightArrow}
          className="bg-[#101010] cursor-pointer w-fit px-5 py-4 rounded-[100%]"
        >
          <ArrowIcon />
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
