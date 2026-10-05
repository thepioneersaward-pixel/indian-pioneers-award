import React from 'react';
import { Button } from '../ui/Button';

export function WhoBelongsHere() {
  return (
    <section className="w-full bg-ivory-dark py-24 lg:py-32">
      <div className="container-editorial flex flex-col items-center text-center">
        <h2 className="font-serif text-4xl md:text-5xl leading-tight text-ink mb-12 uppercase">
          The register will grow.
        </h2>
        <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
          <Button variant="primary" href="/pioneers" className="w-full sm:w-auto px-10 py-5 text-sm tracking-widest">
            Explore the Pioneers
          </Button>
          <Button variant="outline" href="/categories" className="w-full sm:w-auto px-10 py-5 text-sm tracking-widest bg-ivory">
            Explore Categories
          </Button>
        </div>
      </div>
    </section>
  );
}
