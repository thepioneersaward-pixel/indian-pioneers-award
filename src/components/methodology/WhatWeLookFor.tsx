import React from 'react';

export function WhatWeLookFor() {
  const qualities = [
    {
      title: 'Contribution',
      desc: 'What has this person actually created, built, changed or contributed?'
    },
    {
      title: 'Originality',
      desc: 'What is distinctive about their work or approach?'
    },
    {
      title: 'Impact',
      desc: 'Who or what does the work affect?'
    },
    {
      title: 'Consistency',
      desc: 'Is there meaningful work or contribution beyond a single moment?'
    },
    {
      title: 'Influence',
      desc: 'Has the work shaped people, practices, communities, industries or conversations?'
    },
    {
      title: 'Context',
      desc: "How should the person's contribution be understood within their particular field?"
    }
  ];

  return (
    <section className="w-full bg-ivory py-24 lg:py-32 border-b border-ink/10">
      <div className="container-editorial">
        <div className="max-w-3xl mb-16">
          <h3 className="text-sm font-bold tracking-widest uppercase text-emerald mb-8">
            What We Look For
          </h3>
          <p className="text-body text-ink/80 leading-relaxed text-lg">
            Evaluation considers the context and nature of the individual&apos;s work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {qualities.map((q) => (
            <div key={q.title} className="flex flex-col border-t border-ink/10 pt-6">
              <h4 className="text-sm font-bold tracking-widest uppercase text-ink mb-4">
                {q.title}
              </h4>
              <p className="text-body text-ink/70 leading-relaxed text-sm">
                {q.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24 lg:mt-32 max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl leading-tight text-ink mb-6 uppercase">
            Pioneering work doesn&apos;t look the same everywhere.
          </h2>
          <p className="text-body text-ink/80 leading-relaxed text-lg">
            A founder, artist, doctor, creator, educator, scientist and community builder cannot necessarily be assessed through identical evidence. Evaluation considers the context and nature of the individual&apos;s work.
          </p>
        </div>
      </div>
    </section>
  );
}
