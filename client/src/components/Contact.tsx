import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone } from "lucide-react";

export default function Contact() {
  const handleEmailClick = () => {
    window.location.href = "mailto:hello@auroradream.ca";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+15551234567";
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 bg-card"
      data-testid="section-contact"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className="text-3xl sm:text-4xl font-bold text-card-foreground mb-6"
          data-testid="text-contact-title"
        >
          Visit Our Studio
        </h2>
        
        <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
          Experience our curated collection in person. Schedule your private fitting 
          and discover the perfect sleep solution in a calm, personalized setting.
        </p>

        <div className="space-y-6 mb-10">
          <div
            className="flex items-center justify-center gap-3 text-card-foreground"
            data-testid="contact-location"
          >
            <MapPin className="w-5 h-5 text-primary" />
            <span>Nepean, Ottawa — By Appointment Only</span>
          </div>
          
          <button
            onClick={handleEmailClick}
            className="flex items-center justify-center gap-3 text-card-foreground mx-auto hover:text-primary transition-colors"
            data-testid="contact-email"
          >
            <Mail className="w-5 h-5 text-primary" />
            <span>hello@auroradream.ca</span>
          </button>
          
          <button
            onClick={handlePhoneClick}
            className="flex items-center justify-center gap-3 text-card-foreground mx-auto hover:text-primary transition-colors"
            data-testid="contact-phone"
          >
            <Phone className="w-5 h-5 text-primary" />
            <span>(555) 123-4567</span>
          </button>
        </div>

        <p className="text-muted-foreground italic mb-8">
          Reach out to schedule your private fitting.
        </p>

        <Button
          onClick={handleEmailClick}
          className="bg-[#3A7BF7] hover:bg-[#3A7BF7]/90 text-[#F3E8D0] px-8 py-6 text-lg font-medium rounded-md shadow-lg transition-all duration-300"
          data-testid="button-schedule-fitting"
        >
          Schedule Your Fitting
        </Button>
      </div>
    </section>
  );
}
