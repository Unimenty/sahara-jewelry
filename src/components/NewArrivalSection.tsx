import { Link } from 'react-router-dom';
import { products } from '@/data/products';
import { formatCurrency } from '@/lib/utils';

const NewArrivalSection = () => {
  // Get new arrival products for the grid
  const gridProducts = products.filter(p => p.newArrival).slice(0, 4);

  return (
    <section className="bg-background transition-all duration-700">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

          {/* Left: 2x2 Grid */}
          <div className="flex-1">
            <div className="flex flex-col mb-16">
              <p className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold mb-4">Latest Additions</p>
              <h2 className="text-4xl sm:text-5xl font-serif italic">New Arrivals</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-16">
              {gridProducts.map((product) => (
                <Link key={product.id} to={`/shop/${product.id}`} className="group flex flex-col transition-all duration-500">
                  <div className="aspect-square bg-secondary/30 overflow-hidden flex items-center justify-center p-12 transition-all duration-700 group-hover:bg-secondary/50">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-contain transition-transform duration-1000 ease-out group-hover:scale-110"
                    />
                  </div>
                  <div className="pt-6 text-center lg:text-left">
                    <h3 className="text-[11px] uppercase tracking-[0.2em] font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{product.name}</h3>
                    <p className="text-[10px] text-muted-foreground tracking-[0.1em] italic font-medium">Available now for {formatCurrency(product.variants[0]?.price || 0)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Right: Tall Featured Card */}
          <div className="lg:w-[450px] shrink-0">
            <div className="relative h-full min-h-[600px] lg:min-h-[800px] overflow-hidden group">
              <img
                src="/assets/wedding collection.avif"
                alt="Wedding Collection"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform [transition-duration:3000ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-1000"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-12 md:p-16 text-white">
                <p className="text-[10px] uppercase tracking-[0.5em] mb-6 opacity-90 font-bold">Bridal Editorial</p>
                <h3 className="text-4xl md:text-5xl font-serif mb-10 leading-tight">The <span className="italic">Wedding</span><br />Collection</h3>
                <Link to="/shop" className="text-[10px] uppercase tracking-[0.4em] font-black border-b border-white/50 pb-2 hover:text-primary hover:border-primary transition-all duration-500 w-fit">
                  Shop The Collection
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NewArrivalSection;
