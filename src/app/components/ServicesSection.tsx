import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

/*
 BENTO GRID AUDIT
 STEP 1: Array has 6 cards: Color, Cut, Tone, Extensions, Roots, Blowouts
 STEP 2 (lg, 4 cols):
  Row 1: [col-1: Color cs-2 rs-2] [col-2: Color] [col-3: Cut cs-1] [col-4: Tone cs-1]
  Row 2: [col-1: Color] [col-2: Color] [col-3: Extensions cs-2] [col-4: Extensions]
  Row 3: [col-1: Roots cs-2] [col-2: Roots] [col-3: Blowouts cs-2] [col-4: Blowouts]
 STEP 3: Placed 6/6 cards ✓
 Tablet (md, 2 cols):
  Row 1: [col-1: Color cs-2] [col-2: Color]
  Row 2: [col-1: Cut] [col-2: Tone]
  Row 3: [col-1: Extensions cs-2] [col-2: Extensions]
  Row 4: [col-1: Roots] [col-2: Blowouts]
 Placed 6/6 ✓
 Mobile (1 col): stacked, 6/6 ✓
*/

const bookHref = 'https://example.com/book';

export default function ServicesSection() {
  return (
    <section id="services" className="relative pt-16 pb-20 md:pt-24 md:pb-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p data-reveal className="text-[15px] font-semibold uppercase tracking-[0.2em] text-accent">
              Services & pricing
            </p>
            <h2
              data-reveal
              data-reveal-delay="100"
              className="font-display text-display-lg mt-4 font-medium text-foreground">
              
              Everything your hair needs, priced upfront.
            </h2>
          </div>
          <p data-reveal data-reveal-delay="200" className="max-w-sm text-lg text-muted-foreground">
            Final pricing is confirmed at your consultation, based on length and density.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {/* Color: cs-2 rs-2 */}
          <article
            data-reveal
            className="group relative flex lg:min-h-[420px] min-h-[580px] flex-col justify-end overflow-hidden rounded-[2rem] bg-foreground md:col-span-2 lg:row-span-2">
            
            <AppImage
              src="https://img.rocket.new/generatedImages/rocket_gen_img_1116ed683-1777489325462.png"
              alt="Hair color being applied with a brush to sectioned honey blonde highlights"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/45 to-transparent" />
            <div className="relative p-7 text-background sm:p-9">
              <p className="text-[15px] font-semibold uppercase tracking-widest text-background/80">
                Signature
              </p>
              <h3 className="font-display mt-2 text-4xl sm:text-5xl">Color & Highlights</h3>
              <p className="mt-3 max-w-md text-lg text-background/85">
                Balayage, foilyage, all-over color and corrective work, designed to grow out softly.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <p className="font-display text-3xl">from $165</p>
                <a
                  href={bookHref}
                  className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-accent px-6 text-[15px] font-semibold text-accent-foreground">
                  
                  Book color <Icon name="ArrowRightIcon" size={18} />
                </a>
              </div>
            </div>
          </article>

          {/* Cut */}
          <article
            data-reveal
            data-reveal-delay="100"
            className="flex min-h-[200px] flex-col justify-between rounded-[2rem] border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-primary">
              <Icon name="ScissorsIcon" size={24} />
            </div>
            <div className="mt-6">
              <h3 className="font-display text-2xl text-card-foreground">Precision Cut</h3>
              <p className="mt-1 text-[15px] text-muted-foreground">Cut and style, 60 minutes</p>
              <p className="font-display mt-4 text-2xl text-primary">from $85</p>
            </div>
          </article>

          {/* Tone */}
          <article
            data-reveal
            data-reveal-delay="200"
            className="flex min-h-[200px] flex-col justify-between rounded-[2rem] bg-secondary p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-card text-accent">
              <Icon name="SparklesIcon" size={24} />
            </div>
            <div className="mt-6">
              <h3 className="font-display text-2xl text-secondary-foreground">Toner & Gloss</h3>
              <p className="mt-1 text-[15px] text-muted-foreground">Neutralize brass, add shine</p>
              <p className="font-display mt-4 text-2xl text-primary">from $65</p>
            </div>
          </article>

          {/* Extensions: cs-2 */}
          <article
            data-reveal
            data-reveal-delay="100"
            className="relative flex min-h-[260px] flex-col justify-between overflow-hidden rounded-[2rem] bg-primary p-7 text-primary-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:col-span-2 sm:p-9">
            
            <div className="blob-primary pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full opacity-40" aria-hidden="true" />
            <div className="relative flex items-start justify-between gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-foreground/10">
                <Icon name="LinkIcon" size={24} />
              </div>
              <span className="rounded-full border border-primary-foreground/30 px-4 py-1 text-[15px]">
                Consultation required
              </span>
            </div>
            <div className="relative mt-8">
              <h3 className="font-display text-3xl sm:text-4xl">Hand-Tied Extensions</h3>
              <p className="mt-2 max-w-md text-lg text-primary-foreground/80">
                Seamless length and fullness using ethically sourced, hand-tied wefts.
              </p>
              <p className="font-display mt-5 text-3xl">from $450</p>
            </div>
          </article>

          {/* Roots */}
          <article
            data-reveal
            data-reveal-delay="100"
            className="flex min-h-[220px] flex-col justify-between rounded-[2rem] border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:col-span-1 lg:col-span-2">
            
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-primary">
                <Icon name="ArrowPathIcon" size={24} />
              </div>
              <span className="rounded-full bg-muted px-4 py-1 text-[15px] text-muted-foreground">
                Every 6–8 weeks
              </span>
            </div>
            <div className="mt-6">
              <h3 className="font-display text-2xl text-card-foreground">Root Touch-Up</h3>
              <p className="mt-1 text-[15px] text-muted-foreground">
                Gray coverage and regrowth refresh, 90 minutes
              </p>
              <p className="font-display mt-4 text-2xl text-primary">from $95</p>
            </div>
          </article>

          {/* Blowouts */}
          <article
            data-reveal
            data-reveal-delay="200"
            className="flex min-h-[220px] flex-col justify-between rounded-[2rem] bg-accent p-7 text-accent-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:col-span-1 lg:col-span-2">
            
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-foreground/15">
              <Icon name="WindowIcon" size={24} />
            </div>
            <div className="mt-6">
              <h3 className="font-display text-2xl">Blowout & Style</h3>
              <p className="mt-1 text-[15px] text-accent-foreground/85">
                Smooth, bouncy, or sleek. Perfect for events.
              </p>
              <p className="font-display mt-4 text-2xl">from $55</p>
            </div>
          </article>
        </div>

        <div data-reveal className="mt-12 flex justify-center">
          <a
            href={bookHref}
            className="relative inline-flex min-h-[64px] w-full items-center justify-center gap-3 rounded-full bg-primary px-10 text-lg font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-1 sm:w-auto">
            
            Book your appointment
            <Icon name="ArrowRightIcon" size={22} />
          </a>
        </div>
      </div>
    </section>);

}