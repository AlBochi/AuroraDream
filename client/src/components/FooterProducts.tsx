import { MapPin, Mail, Phone, Facebook, Instagram, Youtube, Twitter, Linkedin, MessageSquare } from "lucide-react";

const FooterProducts = () => {
  const handleFacebookClick = () => { window.open("https://facebook.com/auroradreamsleep", "_blank"); };
  const handleInstagramClick = () => { window.open("https://www.instagram.com/auroradream.ca/", "_blank"); };
  const handleYouTubeClick = () => { window.open("https://www.youtube.com/@AuroraDreamCa", "_blank"); };
  const handleTwitterClick = () => { window.open("https://x.com/AuroraDreamCa", "_blank"); };
  const handleThreadsClick = () => { window.open("https://www.threads.net/@auroradream.ca", "_blank"); };
  const handleLinkedInClick = () => { window.open("https://www.linkedin.com/company/aurora-dream", "_blank"); };

  return (
    <footer className="bg-white text-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div><h3 className="text-xl font-semibold mb-4">Contact Info</h3><div className="space-y-3">
            <div className="flex items-center gap-3"><MapPin size={18} className="text-gray-600" /><span>1489 Merivale Road, UNIT E, Ottawa</span></div>
            <div className="flex items-center gap-3"><Mail size={18} className="text-gray-600" /><a href="mailto:info@auroradream.ca" className="hover:text-blue-600 transition-colors">info@auroradream.ca</a></div>
            <div className="flex items-center gap-3"><Phone size={18} className="text-gray-600" /><a href="tel:+16132900212" className="hover:text-blue-600 transition-colors">+1 (613) 290-0212</a></div></div></div>
          <div><h3 className="text-xl font-semibold mb-4">Follow Us</h3><p className="mb-4 text-gray-600">Stay connected</p><div className="flex items-center gap-3 flex-wrap">
            <button onClick={handleFacebookClick} className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-600 transition-all duration-300" aria-label="Facebook"><Facebook className="w-5 h-5" /></button>
            <button onClick={handleInstagramClick} className="flex items-center justify-center w-10 h-10 rounded-full bg-pink-100 hover:bg-pink-200 text-pink-600 transition-all duration-300" aria-label="Instagram"><Instagram className="w-5 h-5" /></button>
            <button onClick={handleYouTubeClick} className="flex items-center justify-center w-10 h-10 rounded-full bg-red-100 hover:bg-red-200 text-red-600 transition-all duration-300" aria-label="YouTube"><Youtube className="w-5 h-5" /></button>
            <button onClick={handleTwitterClick} className="flex items-center justify-center w-10 h-10 rounded-full bg-black/10 hover:bg-black/20 text-gray-800 transition-all duration-300" aria-label="X (Twitter)"><Twitter className="w-5 h-5" /></button>
            <button onClick={handleThreadsClick} className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 transition-all duration-300" aria-label="Threads"><MessageSquare className="w-5 h-5" /></button>
            <button onClick={handleLinkedInClick} className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-700 transition-all duration-300" aria-label="LinkedIn"><Linkedin className="w-5 h-5" /></button></div></div>
          <div><h3 className="text-xl font-semibold mb-4">Hours</h3><div className="space-y-2 text-gray-600"><p>By appointment only</p><p>Monday - Friday: 9am - 7pm</p><p>Saturday - Sunday: 10am - 5pm</p></div></div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-6 text-center"><p className="text-gray-600">&copy; 2025 Aurora Dream. All rights reserved.</p></div>
      </div>
    </footer>
  );
};

export default FooterProducts;