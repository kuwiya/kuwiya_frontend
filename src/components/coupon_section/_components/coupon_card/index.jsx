import React from 'react';
import { CouponDeals } from '../../../../constants';
import Button from '../../../button';

const CouponCard = () => {
  return (
    <div className="py-10">
      <div className="grid md:grid-cols-2 grid-cols-1 xl:grid-cols-3 gap-10 ">
        {CouponDeals.map((deal) => (
          <div className="flex items-center justify-center w-full h-full relative transition-all duration-300 ease-in-out hover:cursor-pointer hover:scale-95" key={deal.id}>
            <div className="flex items-center justify-between">
              <img src={deal.bg} className="relative" alt="" />
              <div className="absolute flex items-center justify-start gap-10">
                <img src={deal.logo} className="pl-10" alt="brand_logo" />
                <img src={deal.divider} alt="" />
                <div className="flex items-start flex-col py-10">
                  <span
                    className={`uppercase font-work-sans font-semibold text-2xl ${
                      deal.id === 4 ? 'text-[#1F1F1F]' : 'text-[#FDFCFB]'
                    }`}
                  >
                    {deal.title}
                  </span>
                  <span
                    className={`font-work-sans font-medium text-base ${
                      deal.id === 4 ? 'text-[#1F1F1F]' : 'text-[#FDFCFB] '
                    }`}
                  >
                    {deal.brand}
                  </span>
                  <Button
                    children="claim"
                    backgroundColor={`${deal.id === 4 ? '#1F1F1F' : '#ffffff'}`}
                    textColor={`${deal.id === 4 ? '#ffffff' : '#1F1F1F'}`}
                    padding={'8px 21px'}
                    border={'none'}
                    borderRadius={'15px'}
                    className={
                      'uppercase font-work-sans font-medium text-[10.5px] w-fit'
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CouponCard;
