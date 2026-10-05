export interface Category {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  theme: string;
  longDescription?: string;
  featured?: boolean;
}
