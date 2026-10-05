"use client";

import { useState } from "react";

interface ShareProfileProps {
  name: string;
  recognitionTitle?: string;
}

export default function ShareProfile({ name, recognitionTitle }: ShareProfileProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = window.location.href;
    const title = recognitionTitle ? `${name} — ${recognitionTitle}` : `${name} — Pioneer Profile | The Indian Pioneers Award`;

    if (navigator.share) {
      try {
        await navigator.share({
          title,
          url
        });
      } catch {
        // User cancelled or share failed, fallback to copy
        copyToClipboard(url);
      }
    } else {
      copyToClipboard(url);
    }
  };

  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="border border-gold/30 p-8 flex flex-col gap-4 bg-white/30">
      <h3 className="font-sans text-xs tracking-widest text-ink/50 uppercase">
        Share This Profile
      </h3>
      <p className="font-sans text-xs text-ink/70 leading-relaxed font-light">
        Share {name}&apos;s pioneer profile with colleagues, community and peers.
      </p>
      
      <button 
        onClick={handleShare}
        className="text-left font-sans text-xs tracking-[0.15em] uppercase text-emerald hover:text-ink transition-colors mt-2 flex items-center gap-2 w-fit font-semibold"
      >
        <span>{copied ? "Link Copied to Clipboard!" : "Share Pioneer Profile →"}</span>
      </button>
    </div>
  );
}
