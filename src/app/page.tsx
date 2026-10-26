import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ReviewsSection from './components/ReviewsSection';
import VisitSection from './components/VisitSection';
import RevealObserver from './components/RevealObserver';
import siteContent from '@/data/siteContent.json';

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'HairSalon',
        name: 'hairbyrenee',
        description: 'New women’s hair salon in Porto offering color, cuts, extensions and blowouts.',
        telephone: '+351-912-345-678',
        address: {
          '@type': 'PostalAddress',
          streetAddress: siteContent.contact.addressLine1,
          addressLocality: siteContent.contact.city,
          postalCode: siteContent.contact.postalCode,
          addressCountry: 'PT',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '312',
        },
      },
      {
        '@type': 'WebPage',
        name: 'hairbyrenee — Color, Cuts & Blowouts in Porto',
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        {/* <ReviewsSection /> */}
        <VisitSection />
      </main>
      <Footer />
      <RevealObserver />
    </div>
  );
}