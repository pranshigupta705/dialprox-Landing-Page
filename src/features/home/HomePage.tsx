import Hero from '@/features/hero/Hero';
import CallingFeatures from '@/features/calling/CallingFeatures';
import Workflow from '@/features/product/Workflow';
import Analytics from '@/features/product/Analytics';
import Integrations from '@/features/product/Integrations';
import Benefits from '@/features/product/Benefits';
import Testimonials from '@/features/conversion/Testimonials';
import Faq from '@/features/conversion/Faq';
import DemoForm from '@/features/conversion/DemoForm';
import Footer from '@/features/conversion/Footer';

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
