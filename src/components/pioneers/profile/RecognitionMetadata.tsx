import { Pioneer } from "@/types/pioneer";

export default function RecognitionMetadata({ pioneer }: { pioneer: Pioneer }) {
  return (
    <div className="border border-gold/30 p-8 bg-white/50 backdrop-blur-sm">
      <h3 className="font-serif text-2xl text-ink mb-8 border-b border-gold/30 pb-6 uppercase tracking-wider text-sm font-semibold">
        Recognition Record
      </h3>
      
      <dl className="flex flex-col gap-6">
        <div>
          <dt className="font-sans text-xs tracking-widest text-ink/50 uppercase mb-1">Pioneer</dt>
          <dd className="font-serif text-lg text-ink font-medium">{pioneer.name}</dd>
        </div>

        <div>
          <dt className="font-sans text-xs tracking-widest text-ink/50 uppercase mb-1">Recognition</dt>
          <dd className="font-sans text-base text-ink font-medium">{pioneer.recognitionTitle}</dd>
        </div>

        <div>
          <dt className="font-sans text-xs tracking-widest text-ink/50 uppercase mb-1">Category</dt>
          <dd className="font-sans text-base text-ink">{pioneer.category}</dd>
        </div>
        
        {pioneer.organisation && (
          <div>
            <dt className="font-sans text-xs tracking-widest text-ink/50 uppercase mb-1">Organisation</dt>
            <dd className="font-sans text-base text-ink">{pioneer.organisation}</dd>
          </div>
        )}
        
        <div>
          <dt className="font-sans text-xs tracking-widest text-ink/50 uppercase mb-1">Year</dt>
          <dd className="font-sans text-base text-ink font-medium">{pioneer.awardYear}</dd>
        </div>
      </dl>
    </div>
  );
}
