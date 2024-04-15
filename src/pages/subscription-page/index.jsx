import React from "react";
import { Button, Navbar } from "../../components/ui";
import { subscriptionPlans } from "../../constants";
import { AdvancedPlan, BasicPlan, FreePlan } from "../../assets/icons";

const SubscriptionPage = () => {
  return (
    <>
      <Navbar scrolling />
      <main className="font-work-sans mt-4 mb-28 md:mt-14 md:mb-32 lg::my-32 relative">
        <section className="bg-gradient-to-b from-[80%] md:from-[65%] from-[#F8A434] to-[80%] md:to-[65%] to-[#FFFFFF] text-[#FDFCFB] text-center pt-20 space-y-5">
          <h1 className="lg:text-[40px] md:text-2xl font-bold uppercase -mb-3 md:mb-0">
            choose your plan
          </h1>
          <p className="lg:text-2xl md:text-base text-sm font-normal lg:px-36 md:px-20 px-6">
            Lorem ipsum dolor sit amet consectetur. Dolor et diam egestas
            condimentum egestas nisi nibh dignissim. Placerat id sit mattis
            donec pharetra.
          </p>
          <div className="px-6 md:px-16 lg:px-[136px] lg:pt-16 md:pt-8 pt-6">
            <div className="flex flex-col md:flex-row gap-6 md:gap-3">
              {subscriptionPlans.map((plan) => (
                <div
                  key={plan.id}
                  className="rounded-[10px] py-5 lg:py-12 px-6 shadow-md bg-[#FDFCFB] text-black font-work-sans"
                >
                  <div className="flex flex-row md:flex-col gap-8 md:gap-4 lg:gap-6 items-center">
                    <div className="flex flex-col gap-1 md:gap-3 items-center">
                      <div className="md:hidden lg:block">
                        {plan.planType === "FREE" ? (
                          <FreePlan
                            width={screen.width < 768 && 33.43}
                            height={screen.width < 768 && 60}
                          />
                        ) : plan.planType === "BASIC" ? (
                          <BasicPlan
                            width={screen.width < 768 && 52.66}
                            height={screen.width < 768 && 60}
                          />
                        ) : plan.planType === "ADVANCED" ? (
                          <AdvancedPlan
                            width={screen.width < 768 && 52.66}
                            height={screen.width < 768 && 60}
                          />
                        ) : null}
                      </div>
                      <div className="hidden md:block lg:hidden">
                        {plan.planType === "FREE" ? (
                          <FreePlan width={50} height={100} />
                        ) : plan.planType === "BASIC" ? (
                          <BasicPlan width={70} height={100} />
                        ) : plan.planType === "ADVANCED" ? (
                          <AdvancedPlan width={70} height={100} />
                        ) : null}
                      </div>
                      <h2 className="lg:text-2xl md:text-lg text-sm font-semibold">
                        {plan.planType}
                      </h2>
                    </div>
                    <div className="flex flex-col lg:gap-10 md:gap-6 gap-4 items-center justify-center">
                      <p className="uppercase">
                        <span className="font-semibold lg:text-4xl md:text-[30px] text-lg">
                          $
                        </span>{" "}
                        <span className="font-semibold lg:text-6xl md:text-4xl text-2xl">
                          {plan.amount}
                        </span>
                        <span className="font-normal lg:text-base md:text-sm text-xs">
                          /monthly
                        </span>
                      </p>
                      <div className="lg:text-xl md:text-sm text-xs font-normal flex flex-col gap-5 items-center text-start">
                        <p>{plan.planDesc}</p>
                        <p>{plan.planDesc2}</p>
                        <p>{plan.planDesc3}</p>
                      </div>
                      <Button
                        children="subscribe"
                        className="uppercase hidden md:block"
                        // padding={"8px 25px"}
                        borderRadius={"10px"}
                        backgroundColor={"#FDFCFB"}
                        border={"1px solid #10101099"}
                        textColor={"#10101099"}
                      />
                    </div>
                  </div>
                  <div className="flex justify-center md:hidden mt-5">
                    <Button
                      children="subscribe"
                      className="uppercase"
                      // padding={"8px 25px"}
                      borderRadius={"10px"}
                      backgroundColor={"#FDFCFB"}
                      border={"1px solid #10101099"}
                      textColor={"#10101099"}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default SubscriptionPage;
