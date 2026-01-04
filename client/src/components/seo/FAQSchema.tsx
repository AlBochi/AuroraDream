import React from 'react';

const FAQSchema: React.FC = () => {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you offer mattress delivery to Kanata?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer free mattress delivery to all Kanata neighborhoods including Katimavik, Beaverbrook, Bridlewood, and Morgan's Grant. Delivery includes professional setup and old mattress removal."
        }
      },
      {
        "@type": "Question",
        "name": "What areas in Ottawa do you serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve all Ottawa neighborhoods including Kanata, Barrhaven, Nepean, Orleans, Stittsville, Manotick, Findlay Creek, Gatineau, Centretown, Westboro, The Glebe, and surrounding areas."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer in-home sleep consultations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer personalized in-home sleep consultations for Ottawa residents. Our sleep experts will assess your needs and recommend the perfect mattress for your home."
        }
      },
      {
        "@type": "Question",
        "name": "Are your mattresses Canadian-made?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all our mattresses are proudly Canadian-made using premium materials and advanced sleep technology. We partner with Canadian manufacturers for quality and sustainability."
        }
      },
      {
        "@type": "Question",
        "name": "What is your return policy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer a 100-night trial period with free returns. If you're not completely satisfied with your mattress, we'll pick it up and provide a full refund."
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
};

export default FAQSchema;
