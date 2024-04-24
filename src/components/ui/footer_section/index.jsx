import { Link } from "react-router-dom";
import BottomFooter from "./_components/bottom_footer";
import { FooterLogo } from "../../../assets/icons";

const Footer = () => {
  return (
    <footer className="flex flex-col py-10 px-6 md:px-16 lg:px-[136px] md:justify-center bg-black">
      <div className="hidden md:flex flex-wrap justify-between gap-5 space-y-10 lg:space-y-0">
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
            <Link to="/waitlist" className="font-work-sans text-xl font-light">
              Subscribe
            </Link>
            <Link
              to="/subscription-plan"
              className="font-work-sans text-xl font-light"
            >
              Subscription plans
            </Link>
            <Link
              to="/user-invitation"
              className="font-work-sans text-xl font-light"
            >
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
            <Link
              to="/restaurants"
              className="font-work-sans text-xl  font-light"
            >
              All Restaurants
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
            <Link to="/error" className="font-work-sans text-xl  font-light">
              How It Works
            </Link>
            <Link to="/error" className="font-work-sans text-xl  font-light">
              FAQs
            </Link>
          </div>
        </div>
        <div className="flex-col space-y-6 flex text-primary">
          <div className="font-medium font-work-sans text-2xl uppercase">
            support
          </div>
          <div className="text-[16px] flex flex-col space-y-4 text-primary font-semibold">
            <Link to="/help-center" className="font-work-sans text-xl  font-light">
              Customer Care
            </Link>
            <Link to="/help-center" className="font-work-sans text-xl  font-light">
              Help Center
            </Link>
            <Link to="/help-center" className="font-work-sans text-xl  font-light">
              Report an issue
            </Link>
          </div>
        </div>
      </div>

      <div className="md:hidden space-y-10">
        <Link to="/">
          <FooterLogo width={22.65} height={40} />
        </Link>
        <div className="grid grid-cols-2 gap-y-7">
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
              <Link
                to="/waitlist"
                className="font-work-sans text-xl font-light"
              >
                Subscribe
              </Link>
              <Link
                to="/subscription-plan"
                className="font-work-sans text-xl font-light"
              >
                Subscription plans
              </Link>
              <Link
                to="/user-invitation"
                className="font-work-sans text-xl font-light"
              >
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
              <Link
                to="/restaurants"
                className="font-work-sans text-xl  font-light"
              >
                All Restaurants
              </Link>
            </div>
          </div>
          <div className="flex-col space-y-6 flex text-primary">
            <div className="font-medium font-work-sans text-2xl uppercase">
              About us
            </div>
            <div className="text-[16px] flex flex-col space-y-4 text-primary font-semibold">
              <Link
                to="/about-us"
                className="font-work-sans text-xl  font-light"
              >
                About Us
              </Link>
              <Link to="/error" className="font-work-sans text-xl  font-light">
                How It Works
              </Link>
              <Link to="/error" className="font-work-sans text-xl  font-light">
                FAQs
              </Link>
            </div>
          </div>
          <div className="flex-col space-y-6 flex text-primary">
            <div className="font-medium font-work-sans text-2xl uppercase">
              support
            </div>
            <div className="text-[16px] flex flex-col space-y-4 text-primary font-semibold">
              <Link to="/help-center" className="font-work-sans text-xl  font-light">
                Customer Care
              </Link>
              <Link to="/help-center" className="font-work-sans text-xl  font-light">
                Help Center
              </Link>
              <Link to="/help-center" className="font-work-sans text-xl  font-light">
                Report an issue
              </Link>
            </div>
          </div>
        </div>
      </div>

      <BottomFooter />
    </footer>
  );
};

export default Footer;
