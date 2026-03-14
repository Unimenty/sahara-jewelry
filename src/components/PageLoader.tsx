const PageLoader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background z-50">
      <div className="flex flex-col items-center gap-5">
        {/* Branded ring spinner */}
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 rounded-full border-2 border-[#C5A572]/20" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#C5A572] animate-spin" />
        </div>
        <span className="text-[10px] uppercase tracking-[0.35em] text-[#C5A572] font-medium">
          Loading
        </span>
      </div>
    </div>
  );
};

export default PageLoader;
