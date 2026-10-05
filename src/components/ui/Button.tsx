import React from 'react';
import Link from 'next/link';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  href?: string;
  children: React.ReactNode;
  className?: string;
}

export function Button({ 
  variant = 'primary', 
  href, 
  children, 
  className = '', 
  ...props 
}: ButtonProps) {
  
  const baseStyles = "inline-flex items-center justify-center font-sans text-sm md:text-base font-medium tracking-widest uppercase transition-all duration-300 ease-out px-8 py-4";
  
  const variants = {
    primary: "bg-emerald text-ivory hover:bg-emerald-light shadow-editorial hover:shadow-editorial-hover hover:-translate-y-0.5",
    secondary: "bg-gold text-ink hover:bg-gold-light shadow-editorial hover:shadow-editorial-hover hover:-translate-y-0.5",
    outline: "border border-ink text-ink hover:bg-ink hover:text-ivory",
    ghost: "text-ink-light hover:text-ink hover:bg-ivory-dark",
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  const isExternal = href?.startsWith('http');

  if (href) {
    if (isExternal) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
