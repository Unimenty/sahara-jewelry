import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import CartDrawer from '@/components/CartDrawer';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { cartItems, totalItems, setDrawerOpen } = useCart();
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Background reveal for top header
      setIsScrolled(window.scrollY > 50);

      // Hide on scroll logic for mobile bottom nav
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Header */}
      <header className="fixed top-6 md:top-10 left-0 right-0 z-50 px-4 md:px-8 pointer-events-none">
        <div className="flex justify-between items-center w-full relative">
          
          {/* Logo - Far Left */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0 pointer-events-auto"
          >
            <Link 
              to="/" 
              className="text-xl md:text-2xl font-serif font-black tracking-[0.2em] uppercase text-white drop-shadow-md"
            >
              Sahara
            </Link>
          </motion.div>

          {/* Floating Pill Nav - Desktop Center Only */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
            <motion.nav 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex bg-black/40 backdrop-blur-2xl rounded-full border border-white/10 p-1.5 px-2 items-center gap-1 shadow-2xl pointer-events-auto"
            >
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-500 ${
                    isActive(item.path) 
                      ? 'bg-white text-black shadow-lg scale-105' 
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </motion.nav>
          </div>

          {/* Cart Action - Far Right */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0 pointer-events-auto"
          >
            <button 
              className="relative p-3 bg-black/40 backdrop-blur-xl rounded-full border border-white/10 text-white hover:bg-white/10 transition-all group shadow-xl shadow-black/20"
              onClick={() => setDrawerOpen(true)}
            >
              <ShoppingBag size={18} className="group-hover:scale-110 transition-transform" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[8px] w-4 h-4 flex items-center justify-center rounded-full font-black border border-black shadow-lg">
                  {totalItems}
                </span>
              )}
            </button>
          </motion.div>
        </div>
      </header>

      <div className="md:hidden fixed bottom-10 left-0 right-0 z-[60] px-6 pointer-events-none">
        <motion.nav 
          initial={{ opacity: 0, y: 50 }}
          animate={{ 
            opacity: isVisible ? 1 : 0, 
            y: isVisible ? 0 : 80,
            pointerEvents: isVisible ? 'auto' : 'none'
          }}
          transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
          className="flex bg-black/60 backdrop-blur-3xl rounded-full border border-white/10 p-1.5 items-center justify-between shadow-2xl pointer-events-auto max-w-[340px] mx-auto"
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`flex-1 flex flex-col items-center py-3.5 rounded-full transition-all duration-500 text-center ${
                isActive(item.path) 
                  ? 'bg-white text-black shadow-xl scale-105' 
                  : 'text-white/50'
              }`}
            >
              <span className={`text-[9px] font-black uppercase tracking-[0.2em] ${isActive(item.path) ? 'text-black' : 'text-white/50'}`}>
                {item.name}
              </span>
            </Link>
          ))}
        </motion.nav>
      </div>

      {/* Mobile Menu Overlay (for burger icon if added later, or manual toggle) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-3xl z-[60] flex flex-col items-center justify-center space-y-10 pointer-events-auto"
          >
            <button 
              className="absolute top-10 left-10 text-white group"
              onClick={() => setIsMenuOpen(false)}
            >
              <X size={32} className="group-hover:rotate-90 transition-transform duration-500" />
            </button>
            
            <nav className="flex flex-col items-center space-y-8">
              {navItems.map((item) => (
                <Link 
                  key={item.name}
                  to={item.path} 
                  className="text-4xl md:text-6xl font-serif text-white hover:text-primary transition-colors uppercase tracking-tighter" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <CartDrawer />
    </>
  );
};

export default Header;
