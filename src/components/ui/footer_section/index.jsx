import { Link } from "react-router-dom";
import BottomFooter from "./_components/bottom_footer";
import { FooterLogo } from "../../../assets/icons";

const Footer = () => {
  return (
    <footer className="flex flex-col py-10 px-6 md:px-16 lg:px-[136px] md:justify-center bg-black">
      <div className="md:flex flex-wrap justify-between space-y-10 lg:space-y-0">
        <Link to="/">
          <FooterLogo />
        </Link>
        <div className="flex-col space-y-6 flex text-primary">
          <div className="font-medium font-work-sans text-2xl uppercase">
            pages
          </div>
          <div className="space-y-4 text-[16px] flex flex-col text-primary font-semibold">
            <Link
              to="/marketplace"
              className="font-work-sans text-xl font-light"
            >
              Marketplace
            </Link>
            <Link to="/" className="font-work-sans text-xl font-light">
              Subscribe
            </Link>
            <Link
              to="/subscription-plan"
              className="font-work-sans text-xl font-light"
            >
              Subscription plans
            </Link>
            <Link to="/" className="font-work-sans text-xl font-light">
              Referrals
            </Link>
            <Link to="/" className="font-work-sans text-xl font-light">
              Admin Dashboard
            </Link>
          </div>
        </div>
        <div className="flex-col space-y-6 flex text-primary">
          <div className="font-medium font-work-sans text-2xl uppercase">
            restaurants
          </div>
          <div className="text-[16px] flex flex-col space-y-4 text-primary font-semibold">
            <Link
              to="/add-restaurant"
              className="font-work-sans text-xl  font-light"
            >
              Add Restaurant
            </Link>
          </div>
        </div>
        <div className="flex-col space-y-6 flex text-primary">
          <div className="font-medium font-work-sans text-2xl uppercase">
            About us
          </div>
          <div className="text-[16px] flex flex-col space-y-4 text-primary font-semibold">
            <Link to="/about-us" className="font-work-sans text-xl  font-light">
              About Us
            </Link>
            <Link to="/" className="font-work-sans text-xl  font-light">
              How It Works
            </Link>
            <Link to="/" className="font-work-sans text-xl  font-light">
              FAQs
            </Link>
          </div>
        </div>
        <div className="flex-col space-y-6 flex text-primary">
          <div className="font-medium font-work-sans text-2xl uppercase">
            support
          </div>
          <div className="text-[16px] flex flex-col space-y-4 text-primary font-semibold">
            <Link to="/" className="font-work-sans text-xl  font-light">
              Customer Care
            </Link>
            <Link to="/" className="font-work-sans text-xl  font-light">
              Help Center
            </Link>
            <Link to="/" className="font-work-sans text-xl  font-light">
              Report an issue
            </Link>
          </div>
        </div>
      </div>

      <BottomFooter />
    </footer>
  );
};

export default Footer;
