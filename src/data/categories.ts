import { Category } from '@/types/category';

export const categories: Category[] = [
  {
    id: '01',
    slug: 'entrepreneurs-business',
    theme: 'BUILD',
    title: 'Entrepreneurs & Business',
    shortDescription: 'Founders, entrepreneurs and business leaders building companies, products and new ways of working.'
  },
  {
    id: '02',
    slug: 'creators-digital',
    theme: 'CREATE',
    title: 'Creators & Digital',
    shortDescription: 'Creators, digital storytellers, influencers and people shaping culture through contemporary media.'
  },
  {
    id: '03',
    slug: 'authors-knowledge',
    theme: 'THINK',
    title: 'Authors & Knowledge',
    shortDescription: 'Authors, writers, researchers and knowledge creators whose work changes how people understand the world.'
  },
  {
    id: '04',
    slug: 'astrology-spirituality-wellness',
    theme: 'GUIDE',
    title: 'Astrology, Spirituality & Wellness',
    shortDescription: 'Astrologers, spiritual practitioners, wellness professionals and people building meaningful practices around human wellbeing and self-understanding.'
  },
  {
    id: '05',
    slug: 'technology-innovation',
    theme: 'INVENT',
    title: 'Technology & Innovation',
    shortDescription: 'People working with technology, science, AI, engineering and new forms of innovation.'
  },
  {
    id: '06',
    slug: 'arts-entertainment',
    theme: 'PERFORM',
    title: 'Arts & Entertainment',
    shortDescription: 'Artists, performers, filmmakers, musicians and cultural creators.'
  },
  {
    id: '07',
    slug: 'fashion-beauty-lifestyle',
    theme: 'SHAPE',
    title: 'Fashion, Beauty & Lifestyle',
    shortDescription: 'Designers, beauty professionals, lifestyle creators and people shaping contemporary Indian aesthetics and culture.'
  },
  {
    id: '08',
    slug: 'food-hospitality',
    theme: 'CRAFT',
    title: 'Food & Hospitality',
    shortDescription: 'Chefs, culinary creators, hospitality founders and people creating distinctive food experiences.'
  },
  {
    id: '09',
    slug: 'professionals-experts',
    theme: 'PRACTICE',
    title: 'Professionals & Experts',
    shortDescription: 'Doctors, lawyers, CAs, architects, consultants, specialists and other professionals whose expertise creates meaningful impact.'
  },
  {
    id: '10',
    slug: 'social-impact-changemakers',
    theme: 'SOLVE',
    title: 'Social Impact & Changemakers',
    shortDescription: 'People working to solve social, environmental and community challenges.'
  },
  {
    id: '11',
    slug: 'education-knowledge',
    theme: 'EDUCATE',
    title: 'Education & Knowledge',
    shortDescription: 'Educators, mentors, teachers and people expanding access to learning and knowledge.'
  },
  {
    id: '12',
    slug: 'emerging-talent',
    theme: 'EMERGE',
    title: 'Emerging Talent',
    shortDescription: 'Young Pioneers and emerging individuals creating meaningful work early in their journey.'
  }
];

export function formatCategoryLabel(slug: string): string {
  const category = categories.find(c => c.slug === slug);
  return category ? category.title : slug.replace("-", " ").toUpperCase();
}
