import React from 'react';
import { Metadata } from 'next';
import { CategoriesHero } from '@/components/categories/CategoriesHero';
import { CategoryList } from '@/components/categories/CategoryList';

export const metadata: Metadata = {
  title: 'Categories | The Indian Pioneers Award',
  description: 'Explore the fields, disciplines and forms of work represented by The Indian Pioneers Award.',
};

export default function CategoriesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <CategoriesHero />
      <CategoryList />
    </main>
  );
}
