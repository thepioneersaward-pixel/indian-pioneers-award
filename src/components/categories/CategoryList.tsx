import React from 'react';
import { categories } from '@/data/categories';
import { Button } from '../ui/Button';
import { NOMINATION_FORM_URL } from '@/config/constants';

export function CategoryList() {
  return (
    <section className="w-full bg-ivory py-24 lg:py-32">
      <div className="container-editorial max-w-5xl mx-auto">
        <div className="flex flex-col border-t border-ink/10">
          {categories.map((cat) => (
            <div 
              key={cat.id}
              className="flex flex-col md:flex-row items-start md:items-center justify-between border-b border-ink/10 py-10 md:py-16 group hover:bg-ivory-dark transition-colors px-4 -mx-4 md:px-8 md:-mx-8"
            >
              <div className="flex items-start md:items-center gap-6 md:gap-12 w-full md:w-auto">
                <span className="text-sm font-mono text-gold group-hover:text-emerald transition-colors shrink-0 pt-1 md:pt-0">
                  {cat.id}
                </span>
                <div className="flex flex-col">
                  <span className="font-serif italic text-2xl md:text-3xl text-emerald mb-2">
                    {cat.theme}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold tracking-widest uppercase text-ink mb-3">
                    {cat.title}
                  </h3>
                  <p className="text-body text-ink/70 leading-relaxed max-w-xl text-sm md:text-base">
                    {cat.shortDescription}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Not Sure CTA */}
        <div className="mt-24 lg:mt-32 flex flex-col items-center text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl leading-tight text-ink mb-6">
            Not sure where you fit?
          </h2>
          <p className="text-body text-ink/80 leading-relaxed mb-10 text-lg">
            Pioneering work doesn&apos;t always fit neatly into one category.
          </p>
          <Button variant="primary" href={NOMINATION_FORM_URL} className="px-10 py-5 text-sm tracking-widest">
            Nominate a Pioneer
          </Button>
        </div>
      </div>
    </section>
  );
}
