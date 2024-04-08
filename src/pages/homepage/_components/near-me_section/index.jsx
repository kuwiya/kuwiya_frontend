import { NavLink } from "react-router-dom";
// import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import Restaurants from "./_components/restaurants";
import images from "../../../../constants/images";
import { FeaturedResturants } from "../../../../constants";
import { Button } from "../../../../components/ui";

// // const libraries: string[] = ["places"];
// const mapContainerClassName = "map-container";
// const center = {
//   lat: 9.082, // default latitude
//   lng: 8.6753, // default longitude
// };

const NearMeSection = () => {
  //   const { isLoaded, loadError } = useLoadScript({
  //     // googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY!,
  //     googleMapsApiKey: "AIzaSyBpR1GxKboCdQtryRUFyxsOf7oTDeFB3p8",
  //     libraries: ["places"],
  //     // libraries
  //   });

  //   if (loadError) {
  //     return <div>Error loading maps</div>;
  //   }

  //   if (!isLoaded) {
  //     return <div>Loading maps</div>;
  //   }

  return (
    <div className="text-black py-10 px-6 md:py-20 md:px-16 lg:px-[136px] font-work-sans">
      <div className="flex flex-col">
        <span className="text-xl md:text-[28px] lg::text-[32px] font-bold mb-2 uppercase">
          near me
        </span>
        <span className="text-sm md:text-base lg:text-lg ">
          Featured restaurants around you.
        </span>
      </div>
      <div className="flex flex-col items-start justify-between md:flex-row space-y-10 md:space-y-0 md:gap-3 xl:gap-4 my-6">
        <div className="flex-[60%]">
          <img src={images.map} className="w-full" alt="map" />
        </div>
        <div className="space-y-6 flex-[40%]">
          {FeaturedResturants.map((restaurant) => (
            <Restaurants key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      </div>
      <NavLink to="/restaurants" className="flex justify-center">
        <Button
          children="view all"
          className={
            "uppercase text-center hover:scale-105 transition-all font-medium"
          }
          padding={"10px 30px"}
        />
      </NavLink>
    </div>
  );
};

export default NearMeSection;
