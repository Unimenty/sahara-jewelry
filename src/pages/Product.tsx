import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { toast } from "sonner";
import SEO from "@/components/SEO";
import { ShoppingCart, ArrowLeft, Heart } from "lucide-react";

const Product = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id.toString() === id);
  const { addToCart, setDrawerOpen } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const [selectedVolume, setSelectedVolume] = useState(product?.variants?.[0]?.volume || "Standard");

  if (!product) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-background text-foreground pt-32">
        <h1 className="text-4xl font-serif mb-4 italic">Product Not Found</h1>
        <Link to="/shop" className="text-xs uppercase tracking-widest border-b border-foreground pb-1 hover:text-primary transition-colors">
          Return to Shop
        </Link>
      </div>
    );
  }

  const isWishlisted = isInWishlist(product.id.toString());
  const currentVariant = product.variants?.find((v) => v.volume === selectedVolume) || (product.variants?.[0] as any) || { price: 150 };

  const handleAddToCart = () => {
    addToCart({
      id: product.id.toString(),
      name: product.name,
      image: currentVariant.image || product.image,
      price: currentVariant.price,
      quantity: 1,
      variant: {
        volume: selectedVolume,
        packSize: 1,
      },
    });

    toast.success("Added to cart", {
      description: `1x ${product.name}`,
    });

    setDrawerOpen(true);
  };

  return (
    <div className="bg-background min-h-screen pt-32">
      <SEO
        title={`${product.name} | Sahara Fine Jewellery`}
        description={product.description}
        canonical={`/shop/${product.id}`}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-80px)]">
        {/* Left Side: Product Image (Sticky on Desktop) */}
        <div className="relative bg-secondary/10 flex items-center justify-center p-8 sm:p-20 overflow-hidden">
          {/* Background Text Watermark */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-[0.03] whitespace-nowrap">
            <span className="text-[clamp(10rem,25vw,30rem)] font-serif font-black uppercase leading-none select-none">
              {product.category}
            </span>
          </div>

          <div className="md:sticky md:top-[120px] w-full h-full flex items-center justify-center">
            <img
              src={currentVariant.image || product.image}
              alt={product.name}
              className="max-w-full max-h-full object-contain scale-90 md:scale-100 hover:scale-110 transition-transform duration-1000"
            />
          </div>
        </div>

        {/* Right Side: Product Info */}
        <div className="p-8 sm:p-16 lg:p-24 flex flex-col justify-center bg-background border-l border-border/10">
          <Link to="/shop" className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] font-bold text-muted-foreground hover:text-primary transition-colors mb-16">
            <ArrowLeft className="w-3 h-3" /> Back to Collection
          </Link>

          <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-primary mb-6 block">
            {product.category}
          </span>

          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-serif text-foreground mb-8 tracking-tighter leading-[0.9]">
            {product.name}
          </h1>

          <p className="text-3xl text-foreground/90 mb-16 font-serif italic">
            GH₵{currentVariant.price.toFixed(2)}
          </p>

          <div className="prose prose-sm text-muted-foreground mb-16 max-w-lg leading-loose text-sm italic font-medium">
            <p>{product.description}</p>
          </div>

          <div className="space-y-10 mb-20">
            <div>
              <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold mb-6 text-foreground/70">Select Option</h3>
              <div className="flex flex-wrap gap-4">
                {product.variants?.map((v) => (
                  <button
                    key={v.volume}
                    onClick={() => setSelectedVolume(v.volume)}
                    className={`px-10 py-4 text-[10px] uppercase tracking-[0.2em] font-bold border transition-all duration-500 ${selectedVolume === v.volume
                        ? "border-primary bg-primary text-primary-foreground scale-105"
                        : "border-border/40 text-foreground hover:border-foreground"
                      }`}
                  >
                    {v.volume}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6">
            <button
              onClick={handleAddToCart}
              className="button-sahara flex-1 py-6 !after:hidden"
            >
              Add to Cart <ShoppingCart className="w-4 h-4 ml-2" />
            </button>

            <button
              onClick={() => toggleWishlist(product.id.toString())}
              className={`p-6 border transition-all duration-500 group ${isWishlisted
                  ? "border-primary text-primary bg-primary/5"
                  : "border-border/40 text-foreground hover:border-primary"
                }`}
            >
              <Heart className={`w-6 h-6 group-hover:scale-110 transition-transform ${isWishlisted ? "fill-current" : ""}`} />
            </button>
          </div>

          <div className="mt-24 pt-10 border-t border-border/10">
            <div className="grid grid-cols-2 gap-12 text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
              <div className="flex flex-col gap-2">
                <span className="text-foreground">Celestial Shipping</span>
                Complimentary worldwide delivery.
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-foreground">Ethereal Returns</span>
                30-day graceful return window.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
