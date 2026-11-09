import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import siteContent from '@/data/siteContent.json';
import services from '@/data/services.json';

/*
 BENTO GRID AUDIT
 7 cards with color cycling: alpha bravo charlie bravo delta bravo alpha
 Grid spans determined by content length and badge presence
*/

// Color set cycling pattern: repeats every 7 items
export const COLOR_SETS = ['alpha', 'bravo', 'charlie', 'bravo', 'delta', 'bravo', 'alpha'] as const;

type ColorSet = typeof COLOR_SETS[number];

// Class definitions for each color set
const colorSetClasses: Record<ColorSet, {
  bg: string;
  text: string;
  iconBg: string;
  container: string;
  badges: string;
  hasBlob?: boolean;
}> = {
  alpha: {
    bg: 'bg-card',
    text: 'text-card-foreground',
    iconBg: 'bg-secondary text-primary',
    container: 'border border-border',
		badges: 'bg-secondary text-foreground',
  },
  bravo: {
		bg: 'bg-secondary',
    text: 'text-card-foreground',
    iconBg: 'bg-card text-accent',
    container: 'border border-border',
		badges: 'bg-accent text-primary-foreground',
  },
  charlie: {
		bg: 'bg-accent',
    text: 'text-accent-foreground',
    iconBg: 'bg-secondary text-foreground',
    container: '',
		badges: 'bg-secondary text-foreground',
  },
  delta: {
		bg: 'bg-primary',
    text: 'text-primary-foreground',
    iconBg: 'bg-secondary text-foreground',
    container: 'relative overflow-hidden',
    hasBlob: true,
		badges: 'bg-accent text-primary-foreground'
  },
};

// Pre-compute which services have the longest content (top ~33%)
const getLongestContentIndices = (allServices: typeof services): Set<number> => {
  const withLengths = allServices.map((s, i) => ({ 
    index: i, 
    length: s.shortDescription.length 
  }));
  const sorted = [...withLengths].sort((a, b) => b.length - a.length);
  // Use ceiling to ensure we get at least 1, and round up for top third
  const topCount = Math.max(1, Math.ceil(allServices.length / 3));
  return new Set(sorted.slice(0, topCount).map(item => item.index));
};

// Determine grid classes based on grouped content analysis
const getGridClassesForIndex = (index: number, allServices: typeof services): string => {
  const service = allServices[index];
  const hasBadge = !!service.badge;
  const descLength = service.shortDescription.length;
  const longestContentIndices = getLongestContentIndices(allServices);
  const isLongest = longestContentIndices.has(index);
  
  // Build grid classes array
  const classes: string[] = [];
  
  // Medium screens: even index with badge or longest content gets 2 cols
  if (index % 2 === 0 && (hasBadge || isLongest)) {
    classes.push('md:col-span-2');
  }
  
  // Large screens: grouped logic
  // First group of three (indices 0, 1, 2)
  if (index < 3) {
    const group = allServices.slice(0, 3);
    let targetIndex = 0;
    let maxScore = descLength + (hasBadge ? 1000 : 0);
    
    group.forEach((s, i) => {
      const sHasBadge = !!s.badge;
      const sLength = s.shortDescription.length;
      const sScore = sLength + (sHasBadge ? 1000 : 0);
      if (sScore > maxScore) {
        maxScore = sScore;
        targetIndex = i;
      }
    });
    
    if (index === targetIndex) {
      classes.push('lg:col-span-2');
    }
  }
  
  // Subsequent pairs (3-4, 5-6, etc.)
  if (index >= 3) {
    const pairStart = Math.floor((index - 3) / 2) * 2 + 3;
    const pair = allServices.slice(pairStart, pairStart + 2);
    if (pair.length === 2) {
      const firstDesc = pair[0].shortDescription.length;
      const secondDesc = pair[1].shortDescription.length;
      const firstIndexInPair = index - pairStart;
      
      if (firstDesc > secondDesc * 2) {
        classes.push(firstIndexInPair === 0 ? 'lg:col-span-3' : 'lg:col-span-1');
      } else if (secondDesc > firstDesc * 2) {
        classes.push(firstIndexInPair === 1 ? 'lg:col-span-3' : 'lg:col-span-1');
      } else {
        classes.push('lg:col-span-2');
      }
    }
  }
  
  return classes.join(' ');
};

