import { motion } from 'framer-motion';

const images = [
  {
    url: "/images/627130878_18094824343993200_2784603675184837974.jpg",
    title: "Celestial Sands",
    size: "large"
  },
  {
    url: "/images/629479833_18094824916993200_4050992156307554466.jpg",
    title: "Desert Morning",
    size: "small"
  },
  {
    url: "/images/630372689_18094836247993200_1074244741603373241.jpg",
    title: "Golden Hour",
    size: "medium"
  },
  {
    url: "/images/634227826_18095294266993200_6946412695698815738.jpg",
    title: "Infinite Horizon",
    size: "small"
  },
  {
    url: "/images/642449480_18096634726993200_199973958998219676.jpg",
    title: "Eternal Legacy",
    size: "medium"
  }
];

const Lookbook = () => {
  return (
    <section className="relative py-24 md:py-40 bg-[#0f0f0f] overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 opacity-[0.02] whitespace-nowrap">
        <span className="text-[clamp(10rem,30vw,40rem)] font-serif font-black uppercase leading-none select-none tracking-tighter">
          LOOKBOOK
        </span>
      </div>

      <div className="max-w-full px-4 md:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-24">
          <h3 className="text-primary text-[10px] tracking-[0.6em] font-bold uppercase mb-6">ATMOSPHERE</h3>
          <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-serif font-light text-white leading-tight uppercase tracking-widest">
            The <span className="italic">Sahara</span> Muse
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: idx * 0.1 }}
              className={`relative overflow-hidden rounded-[2rem] group border border-white/5 shadow-2xl ${img.size === 'large' ? 'col-span-2 row-span-2 aspect-square md:aspect-auto' :
                  img.size === 'medium' ? 'col-span-2 aspect-video' : 'aspect-square'
                }`}
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[2000ms] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-8 md:p-12">
                <span className="text-primary text-[10px] tracking-[0.4em] font-bold uppercase mb-2">{img.title}</span>
                <p className="text-white/60 text-xs italic font-serif">Edition 2026</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Lookbook;
