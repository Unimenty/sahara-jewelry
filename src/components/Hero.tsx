import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative w-full h-[95vh] md:h-screen bg-[#0f0f0f] overflow-hidden p-3 md:p-6">
      {/* Outer Rounded Frame */}
      <div className="absolute inset-3 md:inset-6 border border-white/10 rounded-[2rem] md:rounded-[3rem] z-20 pointer-events-none" />

      {/* Main Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.png"
          alt="Luxury Jewellery"
          className="w-full h-full object-cover opacity-60 grayscale-[40%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent opacity-80" />
      </div>

      {/* Hero Content Left */}
      <div className="absolute left-8 md:left-20 bottom-24 md:bottom-32 z-30 max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-[clamp(3.5rem,10vw,8rem)] font-serif font-light leading-[0.9] text-white mb-10 selection:bg-primary-foreground/30 uppercase tracking-tighter">
            Eternal<br />
            <span className="italic pl-4 md:pl-8 lowercase font-light">radiance</span>
          </h1>

          <div className="space-y-12 max-w-xs md:max-w-sm mt-10">
            <div className="space-y-4">
              <h2 className="text-sm md:text-md font-bold tracking-[0.3em] text-primary uppercase">The Gilded Legacy</h2>
              <p className="text-xs md:text-sm leading-relaxed text-white/50 font-light italic">
                "Adorn yourself in pieces that capture the silence of the dunes and the fire of the sun. Handcrafted for those who leave a legacy."
              </p>
            </div>

            <Link 
              to="/shop" 
              className="group inline-flex items-center gap-6 px-10 py-5 bg-white text-black text-[10px] font-black uppercase tracking-[0.4em] hover:bg-primary hover:text-black transition-all duration-700 rounded-full"
            >
              <span>Explore Collection</span>
              <div className="w-8 h-[1px] bg-black/20 group-hover:w-12 group-hover:bg-black transition-all duration-700" />
            </Link>
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;
