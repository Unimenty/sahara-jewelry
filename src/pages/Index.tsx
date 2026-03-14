import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import SecondaryPromo from '@/components/SecondaryPromo';
import FeaturedProducts from '@/components/FeaturedProducts';
import MiddleBanner from '@/components/MiddleBanner';
import NewArrivalSection from '@/components/NewArrivalSection';
import CtaBanner from '@/components/CtaBanner';
import FAQ from '@/components/FAQ';
import LogoStrip from '@/components/LogoStrip';

const Index = () => {
  return (
    <div className="bg-background flex flex-col">
      <SEO
        title="Axels Jewelry | Minimalist Elegance"
        description="Discover our luxurious collection of minimalist rings, necklaces, and earrings."
        canonical="/"
      />

      <Hero />
      <Features />
      <SecondaryPromo />
      <FeaturedProducts />
      <MiddleBanner />
      <NewArrivalSection />
      <CtaBanner />
      <FAQ />
      <LogoStrip />

      {/* Brand Ethos Strip */}
      <section className="py-32 px-8 text-center max-w-4xl mx-auto flex flex-col items-center border-t border-border">
        <span className="text-[#C5A572] text-3xl mb-8 animate-pulse">✦</span>
        <h2 className="text-3xl sm:text-5xl font-serif italic leading-[1.3] mb-12 text-foreground">
          "We believe jewelry should be an extension of your spirit. Minimalist design, maximum impact."
        </h2>
        <Link to="/about" className="group flex flex-col items-center">
          <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-muted-foreground group-hover:text-primary transition-colors">
            Our Heritage
          </span>
          <div className="w-10 h-[1px] bg-border mt-2 group-hover:w-20 group-hover:bg-primary transition-all duration-500"></div>
        </Link>
      </section>
    </div>
  );
};

export default Index;
