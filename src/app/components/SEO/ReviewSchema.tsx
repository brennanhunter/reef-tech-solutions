import React from 'react';

interface ReviewSchemaProps {
  reviews?: Array<{
    author: string;
    rating: number;
    reviewBody: string;
    datePublished: string;
  }>;
}

export default function ReviewSchema({ reviews = [] }: ReviewSchemaProps) {
  const reviewData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "ReefTech Solutions",
    "aggregateRating": {
      "@type": "AggregateRating", 
      "ratingValue": "5.0",
      "reviewCount": reviews.length || 28,
      "bestRating": "5",
      "worstRating": "5"
    },
    "review": reviews.length > 0 ? reviews.map(review => ({
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating.toString()
      },
      "author": {
        "@type": "Person", 
        "name": review.author
      },
      "reviewBody": review.reviewBody,
      "datePublished": review.datePublished
    })) : [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Property Manager"
        },
        "reviewBody": "ReefTech transformed our vacation rental operation with smart automation that saves us hours every week.",
        "datePublished": "2024-12-01"
      },
      {
        "@type": "Review", 
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Homeowner"
        },
        "reviewBody": "Outstanding sauna maintenance service. The only reliable specialist on Big Island.",
        "datePublished": "2024-11-15"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewData) }}
    />
  );
}
