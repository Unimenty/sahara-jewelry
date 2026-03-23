import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const categories = [
  { name: 'RINGS', image: '/images/641257660_18096118768993200_8221634173007991919.jpg' },
  { name: 'EARRINGS', image: '/images/642435716_18096461317993200_4736316493739969355.jpg' },
  { name: 'NECKLACES', image: '/images/642995249_18096834997993200_1091871295119858361.jpg' },
  { name: 'BRACELETS', image: '/images/652108194_18098256358993200_4482372003228249062.jpg' },
];

const SaharaCategories = () => {
  return (
    <section className="relative py-32 md:py-48 bg-background overflow-hidden">
      {/* Decorative background text */}
      <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 opacity-[0.02] pointer-events-none select-none">
        <span className="text-[20vw] font-serif font-black uppercase leading-none tracking-tighter whitespace-nowrap block text-center">
          Collections
        </span>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="flex flex-col items-center text-center mb-24 gap-8">
          <div className="max-w-2xl">
            <h3 className="text-primary text-[10px] tracking-[0.6em] font-bold uppercase mb-6">Discovery</h3>
            <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-serif font-light text-white leading-[1.1] uppercase tracking-tighter">
              Explore The <span className="italic">Atelier</span><br />
              <span className="text-white/40">Curated Categories</span>
            </h2>
          </div>
          <Link to="/shop" className="group flex items-center gap-4 text-[10px] tracking-[0.4em] font-black uppercase text-white/50 hover:text-primary transition-colors">
            View All <span className="w-12 h-[1px] bg-white/20 group-hover:bg-primary group-hover:w-16 transition-all duration-500" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link
                to={`/shop?category=${cat.name}`}
                className="relative flex flex-col items-center"
              >
                {/* The Arch Container */}
                <div className="relative w-full aspect-[4/5] md:aspect-[1/2] overflow-hidden rounded-t-full border border-white/5 bg-secondary/10 transition-all duration-1000 group-hover:border-primary/40 group-hover:shadow-[0_-20px_50px_rgba(var(--primary-rgb),0.1)]">
                  {/* Subtle Inner Glow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="absolute inset-0 w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[2000ms] ease-out-expo"
                  />

                  {/* Overlay for better text contrast on hover */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>

                {/* Category Identity */}
                <div className="mt-10 flex flex-col items-center">
                  <h4 className="text-[12px] tracking-[0.5em] font-bold text-white group-hover:text-primary transition-all duration-500 uppercase">
                    {cat.name}
                  </h4>
                  <div className="mt-4 w-0 h-[1px] bg-primary group-hover:w-12 transition-all duration-700" />
                  <span className="mt-4 text-[9px] font-sans tracking-[0.3em] font-medium text-white/30 uppercase opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    Explore Pieces
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SaharaCategories;
