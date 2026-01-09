import { MapPin, Mail, Phone, Facebook, Instagram, Youtube, Twitter, Linkedin, MessageSquare } from "lucide-react";
const FooterAurora = () => {
  const handleFacebookClick = () => { window.open("https://facebook.com/auroradreamsleep", "_blank"); };
  const handleInstagramClick = () => { window.open("https://www.instagram.com/auroradream.ca/", "_blank"); };
  return (
    <footer className="bg-gradient-to-b from-[#0A3A57] to-[#0d2b42] text-[#F3E8D0] py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div><h3 className="text-xl font-light mb-4">Contact Info</h3><div className="space-y-3">
            <div className="flex items-center gap-3"><MapPin size={18} /><span>1489 Merivale Road, UNIT E, Ottawa</span></div>
            <div className="flex items-center gap-3"><Mail size={18} /><a href="mailto:info@auroradream.ca" className="hover:text-[#3A7BF7] transition-colors">info@auroradream.ca</a></div>
            <div className="flex items-center gap-3"><Phone size={18} /><a href="tel:+16132900212" className="hover:text-[#3A7BF7] transition-colors">+1 (613) 290-0212</a></div></div></div>
          <div><h3 className="text-xl font-light mb-4">Follow Us</h3><p className="mb-4">Stay connected</p><div className="flex items-center gap-4">
            <button onClick={handleFacebookClick} className="flex items-center justify-center w-10 h-10 rounded-full bg-[#3A7BF7]/20 hover:bg-[#3A7BF7]/40 text-[#F3E8D0] transition-all duration-300" aria-label="Facebook"><Facebook className="w-5 h-5" /></button>
            <button onClick={handleInstagramClick} className="flex items-center justify-center w-10 h-10 rounded-full bg-[#3A7BF7]/20 hover:bg-[#3A7BF7]/40 text-[#F3E8D0] transition-all duration-300" aria-label="Instagram"><Instagram className="w-5 h-5" /></button></div></div>
          <div><h3 className="text-xl font-light mb-4">Hours</h3><div className="space-y-2"><p>By appointment only</p><p>Monday - Friday: 9am - 7pm</p><p>Saturday - Sunday: 10am - 5pm</p></div></div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-6 text-center"><p>&copy; 2025 Aurora Dream. All rights reserved.</p></div>
      </div>
    </footer>
  );
};
export default FooterAurora;
