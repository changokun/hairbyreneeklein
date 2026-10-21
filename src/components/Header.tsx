'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Visit', href: '#visit' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      setOpen(false);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/85 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2" aria-label="hairbyrenee home">
          <span className="font-display text-xl tracking-tight text-foreground">Hair by Renee</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks?.map((link) => (
            <a
              key={link?.href}
              href={link?.href}
              className="text-[15px] font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link?.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#book"
            className="hidden min-h-[44px] items-center justify-center rounded-full bg-primary px-6 text-[15px] font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            Book now
          </a>
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground md:hidden"
          >
            <Icon name={open ? 'XMarkIcon' : 'Bars3Icon'} size={22} />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 top-20 z-40 bg-background/90 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-2 px-6 pt-8">
            {navLinks?.map((link) => (
              <a
                key={link?.href}
                href={link?.href}
                onClick={() => setOpen(false)}
                className="font-display flex min-h-[56px] items-center border-b border-border text-3xl text-foreground"
              >
                {link?.label}
              </a>
            ))}
            <a
              href="#book"
              onClick={() => setOpen(false)}
              className="mt-6 flex min-h-[56px] items-center justify-center rounded-full bg-accent px-6 text-lg font-semibold text-accent-foreground"
            >
              Book your appointment
            </a>
          </div>
        </div>
      )}
    </header>
  );
}