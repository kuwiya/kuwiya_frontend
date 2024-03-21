import { IoMdStar } from 'react-icons/io';
import { FeaturedDeals } from '../../../../constants';

const FeaturedCard = () => {
  return (
    <div className="relative mx-auto max-w-full px-10 flex-1 flex">
      <div className="flex w-fit no-scrollbar overflow-x-hidden md:overflow-x-scroll overflow-y-hidden flex-col md:flex-row items-center md:gap-10 py-6 gap-8 pl-0 md:pl-2">
        {FeaturedDeals.map((deal) => (
          <div
            className="relative my-6 md:my-0 min-w-[450px] flex flex-col items-center md:items-start gap-2 font-work-sans shadow-lg rounded-[10px] py-10 px-16 md:p-4 hover:scale-105 hover:cursor-pointer transition-all"
            key={deal.id}
          >
            <img
              src={deal.image}
              className="w-full relative"
              alt="deal_image"
            />
            <img
              src={deal.tag}
              className="absolute -left-1 md:-left-6 pl-12 md:pl-0"
              alt="discount_tag"
            />
            <span className="font-medium text-base md:text-2xl">
              {deal.title}
            </span>
            <div className="md:space-x-4 space-x-2">
              <span className="text-sm md:text-base font-medium opacity-45 line-through decoration-red">
              ₦ {deal.old_price}
              </span>
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
                  <IoMdStar color="#FFCE31" size={20} />
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
// {new Array(deal.rating_count).fill(null).map(() => (


export default FeaturedCard;
