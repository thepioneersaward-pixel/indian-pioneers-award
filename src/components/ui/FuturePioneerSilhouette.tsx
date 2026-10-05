import React from 'react';
import Image from 'next/image';
import { NOMINATION_FORM_URL } from '@/config/constants';
import { Button } from './Button';

export function FuturePioneerSilhouette() {
  return (
    <div className="flex flex-col h-full">
      {/* The Silhouette Frame */}
      <div className="relative w-full aspect-[4/5] bg-ivory-dark/30 border border-gold/30 flex flex-col justify-between group overflow-hidden shadow-editorial transition-shadow duration-500 hover:shadow-editorial-hover">
        <Image
          src="/editorial-pioneers/future-pioneer-silhouette.jpg"
          alt="Future Pioneer Silhouette"
          fill
          className="object-cover opacity-90 transition-opacity duration-500 group-hover:opacity-100"
        />
        {/* Subtle Background Texture / Overlay */}
        <div className="absolute inset-0 bg-emerald/10 mix-blend-multiply opacity-50" />
        
        {/* Archival Numbering */}
        <div className="relative z-10 flex justify-between items-start w-full p-4">
          <div className="w-8 h-8 border-t border-l border-ink/40" />
          <span className="text-[10px] font-mono tracking-widest text-ink/80 bg-ivory/60 px-2 py-1 uppercase">
            File / Open
          </span>
        </div>

        {/* Bottom Framing */}
        <div className="relative z-10 flex justify-between items-end w-full p-4 mt-auto">
          <span className="text-[10px] uppercase tracking-widest text-ink/80 font-medium bg-ivory/60 px-2 py-1">
            Pending Record
          </span>
          <div className="w-8 h-8 border-b border-r border-ink/40" />
        </div>
        
      </div>
      
      {/* Signature Copy & CTA */}
      <div className="mt-8 flex flex-col items-start border-l border-emerald pl-6 ml-2">
        <h3 className="font-serif italic text-3xl text-ink mb-1">
          The Next Pioneer
        </h3>
        <p className="text-sm font-bold uppercase tracking-widest text-emerald mb-6">
          Could be you.
        </p>
        <Button variant="outline" href={NOMINATION_FORM_URL} className="text-xs px-6 py-3">
          Nominate a Pioneer →
        </Button>
      </div>
    </div>
  );
}
