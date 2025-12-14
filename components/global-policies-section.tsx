import { globalPolicies } from "@/data/global-policies";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield } from "lucide-react";

export function GlobalPoliciesSection() {
  return (
    <section className="py-12 bg-dirtydog-black border-y border-dirtydog-silver/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Shield className="h-5 w-5 text-dirtydog-green" aria-hidden="true" />
            <h2 className="text-xl font-extrabold text-dirtydog-offwhite">
              Our Policies
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {globalPolicies.map((policy) => (
              <Card
                key={policy.id}
                className="bg-dirtydog-gray border-dirtydog-silver/20"
              >
                <CardHeader className="pb-3">
                  <CardTitle className="text-base text-dirtydog-offwhite">
                    {policy.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-dirtydog-silver">
                    {policy.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

