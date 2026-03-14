import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from './Footer';
import CartDrawer from './CartDrawer';

import Header from './Header';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const showFooter = location.pathname !== '/contact';

  return (
    <div className="min-h-screen bg-background flex flex-col relative font-sans text-foreground">
      <Header />
      {/* Centered framed container — matches the Axels bordered-column layout */}
      <main className="flex-grow max-w-[1440px] mx-auto w-full border-x border-border min-h-screen flex flex-col px-4 md:px-8 lg:px-12">
        {children}
      </main>
      {showFooter && <Footer />}
      <CartDrawer />
    </div>
  );
};

export default Layout;
