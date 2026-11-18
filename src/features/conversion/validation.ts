export interface DemoFormValues {
  name: string;
  email: string;
  company: string;
  phone: string;
  teamSize: string;
  message: string;
}

export type DemoFormErrors = Partial<Record<keyof DemoFormValues, string>>;

export const emptyValues: DemoFormValues = {
  name: '',
  email: '',
  company: '',
  phone: '',
  teamSize: '',
  message: '',
};

// Order matters: the first invalid field in this list receives focus on submit.
export const fieldOrder: (keyof DemoFormValues)[] = [
  'name',
  'email',
  'company',
  'phone',
  'teamSize',
  'message',
];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_CHARS = /^[+\d\s().-]+$/;

export function validate(values: DemoFormValues): DemoFormErrors {
  const errors: DemoFormErrors = {};

  if (values.name.trim().length < 2) {
    errors.name = 'Enter your full name.';
  }

  const email = values.email.trim();
  if (!email) {
    errors.email = 'Enter your work email.';
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = 'Enter a valid email address, like name@company.com.';
  }

  if (!values.company.trim()) {
    errors.company = 'Enter your company name.';
  }

  const phone = values.phone.trim();
  if (phone) {
    const digits = phone.replace(/\D/g, '');
    if (!PHONE_CHARS.test(phone) || digits.length < 7 || digits.length > 15) {
      errors.phone = 'Enter a valid phone number, or leave this blank.';
    }
  }

  if (!values.teamSize) {
    errors.teamSize = 'Choose your team size.';
  }

  return errors;
}
