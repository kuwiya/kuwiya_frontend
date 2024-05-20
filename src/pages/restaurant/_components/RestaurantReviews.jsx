import React, { useState } from "react";
import CustomersReviews from "./CustomersReviews";
import { Star } from "../../marketplace/_components";
import { Button } from "../../../components/ui";

const RestaurantReviews = ({ restaurant }) => {
  const [rating, setRating] = useState(null);

  const restaurantComments = restaurant?.comments;
  return (
    <section className="py-20 flex flex-col gap-6">
      <h1 className="lg:text-2xl md:text-xl text-lg text-center font-semibold text-[#000000] uppercase ">
        reviews
      </h1>
      <CustomersReviews restaurantComments={restaurantComments} />

      {/* rate your experience */}
      <div className="mt-10 bg-[#F6F6F6] rounded-[10px] space-y-4 lg:space-y-6 pt-4 lg:pt-8 pb-6 lg:pb-10 px-6 lg:px-10 lg:pl-20 rating-shadow">
        <h3 className="lg:text-2xl md:text-xl text-lg font-medium text-[#000000]">
          Rate your experience
        </h3>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 lg:gap-3">
            {[1, 2, 3, 4, 5].map((value) => (
              <span
                key={value}
                className={`cursor-pointer text-base md:text-xl lg:text-2xl text-[#000000] border border-[#0000003D] bg-[#FFFFFF] rounded-[10px] w-10 h-10 flex items-center justify-center lg:h-[75px] lg:w-[79px]`}
                // onClick={() => handleRating(value, user, coupon?.id)}
              >
                {value}
              </span>
            ))}
          </div>
          <p className="uppercase text-[#000000] text-sm lg:text-base">
            <span className="text-lg lg:text-xl">&#9733;</span> stars
          </p>
        </div>
      </div>

      {/* leave a review */}
      <div className="mt-7 bg-[#F6F6F6] rounded-[10px] space-y-4 lg:space-y-0 pt-6 lg:pt-8 pb-6 lg:pb-10 px-6 lg:px-20 rating-shadow">
        <h3 className="lg:text-2xl md:text-xl text-lg font-medium text-[#000000]">
          Write your review
        </h3>
        <form className="space-y-4 lg:space-y-6">
          <textarea
            className="w-full h-[212px] lg:h-[264px] bg-[#FFFFFF] border border-[#0000002B] rounded-[20px] px-4 py-2 placeholder:text-[#0000007A] placeholder:font-medium"
            placeholder="YOUR FEEDBACK (OPTIONAL)"
          ></textarea>
          <Button type={"submit"} children={"SUBMIT"} />
        </form>
      </div>
    </section>
  );
};

export default RestaurantReviews;
