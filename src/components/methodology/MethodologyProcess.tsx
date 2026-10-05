import React from 'react';
import { Button } from '../ui/Button';
import { NOMINATION_FORM_URL } from '@/config/constants';

export function MethodologyProcess() {
  const steps = [
    {
      num: '01',
      title: 'Nomination',
      desc: 'People may nominate themselves or someone whose work they believe deserves recognition.',
      action: { label: 'Nominate a Pioneer', href: NOMINATION_FORM_URL }
    },
    {
      num: '02',
      title: 'Review',
      desc: 'Nominations are reviewed for relevance, completeness and alignment with the spirit of The Indian Pioneers Award.',
    },
    {
      num: '03',
      title: 'Verification',
      desc: 'Where appropriate, information provided in a nomination may be verified against relevant public or supporting sources.',
    },
    {
      num: '04',
      title: 'Evaluation',
      desc: "Nominations are considered in the context of the person's work, contribution, originality, influence, impact and the nature of their field.",
    },
    {
      num: '05',
      title: 'Recognition',
      desc: 'Selected individuals are recognised as Indian Pioneers in the relevant category.',
    },
    {
      num: '06',
      title: 'Publication',
      desc: 'Recognised Pioneers may receive a dedicated profile documenting their work and contribution, creating a lasting record beyond the award itself.',
      action: { label: 'Explore the Pioneers', href: '/pioneers' }
    }
  ];

  return (
    <section className="w-full bg-ivory-dark py-24 lg:py-32 border-b border-ink/10">
      <div className="container-editorial">
        <div className="mb-20 max-w-3xl">
          <h2 className="font-serif text-4xl leading-[1.1] text-ink mb-6 uppercase">
            Recognition should be earned by the work.
          </h2>
          <p className="text-body text-ink/80 leading-relaxed text-lg max-w-2xl">
            The Indian Pioneers Award is designed to recognise meaningful work, contribution, originality and impact across a wide range of fields.
          </p>
        </div>

        <div className="flex flex-col gap-12 lg:gap-16 border-t border-ink/10 pt-16">
          {steps.map((step) => (
            <div key={step.num} className="flex flex-col md:flex-row gap-6 md:gap-16 lg:gap-32 items-start md:items-center">
              <div className="w-full md:w-1/3 flex items-start md:items-center gap-6 md:gap-8">
                <span className="text-3xl lg:text-4xl font-serif text-gold shrink-0">
                  {step.num}
                </span>
                <span className="text-lg lg:text-xl font-bold tracking-widest uppercase text-ink">
                  {step.title}
                </span>
              </div>
              <div className="w-full md:w-2/3 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <p className="text-body text-ink/80 leading-relaxed max-w-lg text-base lg:text-lg">
                  {step.desc}
                </p>
                {step.action && (
                  <Button variant="outline" href={step.action.href} className="px-6 py-3 text-xs tracking-widest shrink-0 bg-ivory">
                    {step.action.label}
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
