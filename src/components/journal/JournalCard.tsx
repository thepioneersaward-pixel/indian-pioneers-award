import React from 'react';
import Image from 'next/image';
import { JournalPost } from '@/types/journal';

interface JournalCardProps {
  post: JournalPost;
}

export function JournalCard({ post }: JournalCardProps) {
  return (
    <div className="flex flex-col group cursor-pointer h-full">
      <div className="relative w-full aspect-[16/9] bg-ivory-dark/30 border border-ink/10 mb-6 overflow-hidden shadow-editorial transition-shadow duration-500 group-hover:shadow-editorial-hover">
        {post.featuredImage && (
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            className="object-cover opacity-90 transition-opacity duration-500 group-hover:opacity-100 grayscale hover:grayscale-0"
          />
        )}
      </div>
      <div className="flex flex-col flex-1">
        <span className="text-xs font-mono text-emerald mb-3 uppercase tracking-widest">
          {post.category}
        </span>
        <h3 className="font-serif text-2xl text-ink mb-3 leading-snug">
          {post.title}
        </h3>
        <p className="text-sm text-ink/70 mb-4 line-clamp-3 leading-relaxed">
          {post.excerpt}
        </p>
        <div className="mt-auto flex items-center justify-between border-t border-ink/10 pt-4">
          <div className="flex flex-col">
            <span className="text-[10px] font-bold uppercase tracking-widest text-ink/50">
              {post.author}
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-ink/40">
              {post.publishedAt} · {post.readTime}
            </span>
          </div>
          <span className="text-xs uppercase tracking-widest text-ink/50 group-hover:text-emerald transition-colors font-semibold">
            Read Story ?
          </span>
        </div>
      </div>
    </div>
  );
}
