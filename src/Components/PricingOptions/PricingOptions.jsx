import React from "react";
import { use } from "react";
import PricingCard from "../PricingCard/PricingCard";

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

      <div className="grid   md:grid-cols-3 gap-8">
        {pricingData.map((pricing) => (
          <PricingCard key={pricing.id} pricing={pricing}></PricingCard>
        ))}
      </div>
    </div>
  );
};

export default PricingOptions;
