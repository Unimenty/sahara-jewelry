
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-[85vh] sm:h-[90vh] flex items-end justify-center overflow-hidden pb-12 sm:pb-24">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Fairine Enterprise Premium Home Care Products Ghana"
          className="w-full h-full object-cover object-center"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80&w=2000';
          }}
        />
        {/* Deep Bottom Gradient for Contrast */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-xl mx-auto text-center flex flex-col items-center">
          <h1 className="text-4xl sm:text-7xl font-black text-white mb-2 leading-tight tracking-tight drop-shadow-2xl">
            Effective Soaps & Cleaning Detergents
          </h1>

          <p className="text-sm sm:text-xl text-white/90 mb-8 max-w-md font-medium tracking-wide drop-shadow-lg">
            Shop high-performance liquid soaps and powerful cleaning detergents. Manufactured in Ghana for ultimate cleanliness.
          </p>

          <div className="flex flex-row items-center justify-center gap-3 w-full mb-8">
            <Link to="/shop" className="flex-1 sm:flex-none">
              <Button
                size="lg"
                className="w-full sm:w-36 h-10 gradient-warm text-white font-bold rounded-xl shadow-lg border-0 text-[13px] uppercase tracking-wide"
              >
                Shop Now
              </Button>
            </Link>

            <Link to="/about" className="flex-1 sm:flex-none">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-36 h-10 bg-white/5 border border-white/40 text-white hover:bg-white hover:text-black font-bold rounded-xl transition-all duration-300 text-[13px] uppercase tracking-wide"
              >
                Learn More
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
