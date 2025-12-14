export type VehicleSize = "small" | "medium" | "large" | "xl";

export interface OneOffPricing {
  vehicleSize: VehicleSize;
  price: number;
  timeEstimate: string;
}

export interface SubscriptionPricing {
  monthly: OneOffPricing[];
  bimonthly: OneOffPricing[];
}

export interface Service {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  longDescription: string;
  category: "exterior" | "interior" | "full" | "restoration";
  oneOffPricing: OneOffPricing[];
  subscriptionPricing?: SubscriptionPricing;
  requiresPhoneCall?: boolean;
  isPopular?: boolean;
  scopeNotes?: string[];
  inclusions: string[];
  idealFor?: string[];
}

export const services: Service[] = [
  {
    id: "exterior-detail",
    name: "Exterior Detail",
    slug: "exterior-detail",
    shortDescription:
      "Professional exterior wash + protection for normally used vehicles.",
    longDescription:
      "Hand wash, wheels, bug removal, and a spray sealant for 1–2 months of protection. Not for heavy mud, caked-on dirt, or neglected vehicles.",
    category: "exterior",
    oneOffPricing: [
      { vehicleSize: "small", price: 75, timeEstimate: "1–1.5 hours" },
      { vehicleSize: "medium", price: 85, timeEstimate: "1–1.5 hours" },
      { vehicleSize: "large", price: 95, timeEstimate: "1.5–2 hours" },
      { vehicleSize: "xl", price: 115, timeEstimate: "2–2.5 hours" },
    ],
    subscriptionPricing: {
      monthly: [
        { vehicleSize: "small", price: 64, timeEstimate: "1–1.5 hours" },
        { vehicleSize: "medium", price: 72, timeEstimate: "1–1.5 hours" },
        { vehicleSize: "large", price: 81, timeEstimate: "1.5–2 hours" },
        { vehicleSize: "xl", price: 98, timeEstimate: "2–2.5 hours" },
      ],
      bimonthly: [
        { vehicleSize: "small", price: 68, timeEstimate: "1–1.5 hours" },
        { vehicleSize: "medium", price: 77, timeEstimate: "1–1.5 hours" },
        { vehicleSize: "large", price: 86, timeEstimate: "1.5–2 hours" },
        { vehicleSize: "xl", price: 104, timeEstimate: "2–2.5 hours" },
      ],
    },
    inclusions: [
      "Hand wash",
      "Wheels & tires cleaned",
      "Tire shine",
      "Bug removal (front bumper + mirrors)",
      "Spray sealant (1–2 months)",
      "Exterior glass cleaned",
      "Door jamb wipe-down",
    ],
    scopeNotes: [
      "Not for heavy mud, caked-on dirt, or neglected vehicles.",
      "If your vehicle is restoration-level, we'll provide a custom quote by phone.",
    ],
  },
  {
    id: "interior-detail",
    name: "Interior Detail",
    slug: "interior-detail",
    shortDescription: "Interior reset for normal daily use.",
    longDescription:
      "Vacuum, wipe-down, and light detailing for normally used interiors. Not for extreme pet hair, bodily fluids, mold, or trash-packed vehicles (quote-only).",
    category: "interior",
    oneOffPricing: [
      { vehicleSize: "small", price: 119, timeEstimate: "1.5–2.5 hours" },
      { vehicleSize: "medium", price: 139, timeEstimate: "2–3 hours" },
      { vehicleSize: "large", price: 159, timeEstimate: "2.5–3.5 hours" },
      { vehicleSize: "xl", price: 179, timeEstimate: "3–4 hours" },
    ],
    subscriptionPricing: {
      monthly: [
        { vehicleSize: "small", price: 101, timeEstimate: "1.5–2.5 hours" },
        { vehicleSize: "medium", price: 118, timeEstimate: "2–3 hours" },
        { vehicleSize: "large", price: 135, timeEstimate: "2.5–3.5 hours" },
        { vehicleSize: "xl", price: 152, timeEstimate: "3–4 hours" },
      ],
      bimonthly: [
        { vehicleSize: "small", price: 107, timeEstimate: "1.5–2.5 hours" },
        { vehicleSize: "medium", price: 125, timeEstimate: "2–3 hours" },
        { vehicleSize: "large", price: 143, timeEstimate: "2.5–3.5 hours" },
        { vehicleSize: "xl", price: 161, timeEstimate: "3–4 hours" },
      ],
    },
    inclusions: [
      "Full vacuum (seats, floors, mats, trunk)",
      "Wipe-down of interior surfaces",
      "Light pet hair (not extreme)",
      "Cupholders & door panels",
      "Interior windows",
      "Air refresh",
    ],
    scopeNotes: [
      "Not for extreme pet hair, bodily fluids, mold, or heavy neglect (quote-only).",
    ],
  },
  {
    id: "full-detail",
    name: "Full Detail",
    slug: "full-detail",
    shortDescription: "Our best overall clean — interior + exterior.",
    longDescription:
      "Complete interior and exterior detail for real-life vehicles. Great first-time service, seasonal resets, or getting back on track. Extraction/shampoo is not included unless added.",
    category: "full",
    isPopular: true,
    oneOffPricing: [
      { vehicleSize: "small", price: 169, timeEstimate: "2.5–3.5 hours" },
      { vehicleSize: "medium", price: 199, timeEstimate: "3–4 hours" },
      { vehicleSize: "large", price: 229, timeEstimate: "3.5–4.5 hours" },
      { vehicleSize: "xl", price: 259, timeEstimate: "4–5.5 hours" },
    ],
    subscriptionPricing: {
      monthly: [
        { vehicleSize: "small", price: 144, timeEstimate: "2.5–3.5 hours" },
        { vehicleSize: "medium", price: 169, timeEstimate: "3–4 hours" },
        { vehicleSize: "large", price: 195, timeEstimate: "3.5–4.5 hours" },
        { vehicleSize: "xl", price: 220, timeEstimate: "4–5.5 hours" },
      ],
      bimonthly: [
        { vehicleSize: "small", price: 152, timeEstimate: "2.5–3.5 hours" },
        { vehicleSize: "medium", price: 179, timeEstimate: "3–4 hours" },
        { vehicleSize: "large", price: 206, timeEstimate: "3.5–4.5 hours" },
        { vehicleSize: "xl", price: 233, timeEstimate: "4–5.5 hours" },
      ],
    },
    inclusions: [
      "Everything in Exterior Detail",
      "Everything in Interior Detail",
      "Light pet hair",
      "Normal kid mess",
    ],
    scopeNotes: [
      "Restoration-level vehicles require a custom quote by phone.",
      "Extraction/shampoo is not included unless added.",
    ],
  },
  {
    id: "restoration-interior",
    name: "Restoration Interior (Quote Only)",
    slug: "restoration-interior",
    shortDescription:
      "For extreme pet hair, biohazards, mold, and heavy neglect.",
    longDescription:
      "Restoration-level interior work is not priced online. Call or text for a quick assessment and a custom quote.",
    category: "restoration",
    requiresPhoneCall: true,
    oneOffPricing: [],
    inclusions: [
      "Heavy debris removal",
      "Intensive crevice/detail work",
      "Deep scrub/steam as needed",
      "Targeted extraction as needed (results vary)",
    ],
    scopeNotes: [
      "Quote required before booking.",
      "Minimum service fee applies if declined on arrival after an incorrect booking.",
    ],
  },
];

export const pricingPolicies = {
  noSurprisePromise:
    "If your vehicle matches the service scope, your price will not change on arrival.",
  restorationRule:
    "Restoration-level vehicles require a call/text for a custom quote.",
  minimumServiceFee: {
    amount: 45,
    reason:
      "Applies if a restoration-level vehicle is booked incorrectly and service is declined on arrival.",
  },
};
