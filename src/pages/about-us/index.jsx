import React from "react";
import { Navbar } from "../../components/ui";
import Card from "./_components/card";
import Values from "./_components/values";
import InfoSection from '../../pages/homepage/_components/info_section'
import FAQS from "./_components/faqs";

const AboutUs = () => {
  return (
    <>
      <Navbar scrolling />
      <div className="px-40 py-20 pt-40">
        <div className="flex flex-col text-center mx-auto md:px-10 xl:px-40">
          <h2 className="font-bold text-[40px] uppercase">about us</h2>
          <span className="text-xl font-normal">
            KUWIYA is a dynamic discount finder application designed to cater to
            the needs of food enthusiasts and restaurant owners alike. Founded
            with the passion for enhancing dining experiences and fostering
            stronger connections between food lovers and eateries, KUWIYA serves
            as a vibrant community hub where individuals can discover enticing
            discounts, participate in giveaways, and stay informed about the
            latest culinary offerings.
          </span>
        </div>
        <Card
          text=" Our mission at KUWIYA is to empower food enthusiasts with the tools
          they need to unlock a world of culinary delights at discounted prices.
          We are committed to providing a user-friendly platform that offers
          unparalleled convenience, personalized recommendations, and real-time
          alerts on exclusive discounts and promotions. Additionally, we strive
          to support restaurant owners by offering them a powerful marketing
          channel to showcase their offerings, connect with their target
          audience, and cultivate lasting relationships with customers."
          title='our mission'
          mission
        />
        <Card text="At KUWIYA, our vision is to revolutionize the way people discover and engage with discounts in the food industry. We aspire to become the go-to platform for foodies seeking exciting deals and for restaurant owners aiming to attract and retain loyal customers. By leveraging technology and fostering a sense of community, we envision a future where everyone can indulge in delightful dining experiences without breaking the bank." title='our vision' vision />
        <Values />
        <InfoSection />
        <FAQS />
      </div>
      
    </>
  );
};

export default AboutUs;