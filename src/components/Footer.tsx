
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[hsl(var(--footer-bg))] text-[hsl(var(--footer-foreground))] pt-20 pb-10 transition-colors duration-500 border-t border-[hsl(var(--footer-border))]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 w-full">
        
        {/* Top Section - Newsletter */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-[hsl(var(--footer-border))] pb-16 mb-16 gap-8">
          <div className="max-w-md">
            <h3 className="text-2xl font-serif mb-2">Get Monthly Updates</h3>
            <p className="text-sm text-[hsl(var(--footer-muted))]">Subscribe for our latest collections and exclusive offers.</p>
          </div>
          <div className="flex w-full md:w-auto max-w-md">
            <input 
              type="email" 
              placeholder="Your email address..." 
              className="bg-transparent border-b border-[hsl(var(--footer-muted))] text-[hsl(var(--footer-foreground))] placeholder-[hsl(var(--footer-muted))] px-0 py-3 focus:outline-none focus:border-[hsl(var(--primary))] w-full md:w-[300px] text-sm"
            />
            <button className="bg-[hsl(var(--primary))] hover:bg-[#B08D57] text-[hsl(var(--primary-foreground))] px-6 py-3 font-medium text-xs tracking-wider uppercase transition-colors shrink-0">
              Subscribe
            </button>
          </div>
        </div>

        {/* Middle Section - Links & Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Columns 1-3: Links */}
          <div className="col-span-1 lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-widest text-[#C5A572] font-medium mb-6">Features</h4>
              <ul className="space-y-3 text-sm text-[hsl(var(--footer-muted))]">
                <li><Link to="#" className="hover:text-[hsl(var(--footer-foreground))] transition-colors">Rings</Link></li>
                <li><Link to="#" className="hover:text-[hsl(var(--footer-foreground))] transition-colors">Neckplaces</Link></li>
                <li><Link to="#" className="hover:text-[hsl(var(--footer-foreground))] transition-colors">Earrings</Link></li>
                <li><Link to="#" className="hover:text-[hsl(var(--footer-foreground))] transition-colors">Bracelets</Link></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-widest text-[#C5A572] font-medium mb-6">Quick Links</h4>
              <ul className="space-y-3 text-sm text-[hsl(var(--footer-muted))]">
                <li><Link to="/" className="hover:text-[hsl(var(--footer-foreground))] transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-[hsl(var(--footer-foreground))] transition-colors">About Us</Link></li>
                <li><Link to="/shop" className="hover:text-[hsl(var(--footer-foreground))] transition-colors">Shop</Link></li>
                <li><Link to="/contact" className="hover:text-[hsl(var(--footer-foreground))] transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-widest text-[#C5A572] font-medium mb-6">Support</h4>
              <ul className="space-y-3 text-sm text-[hsl(var(--footer-muted))]">
                <li><Link to="#" className="hover:text-[hsl(var(--footer-foreground))] transition-colors">Shipping Info</Link></li>
                <li><Link to="#" className="hover:text-[hsl(var(--footer-foreground))] transition-colors">Returns & Exchanges</Link></li>
                <li><Link to="#" className="hover:text-[hsl(var(--footer-foreground))] transition-colors">FAQ</Link></li>
                <li><Link to="#" className="hover:text-[hsl(var(--footer-foreground))] transition-colors">Size Guide</Link></li>
              </ul>
            </div>
          </div>

          {/* Column 4: Brand & Contact */}
          <div className="col-span-1 lg:col-span-2 lg:flex lg:justify-end">
            <div className="space-y-6 max-w-sm">
              <h2 className="text-4xl font-serif font-black text-[hsl(var(--footer-foreground))] uppercase tracking-widest mb-6">Axels</h2>
              <ul className="space-y-3 text-sm text-[hsl(var(--footer-muted))]">
                <li className="flex items-start gap-3">
                   📍 <span>391 Main St, Accra, Ghana</span>
                </li>
                <li className="flex items-start gap-3">
                   📞 <span>+233 54 686 5035</span>
                </li>
                <li className="flex items-start gap-3">
                   ✉️ <a href="mailto:hello@axels.framer.website" className="hover:text-[hsl(var(--footer-foreground))] transition-colors border-b border-transparent hover:border-current pb-0.5">hello@axels.framer.website</a>
                </li>
              </ul>
            </div>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[hsl(var(--footer-border))] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[hsl(var(--footer-muted))]">
          <p>© 2026 Axels Jewelry. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="#" className="hover:text-[hsl(var(--footer-foreground))] transition-colors">FB</Link>
            <Link to="#" className="hover:text-[hsl(var(--footer-foreground))] transition-colors">IG</Link>
            <Link to="#" className="hover:text-[hsl(var(--footer-foreground))] transition-colors">TW</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
