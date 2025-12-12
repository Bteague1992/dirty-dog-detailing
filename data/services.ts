export type VehicleSize = "sedan" | "smallSUV" | "largeSUVTruck" | "xl";

export interface ServicePricing {
  vehicleSize: VehicleSize;
  price: number;
  timeEstimate: string;
}

export interface Service {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  longDescription: string;
  idealFor: string[];
  inclusions: string[];
  pricing: ServicePricing[];
  isPopular?: boolean;
}

export const services: Service[] = [
  {
    id: "basic-wash",
    name: "Exterior Basic Wash",
    slug: "basic-wash",
    shortDescription:
      "Exterior-only maintenance wash for light dirt and weekly/monthly upkeep.",
    longDescription:
      "Perfect for regular maintenance. Our signature exterior wash that gets your vehicle looking sharp without the full interior treatment.",
    idealFor: ["maintenance washes", "lightly dirty vehicles", "quick refresh"],
    inclusions: [
      "Dirty Dog Foam Dunk™ pre-wash",
      "Two-bucket hand wash with pH-neutral soap",
      "Bug removal (front bumper + mirrors)",
      "Wheel & tire deep clean",
      "Tire shine & conditioning",
      "Hand dry with plush microfiber towels",
      "Exterior glass cleaned",
      "Door jamb wipe-down",
      "Light spray sealant (approx. 1–2 months protection)",
    ],
    pricing: [
      { vehicleSize: "sedan", price: 49, timeEstimate: "1-1.5 hours" },
      { vehicleSize: "smallSUV", price: 59, timeEstimate: "1-1.5 hours" },
      { vehicleSize: "largeSUVTruck", price: 69, timeEstimate: "1.5-2 hours" },
      { vehicleSize: "xl", price: 89, timeEstimate: "1.5-2 hours" },
    ],
  },

  {
    id: "interior-quick",
    name: "Interior Basic Clean",
    slug: "interior-quick",
    shortDescription:
      "Interior reset for generally clean vehicles (light debris, normal use).",
    longDescription:
      "A thorough interior refresh for vehicles that just need a reset. This service is designed for generally clean interiors—if your vehicle has heavy pet hair, spills, or built-up grime, choose Deep Clean or select a higher Dirty Level.",
    idealFor: [
      "generally clean vehicles needing a reset",
      "regular upkeep",
      "light mess",
    ],
    inclusions: [
      "Full vacuum (seats, floors, mats, trunk) — light debris",
      "Wipe-down of all interior surfaces with interior-safe cleaner",
      "Dashboard & console cleaning",
      "Cupholders & door panels cleaned (light detailing)",
      "Interior windows cleaned",
      "Light spot wiping (no shampoo/extraction)",
      "Air refresh spray",
    ],
    pricing: [
      { vehicleSize: "sedan", price: 99, timeEstimate: "1-2 hours" },
      { vehicleSize: "smallSUV", price: 119, timeEstimate: "1.5-2 hours" },
      {
        vehicleSize: "largeSUVTruck",
        price: 139,
        timeEstimate: "1.5-2.5 hours",
      },
      { vehicleSize: "xl", price: 159, timeEstimate: "3-3.5 hours" },
    ],
  },

  {
    id: "full-detail",
    name: "Full Dirty Dog Detail™",
    slug: "full-detail",
    shortDescription: "Complete interior + exterior detail for most vehicles.",
    longDescription:
      "Our flagship service. Complete interior and exterior detailing that leaves your vehicle looking and feeling dramatically better. This is the Dirty Dog Clean™ experience.",
    idealFor: [
      "most customers",
      "seasonal cleanups",
      "monthly/quarterly resets",
    ],
    isPopular: true,
    inclusions: [
      "Exterior: Dirty Dog Foam Dunk™ pre-wash",
      "Exterior: Two-bucket hand wash + bug removal (front bumper + mirrors)",
      "Exterior: Wheel & tire deep clean",
      "Exterior: Tire shine & conditioning",
      "Exterior: Hand dry with plush microfiber towels",
      "Exterior: Light spray sealant for gloss & short-term protection",
      "Exterior: Exterior glass cleaned",
      "Exterior: Door jambs wiped/cleaned",
      "Interior: Deep vacuum (seats, floors, mats, trunk)",
      "Interior: Dashboard, vents, console cleaned",
      "Interior: Cupholders & door panels scrubbed (moderate detailing)",
      "Interior: Interior plastics wiped/conditioned",
      "Interior: Seat wipe-down (leather or cloth surface wipe)",
      "Interior: Light spot wiping (no full shampoo/extraction)",
      "Interior: Interior glass streak-free finish",
      "Interior: Steering wheel degreased & sanitized",
    ],
    pricing: [
      { vehicleSize: "sedan", price: 149, timeEstimate: "2-2.5 hours" },
      { vehicleSize: "smallSUV", price: 169, timeEstimate: "2.5-3 hours" },
      {
        vehicleSize: "largeSUVTruck",
        price: 189,
        timeEstimate: "3-4 hours",
      },
      { vehicleSize: "xl", price: 219, timeEstimate: "3.5-4.5 hours" },
    ],
  },

  {
    id: "deep-clean",
    name: "Interior Deep Clean",
    slug: "deep-clean",
    shortDescription:
      "Heavy interior reset for kid messes, pet hair, spills, and neglected vehicles.",
    longDescription:
      "When things have gotten out of hand. This is our most aggressive interior service for heavy messes, pet hair, spills, and long-neglected interiors. Includes intensive detail work, with shampoo/extraction performed as needed (full-vehicle extraction not guaranteed unless added).",
    idealFor: [
      "kid messes",
      "pet-heavy vehicles",
      "long-neglected interiors",
      "work trucks",
    ],
    inclusions: [
      "Heavy debris removal + full vacuum (seats, floors, mats, trunk)",
      "Intensive crevice/detail work (rails, seams, tight areas)",
      "Deep scrub of plastics, door panels, cupholders, pedals",
      "Steam cleaning on hard surfaces & sticky areas (as needed)",
      "Stain/spot treatment (targeted areas; results vary)",
      "Pet hair removal Level 1-2 included (upgrade if extreme)",
      "Odor neutralizer (basic)",
      "Headliner spot cleaning (light/targeted)",
      "Interior glass cleaned",
      "Plastic & vinyl wiped/reconditioned",
      "Shampoo/extraction as needed (not guaranteed full interior extraction)",
    ],
    pricing: [
      { vehicleSize: "sedan", price: 189, timeEstimate: "3.5-4 hours" },
      { vehicleSize: "smallSUV", price: 219, timeEstimate: "4-4.5 hours" },
      {
        vehicleSize: "largeSUVTruck",
        price: 249,
        timeEstimate: "4.5-5.25 hours",
      },
      { vehicleSize: "xl", price: 289, timeEstimate: "5-6 hours" },
    ],
  },
];
