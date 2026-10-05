'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BrandLogo } from '../ui/brand/BrandLogo';
import { Button } from '../ui/Button';
import { NOMINATION_FORM_URL } from '@/config/constants';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '/about' },
    { label: 'Categories', href: '/categories' },
    { label: 'Pioneers', href: '/pioneers' },
    { label: 'Journal', href: '/journal' },
    { label: 'Methodology', href: '/methodology' },
  ];

  return (
    <header className="w-full bg-ivory border-b border-ivory-dark sticky top-0 z-50">
      <div className="container-editorial flex items-center justify-between h-20 md:h-24">
        
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <BrandLogo width={120} height={80} className="transition-transform duration-500 group-hover:scale-105" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link 
                  href={link.href}
                  className="text-subheading text-ink-light hover:text-emerald transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="pl-4 border-l border-ivory-dark">
            <Button variant="primary" href={NOMINATION_FORM_URL} className="px-6 py-2 text-xs md:text-sm">
              Nominate
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation Controls */}
        <div className="flex items-center gap-4 lg:hidden">
          <Button variant="primary" href={NOMINATION_FORM_URL} className="px-4 py-2 text-xs">
            Nominate
          </Button>
          <button 
            className="p-2 text-ink"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-ivory border-t border-ivory-dark absolute w-full left-0 top-full shadow-editorial">
          <ul className="flex flex-col container-editorial py-4">
            {navLinks.map((link) => (
              <li key={link.label} className="border-b border-ivory-dark last:border-0">
                <Link 
                  href={link.href}
                  className="block py-4 text-subheading text-ink hover:text-emerald transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
