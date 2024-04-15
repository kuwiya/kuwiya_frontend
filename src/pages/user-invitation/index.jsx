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
            <ArrowLeft />
          </Link>
          <p className="text-sm md:text-base lg:text-[19px] font-normal">
            Invitation
          </p>
        </div>

        <section className="space-y-8">
          <div className="flex flex-col items-center gap-8">
            <h1 className="text-xl md:text-2xl lg:text-[33px] font-medium">
              Eat & Get Cashback
            </h1>
            <div className="">
              <img
                src={userInvitation}
                alt=""
                className="w-[241px] h-[200px] md:w-[341px] md:h-[250px] lg:w-[441px] lg:h-[312px]"
              />
            </div>
          </div>
          <p className="text-sm md:text-base lg:text-[19px] font-normal text-center lg:px-10">
            Share your codes with your friends and receive a bonus reward us a
            Thank for the Invitation.
          </p>
          <div className="flex flex-col items-center w-full space-y-1">
            <div className="flex justify-between border border-[#333333D4] rounded-[10px] bg-[#5B5B5B21] w-1/2 md:w-[40%]">
              <span className="text-sm md:text-base lg:text-[19px] flex justify-center items-center px-5 py-3 md:px-8 lg:px-[90px] font-normal uppercase">
                {textToCopy}
              </span>
              <span
                onClick={() => copyToClipboard(textToCopy)}
                className="bg-darkyellow cursor-pointer rounded-r-[10px] flex justify-center items-center px-4 py-3 md:px-6 lg:px-8"
              >
                <CopyIcon
                  width={screen.width < 768 ? 16 : ""}
                  height={screen.width < 768 ? 16 : ""}
                />
              </span>
            </div>
            {!copied && (
              <p className="text-xs md:text-base font-normal text-[#000000AD]">
                Click to copy code
              </p>
            )}
            {copied && (
              <p className="text-xs md:text-base font-normal text-[#000000AD] text-green-500">
                Copied!
              </p>
            )}
          </div>
          <div className="space-y-5 md:space-y-8 lg:px-16">
            <h2 className="text-sm md:text-lg lg:text-2xl font-normal text-center">
              Share:
            </h2>
            <div className="flex items-center gap-1 justify-between">
              <Link to="https://www.facebook.com">
                <FacebookIcon
                  width={screen.width < 768 ? 24 : ""}
                  height={screen.width < 768 ? 24 : ""}
                />
              </Link>
              <Link to="https://www.twitter.com">
                <TwitterIcon
                  width={screen.width < 768 ? 24 : ""}
                  height={screen.width < 768 ? 24 : ""}
                />
              </Link>
              <Link to="https://www.instagram.com">
                <InstagramIcon
                  width={screen.width < 768 ? 24 : ""}
                  height={screen.width < 768 ? 24 : ""}
                />
              </Link>
              <Link to="https://www.google.com">
                <GoogleIcon2
                  width={screen.width < 768 ? 24 : ""}
                  height={screen.width < 768 ? 24 : ""}
                />
              </Link>
              <Link to="https://www.whatsapp.com">
                <WhatsAppIcon
                  width={screen.width < 768 ? 24 : ""}
                  height={screen.width < 768 ? 24 : ""}
                />
              </Link>
              <Link to="https://www.messenger.com">
                <MessengerIcon
                  width={screen.width < 768 ? 24 : ""}
                  height={screen.width < 768 ? 24 : ""}
                />
              </Link>
              <Link to="https://www.chat.com">
                <ChatIcon
                  width={screen.width < 768 ? 24 : ""}
                  height={screen.width < 768 ? 24 : ""}
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
