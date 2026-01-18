import { Page, ContactSubmission } from '@/types/payload';

const PAYLOAD_URL = process.env.PAYLOAD_API_URL || 'http://localhost:3001/api';
const PAYLOAD_SERVER_URL = process.env.NEXT_PUBLIC_PAYLOAD_URL || 'http://localhost:3001';

export async function getPage(slug: string, locale: string = 'en'): Promise<Page | null> {
  try {
    const res = await fetch(
      `${PAYLOAD_URL}/pages?where[slug][equals]=${slug}&where[locale][equals]=${locale}&depth=2`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) return null;

    const data = await res.json();
    
    // Debug: Log the page data
    if (data.docs[0]) {
      console.log('Page data:', JSON.stringify(data.docs[0], null, 2));
    }
    
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
  if (!url) {
    console.warn('No URL provided to getMediaUrl');
    return '';
  }
  
  // If it's already a full URL, return as is
  if (url.startsWith('http://') || url.startsWith('https://')) {
    console.log('Full URL:', url);
    return url;
  }
  
  // Otherwise, prepend the Payload server URL
  const fullUrl = `${PAYLOAD_SERVER_URL}${url}`;
  console.log('Constructed URL:', fullUrl);
  return fullUrl;
}