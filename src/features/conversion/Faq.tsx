import { ChevronDown } from 'lucide-react';
import SectionHeading from '@/features/product/SectionHeading';
import { faqs } from './data';

export default function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 bg-background-alt py-16 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, answered"
          description="Can’t find what you need? Ask us in the form below."
        />

        <div className="grid gap-3">
          {faqs.map(({ id, question, answer }) => (
            <details
              key={id}
              className="group rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-xl p-5 font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-primary)] [&::-webkit-details-marker]:hidden">
                {question}
                <ChevronDown
                  size={20}
                  aria-hidden="true"
                  className="flex-none text-[var(--color-text-muted)] transition-transform motion-reduce:transition-none group-open:rotate-180"
                />
              </summary>
              <p className="px-5 pb-5 text-[var(--color-text-muted)]">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
