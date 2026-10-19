import React from 'react';
import Icon from '@/components/ui/AppIcon';

export default function StickyBookingBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-background/90 px-4 pb-4 pt-3 backdrop-blur-lg md:hidden">
      <a
        href="#book"
        className="relative flex min-h-[56px] w-full items-center justify-center gap-2 rounded-full bg-accent px-6 text-lg font-semibold text-accent-foreground shadow-lg"
      >
        <span>Book your appointment</span>
        <Icon name="ArrowRightIcon" size={20} />
      </a>
    </div>
  );
}