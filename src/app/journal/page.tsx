import React from 'react';
import { Metadata } from 'next';
import { JournalHero } from '@/components/journal/JournalHero';
import { JournalCategories } from '@/components/journal/JournalCategories';
import { JournalEmptyState } from '@/components/journal/JournalEmptyState';

export const metadata: Metadata = {
  title: 'Journal | The Indian Pioneers Award',
  description: 'Stories, ideas and perspectives on the people building, creating and shaping what comes next across India.',
};

export default function JournalPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <JournalHero />
      <JournalCategories />
      <JournalEmptyState />
    </main>
  );
}
