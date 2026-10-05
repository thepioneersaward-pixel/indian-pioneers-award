import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Pioneer } from '@/types/pioneer';

interface PioneerCardProps {
  pioneer: Pioneer;
}

export function PioneerCard({ pioneer }: PioneerCardProps) {
  return (
    <Link href={`/pioneers/${pioneer.slug}`} className="flex flex-col group cursor-pointer h-full">
      <div className="relative w-full aspect-[4/5] bg-ivory-dark/30 border border-ink/10 mb-6 overflow-hidden shadow-editorial transition-shadow duration-500 group-hover:shadow-editorial-hover">
        {pioneer.portrait && (
          <Image
            src={pioneer.portrait}
            alt={pioneer.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        )}
      </div>
      <div className="flex flex-col flex-1">
        <span className="text-xs font-mono text-emerald mb-2 uppercase tracking-widest font-semibold">
          {pioneer.category}
        </span>
        <h3 className="font-serif text-2xl text-ink mb-2 group-hover:text-emerald transition-colors">
          {pioneer.name}
        </h3>
        <p className="text-xs font-bold uppercase tracking-widest text-ink/70 mb-4 line-clamp-2">
          {pioneer.recognitionTitle}
        </p>
        <span className="text-xs uppercase tracking-widest text-ink/50 group-hover:text-emerald transition-colors mt-auto font-semibold">
          View Pioneer Profile →
        </span>
      </div>
    </Link>
  );
}
