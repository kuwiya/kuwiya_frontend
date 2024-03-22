import { Button } from "..";
import { NavLink } from "react-router-dom";
// import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import images from "../../constants/images";
import Restaurants from "./_components/restaurants";
import { FeaturedResturants } from "../../constants";

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
    <div className="text-black py-10 px-10 md:py-20 md:px-40 ">
      <div className="flex flex-col">
        <span className="text-xl md:text-[32px] font-semibold mb-2 uppercase">
          near me
        </span>
        <span className="text-xl md:text-2xl font-work-sans">
          Featured restaurants around you.
        </span>
      </div>
      <div className="flex flex-col items-start justify-between md:flex-row space-y-10 md:space-y-0 md:gap-3 xl:gap-4 my-6">
        <div className="flex-[60%]">
          <img src={images.map} className="w-full" alt="map" />
        </div>
        <div className="space-y-6 flex-[40%]">
          {FeaturedResturants.map((restaurant) => (
            <Restaurants restaurant={restaurant} />
          ))}
        </div>
      </div>
      <NavLink to="/all-restaurants" className="flex justify-center">
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

// AIzaSyBpR1GxKboCdQtryRUFyxsOf7oTDeFB3p8