// Determine padding based on grid span
const getPadding = (gridClasses: string): string => {
  if (gridClasses.includes('lg:col-span-3')) {
    return 'p-7 sm:p-9';
  }
  return 'p-7';
};


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
            Final pricing is confirmed at your appointment, based on length and density.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {services.map((service, index) => {
            const colorSet = COLOR_SETS[index % COLOR_SETS.length];
            const classes = colorSetClasses[colorSet];
            const gridClasses = getGridClassesForIndex(index, services);
            const padding = getPadding(gridClasses);
            const hasBadge = !!service.badge;
            
            // Determine text sizes (from service config if present)
            const nameSize = service.nameSize || 'text-2xl';
            const priceTextSize = service.priceTextSize || 'text-2xl';
            const descSize = service.descriptionSize || 'text-[15px]';
            
            return (
              <article
                key={service.id}
                data-reveal
                data-reveal-delay={index % 2 === 0 ? "100" : "200"}
                className={`flex min-h-[200px] flex-col justify-between rounded-[2rem] 
                          ${classes.container} ${classes.bg} ${padding} 
                          transition-all duration-300 hover:-translate-y-1 hover:shadow-xl 
                          ${gridClasses}`}
              >
                {/* Blob decoration for delta color set */}
                {classes.hasBlob && (
                  <div className="blob-primary pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full opacity-40" aria-hidden="true" />
                )}
                
                {/* Header with icon and optional badge */}
                <div className={`relative ${hasBadge ? 'flex items-start justify-between gap-4' : ''}`}>
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${classes.iconBg}`}>
                    <Icon name={service.icon} size={24} />
                  </div>
                  {service.badge && (
                    <span className={`rounded-full border border-primary-foreground/30 px-4 py-1 text-[15px] ${classes.badges ? classes.badges : ''}`}>
                      {service.badge}
                    </span>
                  )}
                </div>
                
                {/* Content */}
                <div className={`relative mt-6 ${classes.text}`}>
                  <h3 className={`font-display ${nameSize}`}>
                    {service.name}
                  </h3>
                  <p className={`mt-1 ${descSize}`}>
                    {service.shortDescription}
                  </p>
                  <p className={`font-display mt-4 ${priceTextSize}`}>
                    {service.priceDisplay}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        <div data-reveal className="m-12 flex justify-center">
          <a
            href={siteContent.site.bookingURL}
            target="_blank"
            className="relative inline-flex min-h-[64px] w-full items-center justify-center gap-3 rounded-full bg-primary px-10 text-lg font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-1 sm:w-auto">
            Book your appointment
            <Icon name="ArrowRightIcon" size={22} />
          </a>
        </div>















				<article
					data-reveal
					data-reveal-delay="100"
					className={`min-h-[200px]  rounded-[2rem] overflow-clip
					p-7
					${colorSetClasses.alpha.container} ${colorSetClasses.alpha.bg}
					transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
					>
						{/* flex flex-col justify-between */}
					{/* style={{ backgroundImage: "url('/assets/images/davines.png')"}} */}
					
					<img src="/assets/images/davines.png" style={{float: "right", maxHeight: "160px", margin: "0 0 20px 20px"}} />
				
					{/* Header with icon and optional badge */}
					<div className={`relative`}>
						<div className={`flex h-12 w-32 items-center justify-center rounded-2xl ${colorSetClasses.alpha.iconBg}`}>
						<img src="/assets/images/davines-logo.svg" />
						</div>
					</div>
					
					{/* Content */}
					<div className={`relative mt-6 ${colorSetClasses.alpha.text}`}>
						<h3 className={`font-display text-2xl`}>
						Are you looking for a new conditioner?
						</h3>
						<p className={`mt-1 text-[15px]`}>
						Renee uses and sells Davines hair care products.
						</p>
						{/* <p className={`font-display mt-4 ${priceTextSize}`}>
							{service.priceDisplay}
						</p> */}
					</div>
				</article>




      </div>
    </section>
  );
}
