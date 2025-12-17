import aboutImage from "@assets/generated_images/serene_canadian_nature_scene.png";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 sm:py-28 bg-card"
      data-testid="section-about"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2
              className="text-3xl sm:text-4xl font-bold text-card-foreground mb-6"
              data-testid="text-about-title"
            >
              Why Aurora Dream
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p data-testid="text-about-paragraph-1">
                At Aurora Dream, we believe that exceptional sleep begins with understanding your unique needs. 
                As Ottawa's premier private sleep studio, we offer an intimate, appointment-only experience 
                where quality meets personalization.
              </p>
              
              <p data-testid="text-about-paragraph-2">
                Our collection features carefully selected Canadian-made products, each chosen for its 
                superior craftsmanship and commitment to sustainable materials. We're independent experts, 
                not tied to any single brand—allowing us to recommend only what truly works for you.
              </p>
              
              <p data-testid="text-about-paragraph-3">
                Experience the difference of personalized sleep consultation. Our private fittings ensure 
                you find the perfect match for your sleep style, body type, and comfort preferences—all 
                in a calm, pressure-free environment.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-6">
              <div data-testid="stat-experience">
                <div className="text-2xl font-bold text-foreground">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div data-testid="stat-products">
                <div className="text-2xl font-bold text-foreground">100%</div>
                <div className="text-sm text-muted-foreground">Canadian Made</div>
              </div>
              <div data-testid="stat-satisfaction">
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-md overflow-hidden shadow-lg">
              <img
                src={aboutImage}
                alt="Serene Canadian landscape"
                className="w-full h-full object-cover"
                data-testid="img-about"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-[#19B9C4] via-[#3A7BF7] to-[#A861D5] rounded-md opacity-20 -z-10" />
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-[#A861D5] via-[#3A7BF7] to-[#19B9C4] rounded-md opacity-15 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
