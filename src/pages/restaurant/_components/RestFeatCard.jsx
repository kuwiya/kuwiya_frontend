import React from "react";
// import { restaurantFeatured } from "../../../constants";
import StarIcon from "../../homepage/_components/featured_section/_components/featured_card/start_icon";
import { useFeaturedDealsData } from "../../../hooks";
import { Link } from "react-router-dom";

const RestFeatCard = ({ restaurant }) => {
  const { isError, error, isLoading, data } = useFeaturedDealsData();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  const deals = data?.data;

  const filteredDeals = () => {
    if (restaurant) {
      return deals.filter((deal) => {
        return deal.brand
          .toLowerCase()
          .includes(restaurant.brand.toLowerCase());
      });
    } else {
      return deals;
    }
  };

  console.log(filteredDeals());

  return (
    <div className="flex items-center gap-8">
      {filteredDeals().map((deal) => (
        <Link
          to={`/featured/${deal.id}`}
          className="relative w-[45%] flex flex-col gap-2 font-work-sans shadow-lg rounded-[10px] p-2 hover:scale-105 hover:cursor-pointer transition-all"
          key={deal.id}
        >
          <img src={deal.image} className="w-full relative" alt="deal_image" />

          <span className="pl-2 font-medium text-base md:text-2xl">
            {deal.title}
          </span>
          <div className="pl-2 flex items-center gap-2">
            <div className="relative">
              <span className="text-sm md:text-base font-medium opacity-45">
                ₦ {deal.old_price}
              </span>{" "}
              <div className="absolute top-3 left-0">
                <p className="-rotate-[165.11deg] border-t-[1px] border-[#DE1F05] border-solid w-[70.23px]"></p>{" "}
                <p className="-rotate-[19.98deg] border-b-[1px] border-[#DE1F05] border-solid w-[70.23px]"></p>
              </div>
            </div>
            <span className="text-sm md:text-base font-medium">
              ₦ {deal.new_price}
            </span>
          </div>

          <div className="pl-2 space-x-2">
            <span className="font-normal text-sm md:text-base">
              {deal.brand} -
            </span>
            <span className="font-light text-xs">{deal.location}</span>
          </div>
          <span className="pl-2 font-normal text-sm md:text-base flex items-center gap-2">
            {deal.rating}
            <span className="flex">
              <StarIcon />
            </span>
          </span>
          <div className="absolute top-5 left-0 text-white text-[16px] font-semibold bg-[#F8A434] p-2 pr-10 rounded-r-2xl">
            <span className="">
              {100 -
                Math.round(
                  (parseInt(deal.new_price) / parseInt(deal.old_price)) * 100
                )}
              % OFF
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RestFeatCard;
