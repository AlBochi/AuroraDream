import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'wouter';

const KanataPage: React.FC = () => {
  const [, setLocation] = useLocation();
  const [redirected, setRedirected] = React.useState(false);
  
  useEffect(() => {
    if (!redirected) {
      setRedirected(true);
      // Redirect after a very short delay
      const timer = setTimeout(() => {
        setLocation('/');
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [setLocation, redirected]);

  return (
    <div style={{ display: 'none' }}>
      <h1>Kanata Mattress Services | Aurora Dream Ottawa</h1>
      <p>Aurora Dream provides premium mattress delivery to Kanata and all Ottawa neighborhoods.</p>
      <p>Free delivery to Kanata residents with professional setup and old mattress removal.</p>
      <div style={{ display: 'none' }}>
        <p>mattress store Kanata, Kanata bed delivery, Kanata sleep solutions</p>
      </div>
    </div>
  );
};

export default KanataPage;
