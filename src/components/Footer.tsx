import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-[#0f0f0f] text-white overflow-hidden pt-20">
      {/* Footer Bottom Links */}
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 pb-12 pt-20 border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          <div className="col-span-1 lg:col-span-2 space-y-8">
            <h3 className="text-3xl font-serif font-medium tracking-tighter uppercase">Sahara</h3>
            <p className="text-xs text-white/40 leading-relaxed max-w-sm italic">
              "Timeless pieces inspired by the desert golden hour. Handcrafted for those who carry the sun within them."
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] tracking-[0.3em] font-bold uppercase text-white">Collections</h4>
            <ul className="space-y-4 font-sans font-light">
              {['Rings', 'Earrings', 'Necklaces', 'Bracelets'].map((item) => (
                <li key={item}><Link to="/shop" className="text-[11px] text-white/40 hover:text-primary transition-colors uppercase tracking-widest">{item}</Link></li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] tracking-[0.3em] font-bold uppercase text-white font-sans">Contact</h4>
            <ul className="space-y-4 font-sans font-light">
              <li className="text-[11px] text-white/40 tracking-widest">
                <a href="mailto:info@saharajewellery.com" className="hover:text-primary transition-colors uppercase">INFO@SAHARAJEWELLERY.COM</a>
              </li>
              <li className="text-[11px] text-white/40 tracking-widest underline decoration-primary/20 decoration-dotted">
                <a href="tel:+15550008888" className="hover:text-primary transition-colors">+1 (555) 000-8888</a>
              </li>
              <li className="flex gap-4 pt-4">
                {[
                  { Icon: Facebook, href: "https://facebook.com/sahara", label: "Facebook" },
                  { Icon: Instagram, href: "https://instagram.com/sahara", label: "Instagram" },
                  { Icon: Twitter, href: "https://twitter.com/sahara", label: "Twitter" },
                  { Icon: Youtube, href: "https://youtube.com/sahara", label: "Youtube" }
                ].map(({ Icon, href, label }, i) => (
                   <a 
                    key={i} 
                    href={href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label={label}
                    className="text-white/40 hover:text-primary transition-colors hover:scale-110"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/5 text-[9px] tracking-[0.4em] font-bold text-white/10 uppercase font-sans">
          <div>© 2026 SAHARA JEWELLERY. ALL RIGHTS RESERVED.</div>
          <div className="flex gap-8">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
