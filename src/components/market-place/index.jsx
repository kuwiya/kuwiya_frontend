import React from "react";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowLeft } from "./_components";
import LocationIcon from "../navbar/_components/LocationIcon";

const MarketPlace = () => {
  return (
    <main className="font-sans">
      <section className="flex justify-between px-6">
        <div className="flex gap-3 items-center">
          <Link to="/">
            <ArrowLeft />
          </Link>
          <h1 className="text-[23px] font-medium text-[#000000]">
            Market Place
          </h1>
        </div>
        <div className="border-[1px] border-[#292D32] rounded-xl px-3 py-1 flex gap-1 items-center">
          <LocationIcon />
          <input type="text" placeholder="location" className="outline-none" />
          <ArrowDown />
        </div>
      </section>
    </main>
  );
};

export default MarketPlace;
