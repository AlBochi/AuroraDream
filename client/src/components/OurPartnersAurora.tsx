import sensisleepLogo from "@assets/sensisleep_1765832539452.jpg";
import healthguardLogo from "@assets/HealthGaurd_1765832539453.jpeg";
import acimaLogo from "@assets/acima_1765832539454.png";
import ifinanceLogo from "@assets/Ifinance_1765832539452.jpeg";

const partners = [
  { name: "SensiSleep", logo: sensisleepLogo },
  { name: "HealthGuard", logo: healthguardLogo },
  { name: "Acima", logo: acimaLogo },
  { name: "iFinance", logo: ifinanceLogo },
];

export default function OurPartnersAurora() {
  return (
    <section
      id="partners"
      className="relative py-20"
      data-testid="section-partners"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* CHANGED: Dark teal text for better contrast on sand background */}
          <h2
            className="text-3xl sm:text-4xl font-light text-[#0A3A57] mb-4 tracking-wide"
            data-testid="text-partners-title"
          >
            Our Partners
          </h2>
          {/* CHANGED: Darker text for better readability */}
          <p className="text-[#0A3A57]/70 max-w-xl mx-auto">
            Trusted partnerships that ensure quality, financing options, and product protection.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              data-testid={`partner-${partner.name.toLowerCase()}`}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-12 md:h-16 w-auto object-contain max-w-[160px] md:max-w-[200px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
