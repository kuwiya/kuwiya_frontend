import React, { useState } from "react";
import { dropdown } from "../../../../constants/images";
import { ArrowDown } from "../../../marketplace/_components";
// import { ArrowDown } from "../../../marketplace/_components";

const faqs = [
  {
    id: 1,
    question:
      "Lorem ipsum dolor sit amet consectetur. Cras quisque ultrices arcu blandit tempor facilisi tellus.",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    question:
      "Lorem ipsum dolor sit amet consectetur. Cras quisque ultrices arcu blandit tempor facilisi tellus.",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    question:
      "Lorem ipsum dolor sit amet consectetur. Cras quisque ultrices arcu blandit tempor facilisi tellus.",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const FAQS = () => {
  const [showAnswer, setShowAnswer] = useState(-1);

  const handleShowAnswer = (id) => {
    if (showAnswer === id) {
      setShowAnswer(-1);
    } else {
      setShowAnswer(id);
    }
  };

  return (
    <div className="text-center flex flex-col px-4 lg:px-24  lg:py-10">
      <div className="flex flex-col md:pb-4 md:space-y-2">
        <span className="uppercase font-bold text-[26px] md:text-[28px]">
          FAQS
        </span>
        <span className="text-sm py-4 md:text-base font-normal font-work-sans">
          Lorem ipsum dolor sit amet consectetur. Cras quisque ultrices arcu
          blandit tempor facilisi tellus.
        </span>
      </div>

      <div className="mt-2 space-y-4">
        {faqs.map((faq, index) => {
          return (
            <div key={index} className="text-white">
              <div
                onClick={() => handleShowAnswer(index)}
                className="flex items-center justify-between gap-4 md:gap-8 bg-darkyellow p-4 cursor-pointer"
              >
                <span className="text-primary text-[10px] md:text-lg text-justify w-full">
                  {faq.question}
                </span>
                <span
                  className={`${
                    showAnswer === index ? "rotate-180" : ""
                  } transition-all ease-out duration-500`}
                >
                  <ArrowDown
                    width={screen.width < 768 ? 20 : ""}
                    height={screen.width < 768 ? 20 : ""}
                    fillColor={"#fff"}
                  />
                </span>
              </div>
              <div
                className={`bg-[#af7222] ${
                  showAnswer === index ? "block" : "hidden"
                }`}
              >
                <p className="text-justify text-[10px] md:text-lg p-4">{faq.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQS;
