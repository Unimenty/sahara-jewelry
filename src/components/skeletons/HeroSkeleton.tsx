const HeroSkeleton = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 min-h-[120vh] sm:min-h-[85vh] overflow-hidden gap-2">
    {[0, 1].map((i) => (
      <div key={i} className="relative overflow-hidden bg-[#EAE8E4] min-h-[50vh] sm:min-h-full">
        <div
          className="absolute inset-0 animate-shimmer"
          style={{
            background: 'linear-gradient(90deg, #e5e2dc 0px, #f0ede7 40%, #e5e2dc 80%)',
            backgroundSize: '800px 100%',
          }}
        />
      </div>
    ))}
  </div>
);

export default HeroSkeleton;
