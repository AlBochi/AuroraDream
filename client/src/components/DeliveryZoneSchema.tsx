import React from 'react';

export const DeliveryZoneSchema = () => {
  const deliverySchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Aurora Dream",
    "description": "Premium mattress delivery service covering all Ottawa and Gatineau neighborhoods. Free delivery, same-day service available, 10-year warranty included.",
    "url": "https://auroradream.ca/delivery-zone",
    "telephone": "+1-613-290-0212",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1489 Merivale Road, UNIT E",
      "addressLocality": "Ottawa",
      "addressRegion": "ON",
      "postalCode": "K2E 5P3",
      "addressCountry": "CA"
    },
    "areaServed": [
      // Ottawa Neighborhoods
      { "@type": "City", "name": "Kanata" },
      { "@type": "City", "name": "Stittsville" },
      { "@type": "City", "name": "Barrhaven" },
      { "@type": "City", "name": "Nepean" },
      { "@type": "City", "name": "Westboro" },
      { "@type": "City", "name": "Hintonburg" },
      { "@type": "City", "name": "Centretown" },
      { "@type": "City", "name": "The Glebe" },
      { "@type": "City", "name": "Old Ottawa South" },
      { "@type": "City", "name": "Vanier" },
      { "@type": "City", "name": "Rockcliffe Park" },
      { "@type": "City", "name": "Orleans" },
      { "@type": "City", "name": "Blackburn Hamlet" },
      { "@type": "City", "name": "Beacon Hill" },
      { "@type": "City", "name": "Gloucester" },
      { "@type": "City", "name": "Alta Vista" },
      { "@type": "City", "name": "South Keys" },
      { "@type": "City", "name": "Riverside South" },
      { "@type": "City", "name": "Manotick" },
      { "@type": "City", "name": "Greely" },
      
      // Gatineau Areas
      { "@type": "City", "name": "Gatineau" },
      { "@type": "City", "name": "Hull" },
      { "@type": "City", "name": "Aylmer" },
      { "@type": "City", "name": "Plateau" },
      { "@type": "City", "name": "Buckingham" }
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Free Mattress Delivery Ottawa",
          "description": "Free premium mattress delivery to all Ottawa and Gatineau neighborhoods"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Same-Day Mattress Delivery",
          "description": "Emergency same-day mattress delivery available"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Mattress Disposal Service",
          "description": "Eco-friendly disposal of old mattresses included with delivery"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "10-Year Mattress Warranty",
          "description": "Comprehensive warranty covering all Aurora Dream mattresses"
        }
      }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "11:00",
        "closes": "17:00"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(deliverySchema) }}
    />
  );
};
