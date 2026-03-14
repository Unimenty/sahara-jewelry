
import { Link } from 'react-router-dom';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';

const FeaturedProducts = () => {
  // Pick top 4 products for the featured section
  const featured = products.slice(0, 4);

  return (
    <section className="border-b border-border bg-background transition-colors duration-500">
      <div className="flex flex-col items-center text-center py-20 px-8">
        <h2 className="text-4xl sm:text-5xl font-serif text-foreground mb-6">Featured Collections</h2>
        <div className="w-12 h-[1px] bg-[#C5A572] mb-8"></div> {/* Minimalist gold divider */}
      </div>

      {/* Responsive grid: 3 col on desktop */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.slice(0, 6).map((product) => (
            <Link
              key={product.id}
              to={`/shop/${product.id}`}
              className="group flex flex-col transition-all duration-300"
            >
              {/* Image with subtle border highlight on middle items potentially or just clean grid */}
              <div className="relative aspect-square overflow-hidden bg-[#FAF9F7] rounded-sm group-hover:shadow-md transition-all duration-500 px-12 py-12 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Product Info */}
              <div className="py-6 text-center">
                <h3 className="text-[15px] font-bold text-foreground mb-1 group-hover:text-[#C5A572] transition-colors">
                  {product.name}
                </h3>
                <span className="text-[13px] text-foreground/50 tracking-widest">${product.variants[0]?.price.toFixed(2)}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-12">
          <Link to="/shop">
            <Button
              variant="outline"
              className="border-border border rounded-none px-12 py-6 h-auto text-[11px] uppercase tracking-[0.2em] font-bold bg-transparent hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
            >
              View All Collections
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
