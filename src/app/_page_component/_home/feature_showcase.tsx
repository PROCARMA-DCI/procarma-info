import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function FeatureShowcase() {
  const features = [
    {
      title: "ALLCM",
      subtitle: "AI Agent Life Cycle Management",
      description:
        "AI Agents analyze each customer's life cycle and enhances their life time transactional and experiential value.",
    },
    {
      title: "CONNECTED",
      subtitle: "Dealer Branded App Ecosystem",
      description:
        "Dealer / Customer centric approach to product visibility and engagement touch points.",
    },
    {
      title: "AGNOSTIC",
      subtitle: "Open platform architecture - no gateway fees",
      description:
        "Partnered with top tier administrators and agencies nationwide to display your information across our platform.",
    },
  ];

  return (
    <div className="w-full ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col gap-4">
            <Card className=" transition-all duration-200 hover:shadow-lg h-24">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-foreground">
                  {feature.title}
                  <CardDescription className="text-sm font-medium text-muted-foreground">
                    {feature.subtitle}
                  </CardDescription>
                </CardTitle>
              </CardHeader>
            </Card>
            <p className="text-sm text-muted-foreground leading-relaxed mx-4 ">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
