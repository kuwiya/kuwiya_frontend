import React, { useState } from "react";
import { Button, Navbar } from "../../components/ui";
import { Link } from "react-router-dom";
import { subscriptionPlans } from "../../constants";

const AddRestaurantPage = () => {
  const [subscriptionPlanIndex, setSubscriptionPlanIndex] = useState();

  const handleSubscriptionPlan = (index) => {
    setSubscriptionPlanIndex(index);
  };

  return (
    <>
      <Navbar scrolling />

      <main className="font-work-sans bg-[#FDFCFB] space-y-10 lg:space-y-16 mt-20 md:mt-28 lg:px-[136px] md:px-16 px-6">
        <div className="text-black text-center space-y-4">
          <h1 className="uppercase lg:text-3xl md:text-2xl text-xl font-bold">
            add restaurant
          </h1>
          <p className="font-normal lg:text-xl md:text-lg md:px-16 lg:px-28">
            Lorem ipsum dolor sit amet consectetur. Dolor et diam egestas
            condimentum egestas nisi nibh dignissim. Placerat id sit mattis
            donec pharetra.
          </p>
        </div>

        <section className="text-black">
          <form
            action=""
            className="flex flex-col gap-9 lg:text-lg text-base mb-20"
          >
            <div className="flex flex-col gap-5 rounded-md bg-[#E9E9E9] p-6 md:px-10 lg:px-16">
              <div className="flex flex-col gap-6 pt-3 lg:pb-3">
                <h2 className="uppercase lg:text-2xl md:text-xl text-lg font-semibold text-darkyellow">
                  restaurant details
                </h2>
                <div className="flex flex-col md:flex-row md:items-center gap-2 w-full justify-between">
                  <label
                    htmlFor="restaurant-name"
                    className="font-medium lg:text-xl md:text-lg"
                  >
                    Restaurant Name
                  </label>
                  <input
                    type="text"
                    className="rounded-[10px] outline-none py-3 px-2 md:w-[80%] bg-[#fff]"
                    name="restaurant-name"
                    id="restaurant-name"
                  />
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-2 w-full justify-between">
                  <label
                    htmlFor="address"
                    className="font-medium lg:text-xl md:text-lg"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    className="rounded-[10px] outline-none py-3 px-2 md:w-[80%] bg-[#fff]"
                    name="address"
                    id="address"
                  />
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-2 w-full justify-between">
                  <label
                    htmlFor="email"
                    className="font-medium lg:text-xl md:text-lg"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="rounded-[10px] outline-none py-3 px-2 md:w-[80%] bg-[#fff]"
                    name="email"
                    id="email"
                  />
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-2 w-full justify-between">
                  <label
                    htmlFor="phone-number"
                    className="font-medium lg:text-xl md:text-lg"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="rounded-[10px] outline-none py-3 px-2 md:w-[80%] bg-[#fff]"
                    name="phone-number"
                    id="phone-number"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-6 py-6">
                <h2 className="uppercase lg:text-2xl md:text-xl text-lg font-semibold text-darkyellow">
                  restaurant admin details
                </h2>
                <div className="flex flex-col md:flex-row md:items-center gap-2 w-full justify-between">
                  <label
                    htmlFor="full-name"
                    className="font-medium lg:text-xl md:text-lg"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="rounded-[10px] outline-none py-3 px-2 md:w-[80%] bg-[#fff]"
                    name="full-name"
                    id="full-name"
                  />
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-2 w-full justify-between">
                  <label
                    htmlFor="phone-number"
                    className="font-medium lg:text-xl md:text-lg"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="rounded-[10px] outline-none py-3 px-2 md:w-[80%] bg-[#fff]"
                    name="phone-number"
                    id="phone-number"
                  />
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-2 w-full justify-between">
                  <label
                    htmlFor="email"
                    className="font-medium lg:text-xl md:text-lg"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="rounded-[10px] outline-none py-3 px-2 md:w-[80%] bg-[#fff]"
                    name="email"
                    id="email"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-12 mt-3">
              <div className="text-[#00000099] text-center">
                <h2 className="uppercase lg:text-2xl md:text-xl text-lg font-semibold text-darkyellow">
                  subscription plan
                </h2>
                <p className="lg:text-xl text-base font-normal">
                  Please select a subscription plan
                </p>
              </div>

              <div className="flex flex-col lg:flex-row lg:gap-8 gap-10 items-center">
                {subscriptionPlans.map((plan, index) => (
                  <div
                    key={plan.id}
                    className={`rounded-[10px] w-[262px] md:w-[400px] lg:w-auto cursor-pointer transition-all ease-in hover:scale-95 px-6 py-12 lg:pt-8 lg:px-8 shadow-md shadow-[#00000040] ${
                      subscriptionPlanIndex === index
                        ? "bg-[#F8A434]"
                        : "bg-[#FDFCFB]"
                    } text-black font-work-sans flex flex-col gap-8 items-center `}
                    onClick={() => handleSubscriptionPlan(index)}
                  >
                    <h2 className="lg:text-2xl md:text-xl text-lg font-semibold -mb-6 lg:mb-0">
                      {plan.planType}
                    </h2>
                    <p className="uppercase text-center -mb-4 lg:mb-0">
                      <span className="font-semibold lg:text-2xl md:text-2xl text-xl">
                        $
                      </span>{" "}
                      <span className="font-semibold lg:text-[40px] text-4xl">
                        {plan.amount}
                      </span>
                      <span className="font-normal lg:text-lg text-base">
                        /monthly
                      </span>
                    </p>
                    <div className=" lg:text-lg md:text-base text-sm font-normal flex flex-col gap-5 items-center text-center">
                      <p>
                        <span className="font-semibold">
                          {plan.planDesc.slice(0, 11)}
                        </span>{" "}
                        <span>{plan.planDesc.slice(12)}</span>
                      </p>
                      <p>
                        <span className="font-semibold">
                          {plan.planDesc2.slice(0, 11)}
                        </span>{" "}
                        <span>{plan.planDesc2.slice(12)}</span>
                      </p>
                      <p>
                        <span className="font-semibold">
                          {plan.planDesc3.slice(0, 11)}
                        </span>{" "}
                        <span>{plan.planDesc3.slice(12)}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center lg:px-28">
                <p className="font-medium md:text-base text-sm">
                  By clicking &apos;SUBMIT&apos; you agree to{" "}
                  <Link to="/terms-and-conditions" className="font-semibold">
                    KUWIYA restaurant owners Terms and Conditions{" "}
                  </Link>{" "}
                  and you acknowledge that you have read the{" "}
                  <Link to="/privacy-policy" className="font-semibold">
                    Privacy Policy
                  </Link>
                  "
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <Button
                children="SUBMIT"
                type="submit"
                padding={"10px 40px"}
                borderRadius={"10px"}
                className="font-medium w-[160px] h-[45px]"
              />
            </div>
          </form>
        </section>
      </main>
    </>
  );
};

export default AddRestaurantPage;
