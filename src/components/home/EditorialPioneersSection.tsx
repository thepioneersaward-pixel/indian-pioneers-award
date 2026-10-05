import React from 'react';
import { editorialPioneers } from '@/data/editorial-pioneers';
import { EditorialPioneerCard } from './EditorialPioneerCard';
import { FuturePioneerSilhouette } from '../ui/FuturePioneerSilhouette';

export function EditorialPioneersSection() {
  return (
    <section className="w-full bg-ivory py-24 lg:py-32">
      <div className="container-editorial">
        
        {/* Section Header */}
        <header className="mb-20 max-w-2xl">
          <h2 className="text-sm font-bold tracking-widest uppercase text-ink/60 mb-6 flex items-center gap-4">
            <span className="w-8 h-px bg-ink/30" />
            People Who Changed The Possibility
          </h2>
          <p className="font-serif text-3xl md:text-4xl text-ink leading-tight">
            Different people pioneer in different ways. They create, build, solve, protect, educate, and explore.
          </p>
        </header>
        
        {/* The 6 Editorial Stories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20 mb-32">
          {editorialPioneers.map((pioneer, index) => (
            <EditorialPioneerCard 
              key={pioneer.id} 
              pioneer={pioneer} 
              index={index} 
            />
          ))}
        </div>

        {/* The Future Pioneer Call to Action */}
        <div className="w-full border-t border-ink/10 pt-24 flex justify-center">
          <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            
            {/* Left side: The Silhouette Component */}
            <div className="w-full max-w-sm mx-auto md:mx-0">
              <FuturePioneerSilhouette />
            </div>
            
            {/* Right side: Editorial text explaining the premise */}
            <div className="flex flex-col items-start text-left">
              <h3 className="font-serif text-4xl lg:text-5xl text-ink mb-6">
                The register is waiting.
              </h3>
              <p className="text-body text-ink/70 leading-relaxed mb-8 max-w-md">
                We are actively seeking the individuals and teams across India who are defining the future. Whether they operate in quiet laboratories, bustling grassroots communities, or global stages, their work demands recognition.
              </p>
              <div className="flex items-center gap-4">
                <span className="w-12 h-px bg-gold" />
                <span className="text-xs font-mono uppercase tracking-widest text-ink/50">
                  Applications Open
                </span>
              </div>
            </div>

          </div>
        </div>
        
      </div>
    </section>
  );
}
