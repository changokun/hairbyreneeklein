import React from 'react';
import AppImage from '@/components/ui/AppImage';
import siteContent from '@/data/siteContent.json';

const yearsBehindChair = Math.floor((new Date() - new Date(2005, 8, 1)) / (1000 * 60 * 60 * 24 * 365))

const stats = [
{ value: yearsBehindChair, label: 'years behind the chair' },
{ value: '4,800+', label: 'color appointments completed' },
{ value: '86%', label: 'of clients rebook in-studio' }];


export default function AboutSection() {
  return (
    <section id="about" className="relative bg-secondary pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <div className="lg:col-span-5" data-reveal>
          <div className="relative">
            <div className="overflow-hidden rounded-[2.5rem] bg-muted">
              <div className="relative h-[420px] w-full sm:h-[520px]">
                <AppImage
                  src="/assets/images/reneeBlackTop.jpg"
                  alt="Portrait of Renee Klein, hair stylist and owner of hairbyreneeklein, smiling in her salon"
                  fill
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  className="object-cover object-top" />
                
              </div>
            </div>
            {/* <div className="absolute -bottom-6 right-4 max-w-[220px] rotate-2 rounded-2xl bg-card p-5 shadow-xl sm:right-[-1.5rem]">
              <p className="font-display text-xl leading-snug text-foreground">
                “I never rush a consultation. Your first 15 minutes are free.”
              </p>
            </div> */}
          </div>
					{/* float-slow
          <div className="absolute -bottom-6 -left-1 -rotate-3 rounded-2xl border border-border bg-card px-5 py-4 shadow-xl sm:-left-10">
						<p className="font-display text-3xl text-foreground">{yearsBehindChair} yrs</p>
						<p className="text-[15px] text-muted-foreground">behind the chair</p>
					</div>
						*/}
					{/* float-slower */}
					<div className="absolute -left-2 max-w-56 -top-4 -rotate-3 rounded-2xl bg-primary px-5 py-4 text-primary-foreground shadow-xl sm:-right-8 origin-left">
						<p className="font-display text-3xl">{siteContent.site.firstName} {siteContent.site.lastName}</p>
						<p className="text-[15px] opacity-80">Your new stylist</p>
					</div>
        </div>

        <div className="flex flex-col justify-between lg:col-span-7">
          <div>
            <p data-reveal className="text-[15px] font-semibold uppercase tracking-[0.2em] text-accent">
              Meet your New Stylist
            </p>
            <h2
              data-reveal
              data-reveal-delay="100"
              className="font-display text-display-lg mt-4 font-medium text-foreground">
              Good hair, thoughtfully done. 
            </h2>
            <div
              data-reveal
              data-reveal-delay="200"
              className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
								With {yearsBehindChair} years of experience working in New York City, Denver, Savannah, and Charlotte, Renee Klein brings a thoughtful, personalized approach to Porto. Her work focuses on lived-in blondes, naturally dimensional brunettes, and precision haircuts that grow out beautifully and are easy to style at home. With a focus on continued education and a strong foundation in cutting, color, and finishing, Renee creates hair that feels natural, effortless, and entirely your own — designed to look just as good weeks after your appointment as it does when you leave the salon.
              </p>
            </div>
          </div>

          {/* <div className="mt-12 grid grid-cols-1 gap-6 border-t border-border pt-8 sm:grid-cols-3">
            {stats?.map((s, i) =>
            <div key={s?.label} data-reveal data-reveal-delay={String(300 + i * 100)}>
                <p className="font-display text-5xl text-primary">{s?.value}</p>
                <p className="mt-2 text-[15px] text-muted-foreground">{s?.label}</p>
              </div>
            )}
          </div> */}

          <a
            href={`${siteContent.site.bookingURL}`}
						target="_blank"
            className="mt-10 inline-flex min-h-[60px] w-full items-center justify-center rounded-full bg-primary px-8 text-lg font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-1 sm:w-fit">
            
            Book a consultation
          </a>
        </div>
      </div>

    </section>);

}