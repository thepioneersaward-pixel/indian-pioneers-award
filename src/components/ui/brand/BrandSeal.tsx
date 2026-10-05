import Image from 'next/image';

interface BrandSealProps {
  className?: string;
  size?: number;
  priority?: boolean;
}

export function BrandSeal({ className = '', size = 200, priority = false }: BrandSealProps) {
  // Original aspect ratio is 1:1 (1024x1024)
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <Image
        src="/brand/indian-pioneers-seal.jpg"
        alt="The Indian Pioneers Award Official Seal"
        width={size}
        height={size}
        priority={priority}
        className="object-contain"
      />
    </div>
  );
}
