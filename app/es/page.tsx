import { Metadata } from 'next';
import { getPage } from '@/lib/payload';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BlockRenderer from '@/components/blocks/BlockRenderer';
import { notFound } from 'next/navigation';

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage('home', 'es');
  
  if (!page) {
    return {
      title: 'Inicio',
    };
  }

  return {
    title: page.seo?.metaTitle || page.title,
    description: page.seo?.metaDescription,
  };
}

export default async function HomePageES() {
  const page = await getPage('home', 'es');

  if (!page) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <BlockRenderer blocks={page.contentBlocks} />
      </main>
      <Footer locale="es" />
    </div>
  );
}