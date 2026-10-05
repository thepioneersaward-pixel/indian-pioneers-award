import React from 'react';
import { Metadata } from 'next';
import { AboutHero } from '@/components/about/AboutHero';
import { WhatIsPioneer } from '@/components/about/WhatIsPioneer';
import { WhyRecognitionMatters } from '@/components/about/WhyRecognitionMatters';
import { WhoBelongsHere } from '@/components/about/WhoBelongsHere';

export const metadata: Metadata = {
  title: 'About | The Indian Pioneers Award',
  description: 'Discover what The Indian Pioneers Award stands for, what it means to be a Pioneer, and why recognition matters.',
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <AboutHero />
      <WhatIsPioneer />
      <WhyRecognitionMatters />
      <WhoBelongsHere />
    </main>
  );
}
