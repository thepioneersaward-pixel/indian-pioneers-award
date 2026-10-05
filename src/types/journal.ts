export interface JournalPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  publishedAt: string;
  featuredImage?: string;
  readTime: string;
  content: string;
  featured?: boolean;
  status: "published" | "draft";
}
