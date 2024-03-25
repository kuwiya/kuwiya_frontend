import { Link } from 'react-router-dom';
import images from '../../../../../constants/images';
import Button from '../../../button';

const BottomFooter = () => {
  return (
    <div className="flex md:flex-row flex-wrap flex-col items-center justify-around w-full mx-auto text-primary font-work-sans space-y-10 pt-20 md:pt-40">
      <div className="flex gap-4">
        <Button
          border={'none'}
          borderRadius={'15px'}
          backgroundColor={'#ffffff'}
          textColor={'#000000'}
          className={
            'uppercase flex items-center w-[155px] h-[50px] font-work-sans md:!pl-0 !p-2 md:!p-2 md:!px-3'
          }
        >
          <img src={images.apple} className="w-[47px]" alt="" />{' '}
          <span className="text-start text-xs">
            <span className="!text-[10px] text-nowrap">Available on the </span>
            <br /> <span className=" font-medium">App Store</span>
          </span>
        </Button>
        <Button
          border={'none'}
          borderRadius={'15px'}
          backgroundColor={'#ffffff'}
          textColor={'#000000'}
          className={
            'uppercase flex items-center w-[155px] h-[50px] font-work-sans !p-2 md:!p-2 md:!px-3'
          }
        >
          <img src={images.play_store} className="w-[30px]" alt="" />{' '}
          <span className="text-start text-xs">
            <span className="!text-[10px]">Get it on </span>
            <br /> <span className=" font-medium">Google Play</span>
          </span>
        </Button>
      </div>
      <div className="flex flex-col items-center space-y-4">
        <div className="flex items-center space-x-8">
          <Link>
            <img
              src={images.facebook}
              className="w-[35px] md:w-[45px]"
              alt="facebook"
            />
          </Link>
          <Link>
            <img
              src={images.instagram}
              className="w-[35px] md:w-[45px]"
              alt="instagram"
            />
          </Link>
          <Link>
            <img
              src={images.x}
              className="w-[35px] md:w-[45px]"
              alt="twitter"
            />
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 font-medium text-sm md:text-base">
          <span className="flex space-x-3">
            <span>Terms & Conditions </span>{' '}
            <div className="bg-primary w-[0.1rem] h-5"></div>
            <span>Privacy Policy</span>{' '}
          </span>
          <span className="text-center">
            © COPYRIGHT 2024 KUWIYA. ALL RIGHTS RESERVED.
          </span>
        </div>
      </div>
      <div className="flex items-center space-x-4 font-medium text-sm md:text-base">
        <span className="uppercase">Available in</span>
        <img src={images.naija} className="w-[20px] md:w-[36px]" alt="" />
        <img src={images.ghana} className="w-[20px] md:w-[36px]" alt="" />
        <img src={images.sa} className="w-[20px] md:w-[36px]" alt="" />
      </div>
    </div>
  );
};

export default BottomFooter;
