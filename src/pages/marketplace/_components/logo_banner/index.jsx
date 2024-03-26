import React from 'react';
import {
  biggs_brand,
  cr_brand,
  dominoes_brand,
  item_brand,
  kfc_brand,
  killimanjaro_brand,
  mc_brand,
  place_brand,
  tantalizer_brand,
} from '../../../../constants/images';

const LogoBanner = () => {
  return (
    <div className="bg-primary py-6">
      <div className="flex justify-around items-center">
        <img src={item_brand} alt="item" />
        <img src={kfc_brand} alt="kfc" />
        <img src={cr_brand} alt="chickenrepublic" />
        <img src={place_brand} alt="theplace" />
        <img src={killimanjaro_brand} alt="" />
        <img src={mc_brand} alt="mcdonalds" />
        <img src={biggs_brand} alt="mrbiggs" />
        <img src={dominoes_brand} alt="" />
        <img src={kfc_brand} alt="kfc" />
        <img src={tantalizer_brand} alt="tantalizer" />
      </div>
    </div>
  );
};

export default LogoBanner;
