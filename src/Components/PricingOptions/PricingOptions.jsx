import React from "react";
import { use } from "react";
import PricingCard from "../PricingCard/PricingCard";

const PricingOptions = ({ pricingPromise }) => {
  //   console.log(pricingPromise);
  //   const pricingData = use(pricingPromise);

  const pricingData = use(pricingPromise);
  console.log("Type of data:", typeof pricingData);
  console.log("Is it an array?:", Array.isArray(pricingData));
  console.log("Actual Data:", pricingData);

  return (
    <div>
      <h1 className="text-5xl">Get Our MemberShip</h1>
    </div>
  );
};

export default PricingOptions;
