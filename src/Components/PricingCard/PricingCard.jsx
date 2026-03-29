import React from "react";
import PricingFeature from "./PricingFeature";

const PricingCard = ({ pricing }) => {
  console.log(pricing);
  const { name, price, description, features } = pricing;
  return (
    <div className="border bg-sky-500 rounded-2xl p-5 mx-4">
      {/* Card Header */}
      <div>
        <h1 className="text-7xl">{name}</h1>
        <h4 className="text-3xl">{price}</h4>
      </div>
      {/* Card body */}
      <div className="bg-sky-300 rounded-2xl p-4 mt-8">
        <p>{description}</p>

        {features.map((features, index) => (
          <PricingFeature key={index} features={features}></PricingFeature>
        ))}
      </div>
    </div>
  );
};

export default PricingCard;
