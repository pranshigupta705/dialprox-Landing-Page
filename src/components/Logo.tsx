import '@fontsource/poppins/800-italic.css';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <span className={`logo-wordmark ${className}`} role="img" aria-label="DialProX">
      DialPro<span className="logo-x">X</span>
    </span>
  );
}
