import { Page, ContactSubmission } from '@/types/payload';

const PAYLOAD_URL = process.env.PAYLOAD_API_URL || 'http://localhost:3001/api';
console.log('PAYLOAD_URL:', PAYLOAD_URL)


export async function getPage(slug: string, locale: string = 'en'): Promise<Page | null> {
  try {
    const res = await fetch(
      `${PAYLOAD_URL}/pages?where[slug][equals]=${slug}&where[locale][equals]=${locale}&depth=2`,
      {
        next: { revalidate: 60 }, // Revalidate every 60 seconds
      }
    );

    if (!res.ok) return null;

    const data = await res.json();
    return data.docs[0] || null;
  } catch (error) {
    console.error('Error fetching page:', error);
    return null;
  }
}

export async function getAllPages(locale: string = 'en'): Promise<Page[]> {
  try {
    const res = await fetch(
      `${PAYLOAD_URL}/pages?where[locale][equals]=${locale}&depth=1`,
      {
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) return [];

    const data = await res.json();
    return data.docs || [];
  } catch (error) {
    console.error('Error fetching pages:', error);
    return [];
  }
}

export async function submitContactForm(data: ContactSubmission): Promise<boolean> {
  try {
    const res = await fetch(`${PAYLOAD_URL}/contact-submissions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    return res.ok;
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return false;
  }
}

export function getMediaUrl(url?: string): string {
  if (!url) return '';
  if (url.startsWith('http')) return url;
  return `${process.env.NEXT_PUBLIC_PAYLOAD_URL}${url}`;
}