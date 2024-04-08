import React from "react";
import { Button, Navbar } from "../../components/ui";
import { Link } from "react-router-dom";
import { subscriptionPlans } from "../../constants";

const AddRestaurantPage = () => {
  return (
    <>
      <Navbar scrolling />

      <main className="font-work-sans bg-[#FDFCFB] space-y-20 mt-40 lg:px-32 xl:px-40 md:px-20 px-6">
        <section className="text-black text-center space-y-4 lg:px-10 md:px-6 px-4">
          <h1 className="uppercase lg:text-[40pxpx] md:text-[30px] text-2xl font-bold">
            add restaurant
          </h1>
          <p className="font-normal lg:text-2xl text-lg">
            Lorem ipsum dolor sit amet consectetur. Dolor et diam egestas
            condimentum egestas nisi nibh dignissim. Placerat id sit mattis
            donec pharetra.
          </p>
        </section>

        <section className="text-black">
          <form
            action=""
            className="flex flex-col gap-9 lg:text-lg text-base mb-20"
          >
            <div className="flex flex-col gap-5">
              <h2 className="uppercase lg:text-2xl font-semibold text-xl text-[#00000099]">
                restaurant details
              </h2>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="restaurant-name"
                  className="font-semibold lg:text-2xl text-xl"
                >
                  Restaurant Name
                </label>
                <input
                  type="text"
                  className="rounded-[10px] outline-none h-20 bg-[#E9E9E9]"
                  name="restaurant-name"
                  id="restaurant-name"
                />
              </div>
              <div className="flex flex-col gap-2 mt-1">
                <label
                  htmlFor="address"
                  className="font-semibold lg:text-2xl text-xl"
                >
                  Address
                </label>
                <input
                  type="text"
                  className="rounded-[10px] outline-none h-20 bg-[#E9E9E9]"
                  name="address"
                  id="address"
                />
              </div>

              <div className="flex gap-5 mt-1">
                <div className="flex flex-col gap-2 w-full">
                  <label
                    htmlFor="email"
                    className="font-semibold lg:text-2xl text-xl"
                  >
                    Mail
                  </label>
                  <input
                    type="email"
                    className="rounded-[10px] outline-none h-20 bg-[#E9E9E9]"
                    name="email"
                    id="email"
                  />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label
                    htmlFor="phone-number"
                    className="font-semibold lg:text-2xl text-xl"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="rounded-[10px] outline-none h-20 bg-[#E9E9E9]"
                    name="phone-number"
                    id="phone-number"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5 mt-5">
              <h2 className="uppercase lg:text-2xl font-semibold text-xl text-[#00000099]">
                restaurant admin details
              </h2>
              <div className="flex gap-5">
                <div className="flex flex-col gap-2 w-full">
                  <label
                    htmlFor="first-name"
                    className="font-semibold lg:text-2xl text-xl"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    className="rounded-[10px] outline-none h-20 bg-[#E9E9E9]"
                    name="first-name"
                    id="first-name"
                  />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label
                    htmlFor="last-name"
                    className="font-semibold lg:text-2xl text-xl"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="rounded-[10px] outline-none h-20 bg-[#E9E9E9]"
                    name="last-name"
                    id="last-name"
                  />
                </div>
              </div>

              <div className="flex gap-5 mt-1">
                <div className="flex flex-col gap-2 w-full">
                  <label
                    htmlFor="email"
                    className="font-semibold lg:text-2xl text-xl"
                  >
                    Mail
                  </label>
                  <input
                    type="email"
                    className="rounded-[10px] outline-none h-20 bg-[#E9E9E9]"
                    name="email"
                    id="email"
                  />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label
                    htmlFor="phone-number"
                    className="font-semibold lg:text-2xl text-xl"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="rounded-[10px] outline-none h-20 bg-[#E9E9E9]"
                    name="phone-number"
                    id="phone-number"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-12 mt-3">
              <div className="text-[#00000099]">
                <h2 className="uppercase lg:text-2xl font-semibold text-xl">
                  subscription plan
                </h2>
                <p className="lg:text-xl text-base font-normal">
                  Please select a subscription plan
                </p>
              </div>

              <div className="flex flex-col lg:flex-row lg:gap-10 gap-5">
                {subscriptionPlans.map((plan) => (
                  <div
                    key={plan.id}
                    className="rounded-[10px] px-6 py-12 shadow-md shadow-[#00000040] bg-[#FDFCFB] text-black font-work-sans flex flex-col gap-8 items-center"
                  >
                    <h2 className="lg:text-2xl font-semibold">
                      {plan.planType}
                    </h2>
                    <p className="uppercase">
                      <span className="font-semibold lg:text-4xl">$</span>{" "}
                      <span className="font-semibold lg:text-6xl">
                        {plan.amount}
                      </span>
                      <span className="font-normal lg:text-base">/monthly</span>
                    </p>
                    <div className="lg:text-xl font-normal flex flex-col gap-5 items-center">
                      <p>{plan.planDesc}</p>
                      <p>{plan.planDesc2}</p>
                      <p>{plan.planDesc3}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <p className="lg:text-lg font-medium text-base">
                  By clicking &apos;SUBMIT&apos; you agree to{" "}
                  <Link to="/terms-and-condition" className="font-semibold">
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
                className="font-medium"
              />
            </div>
          </form>
        </section>
      </main>
    </>
  );
};

export default AddRestaurantPage;