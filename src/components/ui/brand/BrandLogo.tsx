import Image from 'next/image';

interface BrandLogoProps {
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export function BrandLogo({ className = '', width = 300, height = 200, priority = false }: BrandLogoProps) {
  // Original aspect ratio is approx 3:2 (1024x682)
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <Image
        src="/brand/indian-pioneers-logo.jpg"
        alt="The Indian Pioneers Award Logo"
        width={width}
        height={height}
        priority={priority}
        className="object-contain" 
      />
    </div>
  );
}
