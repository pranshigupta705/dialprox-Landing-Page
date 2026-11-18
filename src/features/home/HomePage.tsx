import { Hero } from '@/features/hero';
import { CallingFeatures } from '@/features/calling';
import { Workflow, Analytics, Integrations, Benefits } from '@/features/product';
import { Testimonials, Faq, DemoForm, Footer } from '@/features/conversion';

// Page order = order below. This renders inside <main> from MainLayout.
export default function HomePage() {
  return (
    <>
      <Hero />
      <CallingFeatures />
      <Workflow />
      <Analytics />
      <Integrations />
      <Benefits />
      <Testimonials />
      <Faq />
      <DemoForm />
      <Footer />
    </>
  );
}
