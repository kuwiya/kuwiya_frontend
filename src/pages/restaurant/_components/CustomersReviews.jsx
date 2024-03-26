import React from "react";
import { customersReviews } from "../../../constants";
import StarIcon from "../../homepage/_components/featured_section/_components/featured_card/start_icon";

const CustomersReviews = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-6">
      {customersReviews.map((review) => (
        <div
          key={review.id}
          className="text-black flex items-center gap-5 bg-white shadow-lg p-5 pl-1"
        >
          <div>
            <img src={review.customerImage} alt="" />
          </div>
          <div className="space-y-2">
            <h3 className="uppercase text-xl font-medium">
              {review.customerName}
            </h3>
            <p className="text-base font-normal">{review.customerTexts}</p>
            <div className="flex items-baseline gap-1">
              <div className="flex">
                <span>
                  <StarIcon fillColor="#000000" />
                </span>
                <span>
                  <StarIcon fillColor="#000000" />
                </span>
                <span>
                  <StarIcon fillColor="#000000" />
                </span>
                <span>
                  <StarIcon fillColor="#000000" />
                </span>
                <span>
                  <StarIcon fillColor="#000000" />
                </span>
              </div>
              <p className="text-sm text-[#000000053]">
                {review.rating_count.toFixed(1)}/5.0
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CustomersReviews;
