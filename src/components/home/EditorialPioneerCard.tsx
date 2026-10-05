import React from 'react';
import Image from 'next/image';
import { EditorialPioneer } from '@/types/editorial';

interface Props {
  pioneer: EditorialPioneer;
  index: number;
}

export function EditorialPioneerCard({ pioneer, index }: Props) {
  const formattedIndex = String(index + 1).padStart(2, '0');

  return (
    <article className="flex flex-col h-full bg-ivory group border border-transparent hover:border-ink/10 transition-colors duration-500 p-4 -m-4">
      
      {/* Top Metadata */}
      <div className="flex items-center justify-between border-b border-ink/10 pb-4 mb-6">
        <span className="text-[10px] font-mono tracking-widest text-ink/40 uppercase">
          REF / {pioneer.id.split('-')[1]}
        </span>
        <span className="text-xs font-bold tracking-widest text-gold uppercase">
          {formattedIndex} — {pioneer.theme}
        </span>
      </div>
      
      {/* Editorial Image Framework */}
      <div className="relative w-full aspect-[4/5] bg-ink/5 mb-8 overflow-hidden shadow-sm">
        {pioneer.image ? (
          <Image
            src={pioneer.image}
            alt={pioneer.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <>
            {/* Abstract framing lines for Placeholder */}
            <div className="absolute inset-4 border border-ink/10" />
            <div className="absolute inset-0 flex items-center justify-center p-8 text-center text-ink/30 transition-all duration-700 group-hover:scale-105">
              <span className="text-[10px] uppercase tracking-widest font-medium">
                Editorial Plate {formattedIndex}
              </span>
            </div>
          </>
        )}
      </div>
      
      {/* Content */}
      <div className="flex flex-col flex-1">
        <h3 className="font-serif text-2xl lg:text-3xl text-ink mb-2 group-hover:text-emerald transition-colors duration-300">
          {pioneer.name}
        </h3>
        <p className="text-xs uppercase tracking-widest text-ink/60 font-semibold mb-6">
          {pioneer.domain}
        </p>
        <p className="text-sm text-ink/80 leading-relaxed font-medium">
          {pioneer.description}
        </p>
      </div>

    </article>
  );
}
