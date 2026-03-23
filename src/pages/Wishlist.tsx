import { Link } from 'react-router-dom';
import { useWishlist } from '@/context/WishlistContext';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import SEO from '@/components/SEO';
import { Heart } from 'lucide-react';

const Wishlist = () => {
  const { wishlist } = useWishlist();

  const wishlistProducts = products.filter((product) => 
    wishlist.includes(product.id.toString())
  );

  return (
    <div className="bg-background min-h-screen pt-32">
      <SEO
        title="My Wishlist | Sahara Jewellery"
        description="Your curated list of favorite Sahara jewelry pieces."
        canonical="/wishlist"
      />

      <section className="py-20 px-8 text-center border-b border-white/5 bg-background relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-[0.02] whitespace-nowrap">
          <span className="text-[clamp(8rem,20vw,20rem)] font-serif font-black uppercase leading-none select-none text-center">
            WISHLIST
          </span>
        </div>
        <h1 className="text-5xl sm:text-7xl font-serif text-white mb-6 relative z-10 uppercase tracking-widest">Saved Pieces</h1>
        <p className="text-white/40 text-sm max-w-lg mx-auto relative z-10 font-light tracking-wide italic">
          {wishlist.length} {wishlist.length === 1 ? 'creation' : 'creations'} waiting for you.
        </p>
      </section>

      <section className="px-4 md:px-8 py-24">
        {wishlistProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {wishlistProducts.map((product) => (
              <ProductCard key={product.id} product={product as any} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-32 text-center">
            <div className="w-24 h-24 glass rounded-full flex items-center justify-center mb-10 blur-[1px] opacity-50">
              <Heart className="w-10 h-10 text-white/40" />
            </div>
            <h2 className="text-3xl font-serif text-white mb-6 italic uppercase tracking-tighter">Your collection is empty</h2>
            <p className="text-white/30 max-w-md mb-12 text-sm leading-relaxed">
              Begin your journey by saving the pieces that speak to your soul.
            </p>
            <Link to="/shop" className="button-sahara !after:hidden">
              Explore The Edit
            </Link>
          </div>
        )}
      </section>
    </div>
  );
};

export default Wishlist;
