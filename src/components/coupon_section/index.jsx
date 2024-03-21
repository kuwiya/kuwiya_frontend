import React from 'react';
import Button from '../button';
import CouponCard from './_components/coupon_card';

const CouponSection = () => {
  return (
    <div className="py-8 text-center flex flex-col">
      <div className="flex flex-col pb-10 md:pb-20 px-8 md:space-y-2 space-y-1">
        <span className="uppercase font-bold text-base md:text-[28px]">
          coupon hot deals
        </span>
        <span className="text-sm md:text-base font-normal font-work-sans">
          Claim free coupons and save on your next meal.
        </span>
        <CouponCard />
      </div>
      <div className="my-2">
        <Button
          children="view all"
          className={
            'uppercase w-auto md:w-fit text-center hover:scale-105 transition-all font-medium'
          }
          padding={'10px 35px'}
        />
      </div>
    </div>
  );
};

export default CouponSection;
