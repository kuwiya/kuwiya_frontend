import React from "react";
import { Button, Navbar } from "../../components/ui";
import { Link } from "react-router-dom";
import { subscriptionPlans } from "../../constants";

const AddRestaurantPage = () => {
  return (
    <>
      <Navbar scrolling />

      <main className="font-work-sans bg-[#FDFCFB] space-y-20 mt-40 lg:px-[136px] md:px-16 px-6">
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
              <div className="flex flex-col gap-6 py-10">
                <h2 className="uppercase lg:text-2xl md:text-xl text-lg font-semibold text-[#00000099]">
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
                <h2 className="uppercase lg:text-2xl md:text-xl text-lg font-semibold text-[#00000099]">
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
              <div className="text-[#00000099]">
                <h2 className="uppercase lg:text-2xl md:text-xl text-lg font-semibold">
                  subscription plan
                </h2>
                <p className="lg:text-xl text-base font-normal">
                  Please select a subscription plan
                </p>
              </div>

              <div className="flex flex-col lg:flex-row lg:gap-8 gap-5">
                {subscriptionPlans.map((plan, index) => (
                  <div
                    key={plan.id}
                    className="rounded-[10px] cursor-pointer transition-all ease-in hover:scale-95 px-6 py-12 shadow-md shadow-[#00000040] bg-[#FDFCFB] text-black font-work-sans flex flex-col gap-8 items-center"
                  >
                    <h2 className="lg:text-2xl md:text-xl text-lg font-semibold">
                      {plan.planType}
                    </h2>
                    <p className="uppercase">
                      <span className="font-semibold lg:text-4xl md:text-2xl text-xl">
                        $
                      </span>{" "}
                      <span className="font-semibold lg:text-6xl md:text-3xl text-2xl">
                        {plan.amount}
                      </span>
                      <span className="font-normal lg:text-lg text-base">
                        /monthly
                      </span>
                    </p>
                    <div className="lg:text-xl md:text-lg font-normal flex flex-col gap-5 items-center">
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
