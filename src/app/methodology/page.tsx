import React from 'react';
import { Metadata } from 'next';
import { MethodologyHero } from '@/components/methodology/MethodologyHero';
import { MethodologyProcess } from '@/components/methodology/MethodologyProcess';
import { WhatWeLookFor } from '@/components/methodology/WhatWeLookFor';
import { MethodologyClosing } from '@/components/methodology/MethodologyClosing';

export const metadata: Metadata = {
  title: 'Methodology | The Indian Pioneers Award',
  description: 'Learn how nominations are reviewed, evaluated and recognised through The Indian Pioneers Award.',
};

export default function MethodologyPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <MethodologyHero />
      <MethodologyProcess />
      <WhatWeLookFor />
      <MethodologyClosing />
    </main>
  );
}
