import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const MiddleBanner = () => {
  return (
    <section className="relative w-full h-[600px] overflow-hidden">
      {/* Background Image */}
      <img
        src="/assets/minimal.avif"
        alt="Minimalist Jewellery"
        className="w-full h-full object-cover"
      />

      {/* Absolute Card */}
      <div className="absolute top-1/2 -translate-y-1/2 right-10 md:right-20 lg:right-32 bg-background/95 backdrop-blur-sm p-10 md:p-16 max-w-[450px] shadow-2xl transition-colors duration-500">
        <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight text-foreground">Minimalist<br />Jewellery</h2>
        <p className="text-[12px] text-muted-foreground tracking-[0.2em] uppercase font-medium mb-10 leading-relaxed">
          Designed for your daily elegance. Simplicity that speaks volumes about your style.
        </p>
        <Link to="/shop">
          <Button
            variant="outline"
            className="border-foreground border rounded-none px-12 py-5 h-auto text-[11px] uppercase tracking-[0.2em] font-bold bg-transparent hover:bg-foreground hover:text-background transition-all duration-300"
          >
            Shop Now
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default MiddleBanner;
