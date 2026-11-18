export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
}

// TODO: PLACEHOLDERS. Replace with real quotes from real customers (with their
// permission) before launch. Do not publish invented testimonials.
export const testimonials: Testimonial[] = [
  {
    id: 't1',
    quote: 'We stopped losing after-hours calls in the first week. Customers get an answer instead of voicemail.',
    name: 'Placeholder Name',
    role: 'Head of Support',
    company: 'Example Co.',
  },
  {
    id: 't2',
    quote: 'Setup was quick, and the call summaries save our team hours of note-taking every day.',
    name: 'Placeholder Name',
    role: 'Operations Manager',
    company: 'Sample Clinic',
  },
  {
    id: 't3',
    quote: 'Routing by language and plan was the feature we needed. Transfers now arrive with full context.',
    name: 'Placeholder Name',
    role: 'Customer Experience Lead',
    company: 'Demo Retail',
  },
];

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

// TODO: Review every answer against what DialProx really does before launch.
export const faqs: FaqItem[] = [
  {
    id: 'setup',
    question: 'How long does setup take?',
    answer:
      'Most teams connect a number, add their FAQs and call flows, and take a first test call on the same day.',
  },
  {
    id: 'number',
    question: 'Can I keep my existing business number?',
    answer:
      'Yes. You can bring your current number or get a new one. Either way, your callers dial the same way they do today.',
  },
  {
    id: 'transfer',
    question: 'What happens when a caller needs a person?',
    answer:
      'The agent transfers the call to the right teammate and passes along a summary, so the caller does not have to repeat themselves.',
  },
  {
    id: 'languages',
    question: 'Does it support more than one language?',
    answer:
      'You can route and answer calls by language. Ask us during your demo which languages are available for your region.',
  },
  {
    id: 'integrations',
    question: 'Which tools does it connect to?',
    answer:
      'DialProx can be customized to connect with the tools your team already uses. Tell us what you need during your demo.',
  },
  {
    id: 'security',
    question: 'How is call data handled?',
    answer:
      'Access is role-based, and you control call recording and retention. We will walk through the details with your team during the demo.',
  },
];

export const teamSizes: string[] = ['1–10', '11–50', '51–200', '201–1,000', '1,000+'];

