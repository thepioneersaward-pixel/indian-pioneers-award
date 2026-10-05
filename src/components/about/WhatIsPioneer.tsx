import React from 'react';

export function WhatIsPioneer() {
  return (
    <section className="w-full bg-ivory-dark py-24 lg:py-32 border-b border-ink/10">
      <div className="container-editorial flex flex-col gap-16 lg:flex-row lg:gap-24">
        
        {/* Left Side: Statement */}
        <div className="lg:w-1/2 flex flex-col items-start justify-center">
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.1] text-ink mb-8 uppercase">
            You don&apos;t have to be famous to be a pioneer.
          </h2>
          <p className="text-body text-ink/80 leading-relaxed text-lg max-w-xl">
            Pioneering work can happen in a business, studio, classroom, laboratory, community, profession, creative practice, or an individual&apos;s own field. 
          </p>
        </div>

        {/* Right Side: List */}
        <div className="lg:w-1/2 flex flex-col justify-center lg:border-l border-ink/10 lg:pl-16">
          <h3 className="text-sm font-bold tracking-widest uppercase text-emerald mb-8">
            What is a Pioneer?
          </h3>
          <p className="text-body text-ink/80 leading-relaxed mb-10 max-w-md">
            A Pioneer isn&apos;t defined by fame alone. Pioneers can be:
          </p>
          <ul className="grid grid-cols-2 gap-x-8 gap-y-5 text-sm font-bold tracking-widest uppercase text-ink/70">
            <li>Founders</li>
            <li>Creators</li>
            <li>Authors</li>
            <li>Artists</li>
            <li>Innovators</li>
            <li>Professionals</li>
            <li>Thinkers</li>
            <li>Practitioners</li>
            <li>Educators</li>
            <li>Community Builders</li>
            <li>Changemakers</li>
            <li>Emerging Talent</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
