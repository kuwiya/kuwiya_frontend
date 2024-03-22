import React, { useMemo } from "react";
// import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import images from "../../../../constants/images";

// const mapContainerStyle = {
//   width: '100%',
//   height: '800px',
//   position: 'relative',
// };

// const getMapOptions = {
//   mapTypeControl: false,
//   streetViewControl: false,
//   fullscreenControl: false,
//   gestureHandling: 'greedy',
//   disableDoubleClickZoom: true,
//   minZoom: 11,
//   maxZoom: 18,
// };

const Map = () => {
  //   const { isLoaded, loadError } = useLoadScript({
  //     googleMapsApiKey: 'AIzaSyBNMWIrzWLcLUi4pu8gDeUU9rJ7RQkyd3Q',
  //   });

  //   const center = useMemo(() => ({ lat: 6.454812, lng: 3.434691 }), []);

  //   if (loadError) {
  //     return <div>Error loading maps</div>;
  //   }
  //   if (!isLoaded) {
  //     return <div>Loading maps</div>;
  //   }

  return (
    <div className="md:w-full w-full">
      {/* <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={20}
        center={center}
        options={getMapOptions}
      /> */}
      <img src={images.map} className="w-full" />
    </div>
  );
};

export default Map;
