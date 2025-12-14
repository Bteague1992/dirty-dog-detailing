import { pricingPolicies } from "./services";

export interface GlobalPolicy {
  id: string;
  title: string;
  description: string;
}

export const globalPolicies: GlobalPolicy[] = [
  {
    id: "price-guarantee",
    title: "Price Guarantee",
    description: pricingPolicies.noSurprisePromise,
  },
  {
    id: "restoration-requirement",
    title: "Restoration Services",
    description: pricingPolicies.restorationRule,
  },
  {
    id: "minimum-service-fee",
    title: "Minimum Service Fee",
    description: `$${pricingPolicies.minimumServiceFee.amount} ${pricingPolicies.minimumServiceFee.reason}`,
  },
];
