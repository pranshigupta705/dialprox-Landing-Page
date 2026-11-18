import { PhoneIncoming, PhoneOutgoing, Route, Users, type LucideIcon } from 'lucide-react';

export interface CallingFeature {
  id: string;
  title: string;
  description: string;
  points: string[];
  icon: LucideIcon;
}

export const callingFeatures: CallingFeature[] = [
  {
    id: 'inbound',
    title: 'Inbound calling',
    description: 'Answer instantly, 24/7. Callers get a real answer, not a hold message.',
    points: [
      'Answers in under 5 seconds, at any hour',
      'Looks up orders and accounts during the call',
      'Transfers to a person with a full summary',
    ],
    icon: PhoneIncoming,
  },
  {
    id: 'outbound',
    title: 'Outbound calling',
    description: 'Run reminders, follow-ups, and surveys at scale, with local numbers and call-time limits.',
    points: [
      'Appointment and payment reminders',
      'Respects time zones and do-not-call lists',
      'Retries unanswered calls on your schedule',
    ],
    icon: PhoneOutgoing,
  },
  {
    id: 'routing',
    title: 'Call routing',
    description: 'Send each caller to the right place by language, topic, customer plan, or business hours.',
    points: [
      'Rules by language, topic, and plan',
      'Business-hours and holiday schedules',
      'Voicemail fallback when no one is free',
    ],
    icon: Route,
  },
  {
    id: 'agents',
    title: 'Agent management',
    description: 'Manage people and AI agents in one place: availability, permissions, and coaching notes.',
    points: [
      'Set status and working hours',
      'Role-based permissions',
      'Review recordings and leave coaching notes',
    ],
    icon: Users,
  },
];
