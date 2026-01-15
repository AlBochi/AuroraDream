import React from 'react';

export default function TestFAQ() {
  return (
    <html>
      <head>
        <script type="application/ld+json">
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [{
            "@type": "Question",
            "name": "Test question?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Test answer"
            }
          }]
        }
        </script>
      </head>
      <body>
        <h1>Test FAQ Page</h1>
      </body>
    </html>
  );
}
