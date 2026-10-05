import React from 'react';
import { Button } from '../ui/Button';
import { NOMINATION_FORM_URL } from '@/config/constants';

export function MethodologyClosing() {
  return (
    <section className="w-full bg-ivory-dark py-24 lg:py-32">
      <div className="container-editorial flex flex-col items-center text-center max-w-3xl mx-auto">
        <div className="mb-20 p-8 border border-ink/10 bg-ivory text-center">
          <h3 className="text-xs font-bold tracking-widest uppercase text-ink mb-4">
            No Guaranteed Recognition
          </h3>
          <p className="text-body text-ink/70 leading-relaxed text-sm max-w-xl mx-auto">
            Submitting a nomination does not guarantee recognition. Each nomination is considered on its own merits and in the context of the work presented.
          </p>
        </div>

        <h2 className="font-serif text-4xl md:text-5xl leading-[1.1] text-ink mb-12 uppercase">
          Know someone building what&apos;s next?
        </h2>
        <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
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
