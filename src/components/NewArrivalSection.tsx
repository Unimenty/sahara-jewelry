import { Link } from 'react-router-dom';
import { products } from '@/data/products';

const NewArrivalSection = () => {
  // Get 4 products for the grid
  const gridProducts = products.slice(2, 6);

  return (
    <section className="bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-20">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* Left: 2x2 Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-baseline mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif">New Arrival</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {gridProducts.map((product) => (
                <Link key={product.id} to={`/shop/${product.id}`} className="group group-hover:shadow-sm transition-all duration-500">
                  <div className="aspect-square bg-[#FAF9F7] overflow-hidden rounded-sm mb-4 flex items-center justify-center p-12 transition-colors duration-500">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-[13px] font-bold text-foreground mb-1 font-sans">{product.name}</h3>
                    <p className="text-[11px] text-muted-foreground tracking-widest uppercase">${product.variants[0]?.price.toFixed(2)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Right: Tall Featured Card */}
          <div className="lg:w-[400px] shrink-0">
            <div className="relative h-full min-h-[600px] overflow-hidden group">
              <img
                src="/assets/wedding collection.avif"
                alt="Wedding Collection"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform [transition-duration:2000ms] group-hover:scale-110"
              />
              <div className="absolute inset-x-0 bottom-0 p-12 bg-gradient-to-t from-black/80 to-transparent text-white">
                <p className="text-[11px] uppercase tracking-[0.3em] mb-4 opacity-80">FOR THE BRIDE</p>
                <h3 className="text-4xl font-serif mb-8 leading-tight">Wedding<br />Collection</h3>
                <Link to="/shop" className="text-[11px] uppercase tracking-widest font-bold border-b border-white pb-1 hover:text-[#C5A572] hover:border-[#C5A572] transition-colors">
                  SHOP NOW
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
