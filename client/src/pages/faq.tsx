import AuroraSky from "@/components/AuroraSky";
import NavbarAurora from "@/components/NavbarAurora";
import FooterAurora from "@/components/FooterAurora";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const faqCategories = [
  {
    title: "RETURNS & EXCHANGES",
    items: [
      {
        question: "What is your return policy?",
        answer: "All sales are final. No refunds are provided. In-store credit is available for items returned in original factory sealed plastic."
      },
      {
        question: "Can I exchange my mattress?",
        answer: "Exchanges are only considered under warranty conditions. Normal wear and tear, including slight body impressions (less than 1.5 inches), are not covered."
      }
    ]
  },
  {
    title: "DELIVERY & TIMELINES",
    items: [
      {
        question: "Is delivery included with my purchase?",
        answer: "Delivery does not include set-up. Free delivery is provided for purchases of $1,000 and above."
      },
      {
        question: "How long will my order take to arrive?",
        answer: "Due to high demand for bedding and furniture, some pieces may take longer to arrive than normal—although this is rare. Usually, delivery takes less than 3 weeks from the date noted on your sales receipt."
      },
      {
        question: "What if there's a delay with my order?",
        answer: "Aurora Dream takes pride in prompt service. However, circumstances may arise regarding shipment from the manufacturer. If this happens, you will be informed as soon as your purchase becomes available for pickup or delivery. Your patience and understanding is appreciated."
      }
    ]
  },
  {
    title: "MATTRESS ADJUSTMENT & CARE",
    items: [
      {
        question: "How long does it take to adjust to a new mattress?",
        answer: "Expect an adjustment period. Just as new shoes take time to feel comfortable, your new mattress might take days or weeks for your body to adjust. This is normal."
      },
      {
        question: "Are slight body impressions normal?",
        answer: "Yes, you can expect your mattress to develop slight indentations called 'body impressions' as you start sleeping on it. These are normal and result from the quilt and upholstery layers settling and conforming to your body. While slight, they are usually not greater than 1.5 inches in depth and are not reason for exchange under warranty."
      },
      {
        question: "Should I rotate my mattress?",
        answer: "Although most mattresses now only have one sleep surface, your mattress may benefit in comfort and durability if rotated regularly (clockwise)."
      },
      {
        question: "Is a visible ridge down the middle normal?",
        answer: "Yes, when two people share a bed, they usually sleep on each side, settling the comfort layers on each side. Often, there's a visible ridge down the middle of king or queen beds where comfort layers haven't been compressed. This is normal and not a warranty issue."
      },
      {
        question: "How can I minimize body impressions and the middle ridge?",
        answer: "Sleep on all surface areas of the bed, including the middle, and rotate your mattress and box springs regularly."
      }
    ]
  },
  {
    title: "WARRANTY & PROTECTION",
    items: [
      {
        question: "What support does my mattress need?",
        answer: "Proper support means corresponding box springs, proper bed frame, and supportive bed furniture. Lack of proper support can cause structural damage and void your warranty."
      },
      {
        question: "Can I use my old box spring?",
        answer: "Using old box springs is not recommended as structural breakdown can be difficult to see and may lead to mattress damage."
      },
      {
        question: "Can I place a board between my mattress and box spring?",
        answer: "No, do not place a board between your mattress and box spring. Utilize proper bed furniture with adequate support."
      },
      {
        question: "What support do king and queen sets need?",
        answer: "For king and queen sets, a rigid center support with at least 5 cross slats is necessary."
      },
      {
        question: "What support do pocketed coil mattresses need?",
        answer: "Pocketed coil mattresses always require a foundation or bunkie board—slats alone are not sufficient support."
      },
      {
        question: "How do I protect my mattress warranty?",
        answer: "Spills and stains on your mattress WILL VOID your warranty. Utilize a high-quality mattress protector on all mattresses, especially those used by guests or children."
      },
      {
        question: "Where can I find my warranty information?",
        answer: "Refer to the warranty card attached to your new bed. Some mattresses may not have a separate card but include warranty details in the bar code on the law tag."
      },
      {
        question: "What happens if I remove the law tag?",
        answer: "NEVER REMOVE THE LAW TAG AS THIS WILL VOID YOUR WARRANTY."
      },
      {
        question: "What do I need for warranty exchanges?",
        answer: "NO WARRANTY EXCHANGES CAN BE PROCESSED WITHOUT PROOF OF PURCHASE."
      }
    ]
  }
];

function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border-b border-[#3A7BF7]/20">
      <button
        className="w-full py-6 text-left flex justify-between items-center hover:text-[#3A7BF7] transition-colors"
        onClick={onToggle}
      >
        <span className="text-lg font-medium text-[#F3E8D0]">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-[#3A7BF7]" />
        ) : (
          <ChevronDown className="w-5 h-5 text-[#3A7BF7]" />
        )}
      </button>
      {isOpen && (
        <div className="pb-6">
          <p className="text-[#F3E8D0]/80 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (categoryIndex, itemIndex) => {
    const key = `${categoryIndex}-${itemIndex}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="relative min-h-screen">
      <AuroraSky />
      <NavbarAurora />
      
      {/* Increased padding from pt-32 to pt-48 to clear navbar */}
      <main className="pt-48 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-light text-[#F3E8D0] mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-[#F3E8D0]/60 text-lg max-w-2xl mx-auto">
              Find answers to common questions about our policies, delivery, warranties, and mattress care.
            </p>
          </div>

          {/* FAQ Content */}
          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-[#0A3A57]/30 backdrop-blur-sm rounded-2xl p-8 border border-[#3A7BF7]/30">
                <h2 className="text-2xl font-light text-[#F3E8D0] mb-8 pb-4 border-b border-[#3A7BF7]/30">
                  {category.title}
                </h2>
                
                <div className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <FAQItem
                      key={itemIndex}
                      question={item.question}
                      answer={item.answer}
                      isOpen={openItems[`${categoryIndex}-${itemIndex}`]}
                      onToggle={() => toggleItem(categoryIndex, itemIndex)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 text-center">
            <div className="bg-[#0A3A57]/30 backdrop-blur-sm rounded-2xl p-8 border border-[#3A7BF7]/30">
              <h3 className="text-2xl font-light text-[#F3E8D0] mb-4">
                Still have questions?
              </h3>
              <p className="text-[#F3E8D0]/60 mb-6 max-w-xl mx-auto">
                Contact our sleep experts for personalized assistance with your specific concerns.
              </p>
              <button
                onClick={() => window.open("mailto:albochi@auroradream.ca", "_blank")}
                className="bg-[#3A7BF7] hover:bg-[#3A7BF7]/90 text-[#F3E8D0] px-8 py-4 text-lg font-medium rounded-md shadow-lg shadow-[#3A7BF7]/30 transition-all duration-300 border border-[#3A7BF7]/50"
              >
                Email Our Support Team
              </button>
            </div>
          </div>
        </div>
      </main>

      <FooterAurora />
    </div>
  );
}