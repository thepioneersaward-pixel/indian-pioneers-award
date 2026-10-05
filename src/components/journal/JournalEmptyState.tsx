import React from 'react';
import { Button } from '../ui/Button';
import { NOMINATION_FORM_URL } from '@/config/constants';

export function JournalEmptyState() {
  return (
    <section className="w-full bg-ivory-dark py-24 lg:py-32 flex-1 flex flex-col justify-center">
      <div className="container-editorial flex flex-col items-center text-center max-w-4xl mx-auto">
        
        <div className="flex flex-col items-center justify-center text-center py-20 lg:py-28 bg-ivory border border-ink/5 rounded-sm w-full mb-24 shadow-editorial">
          <h2 className="font-serif text-3xl md:text-5xl leading-tight text-ink mb-6 uppercase">
            The Journal is taking shape.
          </h2>
          <p className="text-body text-ink/80 leading-relaxed max-w-xl text-lg mb-8">
            Stories from the people and ideas shaping India&apos;s next chapter will appear here.
          </p>
          <p className="text-body text-ink/60 leading-relaxed max-w-xl">
            The Journal will document the people, ideas and work that make pioneering possible.
          </p>
        </div>

        <h2 className="font-serif text-3xl md:text-4xl leading-[1.1] text-ink mb-6 uppercase">
          Know a story worth telling?
        </h2>
        <p className="text-body text-ink/80 leading-relaxed text-lg max-w-xl mx-auto mb-12">
          If you know someone whose work deserves to be noticed, start with a nomination.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto justify-center">
          <Button variant="primary" href={NOMINATION_FORM_URL} className="w-full sm:w-auto px-10 py-5 text-sm tracking-widest">
            Nominate a Pioneer
          </Button>
          <Button variant="outline" href="/pioneers" className="w-full sm:w-auto px-10 py-5 text-sm tracking-widest bg-ivory">
            Explore the Register
          </Button>
        </div>
      </div>
    </section>
  );
}
