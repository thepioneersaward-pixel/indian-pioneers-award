import React from 'react';

export function PioneersHero() {
  return (
    <section className="relative w-full pt-32 pb-24 lg:pt-48 lg:pb-32 bg-ivory overflow-hidden border-b border-ink/10 flex flex-col justify-center">
      <div className="container-editorial relative z-10 flex flex-col items-start text-left max-w-5xl">
        <div className="mb-10 flex items-center gap-4">
          <span className="w-12 h-px bg-ink"></span>
          <span className="text-caption font-semibold tracking-widest uppercase text-ink">
            The Pioneer Register
          </span>
        </div>
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.1] text-ink mb-10 tracking-tight uppercase">
          People who are building what&apos;s next.
        </h1>
        <p className="text-body max-w-2xl text-ink/80 leading-relaxed font-medium text-lg">
          Explore the people, ideas and work that represent the spirit of pioneering across India.
        </p>
      </div>
    </section>
  );
}
