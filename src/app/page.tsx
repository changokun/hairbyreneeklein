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
import services from '@/data/services.json';
import hours from '@/data/hours.json';

// Helper to format phone number for JSON-LD: strip to digits and prepend + for US numbers
const formatPhoneForJsonLd = (phone: string): string => {
	const digits = phone.replace(/\D/g, '');
	// US numbers: if starts with 1, it's already full format, just add +
	if (digits.startsWith('1') && digits.length === 11) {
		return `+${digits}`;
	}
	// If it's 10 digits, assume US and prepend +1
	if (digits.length === 10) {
		return `+1${digits}`;
	}
	return digits;
};

export default function HomePage() {
	const jsonLd = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				"@type": "Person",
				"@id": "https://hairbyreneeklein.com/#about",
				"name": "Renee Klein",
				"jobTitle": "Hair Stylist & Colorist",
				"description": "Independent hair stylist and colorist with 21 years of experience in New York City, Denver, Savannah, and Charlotte, now based in Porto, Portugal. Specializes in lived-in blondes, naturally dimensional brunettes, and precision haircuts that grow out beautifully.",
				"url": "https://hairbyreneeklein.com",
				"telephone": formatPhoneForJsonLd(siteContent.contact.phone),
				"knowsAbout": [
					"Lived-in blonde color",
					"Dimensional brunette color",
					"Precision haircuts",
					"Balayage",
					"Babylights",
					"Lowlights"
				],
				"makesOffer": services.map(service => ({
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": service.name,
						"description": service.description,
						"serviceType": service.serviceType
					},
					"priceSpecification": {
						"@type": "PriceSpecification",
						"minPrice": service.minPrice.toString(),
						"priceCurrency": service.priceCurrency
					}
				})),
				"worksFor": { "@id": "https://hairbyreneeklein.com/#apo-studio" },
				"potentialAction": {
					"@type": "ReserveAction",
					"target": { "@type": "EntryPoint", "urlTemplate": "https://reneeklein.setmore.com/?utm_source=website&utm_medium=web&utm_campaign=schema" },
					"result": { "@type": "Reservation", "name": "Hair appointment" }
				},
				"sameAs": [
					"https://www.instagram.com/hairbyreneeklein",
					"https://wa.me/" + siteContent.contact.phone.replace(/[^\d]+/ig, '')
				]
			},
			{
				"@type": "HairSalon",
				"@id": "https://hairbyreneeklein.com/#visit",
				"name": "APO Studio",
				"url": "https://hairbyreneeklein.com",
				"address": {
					"@type": "PostalAddress",
					"streetAddress": "Rua de Belos Ares 54",
					"addressLocality": "Porto",
					"postalCode": "4100-109",
					"addressCountry": "PT"
				},
				"openingHoursSpecification": (() => {
					const openHours = hours.filter(h => h.opens && h.closes);
					return openHours.reduce((acc, h) => {
						const existing = acc.find((item: any) => 
							item.opens === h.opens && item.closes === h.closes);
						if (existing) {
							existing.dayOfWeek.push(h.day);
						} else {
							acc.push({
								"@type": "OpeningHoursSpecification",
								"dayOfWeek": [h.day],
								"opens": h.opens,
								"closes": h.closes
							});
						}
						return acc;
					}, [] as any[]);
				})(),
				"employee": { "@id": "https://hairbyreneeklein.com/#about" }
			}
		]
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
				<ReviewsSection />
				<VisitSection />
			</main>
			<Footer />
			<RevealObserver />
		</div>
	);
}