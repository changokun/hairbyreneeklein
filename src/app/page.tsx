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
				"telephone": "+1-719-243-7551",
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
					"https://wa.me/17192437551"
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
				"openingHoursSpecification": [
					{
						"@type": "OpeningHoursSpecification",
						"dayOfWeek": ["Monday", "Thursday", "Friday"],
						"opens": "10:00",
						"closes": "15:30"
					}
				],
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
				{/* <ReviewsSection /> */}
				<VisitSection />
			</main>
			<Footer />
			<RevealObserver />
		</div>
	);
}