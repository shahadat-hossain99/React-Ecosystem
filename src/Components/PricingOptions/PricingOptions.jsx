import React from "react";
import { use } from "react";
import PricingCard from "../PricingCard/PricingCard";
import DaisyPricing from "../DaisyPricing/DaisyPricing";

const PricingOptions = ({ pricingPromise }) => {
  //   console.log(pricingPromise);
  //   const pricingData = use(pricingPromise);

  const pricingData = use(pricingPromise);
  //!for debugging
  //console.log("Type of data:", typeof pricingData);
  //   console.log("Is it an array?:", Array.isArray(pricingData));
  //   console.log("Actual Data:", pricingData);

  return (
    <div>
      <h1 className="text-5xl text-center my-16">Get Our MemberShip</h1>

      <div className="grid md:grid-cols-2  lg:grid-cols-3 gap-8">
        {/* Card From scratch by me */}
        {/* {pricingData.map((pricing) => (
          <PricingCard key={pricing.id} pricing={pricing}></PricingCard>
        ))} */}

        {pricingData.map((pricing) => (
          <DaisyPricing key={pricing.id} pricing={pricing}></DaisyPricing>
        ))}
      </div>
    </div>
  );
};

export default PricingOptions;
