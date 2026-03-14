import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import HeroSkeleton from '@/components/skeletons/HeroSkeleton';
import PageTransition from '@/components/PageTransition';

const Hero = () => {
  // Track load state for both hero images
  const [leftLoaded, setLeftLoaded] = useState(false);
  const [rightLoaded, setRightLoaded] = useState(false);
  const bothLoaded = leftLoaded && rightLoaded;

  return (
    <PageTransition>
      {/* Show shimmer skeleton until both images are ready */}
      {!bothLoaded && (
        <div className="absolute inset-0 z-10 pointer-events-none">
          <HeroSkeleton />
        </div>
      )}

      <section className="grid grid-cols-1 sm:grid-cols-2 min-h-[120vh] sm:min-h-[85vh] overflow-hidden gap-2 transition-colors duration-500">
        {/* Left Panel */}
        <div className="relative flex flex-col justify-center p-8 sm:p-12 md:p-16 sm:aspect-auto sm:min-h-full group overflow-hidden">
          <div className="absolute inset-0 bg-[#FAF9F7] transition-colors duration-500">
            <img
              src="/assets/lp.avif"
              alt="New Arrivals"
              loading="eager"
              decoding="async"
              onLoad={() => setLeftLoaded(true)}
              className={`w-full h-full object-cover group-hover:scale-105 transition-all duration-1000 ${bothLoaded ? 'opacity-100' : 'opacity-0'}`}
            />
          </div>

          <div className="relative z-10 text-white text-center">
            <p className="text-[11px] uppercase tracking-[0.3em] mb-4 font-medium opacity-90">
              Trends For You
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-serif mb-8 leading-[1.1] tracking-tight">
              Discover Your<br />Perfect Style
            </h2>
            <Link to="/shop">
              <Button
                variant="outline"
                className="border-white border text-white rounded-none px-10 py-6 h-auto text-[11px] uppercase tracking-[0.2em] font-semibold bg-transparent hover:bg-white hover:text-black transition-colors"
              >
                Shop Now
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Panel */}
        <div className="relative flex flex-col justify-center items-start p-9 sm:p-12 md:p-16 px-10 md:px-16 sm:aspect-auto sm:min-h-full group overflow-hidden">
          <div className="absolute inset-0 bg-muted">
            <img
              src="/assets/rp.avif"
              alt="Golden Memory"
              loading="eager"
              decoding="async"
              onLoad={() => setRightLoaded(true)}
              className={`w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-1000 ${bothLoaded ? 'opacity-100' : 'opacity-0'}`}
            />
          </div>

          <div className="relative z-10 text-foreground transition-colors duration-500">
            <p className="text-[12px] uppercase text-left tracking-widest mb-4 font-medium opacity-80">
              For Her
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif mb-8 leading-[0.9] tracking-tight">
              Golden<br />Memory
            </h2>
            <p className="text-[13px] tracking-widest mb-10 font-medium opacity-80 max-w-[200px] md:max-w-[320px] leading-loose">
              Indulge in the opulence of Golden Memory, a mesmerizing jewelry collection fit for a queen.
            </p>
            <Link to="/shop">
              <Button
                variant="outline"
                className="border-foreground border text-foreground rounded-none px-8 py-4 h-auto text-[11px] uppercase tracking-[0.2em] font-bold bg-transparent hover:bg-foreground hover:text-background transition-colors"
              >
                Shop Collection
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Hero;
