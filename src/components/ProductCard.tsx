import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { useWishlist } from '@/context/WishlistContext';
import { cn, formatCurrency } from '@/lib/utils';
import { motion } from 'framer-motion';

export interface ProductType {
  id: number;
  name: string;
  category: string;
  image: string;
  variants: {
    price: number;
  }[];
}

interface ProductCardProps {
  product: ProductType;
  className?: string;
  index?: number;
}

const ProductCard = ({ product, className, index = 0 }: ProductCardProps) => {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const isWishlisted = isInWishlist(product.id.toString());
  const price = product.variants[0]?.price || 0;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: (index % 3) * 0.1 }}
      className={cn("group relative flex flex-col items-center", className)}
    >
      {/* Image Container - The Silk Cushion Frame */}
      <div className="relative aspect-[3/4] w-full flex items-center justify-center overflow-hidden rounded-[4rem] border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent shadow-inner transition-all duration-700 group-hover:border-primary/30 group-hover:shadow-[0_0_40px_rgba(var(--primary-rgb),0.1)] group-hover:bg-white/[0.05]">
        {/* The Depth Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/20 pointer-events-none opacity-50" />
        <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.3)] pointer-events-none" />

        <Link to={`/shop/${product.id}`} className="w-full h-full flex items-center justify-center p-10 md:p-14 lg:p-18 relative z-10">
          <img
            src={product.image}
            alt={product.name}
            className="max-w-full max-h-full object-contain grayscale-[20%] group-hover:grayscale-0 transition-all duration-[2500ms] ease-out group-hover:scale-110 drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)]"
            loading={index < 3 ? "eager" : "lazy"}
          />
        </Link>
        
        {/* Wishlist Button - Always visible on mobile, hover on desktop */}
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleWishlist(product.id.toString());
          }}
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          className="absolute top-8 right-8 p-3 z-20 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-700 bg-black/40 backdrop-blur-md rounded-full border border-white/10 hover:bg-white/10"
        >
          <Heart 
            className={cn(
              "w-4 h-4 transition-colors duration-300",
              isWishlisted ? "fill-primary text-primary" : "text-white/40"
            )} 
          />
        </button>
      </div>

      {/* Product Info - Visible on mobile, stealth reveal on desktop hover */}
      <div className="mt-8 flex flex-col items-center space-y-3 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-700 lg:translate-y-3 lg:group-hover:translate-y-0">
        <Link to={`/shop/${product.id}`}>
          <h3 className="text-[12px] font-sans uppercase tracking-[0.4em] text-white/80 font-medium text-center hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center gap-6">
           <span className="w-12 h-[1px] bg-white/5" />
           <span className="text-[18px] font-serif text-primary font-light tracking-[0.1em] italic">
             {formatCurrency(price)}
           </span>
           <span className="w-12 h-[1px] bg-white/5" />
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
