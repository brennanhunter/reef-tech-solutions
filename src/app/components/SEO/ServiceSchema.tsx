import React from 'react';

export default function ServiceSchema() {
  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service", 
    "name": "Smart Home Integration Hawaii",
    "description": "Professional smart home automation and building technology integration services for Hawaii properties",
    "provider": {
      "@type": "LocalBusiness",
      "name": "ReefTech Solutions",
      "telephone": "+1-808-303-4627",
      "email": "info@reeftech.io",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kailua-Kona",
        "addressRegion": "Hawaii", 
        "addressCountry": "US"
      }
    },
    "areaServed": {
      "@type": "State",
      "name": "Hawaii"
    },
    "serviceType": [
      "Smart Home Integration",
      "Vacation Rental Automation", 
      "Sauna Maintenance",
      "Pool Automation",
      "Smart Lock Installation",
      "Building Technology Solutions"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Smart Home Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Vacation Rental Automation",
            "description": "Complete automation for vacation rentals including smart locks, check-in systems, and guest management"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Sauna Maintenance & Repair",
            "description": "Professional sauna maintenance and smart spa system installation - only certified specialist on Big Island"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Smart Home Integration",
            "description": "Complete home automation with lighting, security, climate control, and smart device coordination"
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceData) }}
    />
  );
}
