import Button from '../button';
import useInterval from '../../hooks/useInterval';

import { heroBgSlides } from '../../constants';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [bgSlides, setBGSlides] = useState([]);
  const [currentBGSlideIndex, setCurrentBGSlideIndex] = useState(-1);
  console.log(bgSlides.length);
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
    <div
      className="overflow-hidden bg-center bg-no-repeat bg-cover h-full relative transition-all duration-1000 ease-out"
      style={{
        backgroundImage: `url(${
          bgSlides[currentBGSlideIndex]?.background || '/kuwiya_bg.png'
        })`,
      }}
    >
      <div className="h-full w-full xl:py-40 py-40 xl:px-40 px-10 md:px-10 mt-20 ">
        <div className=" h-1/2  w-full text-white flex flex-col space-y-20 md:space-y-40 transition-all ease-out duration-1000 ">
          <div className="flex flex-col space-y-4 w-full xl:w-1/2 h-[15rem] md:w-full animate-slide_up">
            <span className="text-xl md:text-6xl uppercase font-bold md:leading-[73.14px]">
              {bgSlides[currentBGSlideIndex]?.title || 'welcome to kuwiya.'}
            </span>
            <span className="font-medium md:text-2xl font-work-sans">
              {bgSlides[currentBGSlideIndex]?.text ||
                ' Subscribe to get up to 30% discount on all featured restaurant this weekend.'}
            </span>
            <Button
              children="Get Started"
              backgroundColor={'transparent'}
              className="w-[50%] md:w-fit uppercase font-work-sans font-medium transition-colors ease-in-out hover:!bg-darkyellow  hover:!text-[#000] text-sm md:text-base"
              padding={'12px 10px'}
            />
          </div>
          <div className="flex md:flex-row gap-10 items-center font-work-sans">
            <div className="flex flex-col gap-2">
              <span className="font-light text-2xl md:text-[32px] text-darkyellow">
                2750+
              </span>
              <span className="uppercase font-light">
                <span className="md:text-[20px] text-xs font-medium">
                  discounts
                </span>{' '}
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
                </span>{' '}
                <br /> <span className="text-xs md:text-sm">resturants</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto py-8 flex gap-1 justify-center items-center pl-24">
        <span
          className={`border-[1px] border-solid border-white w-[10px] h-[10px] rounded-full ${
            currentBGSlideIndex === 0 && 'bg-white'
          } transition-all delay-250 ease-linear`}
        ></span>
        <span
          className={`border-[1px] border-solid border-white w-[10px] h-[10px] rounded-full ${
            currentBGSlideIndex === 1 && 'bg-white'
          } transition-all delay-250 ease-linear`}
        ></span>
        <span
          className={`border-[1px] border-solid border-white w-[10px] h-[10px] rounded-full ${
            currentBGSlideIndex === 2 && 'bg-white'
          } transition-all delay-250 ease-linear`}
        ></span>
      </div>
    </div>
  );
};

export default HeroSection;
