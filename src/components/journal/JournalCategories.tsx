import React from 'react';

export function JournalCategories() {
  const categories = [
    { label: 'PEOPLE', desc: 'Profiles, conversations and stories about Pioneers.' },
    { label: 'IDEAS', desc: 'Thinking about work, creativity, innovation and culture.' },
    { label: 'FIELD NOTES', desc: 'Observations from the worlds and industries where Pioneers are building.' },
    { label: 'EMERGING', desc: 'New voices, young talent and work worth paying attention to.' },
    { label: 'RECOGNITION', desc: 'Stories about the people and work recognised by the award.' },
  ];

  return (
    <section className="w-full bg-ivory border-b border-ink/10 pb-16 lg:pb-24">
      <div className="container-editorial">
        <div className="flex flex-wrap gap-x-8 gap-y-4 items-center">
          <span className="text-xs font-bold tracking-widest uppercase text-ink/40 w-full md:w-auto mb-4 md:mb-0">
            Explore:
          </span>
          {categories.map((cat) => (
            <button key={cat.label} className="group flex flex-col text-left">
              <span className="text-xs font-bold tracking-widest uppercase text-ink group-hover:text-emerald transition-colors">
                {cat.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
