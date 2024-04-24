import React from "react";
import { Button } from "../../../../components/ui";
import MobileForm from "../mobile-form";

const Form = () => {
  return (
    <>
    <div className="lg:px-24 md:px-6 py-20 hidden md:block">
      <form className="grid grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="First Name"
          className="w-full h-[76px] placeholder:text-black placeholder:opacity-60 px-4 shadow-2xl outline-0"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="w-full h-[76px] placeholder:text-black placeholder:opacity-60 px-4 shadow-2xl outline-0"
        />
        <input
          type="text"
          placeholder="Phone Number"
          className="w-full h-[76px] placeholder:text-black placeholder:opacity-60 px-4 shadow-2xl outline-0"
        />
        <input
          type="text"
          placeholder="Mail"
          className="w-full h-[76px] placeholder:text-black placeholder:opacity-60 px-4 shadow-2xl outline-0"
        />
        <textarea
          type="text"
          placeholder="Message"
          className=" h-[76px] placeholder:text-black placeholder:opacity-60 p-4 lg:w-[202%] md:w-[205%] shadow-2xl outline-0"
        />
      </form>
      <div className="flex justify-center w-full py-10">
        <Button type='submit' children="send" className="uppercase" />
      </div>
    </div>
    <MobileForm />
    </>
  );
};

export default Form;
