import React from 'react';
import Icon from '@/components/ui/AppIcon';

const breakdown = [
  { stars: 5, pct: 94 },
  { stars: 4, pct: 5 },
  { stars: 3, pct: 1 },
  { stars: 2, pct: 0 },
  { stars: 1, pct: 0 },
];

const reviews = [
  {
    name: 'Priya Natarajan',
    service: 'Balayage',
    date: '09/21/2026',
    quote:
      'I walked in with three years of box-dye damage. Renee never made me feel judged and my hair has never looked this healthy. The grow-out is flawless.',
    span: 'md:col-span-2',
  },
  {
    name: 'Jessica Holloway',
    service: 'Precision Cut',
    date: '10/02/2026',
    quote: 'Best cut of my life. Asked for “low effort,” got exactly that.',
    span: '',
  },
  {
    name: 'Dana Kowalczyk',
    service: 'Extensions',
    date: '08/30/2026',
    quote:
      'Nobody can tell they are extensions, not even my sister. Renee matched my color perfectly and showed me how to care for them.',
    span: '',
  },
  {
    name: 'Rosa Delgado',
    service: 'Root Touch-Up + Gloss',
    date: '10/09/2026',
    quote:
      'Calm studio, zero pressure, and I was out exactly on time. I rebooked before I even reached the door.',
    span: 'md:col-span-2',
  },
];

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex text-accent" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Icon key={i} name="StarIcon" variant="solid" size={18} />
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section id="reviews" className="relative bg-primary pt-16 pb-20 text-primary-foreground md:pt-24 md:pb-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p data-reveal className="text-[15px] font-semibold uppercase tracking-[0.2em] text-accent">
            Ratings & reviews
          </p>
          <h2 data-reveal data-reveal-delay="100" className="font-display text-display-lg mt-4 font-medium">
            Don’t take my word for it.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-12">
          {/* Aggregate panel */}
          <div
            data-reveal
            className="flex flex-col justify-between rounded-[2rem] bg-background p-8 text-foreground lg:col-span-4"
          >
            <div>
              <p className="font-display text-8xl leading-none text-primary">4.9</p>
              <div className="mt-3 flex items-center gap-3">
                <Stars />
                <span className="text-[15px] text-muted-foreground">312 verified reviews</span>
              </div>
            </div>

            <ul className="mt-8 space-y-3">
              {breakdown.map((b) => (
                <li key={b.stars} className="flex items-center gap-3">
                  <span className="w-4 text-[15px] font-medium">{b.stars}</span>
                  <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-secondary">
                    <div
                      className={`h-full rounded-full bg-accent ${b.pct === 0 ? 'w-0' : ''}`}
                      style={b.pct === 0 ? undefined : { width: `${b.pct}%` }}
                    />
                  </div>
                  <span className="w-10 text-right text-[15px] text-muted-foreground">{b.pct}%</span>
                </li>
              ))}
            </ul>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Porto+Portugal+hair+salon"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex min-h-[48px] items-center gap-2 text-[15px] font-semibold text-primary underline-offset-4 hover:underline"
            >
              Read all reviews on Google <Icon name="ArrowUpRightIcon" size={18} />
            </a>
          </div>

          {/* Review cards */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:col-span-8">
            {reviews.map((r, i) => (
              <article
                key={r.name}
                data-reveal
                data-reveal-delay={String(100 + i * 100)}
                className={`flex flex-col justify-between rounded-[2rem] border border-primary-foreground/15 bg-primary-foreground/5 p-7 backdrop-blur-sm ${r.span}`}
              >
                <div>
                  <Stars />
                  <p className="font-display mt-4 text-xl leading-snug sm:text-2xl">“{r.quote}”</p>
                </div>
                <div className="mt-6 flex items-center justify-between gap-3 border-t border-primary-foreground/15 pt-4">
                  <div>
                    <p className="text-[16px] font-semibold">{r.name}</p>
                    <p className="text-[15px] text-primary-foreground/70">{r.date}</p>
                  </div>
                  <span className="rounded-full bg-accent px-4 py-1 text-[15px] font-medium text-accent-foreground">
                    {r.service}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div data-reveal className="mt-12 flex justify-center">
          <a
            href="https://example.com/book"
            className="inline-flex min-h-[64px] w-full items-center justify-center gap-3 rounded-full bg-accent px-10 text-lg font-semibold text-accent-foreground transition-transform duration-300 hover:-translate-y-1 sm:w-auto"
          >
            Join 4,800+ happy clients — book now
            <Icon name="ArrowRightIcon" size={22} />
          </a>
        </div>
      </div>
    </section>
  );
}