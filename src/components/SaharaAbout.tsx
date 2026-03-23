import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const SaharaAbout = () => {
  return (
    <section className="relative h-full flex items-center py-12 md:py-24 px-6 md:px-12 bg-[#0f0f0f] text-white">
      {/* Background Subtle Sand Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay">
        <img src="https://images.unsplash.com/photo-1509316785289-025f54846b4e?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="" />
      </div>

      <div className="absolute top-1/2 right-0 -translate-y-1/2 -z-10 opacity-[0.02]">
        <span className="text-[clamp(10rem,35vw,45rem)] font-serif font-black uppercase leading-none select-none tracking-[-0.05em]">
          DESERT
        </span>
      </div>

      <div className="max-w-full px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-24 items-center">
        {/* Right: Portrait Image (Positioned first on mobile) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="lg:col-span-5 relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-white/5 order-1 lg:order-2"
        >
          <img 
            src="/images/626002635_18094236445993200_8617505119815774671.jpg" 
            alt="Sahara Muse" 
            className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-[2000ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f]/60 to-transparent" />
        </motion.div>

        {/* Left: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="lg:col-span-7 flex flex-col items-start order-2 lg:order-1"
        >
          <h3 className="text-primary text-[10px] tracking-[0.6em] font-bold uppercase mb-8 ml-1">THE HERITAGE</h3>
          <h2 className="text-[clamp(2.8rem,7vw,5.5rem)] font-serif font-light leading-[1.05] mb-12 selection:bg-primary/30 uppercase tracking-tighter">
            Handcrafted <br /> 
            in the <span className="italic font-light">Infinite</span> Sands.
          </h2>
          <div className="space-y-8 text-sm md:text-md text-white/50 leading-loose font-sans font-light max-w-lg">
            <p>
              Sahara was born from the golden dunes and eternal horizons. Every piece carries the warmth of the sun and the mystery of the starlit desert night.
            </p>
            <p>
              Our artisans use century-old techniques to forge gold that mirrors the fluid motion of moving sands, creating heirlooms that transcend time.
            </p>
          </div>
          <div className="mt-16 w-full md:w-auto">
            <Link to="/about" className="button-sahara group w-full md:w-auto">
              <span>EXPLORE OUR ROOTS</span>
              <ArrowRight className="w-4 h-4 translate-y-[1px] group-hover:translate-x-3 transition-transform duration-500" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SaharaAbout;
