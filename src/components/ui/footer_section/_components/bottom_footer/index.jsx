import { Link } from "react-router-dom";
import images from "../../../../../constants/images";
import Button from "../../../button";
import {
  AppStoreBtn,
  PlayStoreBtn,
  YoutubeIcon,
} from "../../../../../assets/icons";

const BottomFooter = () => {
  return (
    <div className="text-primary font-work-sans mt-10 lg:px-20">
      <div className="flex flex-col items-center gap-6">
        <div className="flex items-center gap-8 md:gap-4">
          <Link
            to="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              src={images.facebook}
              className="w-[35px] h-[35px] object-contain md:w-[45px]"
              alt="facebook"
            />
          </Link>
          <Link
            to="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              src={images.instagram}
              className="w-[35px] h-[35px] object-contain md:w-[45px]"
              alt="instagram"
            />
          </Link>
          <Link
            to="https://www.twitter.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              src={images.x}
              className="w-[35px] h-[35px] object-contain md:w-[45px]"
              alt="twitter"
            />
          </Link>
          <Link
            to="https://www.youtube.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <YoutubeIcon />
          </Link>
        </div>
        <div className="flex gap-4 mb-3">
          <Link
            to="https://www.apple.com/app-store/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <AppStoreBtn />
          </Link>
          <Link
            to="https://play.google.com/store/apps?hl=en&gl=US"
            target="_blank"
            rel="noreferrer noopener"
          >
            <PlayStoreBtn />
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 font-medium text-sm md:text-base">
          <span className="flex space-x-3">
            <span>Terms & Conditions </span>{" "}
            <div className="bg-primary w-[0.1rem] h-5"></div>
            <span>Privacy Policy</span>{" "}
          </span>
          <span className="text-center">
            © COPYRIGHT 2024 KUWIYA. ALL RIGHTS RESERVED.
          </span>
        </div>
      </div>
    </div>
  );
};

export default BottomFooter;
