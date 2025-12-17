import themePage1 from "@assets/ThemePage1_1765832539451.png";
import themePage2 from "@assets/ThemePage2_1765832539450.png";

interface ThemedSectionProps {
  children: React.ReactNode;
  variant?: 1 | 2;
  className?: string;
}

export default function ThemedSection({ children, variant = 1, className = "" }: ThemedSectionProps) {
  const bgImage = variant === 1 ? themePage1 : themePage2;
  
  return (
    <div className={`relative ${className}`}>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      {/* CHANGED: variant 1 (Partners) now uses sand color, variant 2 (Reviews) keeps teal */}
      {variant === 1 ? (
        <div className="absolute inset-0 bg-gradient-to-b from-[#F3E8D0]/20 via-[#F3E8D0]/10 to-[#F3E8D0]/20" />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A3A57]/70 via-[#0A3A57]/50 to-[#0A3A57]/70" />
      )}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
