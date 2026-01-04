import React from 'react';

const LocalBusinessSchema: React.FC = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Aurora Dream",
    "description": "Ottawa's premium sleep boutique with Canadian-made mattresses. Expert sleep consultations and delivery across Ottawa neighborhoods including Kanata, Barrhaven, Nepean, Orleans, Stittsville, Manotick, Findlay Creek, Gatineau and surrounding areas.",
    "url": "https://auroradream.ca",
    "telephone": "+1-613-290-0212",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1489 Merivale Road, UNIT E",
      "addressLocality": "Ottawa",
      "addressRegion": "ON",
      "postalCode": "K2E 5P3",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 45.3480,
      "longitude": -75.7383
    },
    "areaServed": [
      "Kanata", "Stittsville", "Barrhaven", "Nepean", "Manotick", 
      "Findlay Creek", "Riverside South", "Orleans", "Centretown",
      "Westboro", "The Glebe", "Hintonburg", "Gatineau", "Hull",
      "Aylmer", "Vanier", "Beacon Hill", "Hunt Club", "South Keys",
      "Greenboro", "Blossom Park", "Alta Vista", "Rockcliffe Park",
      "New Edinburgh", "Carp", "Richmond", "North Gower", "Munster",
      "Cumberland", "Rockland", "Gloucester", "Overbrook"
    ],
    "openingHours": "Mo-Fr 09:00-19:00, Sa 10:00-18:00, Su 11:00-17:00",
    "priceRange": "$$",
    "image": "https://auroradream.ca/logo.png",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "18",
      "bestRating": "5",
      "worstRating": "1"
    },
    "sameAs": [
      "https://www.facebook.com/auroradreamottawa",
      "https://www.instagram.com/auroradreamottawa"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default LocalBusinessSchema;
