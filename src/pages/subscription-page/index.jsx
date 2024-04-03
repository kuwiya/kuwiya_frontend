import React from "react";
import { Button, Navbar } from "../../components/ui";
import { subscriptionPlans } from "../../constants";
import { AdvancedPlan, BasicPlan, FreePlan } from "../../assets/icons";

const SubscriptionPage = () => {
  return (
    <>
      <Navbar scrolling bgBlack />
      <main className="font-work-sans mt-32 relative">
        <section className="bg-darkyellow text-[#FDFCFB] text-center pt-20 lg:h-[700px]">
          <h1 className="lg:text-[40px] font-bold uppercase">
            choose your plan
          </h1>
          <p className="lg:text-2xl font-normal lg:px-32">
            Lorem ipsum dolor sit amet consectetur. Dolor et diam egestas
            condimentum egestas nisi nibh dignissim. Placerat id sit mattis
            donec pharetra.
          </p>
        </section>
        <section className=" bg-[#FDFCFB] lg:h-[650px]">
          <div className="flex lg:gap-10 absolute top-[23%] left-12 right-12">
            {subscriptionPlans.map((plan) => (
              <div
                key={plan.id}
                className="rounded-[10px] p-12 shadow-md bg-[#FDFCFB] text-black font-work-sans flex flex-col gap-8 items-center"
              >
                <div>
                  {plan.planType === "FREE" ? (
                    <FreePlan />
                  ) : plan.planType === "BASIC" ? (
                    <BasicPlan />
                  ) : plan.planType === "ADVANCED" ? (
                    <AdvancedPlan />
                  ) : null}
                </div>
                <h2 className="lg:text-2xl font-semibold">{plan.planType}</h2>
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
                <Button
                  children="subscribe"
                  className="uppercase lg:text-base"
                  padding={"8px 25px"}
                  borderRadius={"10px"}
                  backgroundColor={"#FDFCFB"}
                  border={"1px solid #10101099"}
                  textColor={"#10101099"}
                />
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default SubscriptionPage;
