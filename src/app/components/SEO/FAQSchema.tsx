import React from 'react';

export default function FAQSchema() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services does ReefTech Solutions provide in Hawaii?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ReefTech Solutions provides comprehensive smart home integration, vacation rental automation, sauna maintenance, pool automation, smart locks installation, and building technology solutions throughout Hawaii's Big Island including Kailua-Kona, Hilo, and Waimea."
        }
      },
      {
        "@type": "Question", 
        "name": "Do you service vacation rental properties on the Big Island?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialize in vacation rental automation including smart locks, automated check-in systems, remote monitoring, climate control, and guest management technology. We help property managers streamline operations and enhance guest experiences."
        }
      },
      {
        "@type": "Question",
        "name": "Are you certified for sauna maintenance and repair in Hawaii?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, ReefTech Solutions is the only certified sauna specialist on Hawaii's Big Island. We provide professional sauna maintenance, repair, and smart spa system installation for brands like Sunlighten, Finnleo, and Amerec."
        }
      },
      {
        "@type": "Question",
        "name": "What areas of Hawaii do you serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve all of Hawaii's Big Island including Kailua-Kona, Hilo, Waimea, Volcano, Captain Cook, and surrounding areas. We provide on-site consultations and installations throughout the island."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer emergency tech support for properties?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide emergency support for critical systems like smart locks, security systems, and automation failures. Contact us at (808) 303-4627 for urgent property technology issues."
        }
      },
      {
        "@type": "Question",
        "name": "What smart home brands do you work with?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We work with top-tier brands including Allegion, Von Duprin, Adams Rite, Norton Rixson for access control; Leviton and Lutron for lighting; SmartThings, Hubitat, and Control4 for automation; plus Sunlighten, Finnleo for saunas and spas."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
    />
  );
}
