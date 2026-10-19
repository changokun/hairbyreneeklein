import React from 'react';
import Icon from '@/components/ui/AppIcon';

const hours = [
  { day: 'Tuesday – Friday', time: '9:00 AM – 6:00 PM' },
  { day: 'Saturday', time: '8:00 AM – 4:00 PM' },
  { day: 'Sunday & Monday', time: 'Closed' },
];

const policies = [
  'Cancel or reschedule at least 48 hours ahead at no charge.',
  'Late cancellations and no-shows are charged 50% of the booked service.',
  'Arriving more than 15 minutes late may require rescheduling.',
  'A card is held at booking; you are charged only after your visit.',
];

const socials = [
  { label: 'Instagram', handle: '@hairbyrenee', icon: 'CameraIcon', href: 'https://instagram.com' },
  { label: 'TikTok', handle: '@hairbyrenee', icon: 'PlayIcon', href: 'https://tiktok.com' },
  { label: 'Facebook', handle: 'hairbyrenee Porto', icon: 'UserGroupIcon', href: 'https://facebook.com' },
];

export default function VisitSection() {
  return (
    <section id="visit" className="relative pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p data-reveal className="text-[15px] font-semibold uppercase tracking-[0.2em] text-accent">
            Visit the studio
          </p>
          <h2 data-reveal data-reveal-delay="100" className="font-display text-display-lg mt-4 font-medium text-foreground">
            Easy to find. Easy to book.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-12">
          {/* Location */}
          <div data-reveal className="flex flex-col justify-between rounded-[2rem] border border-border bg-card p-8 lg:col-span-5">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-primary">
                <Icon name="MapPinIcon" size={24} />
              </div>
              <h3 className="font-display mt-6 text-3xl text-card-foreground">Find the salon</h3>
              <div className="mt-3 flex flex-col gap-2">
                <a
                  href="tel:+351912345678"
                  className="inline-flex items-center gap-2 text-lg font-semibold text-card-foreground underline-offset-4 hover:underline"
                >
                  <Icon name="PhoneIcon" size={20} /> +351 912 345 678
                </a>
                <p className="text-[15px] text-muted-foreground">Call or message us on WhatsApp</p>
              </div>
              <address className="mt-5 text-lg not-italic leading-relaxed text-muted-foreground">
                Rua de Santa Catarina 100, 2º andar
                <br />
                4000-441 Porto, Portugal
              </address>
              <p className="mt-4 text-[16px] leading-relaxed text-muted-foreground">
                Our brand-new salon in the heart of Porto, a short walk from Bolhão metro station.
              </p>
              <div className="mt-6 overflow-hidden rounded-2xl border border-border">
                <iframe
                  title="Map showing hairbyrenee salon location in Porto, Portugal"
                  src="https://www.google.com/maps?q=Rua+de+Santa+Catarina+100,+4000-441+Porto,+Portugal&output=embed"
                  className="h-64 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Rua+de+Santa+Catarina+100,+4000-441+Porto,+Portugal"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[52px] flex-1 items-center justify-center gap-2 rounded-full border border-primary px-6 text-[16px] font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Icon name="MapIcon" size={20} /> Get directions
              </a>
              <a
                href="https://wa.me/351912345678"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[52px] flex-1 items-center justify-center gap-2 rounded-full bg-secondary px-6 text-[16px] font-semibold text-secondary-foreground"
              >
                <Icon name="ChatBubbleLeftRightIcon" size={20} /> WhatsApp
              </a>
            </div>
          </div>

          {/* Hours + policy */}
          <div className="grid grid-cols-1 gap-5 lg:col-span-7">
            <div data-reveal data-reveal-delay="100" className="rounded-[2rem] bg-secondary p-8">
              <div className="flex items-center gap-3">
                <Icon name="ClockIcon" size={24} />
                <h3 className="font-display text-2xl text-secondary-foreground">Hours</h3>
              </div>
              <ul className="mt-5 divide-y divide-border">
                {hours.map((h) => (
                  <li key={h.day} className="flex items-center justify-between gap-4 py-3">
                    <span className="text-[16px] font-medium text-secondary-foreground">{h.day}</span>
                    <span className="text-[16px] text-muted-foreground">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div data-reveal data-reveal-delay="200" className="rounded-[2rem] border border-border bg-card p-8">
              <div className="flex items-center gap-3">
                <Icon name="ShieldCheckIcon" size={24} />
                <h3 className="font-display text-2xl text-card-foreground">Cancellation policy</h3>
              </div>
              <ul className="mt-5 space-y-3">
                {policies.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-[16px] leading-relaxed text-muted-foreground">
                    <Icon name="CheckCircleIcon" variant="solid" size={22} className="mt-0.5 shrink-0 text-success" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Socials */}
        <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
          {socials.map((s, i) => (
            <a
              key={s.label}
              data-reveal
              data-reveal-delay={String(i * 100)}
              href={s.href}
              className="group flex min-h-[88px] items-center justify-between gap-4 rounded-[2rem] border border-border bg-card px-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Icon name={s.icon as 'CameraIcon'} size={22} />
                </div>
                <div>
                  <p className="text-[16px] font-semibold text-card-foreground">{s.label}</p>
                  <p className="text-[15px] text-muted-foreground">{s.handle}</p>
                </div>
              </div>
              <Icon name="ArrowUpRightIcon" size={22} className="text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          ))}
        </div>

        {/* Final CTA */}
        <div
          data-reveal
          className="relative mt-16 overflow-hidden rounded-[2.5rem] bg-primary px-6 py-16 text-center text-primary-foreground sm:px-12 sm:py-20"
        >
          <div className="blob-primary float-slow pointer-events-none absolute -left-10 top-0 h-72 w-72 rounded-full opacity-50" aria-hidden="true" />
          <div className="blob-secondary float-slower pointer-events-none absolute -bottom-20 -right-10 h-80 w-80 rounded-full opacity-30" aria-hidden="true" />
          <div className="relative mx-auto max-w-3xl">
            <h2 className="font-display text-display-lg font-medium">
              Ready for hair you love?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-primary-foreground/80">
              Appointments for October and November are filling up. Pick a time that suits you; it takes under a minute.
            </p>
            <a
              href="https://example.com/book"
              className="cta-pulse relative mt-10 inline-flex min-h-[68px] w-full items-center justify-center gap-3 rounded-full bg-accent px-10 text-xl font-semibold text-accent-foreground shadow-2xl transition-transform duration-300 hover:-translate-y-1 sm:w-auto sm:px-14"
            >
              Book your appointment
              <Icon name="ArrowRightIcon" size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}