import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import siteContent from '@/data/siteContent.json';

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Visit', href: '#visit' },
  { label: 'Book', href: '#book' },
];

const socialIcons: Record<string, string> = {
  instagram: 'CameraIcon',
  facebook: 'UserGroupIcon',
  tiktok: 'PlayIcon',
  email: 'EnvelopeIcon',
  phone: 'PhoneIcon',
};

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background pb-28 md:pb-0">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-8 px-4 py-14 sm:px-6 md:flex-row md:items-center lg:px-8">
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Icon name="SparklesIcon" size={20} />
          </span>
          <span className="font-display text-lg tracking-tight text-foreground">hairbyrenee</span>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-2">
          {footerLinks?.map((link) => (
            <a
              key={link?.href}
              href={link?.href}
              className="inline-flex min-h-[44px] items-center text-[15px] font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link?.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-2 md:items-end">
          <div className="flex items-center gap-2">
            {siteContent?.social &&
              Object.entries(siteContent.social).map(([key, url]) => {
                if (!url || typeof url !== 'string' || !url.includes('http')) return null;
                const iconName = socialIcons[key] || 'GlobeAltIcon';
                const ariaLabel = `hairbyrenee on ${key.charAt(0).toUpperCase() + key.slice(1)}`;
                return (
                  <a
                    key={key}
                    href={url}
                    aria-label={ariaLabel}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary"
										target="_blank"
                  >
                    <Icon name={iconName} size={20} />
                  </a>
                );
              })}
          </div>
          <p className="text-[15px] text-muted-foreground">
            <Link href="#visit" className="underline-offset-4 hover:underline">Privacy</Link>
            {' · '}
            <Link href="#visit" className="underline-offset-4 hover:underline">Terms</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}