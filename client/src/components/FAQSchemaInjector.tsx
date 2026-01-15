import React, { useEffect } from 'react';

export const FAQSchemaInjector = () => {
  useEffect(() => {
    // Only run on client side
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What areas in Ottawa do you deliver to?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We deliver to all Ottawa and Gatineau neighborhoods including Kanata, Barrhaven, Nepean, Orleans, Stittsville, Westboro, Centretown, The Glebe, Vanier, Rockcliffe Park, and surrounding areas. Free delivery included."
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
            "text": "All Aurora Dream mattresses come with a comprehensive 10-year warranty covering manufacturing defects and structural issues."
          }
        }
      ]
    };

    // Create and inject script tag
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(faqSchema);
    document.head.appendChild(script);
    
    // Cleanup on unmount
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null; // This component doesn't render anything visible
};
