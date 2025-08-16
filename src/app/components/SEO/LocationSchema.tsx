import React from 'react';

export default function LocationSchema() {
  const locationData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "ReefTech Solutions",
    "serviceArea": [
      {
        "@type": "City",
        "name": "Kailua-Kona",
        "containedInPlace": {
          "@type": "State", 
          "name": "Hawaii"
        }
      },
      {
        "@type": "City",
        "name": "Waimea",
        "alternateName": "Kamuela",
        "containedInPlace": {
          "@type": "State",
          "name": "Hawaii"  
        }
      },
      {
        "@type": "City",
        "name": "Hilo",
        "containedInPlace": {
          "@type": "State",
          "name": "Hawaii"
        }
      },
      {
        "@type": "City", 
        "name": "Captain Cook",
        "containedInPlace": {
          "@type": "State",
          "name": "Hawaii"
        }
      },
      {
        "@type": "City",
        "name": "Volcano",
        "containedInPlace": {
          "@type": "State", 
          "name": "Hawaii"
        }
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Location-Specific Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sauna Maintenance Big Island",
            "description": "Professional sauna maintenance and repair services for Big Island Hawaii including Kailua-Kona, Waimea, Hilo, Captain Cook, and Volcano. Certified sauna specialist for infrared and traditional saunas.",
            "areaServed": "Big Island Hawaii",
            "serviceType": "Sauna Maintenance"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Smart Home Waimea Kamuela",
            "description": "Smart home integration and automation services in Waimea (Kamuela) Hawaii. Home automation, smart locks, lighting control, and building technology solutions.",
            "areaServed": "Waimea Hawaii",
            "serviceType": "Smart Home Integration"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Vacation Rental Automation Kona",
            "description": "Vacation rental automation and property management technology in Kailua-Kona. Smart locks, automated check-in, guest management systems.",
            "areaServed": "Kailua-Kona Hawaii",
            "serviceType": "Vacation Rental Automation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Pool Automation Big Island",
            "description": "Pool and spa automation systems for Big Island Hawaii properties. Smart pool controls, pH monitoring, automated chemical systems.",
            "areaServed": "Big Island Hawaii", 
            "serviceType": "Pool Automation"
          }
        }
      ]
    },
    "knowsAbout": [
      "sauna maintenance big island",
      "smart home waimea", 
      "vacation rental automation kona",
      "pool automation hawaii",
      "smart locks big island",
      "home automation hilo",
      "sauna repair hawaii",
      "building technology big island"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(locationData) }}
    />
  );
}
