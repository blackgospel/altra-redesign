import { Divider } from "@/components/global/divider";
import { ClientsLogos } from "@/components/sections/customer-testimonials";
import { CustomerTestimonialsHero } from "@/components/sections/customer-testimonials/hero";
import { TestimonialsSection } from "@/components/sections/customer-testimonials/testimonials-section";

export default function CustomerTestimonialsPage() {
  return (
    <>
      <CustomerTestimonialsHero />

      <ClientsLogos className="altra-container" />

      <TestimonialsSection
        titleKey="customerTestimonials.sections.altraFamily.title"
        category="altraFamily"
        className="altra-container pt-24"
      />

      <Divider className="altra-container my-16" />

      <TestimonialsSection
        titleKey="customerTestimonials.sections.altraWellbeingHub.title"
        category="altraWellbeingHub"
        className="altra-container"
      />

      <Divider className="altra-container my-16" />

      <TestimonialsSection
        titleKey="customerTestimonials.sections.altraStaff.title"
        category="altraStaff"
        className="altra-container"
      />

      <Divider className="altra-container my-16" />
    </>
  );
}
