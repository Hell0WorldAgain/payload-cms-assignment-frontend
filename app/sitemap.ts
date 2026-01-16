import { MetadataRoute } from 'next';
import { getAllPages } from '@/lib/payload';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  
  const enPages = await getAllPages('en');
  const esPages = await getAllPages('es');

  const enUrls = enPages.map((page) => ({
    url: `${baseUrl}/${page.slug === 'home' ? '' : page.slug}`,
    lastModified: new Date(page.updatedAt),
    changeFrequency: 'weekly' as const,
    priority: page.slug === 'home' ? 1 : 0.8,
  }));

  const esUrls = esPages.map((page) => ({
    url: `${baseUrl}/es/${page.slug === 'home' ? '' : page.slug}`,
    lastModified: new Date(page.updatedAt),
    changeFrequency: 'weekly' as const,
    priority: page.slug === 'home' ? 1 : 0.8,
  }));

  return [...enUrls, ...esUrls];
}