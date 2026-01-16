import { Metadata } from 'next';
import { getPage } from '@/lib/payload';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BlockRenderer from '@/components/blocks/BlockRenderer';
import { notFound } from 'next/navigation';

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage('home', 'en');
  
  if (!page) {
    return {
      title: 'Home',
    };
  }

  return {
    title: page.seo?.metaTitle || page.title,
    description: page.seo?.metaDescription,
    openGraph: page.seo?.metaImage ? {
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_PAYLOAD_URL}${page.seo.metaImage.url}`,
          alt: page.seo.metaImage.alt,
        },
      ],
    } : undefined,
  };
}

export default async function HomePage() {
  const page = await getPage('home', 'en');

  if (!page) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <BlockRenderer blocks={page.contentBlocks} />
      </main>
      <Footer locale="en" />
    </div>
  );
}