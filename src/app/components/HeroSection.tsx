import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import CursorBlob from './CursorBlob';

export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-32 md:pb-24 lg:pt-36">
      
      <CursorBlob />
      <div className="grain pointer-events-none absolute inset-0 opacity-[0.07]" aria-hidden="true" />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        <div className="lg:col-span-7">
          <p
            data-reveal
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-[15px] font-medium text-muted-foreground">
            
            <span className="h-2 w-2 rounded-full bg-success" />
            Now booking October & November
          </p>

          <h1
            data-reveal
            data-reveal-delay="100"
            className="font-display text-hero-xl mt-6 font-medium text-foreground">
            
            Hair that feels like <em className="text-accent not-italic">you</em>, only better.
          </h1>

          <p
            data-reveal
            data-reveal-delay="200"
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            
            Color, cuts, and finishes with Renee Klein in her brand-new Porto studio. One
            stylist, one chair, an unhurried appointment built around your hair.
          </p>

          <div
            data-reveal
            data-reveal-delay="300"
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            
            <a
              id="book"
              href="https://example.com/book"
              className="cta-pulse relative inline-flex min-h-[64px] items-center justify-center gap-3 rounded-full bg-accent px-10 text-lg font-semibold text-accent-foreground shadow-xl transition-transform duration-300 hover:-translate-y-1">
              
              Book your appointment
              <Icon name="ArrowRightIcon" size={22} />
            </a>
            <a
              href="#services"
              className="inline-flex min-h-[56px] items-center justify-center rounded-full px-6 text-lg font-semibold text-primary underline-offset-4 hover:underline">
              
              See services & prices
            </a>
          </div>

          <div
            data-reveal
            data-reveal-delay="400"
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
            
            <a
              href="#reviews"
              className="flex items-center gap-3 rounded-full py-1 transition-opacity hover:opacity-80"
              aria-label="See reviews: 4.9 from 312 reviews">
              <div className="flex text-accent" aria-hidden="true">
                {[0, 1, 2, 3, 4]?.map((i) =>
                <Icon key={i} name="StarIcon" variant="solid" size={20} />
                )}
              </div>
              <p className="text-[15px] font-medium text-foreground underline-offset-4 hover:underline">
                4.9 from 312 reviews
              </p>
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Porto+Portugal+hair+salon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center gap-1 text-[15px] font-semibold text-primary underline-offset-4 hover:underline">
              Read all reviews on Google
              <Icon name="ArrowUpRightIcon" size={16} />
            </a>
          </div>
        </div>

        <div className="relative hidden lg:col-span-5 md:block">
          <div data-reveal data-reveal-delay="150" className="relative mx-auto w-full max-w-md">
            <div
              aria-hidden="true"
              className="absolute -left-6 -top-6 h-full w-full rounded-t-[999px] rounded-b-[2.5rem] border border-primary/30" />
            
            <div className="relative overflow-hidden arch-top rounded-b-[2.5rem] bg-secondary">
              <div className="relative h-[480px] w-full sm:h-[560px]">
                <AppImage
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_1ea36d5dd-1772995190375.png"
                  alt="Smiling woman hairstylist with long wavy auburn hair standing in a bright salon"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  className="object-cover" />
                
              </div>
            </div>

            <div className="float-slow absolute -bottom-6 -left-4 rounded-2xl border border-border bg-card px-5 py-4 shadow-xl sm:-left-10">
              <p className="font-display text-3xl text-foreground">12 yrs</p>
              <p className="text-[15px] text-muted-foreground">behind the chair</p>
            </div>
            <div className="float-slower absolute -right-2 top-16 rounded-2xl bg-primary px-5 py-4 text-primary-foreground shadow-xl sm:-right-8">
              <p className="font-display text-3xl">Renee Klein</p>
              <p className="text-[15px] opacity-80">Owner & Master Colorist</p>
            </div>
          </div>
        </div>
      </div>
    </section>);

}