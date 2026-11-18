// TODO: Remove or hide this page in production (Phase 7)

import { useTheme } from '@/hooks/useTheme';
import {
  Button,
  IconButton,
  Badge,
  Heading,
  Text,
  Container,
  Section,
  SectionHeading,
} from '@/components/ui';
import { Sun, Moon, Phone, ArrowRight, Bell } from 'lucide-react';
import Logo from '@/components/Logo';

// Helper component for color swatches
function ColorSwatch({ name, variable }: { name: string; variable: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <div
        className="w-full h-14 rounded-[var(--radius-md)] border border-[var(--color-border)]"
        style={{ backgroundColor: `var(${variable})` }}
      />
      <span className="text-xs font-mono text-[var(--color-text-muted)]">{variable}</span>
      <span className="text-xs font-semibold text-[var(--color-text)]">{name}</span>
    </div>
  );
}

export default function DesignSystem() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)]">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-[var(--color-surface)] border-b border-[var(--color-border)] shadow-[var(--shadow-sm)]">
        <Container className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <Logo className="text-xl" />
            <Badge variant="primary">Design System</Badge>
          </div>
          <IconButton
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            onClick={toggleTheme}
            variant="ghost"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </IconButton>
        </Container>
      </header>

      {/* Color Tokens */}
      <Section background="default" padding="md">
        <SectionHeading
          eyebrow="Design Tokens"
          title="Color Palette"
          description="All colors are defined as CSS custom properties in the @theme block and overridden in .dark."
          align="left"
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <ColorSwatch name="Primary" variable="--color-primary" />
          <ColorSwatch name="Primary Hover" variable="--color-primary-hover" />
          <ColorSwatch name="Primary Soft" variable="--color-primary-soft" />
          <ColorSwatch name="Accent" variable="--color-accent" />
          <ColorSwatch name="Background" variable="--color-background" />
          <ColorSwatch name="Background Alt" variable="--color-background-alt" />
          <ColorSwatch name="Surface" variable="--color-surface" />
          <ColorSwatch name="Border" variable="--color-border" />
          <ColorSwatch name="Text" variable="--color-text" />
          <ColorSwatch name="Text Muted" variable="--color-text-muted" />
          <ColorSwatch name="Dark Section" variable="--color-dark-section" />
          <ColorSwatch name="Danger" variable="--color-danger" />
          <ColorSwatch name="Warning" variable="--color-warning" />
          <ColorSwatch name="Success" variable="--color-success" />
        </div>
      </Section>

      {/* Typography */}
      <Section background="alt" padding="md">
        <SectionHeading eyebrow="Typography" title="Type Scale" align="left" />
        <div className="space-y-6">
          <div className="border-b border-[var(--color-border)] pb-6">
            <span className="text-xs text-[var(--color-text-muted)] font-mono block mb-2">
              h1 · clamp(2.25rem, 5vw, 3.75rem) · weight 700
            </span>
            <Heading size={1} as="h1">The quick brown fox</Heading>
          </div>
          <div className="border-b border-[var(--color-border)] pb-6">
            <span className="text-xs text-[var(--color-text-muted)] font-mono block mb-2">
              h2 · clamp(1.75rem, 3.5vw, 2.5rem) · weight 700
            </span>
            <Heading size={2} as="h2">The quick brown fox</Heading>
          </div>
          <div className="border-b border-[var(--color-border)] pb-6">
            <span className="text-xs text-[var(--color-text-muted)] font-mono block mb-2">
              h3 · 1.25rem · weight 600
            </span>
            <Heading size={3} as="h3">The quick brown fox</Heading>
          </div>
          <div className="border-b border-[var(--color-border)] pb-6">
            <span className="text-xs text-[var(--color-text-muted)] font-mono block mb-2">
              body · 1rem · line-height 1.6
            </span>
            <Text variant="body">
              The quick brown fox jumps over the lazy dog. This is body text — the base reading size with comfortable line-height.
            </Text>
          </div>
          <div>
            <span className="text-xs text-[var(--color-text-muted)] font-mono block mb-2">
              small · 0.875rem
            </span>
            <Text variant="small">
              The quick brown fox jumps over the lazy dog. Small text for captions and hints.
            </Text>
          </div>
        </div>
      </Section>

      {/* Buttons */}
      <Section background="default" padding="md">
        <SectionHeading eyebrow="Components" title="Button" align="left" />
        <div className="space-y-8">
          {/* Variants */}
          <div>
            <Text variant="small" className="mb-3 font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">
              Variants
            </Text>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="accent">Accent</Button>
              <Button variant="danger">Danger</Button>
            </div>
          </div>

          {/* Sizes */}
          <div>
            <Text variant="small" className="mb-3 font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">
              Sizes
            </Text>
            <div className="flex flex-wrap items-center gap-3">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
          </div>

          {/* Icons */}
          <div>
            <Text variant="small" className="mb-3 font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">
              With Icons
            </Text>
            <div className="flex flex-wrap gap-3">
              <Button leftIcon={<Phone size={16} />}>Call Now</Button>
              <Button rightIcon={<ArrowRight size={16} />} variant="secondary">
                Learn More
              </Button>
              <Button leftIcon={<Bell size={16} />} variant="ghost">
                Notifications
              </Button>
            </div>
          </div>

          {/* States */}
          <div>
            <Text variant="small" className="mb-3 font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">
              States
            </Text>
            <div className="flex flex-wrap gap-3">
              <Button isLoading>Loading…</Button>
              <Button disabled>Disabled</Button>
              <Button variant="secondary" isLoading>
                Processing
              </Button>
            </div>
          </div>

          {/* Link */}
          <div>
            <Text variant="small" className="mb-3 font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">
              As Link
            </Text>
            <Button as="a" href="#" variant="primary">
              Link Button
            </Button>
          </div>

          {/* Full width */}
          <div className="max-w-sm">
            <Text variant="small" className="mb-3 font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">
              Full Width
            </Text>
            <Button fullWidth>Full Width Button</Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
