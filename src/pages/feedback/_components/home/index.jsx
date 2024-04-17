import React from "react";

const Home = () => {
  return (
    <div className="">
      <div className="absolute top-32 w-full ">
        <h1 className="text-primary font-work font-bold text-5xl leading-[1.4] px-20 h-[424px]">
          Hi, <br />
          How can we help you?
        </h1>
        <div className="w-3/4 py-10 mx-auto h-[231px] absolute left-0 top-[11rem] right-0 bg-primary shadow-xl">
          <div className="flex items-center justify-center h-full flex-col">
            <h1>send us a message</h1>
            <span>we'll respond soon</span>
          </div>
        </div>
      </div>
      <div className="h-[500px] bg-primary" />
    </div>
  );
};

export default Home;
