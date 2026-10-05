import React from 'react';
import { Metadata } from 'next';
import { PioneersHero } from '@/components/pioneers/PioneersHero';
import { PioneerRegister } from '@/components/pioneers/PioneerRegister';

export const metadata: Metadata = {
  title: 'The Pioneer Register | The Indian Pioneers Award',
  description: 'Explore the people building, creating, solving, inspiring and shaping what comes next across India.',
};

export default function PioneersPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <PioneersHero />
      <PioneerRegister />
    </main>
  );
}
