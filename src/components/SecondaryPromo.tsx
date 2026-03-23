import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const SecondaryPromo = () => {
  return (
    <section className="bg-white">
      {/* Container - py-20 provides the vertical spacing between this and other sections */}
      <div className="max-w-[1800px] mx-auto px-4 md:px-6 lg:px-2 py-20 pb-0 md:pb-2">

        {/* Main Grid: 1 column on mobile, 2 columns on desktop (medium screens up) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

          {/* Card Component 1: Luxe Abundance */}
          {/*
            md:flex-row: On desktop, we switch from vertical (text-top/image-bottom) to horizontal (text-left/image-right).
            md:items-center: Perfectly centers the text and image vertically on desktop.
            md:min-h-0 md:h-[380px]: On desktop, we use a fixed height to create the "horizontal bar" look.
          */}
          <div className="group relative flex flex-col md:flex-row md:items-center bg-secondary/20 overflow-hidden min-h-[550px] md:min-h-0 md:h-[450px] p-10 md:p-16 lg:p-24 transition-all duration-700">

            {/* Text Side */}
            <div className="z-10 max-w-[300px] md:flex-1">
              <p className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold mb-6">Limited Edition</p>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8 leading-tight">Luxe <span className="italic">Abundance</span></h3>
              <p className="text-[12px] uppercase tracking-[0.1em] text-muted-foreground mb-10 leading-relaxed font-medium">
                Privilege access with code: <span className="text-foreground">LUXE20</span>.
              </p>
              <Link to="/shop" className="flex items-center text-[10px] font-bold tracking-[0.3em] hover:text-primary transition-colors group/link pb-2 border-b border-border/40 hover:border-primary w-fit uppercase">
                Discover Collection
                <ArrowRight className="ml-3 w-4 h-4 transition-transform group-hover/link:translate-x-2" />
              </Link>
            </div>

            {/* Image Side */}
            <div className="absolute right-0 bottom-0 w-[80%] h-[55%] md:w-[60%] md:h-[130%] md:top-1/2 md:-translate-y-1/2 md:right-[-5%] transition-transform [transition-duration:2s] ease-out group-hover:scale-110 pointer-events-none">
              <img
                src="/assets/lp-mb.avif"
                alt="Luxe Abundance"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-contain object-right-bottom md:object-right"
              />
            </div>
          </div>

          {/* Card Component 2: Sparkle In Love */}
          <div className="group relative flex flex-col md:flex-row md:items-center bg-secondary/20 overflow-hidden min-h-[550px] md:min-h-0 md:h-[450px] p-10 md:p-16 lg:p-24 transition-all duration-700">
            <div className="z-10 max-w-[300px] md:flex-1">
              <p className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold mb-6">Engagement</p>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8 leading-tight">Sparkle <span className="italic">In Love</span></h3>
              <p className="text-[12px] uppercase tracking-[0.1em] text-muted-foreground mb-10 leading-relaxed font-medium">
                Handcrafted masterpieces for your eternal <span className="italic font-serif text-foreground">vows</span>.
              </p>
              <Link to="/shop" className="flex items-center text-[10px] font-bold tracking-[0.3em] hover:text-primary transition-colors group/link pb-2 border-b border-border/40 hover:border-primary w-fit uppercase">
                Explore Rings
                <ArrowRight className="ml-3 w-4 h-4 transition-transform group-hover/link:translate-x-2" />
              </Link>
            </div>

            <div className="absolute right-0 bottom-0 w-[80%] h-[55%] md:w-[60%] md:h-[130%] md:top-1/2 md:-translate-y-1/2 md:right-[-5%] transition-transform [transition-duration:2s] ease-out group-hover:scale-110 pointer-events-none">
              <img
                src="/assets/rp-mb.avif"
                alt="Sparkle In Love"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-contain object-right-bottom md:object-right"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SecondaryPromo;
