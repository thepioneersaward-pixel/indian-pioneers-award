import { Pioneer } from '@/types/pioneer';
import { poonamSinghPioneer } from './pioneers/poonam-singh';

/**
 * Official Indian Pioneers Award Register
 */
export const pioneers: Pioneer[] = [
  poonamSinghPioneer
];

export function getPioneerBySlug(slug: string): Pioneer | undefined {
  return pioneers.find((p) => p.slug === slug);
}

export function getAllPioneers(): Pioneer[] {
  return pioneers;
}
