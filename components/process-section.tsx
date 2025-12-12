import { Droplets, Sparkles, Wind, CircleDot, CheckCircle } from "lucide-react";

const processSteps = [
  {
    icon: Droplets,
    title: "Dirty Dog Foam Dunk™",
    description:
      "Thick pre-wash foam to break down grime, bugs, and road film before contact washing.",
  },
  {
    icon: Sparkles,
    title: "Aggressive-on-dirt wash",
    description:
      "Wheels, tires, and contact wash with pH-neutral soap. We get the dirt others miss.",
  },
  {
    icon: Wind,
    title: "Deep interior reset",
    description:
      "Vacuum, surfaces, cracks & crevices. Every nook gets attention.",
  },
  {
    icon: CircleDot,
    title: "Tire blackout & glass perfection",
    description:
      "Tires get the shine treatment. Glass gets streak-free clarity inside and out.",
  },
  {
    icon: CheckCircle,
    title: "Signature gloss finish & final inspection",
    description:
      "Spray sealant for protection and gloss. Final walkthrough to ensure nothing is missed.",
  },
];

export function ProcessSection() {
  return (
    <section className="py-16 sm:py-24 bg-dirtydog-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-dirtydog-offwhite sm:text-4xl mb-4">
            What Makes a Dirty Dog Clean™ Different?
          </h2>
          <p className="text-lg text-dirtydog-silver max-w-2xl mx-auto">
            Our signature process ensures every vehicle gets the attention it
            deserves.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-4"
              >
                <div className="rounded-full bg-dirtydog-gray p-4 border border-dirtydog-silver/20">
                  <Icon
                    className="h-8 w-8 text-dirtydog-green"
                    aria-hidden="true"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-dirtydog-offwhite">
                    {step.title}
                  </h3>
                  <p className="text-sm text-dirtydog-silver">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

