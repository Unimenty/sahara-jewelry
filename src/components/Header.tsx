import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook, Twitter, ChevronDown, Gift } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Store', path: '/shop' },
    { name: 'Categories', path: '#', hasDropdown: true },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-background sticky top-0 z-50 w-full transition-colors duration-500">
      {/* Top Bar - Desktop Only */}
      <div className="hidden lg:block border-b border-border">
        <div className="max-w-[1440px] mx-auto px-12 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2 text-[11px] text-muted-foreground uppercase tracking-widest">
            <Gift className="w-3.5 h-3.5" />
            <span>Join the Social Club for exclusive Rewards</span>
          </div>
          
          <Link to="/" className="text-3xl font-serif font-black text-foreground hover:opacity-80 transition-opacity tracking-[0.3em] uppercase absolute left-1/2 -translate-x-1/2">
            Axels
          </Link>

          <div className="flex items-center space-x-5 text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors"><Twitter className="w-4 h-4" /></a>
            <a href="#" className="hover:text-foreground transition-colors"><Instagram className="w-4 h-4" /></a>
            <a href="#" className="hover:text-foreground transition-colors"><Facebook className="w-4 h-4" /></a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Mobile Logo */}
          <div className="lg:hidden">
            <Link to="/" className="text-2xl font-serif font-black text-foreground hover:opacity-80 transition-opacity tracking-widest uppercase">
              Axels
            </Link>
          </div>

          {/* Desktop Navbar Layout: Left (Phone) - Center (Links) - Right (Support) */}
          <div className="hidden lg:flex items-center justify-between w-full">
            {/* Left: Phone Number */}
            <div className="flex-1">
              <span className="text-[13px] font-bold text-foreground font-sans">( +233 ) 54 686 5035</span>
            </div>

            {/* Center: Nav Items */}
            <nav className="flex items-center space-x-10">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center space-x-1 text-[12px] uppercase tracking-[0.15em] font-bold transition-colors hover:text-primary ${
                    isActive(item.path) ? 'text-primary' : 'text-foreground/80'
                  }`}
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && <ChevronDown className="w-3 h-3" />}
                </Link>
              ))}
            </nav>

            {/* Right: Customer Support */}
            <div className="flex-1 text-right">
              <span className="text-[12px] text-muted-foreground uppercase tracking-widest font-medium cursor-pointer hover:text-foreground transition-colors">
                Customer Support
              </span>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center space-x-6">
            <button
              className="text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6 stroke-[1.5]" /> : <Menu className="w-6 h-6 stroke-[1.5]" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden py-8 border-t border-border animate-in fade-in slide-in-from-top-4 duration-300 absolute left-0 right-0 bg-background z-40 px-4 border-b">
            <div className="flex flex-col space-y-6 items-center">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm uppercase tracking-widest transition-colors hover:text-primary ${
                    isActive(item.path) ? 'text-primary' : 'text-foreground'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
