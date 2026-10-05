import React from 'react';

export function WhyRecognitionMatters() {
  return (
    <section className="w-full bg-ivory py-24 lg:py-40 border-b border-ink/10 relative overflow-hidden">
      <div className="container-editorial relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        <h3 className="text-sm font-bold tracking-widest uppercase text-emerald mb-10">
          Why Recognition Matters
        </h3>
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-tight text-ink mb-12">
          Recognition should create identity.
        </h2>
        <p className="text-body text-ink/80 leading-relaxed mb-6 text-xl max-w-2xl">
          A Pioneer should eventually be able to say:
        </p>
        <span className="font-serif italic text-3xl md:text-4xl text-ink mb-16 block">&quot;I am an Indian Pioneer.&quot;</span>
        
        <p className="text-body text-ink/80 leading-relaxed mb-12 max-w-2xl text-lg">
          The recognition should become more than a certificate. It should eventually connect:
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 text-xs font-bold tracking-widest uppercase text-ink/70 max-w-3xl">
          <span className="bg-ivory-dark px-6 py-3 border border-ink/10">Profile</span>
          <span className="bg-ivory-dark px-6 py-3 border border-ink/10">Story</span>
          <span className="bg-ivory-dark px-6 py-3 border border-ink/10">Recognition</span>
          <span className="bg-ivory-dark px-6 py-3 border border-ink/10">Certificate</span>
          <span className="bg-ivory-dark px-6 py-3 border border-ink/10">Shareable Identity</span>
          <span className="bg-ivory-dark px-6 py-3 border border-ink/10">Discoverable Presence</span>
          <span className="bg-ivory-dark px-6 py-3 border border-ink/10">Community</span>
        </div>
      </div>
    </section>
  );
}
