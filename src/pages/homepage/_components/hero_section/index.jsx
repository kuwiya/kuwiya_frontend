import useInterval from "../../../../hooks/useInterval";

import { heroBgSlides } from "../../../../constants";
import { useEffect, useState } from "react";
import { Button } from "../../../../components/ui";
import { UserSubscriptionPopUp } from "../../../../components";

const HeroSection = () => {
  const [bgSlides, setBGSlides] = useState([]);
  const [currentBGSlideIndex, setCurrentBGSlideIndex] = useState(-1);
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  // console.log(bgSlides.length);
  useInterval(
    () => {
      const nextIndex =
        currentBGSlideIndex >= bgSlides.length - 1
          ? 0
          : currentBGSlideIndex + 1;
      setCurrentBGSlideIndex(nextIndex);
    },
    bgSlides.length ? 6000 : null
  );

  useEffect(() => {
    setBGSlides(heroBgSlides);
  });

  return (
    <main className="relative">
      <div
        className={`overflow-hidden xl:p-36 p-10 md:p-20 bg-center bg-no-repeat bg-cover h-full relative transition-all duration-1000 ease-out md:pb-0 xl:pb-0 ${
          isPopUpOpen && "brightness-[30%]"
        }`}
        style={{
          backgroundImage: `url(${
            bgSlides[currentBGSlideIndex]?.background || "/kuwiya_bg.png"
          })`,
        }}
      >
        <div className="mt-20 ">
          <div className="text-white flex flex-col space-y-20 md:space-y-40 transition-all ease-out duration-1000 ">
            <div className="flex flex-col space-y-4 w-full md:pr-52 xl:pr-56 animate-slide_up">
              <span className="text-4xl lg:text-5xl xl:text-6xl uppercase font-bold ">
                {bgSlides[currentBGSlideIndex]?.title || "welcome to kuwiya."}
              </span>
              <span className="font-medium text-xl lg:text-2xl font-work-sans">
                {bgSlides[currentBGSlideIndex]?.text ||
                  " Subscribe to get up to 30% discount on all featured restaurant this weekend."}
              </span>
              <Button
                children="Get Started"
                backgroundColor={"transparent"}
                className="w-fit uppercase font-work-sans font-medium transition-colors delay-200 ease-in-out hover:!bg-darkyellow  hover:!text-[#000] text-sm md:text-base"
                padding={"10px 20px"}
                onClick={() => setIsPopUpOpen(true)}
              />
            </div>
            <div className="flex md:flex-row flex-col gap-6 md:gap-10 items-start md:items-center font-work-sans">
              <div className="flex flex-col gap-2">
                <span className="font-light text-2xl md:text-[32px] text-darkyellow">
                  2750+
                </span>
                <span className="uppercase font-light">
                  <span className="md:text-[20px] text-xs font-medium">
                    discounts
                  </span>{" "}
                  <br /> <span className="text-xs md:text-sm">available</span>
                </span>
              </div>

              <div className="flex flex-col gap-2 items-start">
                <span className="font-light text-2xl md:text-[32px] text-darkyellow">
                  185+
                </span>
                <span className="uppercase font-light">
                  <span className="text-xs md:text-[20px] font-medium">
                    hot deals
                  </span>{" "}
                  <br /> <span className="text-xs md:text-sm">restaurants</span>
                </span>
              </div>
            </div>
          </div>
          {/* {isPopUpOpen && (
          <div
            className={`absolute top-[55%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[80%]`}
          >
            <UserSubscriptionPopUp setIsOpen={setIsPopUpOpen} />
          </div>
        )} */}
        </div>
        <div className="mx-auto pt-8 md:py-8 flex gap-1 justify-center items-center">
          <span
            className={`border-[1px] border-solid border-white w-[10px] h-[10px] rounded-full ${
              currentBGSlideIndex === 0 && "bg-white"
            } transition-all delay-250 ease-linear`}
          ></span>
          <span
            className={`border-[1px] border-solid border-white w-[10px] h-[10px] rounded-full ${
              currentBGSlideIndex === 1 && "bg-white"
            } transition-all delay-250 ease-linear`}
          ></span>
          <span
            className={`border-[1px] border-solid border-white w-[10px] h-[10px] rounded-full ${
              currentBGSlideIndex === 2 && "bg-white"
            } transition-all delay-250 ease-linear`}
          ></span>
        </div>
      </div>
      {isPopUpOpen && (
        <div
          className={`absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[80%]`}
        >
          <UserSubscriptionPopUp
            setIsOpen={setIsPopUpOpen}
            isOpen={isPopUpOpen}
          />
        </div>
      )}
    </main>
  );
};

export default HeroSection;
