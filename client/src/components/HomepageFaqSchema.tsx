import React from 'react';

export const HomepageFaqSchema = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What areas in Ottawa do you deliver to?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We deliver to all Ottawa and Gatineau neighborhoods including Kanata, Barrhaven, Nepean, Orleans, Stittsville, Westboro, Centretown, The Glebe, Vanier, Rockcliffe Park, and surrounding areas. Free delivery included with all mattress purchases."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer old mattress disposal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide eco-friendly mattress disposal service for your old mattress when we deliver your new one. This service is completely free with delivery."
        }
      },
      {
        "@type": "Question",
        "name": "What warranty comes with your mattresses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "All Aurora Dream mattresses come with a comprehensive 10-year warranty covering manufacturing defects and structural issues. We stand behind the quality of our Canadian-made mattresses."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly can you deliver a mattress?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer same-day delivery for most Ottawa areas. For urgent needs, contact us and we'll arrange delivery within hours. Standard delivery is within 1-2 business days."
        }
      },
      {
        "@type": "Question",
        "name": "Are your mattresses made in Canada?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all Aurora Dream mattresses are proudly Canadian-made. We source materials locally and manufacture in Ontario, supporting Canadian businesses and ensuring premium quality."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
};
