import React from 'react';
import Icon from '@/components/ui/AppIcon';
import siteContent from '@/data/siteContent.json';
import { FaWhatsapp, FaInstagram, FaTiktok, FaFacebook, FaEnvelope } from 'react-icons/fa6';

const hours = [
  { day: 'Monday', time: '10:00 AM – 3:30 PM' },
  { day: 'Tuesday', time: 'by arrangement only' },
  { day: 'Wednesday', time: 'by arrangement only' },
  { day: 'Thursday', time: '10:00 AM – 3:30 PM' },
  { day: 'Friday', time: '10:00 AM – 3:30 PM' },
  { day: 'Saturday', time: 'by arrangement only' },
  { day: 'Sunday', time: 'by arrangement only' }
];

const policies = [
  'Cancel or reschedule at least 24 hours ahead at no charge.',
  'Late cancellations and no-shows are charged 50% of the booked service.',
  'Arriving more than 15 minutes late may require rescheduling.'
];


// clean up some siteContent
siteContent.social.Instagram = siteContent.social.Instagram.split('/').pop()
siteContent.social.WhatsApp = siteContent.social.WhatsApp.replace(/\D/g, '')
// keep trailing slashes on urls in here
const socials: Record<string, { icon: React.JSX.Element; href: string }> = {
  "Instagram": { "icon": <FaInstagram size={33} />, "href": 'https://instagram.com/' },
  "WhatsApp": { "icon": <FaWhatsapp size={33} />, "href": 'https://wa.me/' },
  "TikTok": { "icon": <FaTiktok size={33} />, "href": 'https://tiktok.com/' },
  "Facebook": { "icon": <FaFacebook size={33} />, "href": 'https://facebook.com/' },
  "email": { "icon": <FaEnvelope size={33} />, "href": 'mailto:' },
};
// emailLinkQueryVars
// WhatsAppLinkQueryVars
const nowBookingMonth = (() => {
  const d = new Date();
  d.setMonth(d.getMonth() + 1);
  return d.toLocaleString('default', { month: 'long' });
})();

export default function VisitSection() {
  return (
    <section id="visit" className="relative pt-16 pb-20 md:pt-24 md:pb-28 bg-secondary">
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
              <h3 className="font-display mt-6 text-3xl text-card-foreground">Find APO Studio</h3>
              <div className="mt-3 flex flex-col gap-2">
								<p className="text-[15px] text-muted-foreground">Call or message {siteContent.site.firstName} on:</p>
                <a
                  href={`tel:+${siteContent.contact.phone.replace(/[^\d]+/ig, '')}`}
                  className="inline-flex items-center gap-2 text-lg font-semibold text-card-foreground underline-offset-4 hover:underline"
                >
                  <Icon name="PhoneIcon" size={20} /> {siteContent.contact.phone} 🇺🇸
                </a>
								<a href={`https://wa.me/${siteContent.contact.phone.replace(/\D/g, '')}`} target="_blank">
									<FaWhatsapp className="text-[#25D366] inline" size={20} /> WhatsApp
								</a>
              </div>
              <address className="mt-5 text-lg not-italic leading-relaxed text-muted-foreground">
								{siteContent.contact.addressLine1}
								{siteContent.contact.addressLine2}
                <br />
                {siteContent.contact.postalCode} {siteContent.contact.city}, Portugal
              </address>
              <p className="mt-4 text-[16px] leading-relaxed text-muted-foreground">
                APO Studio is just off Boa Vista, a block from the {new Date() < new Date('2027-06-30') ? 'new' : ''} Guerra Junqueiro Metrobus station.
              </p>
              <div className="mt-6 overflow-hidden rounded-2xl border border-border">
								{/* src={`https://www.google.com/maps?q=APO+Studio+Porto&output=embed`} */}
                <iframe
                  title="Map showing hairbyrenee salon location in Porto, Portugal"
                  src={`https://www.google.com/maps?q=APO+Studio+${siteContent.contact.addressLine1.replace(/\s/g, '+')},+${siteContent.contact.postalCode}+${siteContent.contact.city},+Portugal&output=embed`}
                  className="h-64 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                // href={`https://www.google.com/maps/dir/?api=1&destination=${siteContent.contact.addressLine1.replace(/\s/g, '+')},+${siteContent.contact.postalCode}+${siteContent.contact.city},+Portugal`}
                href={`https://www.google.com/maps/dir/?api=1&destination=APO Studio, Porto`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[52px] flex-1 items-center justify-center gap-2 rounded-full border border-primary px-6 text-[16px] font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Icon name="MapIcon" size={20} /> Get directions
              </a>
              <a
                href={`https://wa.me/${siteContent.contact.phone.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[52px] flex-1 items-center justify-center gap-2 rounded-full bg-secondary px-6 text-[16px] font-semibold text-secondary-foreground"
              >
								<FaWhatsapp className="text-[#25D366]" size={20} /> WhatsApp
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
          {Object.entries(siteContent.social).map(([label, social], i) => {
						if( ! social.length || ! socials[label as keyof typeof socials]?.href || label.indexOf('QueryVars') > -1) return null;

						const query = label === 'email' && siteContent.social.emailLinkQueryVars ? `?${siteContent.social.emailLinkQueryVars}` :
               label === 'WhatsApp' && siteContent.social.WhatsAppLinkQueryVars ? `?${siteContent.social.WhatsAppLinkQueryVars}` : '';

						return (
							<a
								key={label}
								data-reveal
								data-reveal-delay={String(i * 100)}
								href={`${socials[label].href}${social}${query}`}
								className="group flex min-h-[88px] items-center justify-between gap-4 rounded-[2rem] border border-border bg-card px-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-xl"
								target="_blank"
								>
								<div className="flex items-center gap-4">
									<div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
										{socials[label].icon}
									</div>
									<div>
										<p className="text-[16px] font-semibold text-card-foreground">{label}</p>
										<p className="text-[15px] text-muted-foreground">{social}</p>
									</div>
								</div>
								<Icon name="ArrowUpRightIcon" size={22} className="text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
							</a>
						)
					})}
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
              Appointments for {nowBookingMonth} are filling up. Pick a time that suits you; it takes under a minute.
            </p>
            <a
              href={`${siteContent.site.bookingURL}`}
							target="_blank"
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