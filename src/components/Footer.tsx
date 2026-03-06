
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/50 py-10 sm:py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-muted/20 opacity-50 pointer-events-none"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src="/favicon.svg"
                alt="Fairine Logo"
                className="w-8 h-8 sm:w-10 sm:h-10 transform -rotate-3 hover:rotate-0 transition-transform duration-300 object-contain"
              />
              <span className="text-xl sm:text-2xl font-black bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Fairine
              </span>
            </div>
            <p className="text-muted-foreground text-[13px] sm:text-sm leading-relaxed max-w-xs">
              Direct manufacturers of high-performance liquid soaps and cleaning detergents in Ghana. Bringing professional quality to your doorstep.
            </p>
            <div className="flex items-center space-x-2 pt-2 sm:pt-3">
              <span className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-emerald-500 text-white text-[10px] sm:text-[12px] font-black shadow-lg shadow-emerald-500/20">
                ✓
              </span>
              <span className="text-[11px] sm:text-[12px] font-black text-foreground tracking-wider uppercase">
                FDA Approved Products
              </span>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-black text-[11px] sm:text-sm uppercase tracking-widest text-foreground mb-4 sm:mb-6">Connect</h4>
            <ul className="grid grid-cols-1 gap-y-4 text-[13px] sm:text-sm text-muted-foreground">
              <li className="flex items-start">
                <span className="font-bold text-foreground mr-2">📍</span> Accra, Ghana
              </li>
              <li className="flex items-start">
                <span className="font-bold text-foreground mr-2">📧</span>
                <a href="mailto:fairineenterprise@gmail.com" className="hover:text-primary transition-colors break-all">fairineenterprise@gmail.com</a>
              </li>
              <li className="flex flex-col space-y-2 pt-1 sm:pt-2">
                <span className="text-foreground font-black text-[9px] sm:text-[10px] uppercase tracking-tighter opacity-50">Direct Lines</span>
                <div className="flex flex-row md:flex-col gap-4 md:gap-1 text-[13px] sm:text-sm">
                  <a href="tel:+233261233032" className="hover:text-primary transition-colors flex items-center whitespace-nowrap">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mr-2 md:inline hidden"></span>
                    +233 26 123 3032
                  </a>
                  <a href="tel:+233546865035" className="hover:text-primary transition-colors flex items-center whitespace-nowrap">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mr-2 md:inline hidden"></span>
                    +233 54 686 5035
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/40 mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-[10px] sm:text-xs">
            © 2025 Fairine Enterprise. All rights reserved.
          </p>
          <p className="text-muted-foreground text-[10px] sm:text-xs italic bg-primary/5 px-3 py-1 rounded-full">
            Made with <span className="text-rose-500">❤️</span> for better living.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
