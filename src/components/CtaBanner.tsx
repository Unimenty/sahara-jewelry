import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CtaBanner = () => {
  return (
    <section className="relative w-full h-[500px] overflow-hidden flex items-center justify-center">
      {/* Mixed jewelry background */}
      <img
        src="/assets/wedding-bg.avif"
        alt="Wedding Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-background/30 transition-colors duration-500"></div>

      {/* Centered White Card */}
      <div className="relative z-10 bg-background p-12 md:p-16 max-w-[600px] text-center shadow-xl transition-colors duration-500">
        <p className="text-[11px] uppercase tracking-[0.3em] mb-6 text-muted-foreground font-bold">FAIRINE COLLECTION</p>
        <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight text-foreground uppercase">Watch Our Newest<br />Marketing Campaign</h2>
        <Link to="/shop">
          <Button
            variant="outline"
            className="border-none rounded-none px-12 py-5 h-auto text-[11px] uppercase tracking-[0.2em] font-bold bg-[#C5A572] text-white hover:bg-foreground hover:text-background transition-all duration-300"
          >
            WATCH NOW
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CtaBanner;
