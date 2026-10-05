export default function PioneerSection({ title, content }: { title: string; content: string }) {
  return (
    <section>
      <h3 className="font-sans text-sm tracking-[0.2em] text-ink/50 uppercase mb-6 border-b border-gold/20 pb-4">
        {title}
      </h3>
      <div className="prose prose-lg prose-p:font-light prose-p:text-ink/80 prose-p:leading-relaxed max-w-none">
        {/* We simply split by newlines for basic paragraph formatting of the string */}
        {content.split('\n\n').map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
