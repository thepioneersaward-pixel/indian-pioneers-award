import { Pioneer } from "@/types/pioneer";
import Image from "next/image";

export default function PioneerHero({ pioneer }: { pioneer: Pioneer }) {
  const displayCategory = pioneer.category.toUpperCase();

  return (
    <section className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-end">
      
      {/* Portrait Column */}
      <div className="lg:col-span-5 relative w-full aspect-[3/4] bg-neutral-200 overflow-hidden rounded-sm shadow-editorial">
        {pioneer.portrait ? (
          <Image 
            src={pioneer.portrait} 
            alt={`Portrait of ${pioneer.name}`}
            fill
            priority
            className="object-cover"
          />
        ) : (
          /* Abstract Editorial Silhouette / Placeholder */
          <div className="absolute inset-0">
            <Image 
              src="/editorial-pioneers/abstract_editorial_silhouette.jpg"
              alt="Editorial abstract portrait placeholder"
              fill
              className="object-cover opacity-90 mix-blend-multiply"
            />
            <div className="absolute bottom-4 left-4 z-10 text-xs font-sans tracking-[0.15em] text-ink/40 uppercase bg-ivory/60 px-2 py-1 backdrop-blur-sm">
              Portrait pending publication
            </div>
          </div>
        )}
      </div>

      {/* Title Column */}
      <div className="lg:col-span-7 flex flex-col justify-end pb-2">
        <div className="flex flex-col gap-2 mb-6">
          <span className="font-sans text-xs tracking-[0.25em] text-ink/40 uppercase font-semibold">
            Pioneer Profile
          </span>
          <span className="font-sans text-xs sm:text-sm tracking-[0.2em] text-emerald uppercase font-semibold">
            {displayCategory}
          </span>
        </div>
        
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-ink leading-[0.95] mb-4">
          {pioneer.name}
        </h1>
        
        <p className="font-sans text-lg sm:text-xl text-ink/80 max-w-2xl font-light mb-10">
          {pioneer.professionalIdentity}
        </p>
        
        <div className="pt-8 border-t border-gold/40 flex flex-col gap-4">
          <div>
            <span className="font-sans text-xs tracking-widest text-ink/50 uppercase block mb-1">
              Official Recognition
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-ink leading-tight">
              {pioneer.recognitionTitle}
            </h2>
          </div>

          <p className="font-sans text-sm sm:text-base text-ink/80 leading-relaxed max-w-2xl font-light italic border-l-2 border-emerald/50 pl-4 py-1">
            {pioneer.shortDescription}
          </p>
        </div>
      </div>
      
    </section>
  );
}
