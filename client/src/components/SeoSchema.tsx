import React from 'react';

interface SeoSchemaProps {
  pageType?: 'homepage' | 'product' | 'local' | 'service';
  productData?: any;
  localData?: any;
}

export const SeoSchema: React.FC<SeoSchemaProps> = ({ 
  pageType = 'homepage',
  productData,
  localData 
}) => {
  
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Aurora Dream",
    "description": "Ottawa's premium sleep boutique with Canadian-made mattresses, pillows, and sleep accessories. Free delivery across Ottawa, Kanata, Barrhaven, Nepean, Orleans, and Gatineau.",
    "url": "https://auroradream.ca",
    "telephone": "+1-613-290-0212",
    "email": "info@auroradream.ca",
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
    ],
    "priceRange": "$$",
    "image": [
      "https://auroradream.ca/images/logo.jpg",
      "https://auroradream.ca/images/hero-side.webp",
      "https://auroradream.ca/images/showroom.jpg"
    ],
    "sameAs": [
      "https://facebook.com/auroradreamsleep",
      "https://www.instagram.com/auroradream.ca/",
      "https://www.youtube.com/@AuroraDreamCa",
      "https://x.com/AuroraDreamCa",
      "https://www.threads.net/@auroradream.ca",
      "https://www.linkedin.com/company/aurora-dream"
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "Ottawa"
      },
      {
        "@type": "City",
        "name": "Kanata"
      },
      {
        "@type": "City",
        "name": "Barrhaven"
      },
      {
        "@type": "City",
        "name": "Nepean"
      },
      {
        "@type": "City",
        "name": "Orleans"
      },
      {
        "@type": "City",
        "name": "Gatineau"
      },
      {
        "@type": "City",
        "name": "Stittsville"
      }
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Free Mattress Delivery",
          "description": "Free delivery to all Ottawa and Gatineau areas"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Old Mattress Disposal",
          "description": "Eco-friendly disposal of old mattresses"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "10-Year Mattress Warranty",
          "description": "Comprehensive 10-year warranty on all mattresses"
        }
      }
    ]
  };

  // Add FAQ schema for common questions
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What areas do you deliver to in Ottawa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We deliver to all Ottawa and Gatineau neighborhoods including Kanata, Barrhaven, Nepean, Orleans, Stittsville, Westboro, Centretown, The Glebe, and surrounding areas. Free delivery included."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer mattress disposal services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide eco-friendly mattress disposal for your old mattress when we deliver your new one. This service is included with delivery."
        }
      },
      {
        "@type": "Question",
        "name": "What is your mattress warranty?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "All Aurora Dream mattresses come with a comprehensive 10-year warranty covering manufacturing defects and structural issues."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(baseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
};
