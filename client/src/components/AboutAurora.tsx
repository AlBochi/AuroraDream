import { CheckCircle } from "lucide-react";

const whyAuroraDream = [
  {
    title: "World-Class Engineering",
    description: "Our mattresses are built using advanced support systems, premium foams, and modern cooling technologies designed for real, lasting performance.",
  },
  {
    title: "Uncompromising Quality",
    description: "We use high-quality materials, durable constructions, and certified components to ensure safety, longevity, and consistent comfort.",
  },
  {
    title: "Designed for Every Sleeper",
    description: "From firm support to ultra-plush luxury, our collection is carefully crafted to meet different sleep styles, body types, and comfort preferences.",
  },
  {
    title: "Sleep That's Worth the Investment",
    description: "Aurora Dream mattresses aren't just products — they're long-term investments in your health, energy, and daily performance.",
  },
  {
    title: "A Personalized Experience",
    description: "We believe sleep is personal. That's why we invite you to experience our collection in person and find the solution that truly fits you.",
  },
];

export default function AboutAurora() {
  return (
    <section
      id="about"
      className="relative py-32 bg-[#F3E8D0]"
      data-testid="section-about"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl font-light text-[#0A3A57] mb-4 tracking-wide"
            data-testid="text-about-title"
            style={{ fontFamily: "'Biome', sans-serif", fontWeight: 'bold' }}
          >
            Our Story – Aurora Dream
          </h2>
        </div>

        <div className="mb-24">
          <div className="space-y-6 text-[#0A3A57]/90 leading-relaxed text-lg">
            <p data-testid="text-about-paragraph-1">
              At Aurora Dream, we believe sleep should be both luxurious and accessible.
            </p>
            
            <p data-testid="text-about-paragraph-2">
              Born from a simple vision, our boutique was created to bring premium sleep within reach for every dreamer in our community.
            </p>
            
            <p data-testid="text-about-paragraph-3">
              We proudly partner with Canadian manufacturers, ensuring every mattress is carefully crafted with quality, transparency, and care. Each piece is chosen to balance comfort, craftsmanship, and affordability — because everyone deserves to wake up restored.
            </p>
            
            <p data-testid="text-about-paragraph-4">
              Aurora Dream is more than a store. It's a promise of comfort, a celebration of community, and a reflection of the values we live by. Whether you visit us in person or discover us online, we're here to guide you toward the sleep you deserve.
            </p>
            
            <p className="text-xl font-medium italic text-[#0A3A57] mt-8">
              Aurora Dream — Premium Sleep Within Reach.
            </p>
          </div>

          <div className="mt-16 flex flex-wrap gap-10 justify-center">
            <div data-testid="stat-experience" className="text-center">
              <div className="text-4xl font-bold text-[#0A3A57]" style={{ fontFamily: "'Biome', sans-serif" }}>15+</div>
              <div className="text-lg text-[#0A3A57]/70 mt-2" style={{ fontFamily: "'Biome', sans-serif" }}>Years Experience</div>
            </div>
            <div data-testid="stat-products" className="text-center">
              <div className="text-4xl font-bold text-[#0A3A57]" style={{ fontFamily: "'Biome', sans-serif" }}>100%</div>
              <div className="text-lg text-[#0A3A57]/70 mt-2" style={{ fontFamily: "'Biome', sans-serif" }}>Canadian Made</div>
            </div>
            <div data-testid="stat-satisfaction" className="text-center">
              <div className="text-4xl font-bold text-[#0A3A57]" style={{ fontFamily: "'Biome', sans-serif" }}>500+</div>
              <div className="text-lg text-[#0A3A57]/70 mt-2" style={{ fontFamily: "'Biome', sans-serif" }}>Happy Clients</div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#0A3A57]/10 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-[#0A3A57]/10">
              <h3 className="text-xl font-bold text-[#0A3A57] mb-4" style={{ fontFamily: "'Biome', sans-serif" }}>
                Mission
              </h3>
              <p className="text-[#0A3A57]/80 leading-relaxed">
                To provide our community with expertly crafted mattresses from Canadian manufacturers, combining comfort, quality, and affordability — ensuring every customer enjoys restorative sleep and renewed energy.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-[#0A3A57]/10">
              <h3 className="text-xl font-bold text-[#0A3A57] mb-4" style={{ fontFamily: "'Biome', sans-serif" }}>
                Vision
              </h3>
              <p className="text-[#0A3A57]/80 leading-relaxed">
                Premium Sleep Within Reach
              </p>
              <p className="text-[#0A3A57]/70 text-sm mt-2">
                A future where our community we love to serve can access luxurious, restorative sleep without compromise.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-[#0A3A57]/10">
              <h3 className="text-xl font-bold text-[#0A3A57] mb-4" style={{ fontFamily: "'Biome', sans-serif" }}>
                Values
              </h3>
              <ul className="space-y-2 text-[#0A3A57]/80">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Integrity:</strong> We act with honesty and transparency in every relationship.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Care:</strong> We treat each customer with warmth, respect, and genuine attention.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Community:</strong> We root ourselves in the people we serve, building trust and lasting connections.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Excellence:</strong> We strive for continuous improvement in service, design, and experience.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Sustainability:</strong> We think long‑term, making choices that respect people and planet.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-2xl font-bold text-[#0A3A57] italic" style={{ fontFamily: "'Biome', sans-serif" }}>
            Aurora Dream — Premium Sleep Within Reach.
          </p>
        </div>

        <div className="border-t border-[#0A3A57]/10 pt-16 mt-16">
          <h3 className="text-2xl sm:text-3xl font-light text-[#0A3A57] mb-12 tracking-wide text-center" style={{ fontFamily: "'Biome', sans-serif", fontWeight: 'bold' }}>
            Why Aurora Dream
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyAuroraDream.map((item, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-[#0A3A57]/10"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-[#0A3A57] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-medium text-[#0A3A57] mb-2" style={{ fontFamily: "'Biome', sans-serif" }}>
                      {item.title}
                    </h4>
                    <p className="text-[#0A3A57]/70 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}