const ProductCardSkeleton = () => (
  <div className="flex flex-col animate-pulse">
    {/* Image area */}
    <div className="relative aspect-square overflow-hidden bg-[#F2F0ED] rounded-sm">
      <div
        className="absolute inset-0 animate-shimmer"
        style={{
          background: 'linear-gradient(90deg, #f0ede8 0px, #faf8f5 40%, #f0ede8 80%)',
          backgroundSize: '800px 100%',
        }}
      />
    </div>
    {/* Text lines */}
    <div className="py-6 flex flex-col items-center gap-2">
      <div className="h-3 w-32 rounded bg-[#EDEAE6] animate-shimmer"
        style={{
          background: 'linear-gradient(90deg, #edeae6 0px, #f5f3f0 40%, #edeae6 80%)',
          backgroundSize: '800px 100%',
        }}
      />
      <div className="h-2.5 w-20 rounded bg-[#EDEAE6] animate-shimmer"
        style={{
          background: 'linear-gradient(90deg, #edeae6 0px, #f5f3f0 40%, #edeae6 80%)',
          backgroundSize: '800px 100%',
        }}
      />
    </div>
  </div>
);

export default ProductCardSkeleton;
