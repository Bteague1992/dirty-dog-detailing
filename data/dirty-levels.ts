export interface DirtyLevel {
  id: string;
  level: number;
  name: string;
  description: string;
  surcharge: string;
  examples: string[];
}

export const dirtyLevels: DirtyLevel[] = [
  {
    id: "level-1",
    level: 1,
    name: "Dirty",
    description:
      "Light everyday use — crumbs/dust, no heavy mess or sticky buildup.",
    surcharge: "$0",
    examples: [
      "Regular daily use",
      "Light dust and crumbs",
      "No heavy pet hair",
      "No major spills or sticky residue",
    ],
  },
  {
    id: "level-2",
    level: 2,
    name: "Dirtier",
    description:
      "Food in crevices, kid messes, light spills, or noticeable pet hair.",
    surcharge: "+$50",
    examples: [
      "Moderate pet hair",
      "Kid snacks and small spills",
      "Sticky cupholders/console",
      "Extra brushing and vacuum passes needed",
    ],
  },
  {
    id: "level-3",
    level: 3,
    name: "DIRTY DOG",
    description:
      "Heavy mess — lots of pet hair, multiple spills, sticky buildup, or long-neglected interior.",
    surcharge: "+$125 (photos required)",
    examples: [
      "Heavy pet hair throughout",
      "Food disasters and multiple stains",
      "Trash/debris buildup",
      "Strong odors",
      "Haven’t been cleaned in a long time",
    ],
  },
];
