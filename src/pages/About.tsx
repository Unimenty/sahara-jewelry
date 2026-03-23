import SEO from '@/components/SEO';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Gem, Sparkles, Diamond, ShieldCheck, ArrowRight } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Gem className="w-8 h-8" />,
      title: 'Celestial Materials',
      description: 'We exclusively use solid 14k and 18k gold, alongside ethically sourced lab-grown diamonds to ensure timeless quality.'
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Ethereal Design',
      description: 'Our designs are stripped back to their bare essentials, allowing the natural beauty of the materials to take center stage.'
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: 'Eternal Quality',
      description: 'Every piece is crafted to withstand the test of time, designed to be worn daily and passed down through generations.'
    },
    {
      icon: <Diamond className="w-8 h-8" />,
      title: 'Ethical Sourcing',
      description: 'We believe in full transparency, sourcing our metals and stones only from certified, conflict-free suppliers.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0f0f0f] transition-colors duration-500 pt-32 selection:bg-primary/20 text-white overflow-hidden">
      <SEO
        title="Our Story | Sahara Jewellery"
        description="Learn about the ethos behind Sahara Jewellery. Discover how we craft fine pieces inspired by the eternal desert sands."
        canonical="/about"
      />

      {/* Hero Section */}
      <section className="relative py-24 md:py-40 px-4 md:px-8 overflow-hidden border-b border-white/5">
         {/* Watermark Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-[0.02] whitespace-nowrap">
          <span className="text-[clamp(10rem,35vw,45rem)] font-serif font-black uppercase leading-none select-none text-center">
            SAHARA
          </span>
        </div>

        <div className="w-full text-center relative z-10">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] uppercase tracking-[0.5em] font-bold text-primary mb-8 block"
          >
            The Golden Legacy
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-8xl font-serif text-white mb-12 leading-[0.9] tracking-tighter"
          >
            Elegance in <br /><span className="italic font-light text-white/60">the Void</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-sm md:text-lg text-white/40 leading-loose max-w-2xl mx-auto italic font-medium"
          >
            "Sahara Jewellery was born from the silence of the dunes. We craft pieces that capture the essence of the sun and the mystery of the night."
          </motion.p>
        </div>
      </section>

      {/* Story Section 1 - Left Image / Right Text */}
      <section className="py-24 md:py-40 border-b border-white/5 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Framed Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative p-4 md:p-8 border border-white/10 rounded-[2.5rem] bg-white/[0.02]"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
               <img 
                 src="/images/626225491_18094095046993200_4518461093042136390.jpg" 
                 alt="Sahara Craftsmanship"
                 className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-[2000ms]"
               />
            </div>
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-primary rounded-tl-[2.5rem]" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-primary rounded-br-[2.5rem]" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight uppercase">
              The <span className="italic font-light text-primary">Genesis</span> of Sahara
            </h2>
            <div className="space-y-8 text-white/50 text-sm md:text-base leading-loose font-medium italic">
              <p>
                Our journey began where the earth meets the sky. Sahara Jewellery is an invitation to explore the raw beauty of minimalist design combined with the opulence of solid gold.
              </p>
              <p>
                We believe that every piece should tell a story of endurance. Like the desert itself, our jewellery is constant, timeless, and designed to withstand the elements of passing trends.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story Section 2 - Right Image / Left Text */}
      <section className="py-24 md:py-40 border-b border-white/5 px-4 md:px-8 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12 order-2 lg:order-1"
          >
            <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight uppercase">
              Artisanal <span className="italic font-light text-primary">Mastery</span>
            </h2>
            <div className="space-y-8 text-white/50 text-sm md:text-base leading-loose font-medium italic">
              <p>
                Every piece in our collection is meticulously crafted by master artisans who have spent lifetimes perfecting their trade. 
              </p>
              <p>
                Using century-old techniques combined with modern precision, we forge gold that mirrors the fluid motion of moving sands, creating heirlooms that transcend generations.
              </p>
            </div>
          </motion.div>

          {/* Framed Image */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative p-4 md:p-8 border border-white/10 rounded-[2.5rem] bg-white/[0.02] order-1 lg:order-2"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
               <img 
                 src="/images/626002635_18094236445993200_8617505119815774671.jpg" 
                 alt="Artisanal Mastery"
                 className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-[2000ms]"
               />
            </div>
            {/* Corner Accents */}
            <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-primary rounded-tr-[2.5rem]" />
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-primary rounded-bl-[2.5rem]" />
          </motion.div>
        </div>
      </section>

      {/* Story Section 3 - Left Image / Right Text (Materials Focus) */}
      <section className="py-24 md:py-40 border-b border-white/5 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Framed Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative p-4 md:p-8 border border-white/10 rounded-[2.5rem] bg-white/[0.02]"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
               <img 
                 src="/images/641467959_18096917182993200_5153935394528728463.jpg" 
                 alt="The Sahara Palette"
                 className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-[2000ms]"
               />
            </div>
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-primary rounded-tl-[2.5rem]" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-primary rounded-br-[2.5rem]" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight uppercase">
              The Sahara <span className="italic font-light text-primary">Palette</span>
            </h2>
            <div className="space-y-8 text-white/50 text-sm md:text-base leading-loose font-medium italic">
              <p>
                We believe in the power of pure materials. Our palette is restricted to the highest quality 18k gold and ethically sourced diamonds, allowing the natural radiance of the desert sun to be mirrored in every piece.
              </p>
              <p>
                No compromise is made in the selection of our stones. Each diamond is hand-picked for its clarity and fire, ensuring that your jewellery sparkles with an eternal light.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 md:py-40 bg-[#0d0d0d] px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-24">
             <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary mb-6 block">Our Essence</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-4 italic leading-tight uppercase tracking-widest">Sahara Values</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-12 md:p-16 glass rounded-[2rem] hover:bg-white/[0.08] transition-all duration-700 flex flex-col items-center text-center border border-white/5"
              >
                <div className="mb-10 text-primary/60 transition-transform duration-700 group-hover:scale-110">
                  {value.icon}
                </div>
                <h3 className="font-serif text-white mb-6 text-xl tracking-tight uppercase font-bold">{value.title}</h3>
                <p className="text-xs text-white/40 leading-loose italic font-medium">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-32 bg-white/[0.02] text-center px-4 md:px-8 border-t border-white/5">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto space-y-12"
        >
          <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight uppercase">
            Begin Your <span className="italic font-light text-primary">Journey</span>
          </h2>
          <p className="text-white/40 text-sm md:text-base leading-loose italic">
            Explore our curated collections and find the piece that resonates with your spirit.
          </p>
          <Link to="/shop" className="button-sahara mx-auto group">
            <span>Shop The Edit</span>
            <ArrowRight className="w-4 h-4 translate-y-[1px] group-hover:translate-x-3 transition-transform duration-500" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
