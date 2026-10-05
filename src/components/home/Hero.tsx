import React from 'react';
import { Button } from '../ui/Button';
import { BrandSeal } from '../ui/brand/BrandSeal';
import { NOMINATION_FORM_URL } from '@/config/constants';

export function Hero() {
  const registerCategories = [
    { num: '01', label: 'BUILDERS' },
    { num: '02', label: 'CREATORS' },
    { num: '03', label: 'INNOVATORS' },
    { num: '04', label: 'THINKERS' },
    { num: '05', label: 'ARTISTS' },
    { num: '06', label: 'CHANGEMAKERS' },
  ];

  return (
    <section className="relative w-full min-h-[92vh] bg-ivory overflow-hidden border-b border-ink/10 flex flex-col justify-center">
      
      {/* 
        Architectural Typographic Element 
        Oversized, cropped, structural. Acts as the bedrock of the composition.
      */}
      <div 
        className="absolute top-0 right-0 lg:-right-[10%] select-none pointer-events-none opacity-[0.03] text-emerald"
        aria-hidden="true"
      >
        <span className="font-serif font-bold text-[15rem] md:text-[25rem] lg:text-[35rem] leading-[0.8] tracking-tighter block">
          PIONEERS
        </span>
      </div>
      
      <div className="container-editorial relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pt-12 pb-24 lg:py-32 items-center">
        
        {/* Left Column: Typographic Hero (Span 7 columns) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left lg:pr-8">
          
          {/* Institutional Label */}
          <div className="mb-10 lg:mb-16 flex items-center gap-4">
            <span className="w-12 h-px bg-ink"></span>
            <span className="text-caption font-semibold tracking-widest uppercase text-ink">
              The Indian Pioneers Award
            </span>
          </div>

          {/* Massive Typographic Statement */}
          <h1 className="font-serif text-[3.5rem] sm:text-7xl md:text-8xl lg:text-[6.5rem] leading-[1] text-ink mb-12 tracking-tight">
            <span className="block mb-2">For those</span>
            <span className="block mb-4">who build</span>
            <span className="block italic text-emerald pr-4">what&apos;s next.</span>
          </h1>
          
          <p className="text-body max-w-md mb-12 text-ink/80 leading-relaxed font-medium">
            Recognising the people creating, building, inspiring and shaping what comes next across India.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 w-full sm:w-auto">
            <Button variant="primary" href={NOMINATION_FORM_URL} className="w-full sm:w-auto text-sm tracking-widest px-10 py-5">
              Nominate a Pioneer
            </Button>
            <Button variant="ghost" href="/pioneers" className="w-full sm:w-auto group pl-0 uppercase tracking-widest text-sm font-bold">
              Explore the Pioneers 
              <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
            </Button>
          </div>
          
        </div>

        {/* Right Column: Institutional Register (Span 5 columns) */}
        <div className="lg:col-span-5 w-full flex justify-end">
          
          {/* The Register Panel */}
          <div className="w-full max-w-md bg-ivory border border-ink/20 shadow-editorial p-8 md:p-10 relative">
            
            {/* Fine architectural rules */}
            <div className="absolute top-0 left-6 w-px h-full bg-ink/5" />
            <div className="absolute top-6 left-0 w-full h-px bg-ink/5" />

            {/* Header of the Register */}
            <div className="flex justify-between items-end border-b border-ink/20 pb-6 mb-8 relative z-10">
              <h2 className="text-sm font-bold tracking-widest uppercase text-ink">
                The Pioneer Register
              </h2>
              <span className="text-xs font-mono tracking-widest text-ink/50 uppercase">
                2026 Edition
              </span>
            </div>

            {/* Register Categories / Index */}
            <ul className="flex flex-col gap-5 relative z-10 mb-12">
              {registerCategories.map((cat) => (
                <li key={cat.num} className="flex items-baseline gap-6 group cursor-default">
                  <span className="text-xs font-mono text-gold group-hover:text-emerald transition-colors w-6">
                    {cat.num}
                  </span>
                  <span className="text-sm uppercase tracking-widest font-semibold text-ink/70 group-hover:text-ink transition-colors">
                    {cat.label}
                  </span>
                </li>
              ))}
            </ul>

            {/* Empty Record Frame & Credential */}
            <div className="relative z-10 pt-8 border-t border-ink/20 flex items-end justify-between">
              
              {/* Intentional Archive Frame (Waiting to be populated) */}
              <div className="flex-1 max-w-[140px] aspect-[3/4] border border-ink/10 bg-ivory-dark/30 p-2 flex flex-col justify-end">
                <div className="w-full h-[1px] bg-ink/10 mb-2" />
                <span className="text-[9px] font-mono uppercase tracking-widest text-ink/40 text-center">
                  Record / 014
                </span>
              </div>

              {/* Official Credential Seal */}
              <div className="ml-6 flex-shrink-0 opacity-90 mix-blend-multiply">
                <BrandSeal size={90} />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
