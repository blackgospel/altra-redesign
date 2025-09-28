import { WHO_WE_SERVE } from "@/config/home";
import { SectionTitle } from "./_section-title";
import { ServiceCard } from "./_service-card";

export function WhoWeServe() {
  return (
    <div className="flex flex-col gap-10">
      <SectionTitle
        title="Who We Serve"
        description="We work with care providers across a wide range of services:"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {WHO_WE_SERVE.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
            image={service.image}
          />
        ))}
      </div>
    </div>
  );
}
