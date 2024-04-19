import React, { useState } from "react";
import { Navbar } from "../../components/ui";
import { Link } from "react-router-dom";
import { ArrowLeft } from "../marketplace/_components";
import userInvitation from "../../assets/images/user-invitation-box.png";
import {
  ChatIcon,
  CopyIcon,
  FacebookIcon,
  GoogleIcon2,
  InstagramIcon,
  MessengerIcon,
  TwitterIcon,
  WhatsAppIcon,
} from "../../assets/icons";

const UserInvitation = () => {
  const [copied, setCopied] = useState(false);
  const [textToCopy, setTextToCopy] = useState("1234-AB-5678");

  const copyToClipboard = (textToCopy) => {
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <>
      <Navbar scrolling />
      <main className="font-work-sans text-[#000000] pt-20 pb-14 md:pt-28 md:pb-20 px-6 md:px-16 lg:px-[136px] space-y-7">
        <div className="flex items-center gap-2">
          <Link to="/">
            <ArrowLeft
              width={screen.width < 768 ? "18" : ""}
              height={screen.width < 768 ? "18" : ""}
            />
          </Link>
          <p className="text-sm md:text-base lg:text-[19px] font-medium">
            Invitation
          </p>
        </div>

        <section className="space-y-8">
          <div className="flex flex-col items-center gap-10 lg:gap-8">
            <h1 className="text-2xl lg:text-[33px] font-medium">
              Eat & Get Cashback
            </h1>
            <div className="">
              <img
                src={userInvitation}
                alt=""
                className="w-[382px] h-[301.63px] lg:w-[441px] lg:h-[312px]"
              />
            </div>
          </div>
          <p className="text-[19px] font-normal text-center lg:px-10">
            Share your codes with your friends and receive a bonus reward us a
            Thank for the Invitation.
          </p>
          <div className="flex flex-col items-center w-full space-y-1">
            <div className="flex justify-between border border-[#333333D4] rounded-[10px] bg-[#5B5B5B21] w-[330px] h-[65px] md:w-[431px]">
              <span className="text-[19px] flex justify-center items-center text-center font-normal mx-auto uppercase">
                {textToCopy}
              </span>
              <span
                onClick={() => copyToClipboard(textToCopy)}
                className="bg-darkyellow cursor-pointer rounded-r-[10px] flex justify-center items-center w-[86.39px] lg:w-[100px]"
              >
                <CopyIcon
                  width={screen.width < 768 ? 20.73 : ""}
                  height={screen.width < 768 ? 24 : ""}
                />
              </span>
            </div>
            <p
              className={`text-xs md:text-base font-normal ${
                copied ? "text-green-500" : "text-[#000000]"
              }`}
            >
              {copied ? "Copied!" : "Click to copy"}
            </p>
          </div>
          <div className="space-y-5 md:space-y-8 lg:px-20">
            <h2 className="text-sm md:text-lg lg:text-2xl font-normal text-center">
              Share:
            </h2>
            <div className="flex items-center gap-6 justify-center lg:gap-1 lg:justify-between">
              <Link to="https://www.facebook.com">
                <FacebookIcon
                  width={screen.width < 768 ? 14 : ""}
                  height={screen.width < 768 ? 14 : ""}
                />
              </Link>
              <Link to="https://www.twitter.com">
                <TwitterIcon
                  width={screen.width < 768 ? 14 : ""}
                  height={screen.width < 768 ? 14 : ""}
                />
              </Link>
              <Link to="https://www.instagram.com">
                <InstagramIcon
                  width={screen.width < 768 ? 14 : ""}
                  height={screen.width < 768 ? 14 : ""}
                />
              </Link>
              <Link to="https://www.google.com">
                <GoogleIcon2
                  width={screen.width < 768 ? 14 : ""}
                  height={screen.width < 768 ? 14 : ""}
                />
              </Link>
              <Link to="https://www.whatsapp.com">
                <WhatsAppIcon
                  width={screen.width < 768 ? 14 : ""}
                  height={screen.width < 768 ? 14 : ""}
                />
              </Link>
              <Link to="https://www.messenger.com">
                <MessengerIcon
                  width={screen.width < 768 ? 14 : ""}
                  height={screen.width < 768 ? 14 : ""}
                />
              </Link>
              <Link to="https://www.chat.com">
                <ChatIcon
                  width={screen.width < 768 ? 14 : ""}
                  height={screen.width < 768 ? 14 : ""}
                />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default UserInvitation;
