import React from 'react';
import { pioneers } from '@/data/pioneers';
import { PioneerFilters } from './PioneerFilters';
import { PioneerCard } from './PioneerCard';
import { Button } from '../ui/Button';
import { NOMINATION_FORM_URL } from '@/config/constants';

export function PioneerRegister() {
  const hasPioneers = pioneers && pioneers.length > 0;

  return (
    <section className="w-full bg-ivory py-16 lg:py-24 min-h-[50vh]">
      <div className="container-editorial">
        <PioneerFilters />

        {hasPioneers ? (
          <div className="flex flex-col gap-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
              {pioneers.map((pioneer) => (
                <PioneerCard key={pioneer.id} pioneer={pioneer} />
              ))}
            </div>

            <div className="flex flex-col items-center justify-center text-center py-16 bg-ivory-dark/30 border border-gold/30 p-8 sm:p-12">
              <span className="font-sans text-xs tracking-[0.2em] text-emerald uppercase mb-4 font-semibold">
                Building The Register
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-ink mb-4">
                The Register is still growing.
              </h2>
              <p className="text-body text-ink/70 leading-relaxed max-w-xl text-base mb-8 font-light">
                Someone building something meaningful could belong here next.
              </p>
              <Button variant="primary" href={NOMINATION_FORM_URL} className="px-10 py-5 text-sm tracking-widest">
                Nominate a Pioneer
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center text-center py-24 lg:py-32 bg-ivory-dark/50 border border-ink/5 rounded-sm">
            <h2 className="font-serif text-4xl md:text-5xl leading-tight text-ink mb-6 uppercase">
              The Register is Open
            </h2>
            <p className="text-body text-ink/80 leading-relaxed max-w-xl text-lg mb-4">
              The first recognised Pioneers will appear here as the register begins to grow.
            </p>
            <p className="text-body text-ink/60 leading-relaxed max-w-xl mb-12">
              Nominations are currently open for people building, creating, solving, exploring and shaping what comes next.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button variant="primary" href={NOMINATION_FORM_URL} className="px-10 py-5 text-sm tracking-widest">
                Nominate a Pioneer
              </Button>
              <Button variant="outline" href="/" className="px-10 py-5 text-sm tracking-widest bg-ivory">
                Return Home
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
