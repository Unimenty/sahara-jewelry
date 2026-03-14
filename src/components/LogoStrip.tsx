const LogoStrip = () => {
  return (
    <section className="bg-white border-y border-border">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-16">
        <div className="flex flex-wrap items-center justify-between gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
          <span className="font-serif text-2xl font-bold tracking-tighter">Bvlgari</span>
          <span className="font-serif text-2xl font-bold italic tracking-wider italic">Cartier</span>
          <span className="font-serif text-3xl font-bold uppercase tracking-[0.3em]">CHEL</span>
          <span className="font-serif text-2xl font-bold uppercase border-2 border-black px-2">Rolex</span>
          <span className="font-serif text-2xl font-bold uppercase tracking-tight">VCA</span>
          <span className="font-serif text-2xl font-bold italic font-sans italic">Tiffany</span>
        </div>
      </div>
    </section>
  );
};

export default LogoStrip;
