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
          <div className="group relative flex flex-col md:flex-row md:items-center bg-[#FAF9F7] overflow-hidden min-h-[550px] md:min-h-0 md:h-[380px] p-10 md:p-12 lg:p-16 transition-colors duration-500">

            {/* Text Side: md:flex-1 ensures it takes up equal space if needed, max-w limits it for narrow look */}
            <div className="z-10 max-w-[250px] md:flex-1">
              <h3 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">Luxe<br />Abundance</h3>
              <p className="text-[14px] text-muted-foreground mb-8 leading-relaxed font-medium">
                Get 20% off with our code: LUXE20.
              </p>
              <Link to="/shop" className="flex items-center text-[12px] font-bold tracking-widest hover:text-[#C5A572] transition-colors group/link pb-1 border-b border-transparent hover:border-[#C5A572] w-fit">
                VIEW FULL COLLECTION
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>

            {/* Image Side: md:absolute + right-[-10%] positions it perfectly on the right-hand side of the card */}
            <div className="absolute right-0 bottom-0 w-[80%] h-[55%] md:w-[60%] md:h-[120%] md:top-1/2 md:-translate-y-1/2 md:right-[-10%] transition-transform [transition-duration:1.5s] ease-out group-hover:scale-105 pointer-events-none">
              <img
                src="/assets/lp-mb.avif"
                alt="Luxe Abundance"
                loading="lazy"
                decoding="async"
                /* md:object-right: Ensures the image "cuts off" at the right edge predictably */
                className="w-full h-full object-contain object-right-bottom md:object-right"
              />
            </div>
          </div>

          {/* Card Component 2: Sparkle In Love (Mirrors Card 1 structure) */}
          <div className="group relative flex flex-col md:flex-row md:items-center bg-[#FAF9F7] overflow-hidden min-h-[550px] md:min-h-0 md:h-[380px] p-10 md:p-12 lg:p-16 transition-colors duration-500">
            <div className="z-10 max-w-[280px] md:flex-1">
              <h3 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">Sparkle<br />In Love</h3>
              <p className="text-[14px] text-muted-foreground mb-8 leading-relaxed font-medium">
                Make her say yes with our 50% off rings.
              </p>
              <Link to="/shop" className="flex items-center text-[12px] font-bold tracking-widest hover:text-[#C5A572] transition-colors group/link pb-1 border-b border-transparent hover:border-[#C5A572] w-fit">
                VIEW FULL COLLECTION
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>

            <div className="absolute right-0 bottom-0 w-[80%] h-[55%] md:w-[55%] md:h-[120%] md:top-1/2 md:-translate-y-1/2 md:right-[-15%] transition-transform [transition-duration:1.5s] ease-out group-hover:scale-105 pointer-events-none">
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
