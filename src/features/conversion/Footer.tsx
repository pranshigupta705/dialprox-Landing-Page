const columns = [
  {
    title: 'Product',
    links: [
      { label: 'Calling features', href: '#calling' },
      { label: 'How it works', href: '#workflow' },
      { label: 'Analytics', href: '#analytics' },
      { label: 'Customization', href: '#customization' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Why DialProx', href: '#benefits' },
      { label: 'Customers', href: '#testimonials' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Book a demo', href: '#contact' },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] bg-background-alt">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-4 py-12 md:px-6 lg:grid-cols-[1.5fr_1fr_1fr] lg:px-8">
        <div className="grid max-w-sm content-start gap-3">
          <a
            href="#top"
            className="text-xl font-bold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-primary)]"
          >
            DialProx
          </a>
          <p className="text-[var(--color-text-muted)]">
            Answer every call, route it right, and keep improving with the data.
          </p>
        </div>

        {columns.map((column) => (
          <nav key={column.title} aria-label={column.title}>
            <p className="mb-3 font-semibold">{column.title}</p>
            <ul className="grid gap-2">
              {column.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-primary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-primary)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="border-t border-[var(--color-border)]">
        <p className="mx-auto max-w-[1200px] px-4 py-6 text-sm text-[var(--color-text-muted)] md:px-6 lg:px-8">
          © {year} DialProx. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

