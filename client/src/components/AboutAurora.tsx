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
      className="relative py-32"
      data-testid="section-about"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Header */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl font-light text-[#F3E8D0] mb-4 tracking-wide"
            data-testid="text-about-title"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Our Story – Aurora Dream
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#3A7BF7] to-[#8A2BE2] mx-auto mb-8"></div>
          <p className="text-[#F3E8D0]/80 text-xl max-w-4xl mx-auto font-light" style={{ fontFamily: "var(--font-sans)" }}>
            At Aurora Dream, we believe sleep should be both luxurious and accessible.
          </p>
        </div>

        {/* Story Content */}
        <div className="mb-24">
          <div className="space-y-6 text-[#F3E8D0]/80 leading-relaxed text-lg max-w-4xl mx-auto" style={{ fontFamily: "var(--font-sans)" }}>
            <p data-testid="text-about-paragraph-1">
              Born from a simple vision, our boutique was created to bring premium sleep within reach for every dreamer in our community.
            </p>
            
            <p data-testid="text-about-paragraph-2">
              We proudly partner with Canadian manufacturers, ensuring every mattress is carefully crafted with quality, transparency, and care. Each piece is chosen to balance comfort, craftsmanship, and affordability — because everyone deserves to wake up restored.
            </p>
            
            <p data-testid="text-about-paragraph-3">
              Aurora Dream is more than a store. It's a promise of comfort, a celebration of community, and a reflection of the values we live by. Whether you visit us in person or discover us online, we're here to guide you toward the sleep you deserve.
            </p>
            
            <p className="text-xl font-semibold italic text-[#F3E8D0] mt-8" style={{ fontFamily: "var(--font-sans)" }}>
              Aurora Dream — Premium Sleep Within Reach.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-16 flex flex-wrap gap-10 justify-center">
            <div data-testid="stat-experience" className="text-center">
              <div className="text-4xl font-bold text-[#3A7BF7]" style={{ fontFamily: "var(--font-sans)" }}>15+</div>
              <div className="text-lg text-[#F3E8D0]/70 mt-2" style={{ fontFamily: "var(--font-sans)" }}>Years Experience</div>
            </div>
            <div data-testid="stat-products" className="text-center">
              <div className="text-4xl font-bold text-[#3A7BF7]" style={{ fontFamily: "var(--font-sans)" }}>100%</div>
              <div className="text-lg text-[#F3E8D0]/70 mt-2" style={{ fontFamily: "var(--font-sans)" }}>Canadian Made</div>
            </div>
            <div data-testid="stat-satisfaction" className="text-center">
              <div className="text-4xl font-bold text-[#3A7BF7]" style={{ fontFamily: "var(--font-sans)" }}>500+</div>
              <div className="text-lg text-[#F3E8D0]/70 mt-2" style={{ fontFamily: "var(--font-sans)" }}>Happy Clients</div>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="border-t border-[#3A7BF7]/20 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-[#0A3A57]/30 backdrop-blur-sm rounded-lg p-6 border border-[#3A7BF7]/20">
              <h3 className="text-xl font-bold text-[#F3E8D0] mb-4" style={{ fontFamily: "var(--font-sans)" }}>
                Mission
              </h3>
              <p className="text-[#F3E8D0]/80 leading-relaxed" style={{ fontFamily: "var(--font-sans)" }}>
                To provide our community with expertly crafted mattresses from Canadian manufacturers, combining comfort, quality, and affordability — ensuring every customer enjoys restorative sleep and renewed energy.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-[#0A3A57]/30 backdrop-blur-sm rounded-lg p-6 border border-[#3A7BF7]/20">
              <h3 className="text-xl font-bold text-[#F3E8D0] mb-4" style={{ fontFamily: "var(--font-sans)" }}>
                Vision
              </h3>
              <p className="text-[#F3E8D0] text-lg font-semibold mb-2" style={{ fontFamily: "var(--font-sans)" }}>
                Premium Sleep Within Reach
              </p>
              <p className="text-[#F3E8D0]/70 text-sm" style={{ fontFamily: "var(--font-sans)" }}>
                A future where our community we love to serve can access luxurious, restorative sleep without compromise.
              </p>
            </div>

            {/* Values */}
            <div className="bg-[#0A3A57]/30 backdrop-blur-sm rounded-lg p-6 border border-[#3A7BF7]/20">
              <h3 className="text-xl font-bold text-[#F3E8D0] mb-4" style={{ fontFamily: "var(--font-sans)" }}>
                Values
              </h3>
              <ul className="space-y-3 text-[#F3E8D0]/80" style={{ fontFamily: "var(--font-sans)" }}>
                <li className="flex items-start">
                  <span className="text-[#3A7BF7] mr-2">•</span>
                  <span><strong className="text-[#F3E8D0]">Integrity:</strong> We act with honesty and transparency in every relationship.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3A7BF7] mr-2">•</span>
                  <span><strong className="text-[#F3E8D0]">Care:</strong> We treat each customer with warmth, respect, and genuine attention.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3A7BF7] mr-2">•</span>
                  <span><strong className="text-[#F3E8D0]">Community:</strong> We root ourselves in the people we serve, building trust and lasting connections.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3A7BF7] mr-2">•</span>
                  <span><strong className="text-[#F3E8D0]">Excellence:</strong> We strive for continuous improvement in service, design, and experience.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3A7BF7] mr-2">•</span>
                  <span><strong className="text-[#F3E8D0]">Sustainability:</strong> We think long‑term, making choices that respect people and planet.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Closing Quote */}
        <div className="mt-16 text-center">
          <p className="text-2xl font-bold text-[#F3E8D0] italic" style={{ fontFamily: "var(--font-sans)" }}>
            Aurora Dream — Premium Sleep Within Reach.
          </p>
        </div>

        {/* Why Aurora Dream */}
        <div className="border-t border-[#3A7BF7]/20 pt-16 mt-16">
          <h3 className="text-2xl sm:text-3xl font-light text-[#F3E8D0] mb-12 tracking-wide text-center" style={{ fontFamily: "var(--font-sans)" }}>
            Why Aurora Dream
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyAuroraDream.map((item, index) => (
              <div
                key={index}
                className="bg-[#0A3A57]/30 backdrop-blur-sm rounded-lg p-6 border border-[#3A7BF7]/20 hover:border-[#3A7BF7]/40 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-[#3A7BF7] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-medium text-[#F3E8D0] mb-2" style={{ fontFamily: "var(--font-sans)" }}>
                      {item.title}
                    </h4>
                    <p className="text-[#F3E8D0]/70 text-sm leading-relaxed" style={{ fontFamily: "var(--font-sans)" }}>
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