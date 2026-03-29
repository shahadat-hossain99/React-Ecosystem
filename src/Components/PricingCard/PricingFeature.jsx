import { CircleCheckBig } from "lucide-react";
import React from "react";

const PricingFeature = ({ features }) => {
  return (
    <p className="flex gap-2 mt-3">
      <CircleCheckBig></CircleCheckBig>
      {features}
    </p>
  );
};

export default PricingFeature;
