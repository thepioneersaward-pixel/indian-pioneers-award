import { notFound } from "next/navigation";
import { getPioneerBySlug, pioneers } from "@/data/pioneers";
import PioneerProfile from "@/components/pioneers/profile/PioneerProfile";

export async function generateStaticParams() {
  return pioneers.map((pioneer) => ({
    slug: pioneer.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const pioneer = getPioneerBySlug(resolvedParams.slug);

  if (!pioneer) {
    return {
      title: 'Pioneer Not Found | The Indian Pioneers Award'
    };
  }

  return {
    title: `${pioneer.name} — ${pioneer.recognitionTitle} | The Indian Pioneers Award`,
    description: pioneer.shortDescription
  };
}

export default async function PioneerPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const pioneer = getPioneerBySlug(resolvedParams.slug);
  
  if (!pioneer) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-ivory">
      <PioneerProfile pioneer={pioneer} />
    </main>
  );
}
