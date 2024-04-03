import React from "react";
import Slider from "react-infinite-logo-slider";

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
} from "../../../../constants/images";

const LogoBanner = () => {
  return (
    <div className="bg-primary py-6 ">
      <div className="flex">
        <Slider width="100px" duration={10}>
          <Slider.Slide>
            <img src={item_brand} alt="item" />
          </Slider.Slide>
          <Slider.Slide>
            <img src={kfc_brand} alt="kfc" />
          </Slider.Slide>
          <Slider.Slide>
            <img src={cr_brand} alt="kfc" />
          </Slider.Slide>
          <Slider.Slide>
            <img src={place_brand} alt="kfc" />
          </Slider.Slide>
          <Slider.Slide>
            <img src={killimanjaro_brand} alt="kfc" />
          </Slider.Slide>
          <Slider.Slide>
            <img src={mc_brand} alt="kfc" />
          </Slider.Slide>
          <Slider.Slide>
            <img src={biggs_brand} alt="kfc" />
          </Slider.Slide>
          <Slider.Slide>
            <img src={dominoes_brand} alt="kfc" />
          </Slider.Slide>
          <Slider.Slide>
            <img src={kfc_brand} alt="kfc" />
          </Slider.Slide>
          <Slider.Slide>
            <img src={tantalizer_brand} alt="kfc" />
          </Slider.Slide>
        </Slider>
      </div>
    </div>
  );
};

export default LogoBanner;
