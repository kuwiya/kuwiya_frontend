import { Link } from "react-router-dom";
import { cities, countries } from "../../../../constants";

const CitiesAndCountries = () => {
  return (
    <main className="md:py-24 lg:px-[136px] md:px-16 py-16 px-6 space-y-20">
      <div className="space-y-10">
        <h1 className="uppercase text-xl lg:text-[32px] font-[600] text-[#000000]">
          cities with kuwiya
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 md:gap-5 gap-6">
          {cities.map((city) => (
            <Link
              to={`/locaterestaurants/${city.location}`}
              className="uppercase lg:text-2xl text-base font-medium text-[#101010]"
              key={city.id}
            >
              {city.location}
            </Link>
          ))}
        </div>
      </div>
      <div className="space-y-10">
        <h1 className="uppercase text-xl lg:text-[32px] font-[600] text-[#000000]">
          countries with kuwiya
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {countries.map((country) => (
            <Link
              to={`/locaterestaurants/${country.location}`}
              className="uppercase lg:text-2xl text-base font-medium text-[#101010]"
              key={country.id}
            >
              {country.location}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default CitiesAndCountries;
