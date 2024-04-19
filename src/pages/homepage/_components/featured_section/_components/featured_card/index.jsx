// import { IoMdStar } from "react-icons/io";
import DiscountTag from "./discount_tag";
import ArrowIcon from "./arrow_icon";
import { useEffect, useRef, useState } from "react";
import StarIcon from "./start_icon";
import { FeaturedDeals } from "../../../../../../constants";
import { Link } from "react-router-dom";
import { useFeaturedDealsData } from "../../../../../../hooks";

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

  const { isError, error, isLoading, data } = useFeaturedDealsData();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  const deals = data?.data;
  // console.log(deals);

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
    <div className="relative mx-auto max-w-full px-6 md:px-10 flex-1 flex">
      <div
        ref={scrollRef}
        onWheel={handleWheel}
        className="flex w-fit no-scrollbar pl-[4rem] overflow-x-scroll overflow-y-hidden justify-start items-center md:gap-10 md:py-6 gap-8 md:pl-6"
      >
        {deals?.map((deal) => (
          <div className="text-start md:w-[60%] min-w-[225.38px] h-[300px] md:h-fit lg:min-w-[400px]">
            <Link
              to={`/featured/${deal.id}`}
              className="relative my-6 md:my-0 flex flex-col items-start gap-1 lg:gap-2 font-work-sans shadow-lg rounded-[10px] p-4 hover:scale-90 hover:cursor-pointer transition-all"
              key={deal.id}
            >
              <img
                src={deal.image}
                className="w-full relative h-[139.27px] md:h-auto"
                alt="deal_image"
              />

              <span className="font-medium pl-3 text-sm md:text-xl lg:text-2xl">
                {deal.title}
              </span>
              <div className="md:space-x-4 pl-3 space-x-2 relative">
                <span className="text-xs md:text-base font-medium opacity-45">
                  ₦ {deal.old_price}
                </span>{" "}
                <div className="absolute top-3 left-0">
                  <p className="-rotate-[165.11deg] border-t-[1px] border-[#DE1F05] border-solid w-[70.23px]"></p>{" "}
                  <p className="-rotate-[19.98deg] border-b-[1px] border-[#DE1F05] border-solid w-[70.23px]"></p>
                </div>
                <span className="text-xs md:text-base font-medium">
                  ₦ {deal.new_price}
                </span>
              </div>

              <div className="space-x-1 lg:space-x-2 pl-3">
                <span className="font-normal text-xs md:text-base">
                  {deal.brand} -
                </span>
                <span className="font-light text-[10px]">{deal.location}</span>
              </div>
              <span className="font-normal pl-3 text-xs md:text-base flex items-center gap-2">
                {deal.rating}
                <span className="flex">
                  {/* <IoMdStar color="#FFCE31" size={20} /> */}
                  <StarIcon />
                </span>
              </span>
              <div className="absolute top-8 left-[2px]">
                <DiscountTag />
                <span className="text-white text-[11px] font-semibold absolute top-3 left-2">
                  {100 -
                    Math.round(
                      (parseInt(deal.new_price) / parseInt(deal.old_price)) *
                        100
                    )}
                  %<br />
                  OFF
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="absolute top-[50%] left-0 right-0 translate-y-[-50%] z-20 hidden md:flex justify-between">
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
      <div className="absolute top-[50%] left-0 right-0 translate-y-[-50%] z-20 flex justify-between md:hidden">
        <div
          onClick={handleLeftArrow}
          className={`${
            isLeftArrowVisible ? "bg-[#101010]" : "bg-transparent"
          } cursor-pointer rotate-180 w-fit p-3 rounded-[100%]`}
        >
          {isLeftArrowVisible && <ArrowIcon width={14} height={14} />}
        </div>
        <div
          onClick={handleRightArrow}
          className="bg-[#101010] cursor-pointer w-fit p-3 rounded-[100%]"
        >
          <ArrowIcon width={14} height={14} />
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
