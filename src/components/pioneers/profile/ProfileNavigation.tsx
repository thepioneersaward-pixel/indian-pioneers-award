import Link from "next/link";
import { NOMINATION_FORM_URL } from "@/config/constants";

export default function ProfileNavigation({ direction }: { direction: "back" | "forward" }) {
  if (direction === "back") {
    return (
      <nav className="mb-12 flex flex-col gap-2">
        <span className="font-sans text-[10px] tracking-widest uppercase text-ink/40">
          The Pioneer Register
        </span>
        <Link 
          href="/pioneers"
          className="font-sans text-xs tracking-[0.15em] uppercase text-emerald hover:text-ink transition-colors w-fit"
        >
          ← Back to Pioneers
        </Link>
      </nav>
    );
  }

  return (
    <div className="flex flex-col items-center text-center pb-12">
      <h3 className="font-serif text-3xl sm:text-4xl text-ink mb-6">
        The Register is still growing.
      </h3>
      <p className="font-sans text-lg text-ink/70 font-light mb-12 max-w-xl">
        Someone building something meaningful could belong here next.
      </p>
      
      <a 
        href={NOMINATION_FORM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-ink text-ivory font-sans text-sm tracking-[0.2em] uppercase px-8 py-4 hover:bg-emerald transition-colors duration-300"
      >
        Nominate a Pioneer
      </a>
      
      <div className="mt-24 flex flex-col sm:flex-row gap-8 justify-center items-center">
        <Link 
          href="/pioneers"
          className="font-sans text-xs tracking-[0.15em] uppercase text-ink/60 hover:text-emerald transition-colors"
        >
          ← Explore the Pioneer Register
        </Link>
        <span className="hidden sm:inline-block w-px h-4 bg-gold/50"></span>
        <Link 
          href="/categories"
          className="font-sans text-xs tracking-[0.15em] uppercase text-ink/60 hover:text-emerald transition-colors"
        >
          Explore Categories →
        </Link>
      </div>
    </div>
  );
}
