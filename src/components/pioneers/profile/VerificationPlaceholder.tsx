import { BrandSeal } from "@/components/ui/brand/BrandSeal";

export default function VerificationPlaceholder() {
  return (
    <div className="border border-gold/30 p-8 flex flex-col gap-6 bg-white/30">
      <div className="flex items-center justify-between border-b border-gold/20 pb-4">
        <h3 className="font-sans text-xs tracking-widest text-emerald uppercase font-semibold">
          Official Credential
        </h3>
        <span className="text-[10px] font-mono tracking-widest text-ink/40 uppercase">
          Status: Verified
        </span>
      </div>
      
      <div className="flex flex-col items-center justify-center py-2 text-center">
        <BrandSeal size={80} className="mb-4 opacity-95" />
        <span className="font-serif text-sm text-ink font-medium tracking-wide">
          The Indian Pioneers Award
        </span>
        <span className="text-[10px] uppercase tracking-widest text-ink/50 mt-1">
          Official Seal of Recognition
        </span>
      </div>
      
      <div className="border-t border-gold/20 pt-4">
        <p className="font-sans text-xs text-ink/60 font-light leading-relaxed">
          The official certificate and verification reference will appear here once issued.
        </p>
      </div>
    </div>
  );
}
