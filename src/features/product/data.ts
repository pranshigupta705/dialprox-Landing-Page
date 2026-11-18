import {
  BookOpen,
  Clock,
  Plug,
  Rocket,
  ShieldCheck,
  TrendingUp,
  type LucideIcon,
} from 'lucide-react';

export interface WorkflowStep {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const workflowSteps: WorkflowStep[] = [
  {
    id: 'connect',
    title: 'Connect your number',
    description: 'Bring your existing business number or get a new one. Setup takes minutes, not weeks.',
    icon: Plug,
  },
  {
    id: 'teach',
    title: 'Teach your agent',
    description: 'Add your FAQs, policies, and call flows. Your agent learns how your business talks.',
    icon: BookOpen,
  },
  {
    id: 'launch',
    title: 'Go live and improve',
    description: 'Start taking calls, then use recordings and reports to keep making it better.',
    icon: Rocket,
  },
];

export interface DailyCalls {
  day: string;
  resolved: number;
  transferred: number;
}

export const weeklyCalls: DailyCalls[] = [
  { day: 'Mon', resolved: 118, transferred: 22 },
  { day: 'Tue', resolved: 132, transferred: 26 },
  { day: 'Wed', resolved: 126, transferred: 20 },
  { day: 'Thu', resolved: 148, transferred: 28 },
  { day: 'Fri', resolved: 156, transferred: 24 },
  { day: 'Sat', resolved: 84, transferred: 12 },
  { day: 'Sun', resolved: 72, transferred: 10 },
];

export const integrations: string[] = [
  'Salesforce',
  'HubSpot',
  'Zendesk',
  'Freshdesk',
  'Slack',
  'Microsoft Teams',
  'Google Calendar',
  'Calendly',
  'Shopify',
  'Stripe',
  'Twilio',
  'Zapier',
];

export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const benefits: Benefit[] = [
  {
    id: 'always-on',
    title: 'Always on',
    description: 'Nights, weekends, and holidays are covered. No missed calls, no voicemail pile-up.',
    icon: Clock,
  },
  {
    id: 'secure',
    title: 'Secure by default',
    description: 'Role-based access, call recording controls, and data handling you can explain to your customers.',
    icon: ShieldCheck,
  },
  {
    id: 'scales',
    title: 'Scales with you',
    description: 'Handle ten calls or ten thousand without hiring, training, or scheduling anyone.',
    icon: TrendingUp,
  },
];
