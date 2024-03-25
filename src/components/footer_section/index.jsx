import { Link } from "react-router-dom";
import images from "../../constants/images";
import BottomFooter from "./_components/bottom_footer";

const Footer = () => {
  return (
    <footer className="flex flex-col p-10 md:justify-center bg-black">
      <div className="md:flex flex-wrap py-20 md:pt-0 justify-evenly items-center md:space-x-28 md:px-0 ">
        <div>
          <img src={images.logo} className="w-[50px]" alt="" />
        </div>
        <div className="flex-col space-y-6 flex text-primary md:ml-6">
          <div className="pt-8 md:pt-0 font-medium font-work-sans text-2xl uppercase">
            contact
          </div>
          <div className="text-[16px] flex flex-col space-y-4 text-primary font-semibold">
            <Link className="font-work-sans text-xl  font-light">
              Enquiry Form
            </Link>
            <Link className="font-work-sans text-xl  font-light">Careers</Link>
          </div>
        </div>
        <div className="flex-col space-y-6 flex text-primary md:ml-6">
          <div className="pt-8 md:pt-0 font-medium font-work-sans text-2xl uppercase">
            resturants
          </div>
          <div className="text-[16px] flex flex-col space-y-4 text-primary font-semibold">
            <Link className="font-work-sans text-xl  font-light">
              Map Search
            </Link>
            <Link className="font-work-sans text-xl  font-light">
              Marketplace
            </Link>
          </div>
        </div>
        <div className="flex-col space-y-6 flex text-primary md:ml-6 md:pt-8">
          <div className="pt-8 md:pt-0 font-medium font-work-sans text-2xl uppercase">
            support
          </div>
          <div className="text-[16px] flex flex-col space-y-4 text-primary font-semibold">
            <Link className="font-work-sans text-xl  font-light">
              Customer Care
            </Link>
            <Link className="font-work-sans text-xl  font-light">Help</Link>
            <Link className="font-work-sans text-xl  font-light">
              Report an issue
            </Link>
          </div>
        </div>

        <div className="flex-col space-y-6 flex text-primary ">
          <div className="pt-8 md:pt-0 font-medium font-work-sans text-2xl uppercase md:mt-[6.5rem]">
            how it works
          </div>
          <div className="space-y-4 text-[16px] flex flex-col text-primary font-semibold">
            <Link className="font-work-sans text-xl font-light">
              For Members
            </Link>
            <Link className="font-work-sans text-xl font-light">
              For Restaurants
            </Link>
            <Link className="font-work-sans text-xl font-light">
              For Afiliates
            </Link>
            <Link className="font-work-sans text-xl font-light">About Us</Link>
            <Link className="font-work-sans text-xl font-light">FAQ's</Link>
          </div>
        </div>
      </div>

      <BottomFooter />
    </footer>
  );
};

export default Footer;
