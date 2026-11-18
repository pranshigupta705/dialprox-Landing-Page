import Reveal from '@/components/Reveal';
import { Hero } from '@/features/hero';
import { CallingFeatures } from '@/features/calling';
import { Workflow, Analytics, Integrations, Benefits } from '@/features/product';
import { Testimonials, Faq, DemoForm, Footer } from '@/features/conversion';

// Page order = order below. This renders inside <main> from MainLayout.
export default function HomePage() {
  return (
    <>
      <Hero />
      <Reveal>
        <CallingFeatures />
      </Reveal>
      <Reveal>
        <Workflow />
      </Reveal>
      <Reveal>
        <Analytics />
      </Reveal>
      <Reveal>
        <Integrations />
      </Reveal>
      <Reveal>
        <Benefits />
      </Reveal>
      <Reveal>
        <Testimonials />
      </Reveal>
      <Reveal>
        <Faq />
      </Reveal>
      <Reveal>
        <DemoForm />
      </Reveal>
      <Footer />
    </>
  );
}
