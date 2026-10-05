export default function PioneerNote({ content }: { content: string }) {
  return (
    <div className="border-l-2 border-gold pl-6 py-2">
      <h3 className="font-sans text-xs tracking-[0.2em] text-emerald uppercase mb-6">
        The Pioneer Note
      </h3>
      <p className="font-serif text-2xl sm:text-3xl text-ink leading-snug italic">
        &quot;{content}&quot;
      </p>
    </div>
  );
}
