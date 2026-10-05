import React from 'react';

export function PioneerFilters() {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between border-b border-ink/10 pb-8 mb-16 gap-6">
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 w-full md:w-auto">
        <span className="text-xs font-bold tracking-widest uppercase text-ink/40">Filters:</span>
        <button className="text-xs font-bold tracking-widest uppercase text-ink hover:text-emerald transition-colors text-left">
          Category / All
        </button>
        <button className="text-xs font-bold tracking-widest uppercase text-ink hover:text-emerald transition-colors text-left">
          Year / All
        </button>
      </div>
      <div className="w-full md:w-64">
        <input 
          type="text" 
          placeholder="SEARCH PIONEERS..." 
          className="w-full bg-transparent border-b border-ink/20 py-2 text-xs font-mono tracking-widest text-ink placeholder:text-ink/30 focus:outline-none focus:border-emerald transition-colors"
          disabled
        />
      </div>
    </div>
  );
}
