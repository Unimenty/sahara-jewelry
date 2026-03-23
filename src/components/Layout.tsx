import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from './Footer';
import CartDrawer from './CartDrawer';
import Header from './Header';
import SmoothScroll from './SmoothScroll';
import { motion, AnimatePresence } from 'framer-motion';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const showFooter = location.pathname !== '/contact';

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-background flex flex-col relative font-sans text-foreground">
        <Header />
        <AnimatePresence mode="wait">
          <motion.main
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
            className="flex-grow w-full min-h-screen flex flex-col pb-28 md:pb-0"
          >
            {children}
          </motion.main>
        </AnimatePresence>
        {showFooter && <Footer />}
        <CartDrawer />
      </div>
    </SmoothScroll>
  );
};

export default Layout;
