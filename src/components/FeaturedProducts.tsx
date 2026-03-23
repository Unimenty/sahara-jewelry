import { Link } from 'react-router-dom';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { ArrowRight } from 'lucide-react';

const FeaturedProducts = () => {
  // Filter featured products and pick top 6
  const featured = products.filter(p => p.featured).slice(0, 6);

  return (
    <section className="relative h-full flex flex-col justify-center bg-[#0d0d0d] py-20 px-4 md:px-8 overflow-hidden border-t border-white/5">
      {/* Watermark Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-[0.02] whitespace-nowrap">
        <span className="text-[clamp(8rem,25vw,35rem)] font-serif font-black uppercase leading-none select-none text-center tracking-tighter text-white">
          THE SAHARA<br/>EDIT
        </span>
      </div>

      <div className="max-w-full w-full relative z-10 px-4 md:px-12 lg:px-24">
        <div className="mb-24 text-center">
          <h3 className="text-primary text-[10px] tracking-[0.6em] font-bold uppercase mb-6">FEATURED</h3>
          <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-serif font-light text-white leading-tight uppercase tracking-widest">
            Our Most <span className="italic font-light">Desired</span> Pieces
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 md:gap-x-16 lg:gap-x-24 gap-y-20 md:gap-y-32">
          {featured.map((product, idx) => (
             <ProductCard key={product.id} product={product} index={idx} />
          ))}
        </div>

        <div className="flex justify-center mt-32">
          <Link to="/shop" className="button-sahara group">
            <span>DISCOVER ALL COLLECTIONS</span>
            <ArrowRight className="w-4 h-4 translate-y-[1px] group-hover:translate-x-3 transition-transform duration-500" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
