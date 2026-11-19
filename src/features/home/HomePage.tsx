import { useSiteAnimations } from '@/hooks/useSiteAnimations';
import FeaturesShowcase from '@/features/scene/FeaturesShowcase';
import { Hero } from '@/features/hero';
import { Workflow, Analytics, Benefits } from '@/features/product';
import { Customization } from '@/features/customization';
import { Testimonials, Faq, DemoForm, Footer } from '@/features/conversion';
// Page order = order below. This renders inside <main> from MainLayout.
export default function HomePage() {
  useSiteAnimations();
  return (
    <>
      <Hero />
        <FeaturesShowcase />
        <Workflow />
        <Analytics />
        <Customization />
        <Benefits />
        <Testimonials />
        <Faq />
        <DemoForm />
      <Footer />
    </>
  );
}

