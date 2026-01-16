export interface Page {
  id: string;
  title: string;
  slug: string;
  locale: 'en' | 'es';
  seo: {
    metaTitle?: string;
    metaDescription?: string;
    metaImage?: Media;
  };
  contentBlocks: ContentBlock[];
  createdAt: string;
  updatedAt: string;
}

export interface Media {
  id: string;
  alt: string;
  url: string;
  filename: string;
  mimeType: string;
  filesize: number;
  width?: number;
  height?: number;
  sizes?: {
    thumbnail?: ImageSize;
    card?: ImageSize;
    tablet?: ImageSize;
  };
}

export interface ImageSize {
  url: string;
  width: number;
  height: number;
  filename: string;
}

export type ContentBlock = HeroBlock | FeaturesBlock | TestimonialsBlock | CTABlock;

export interface HeroBlock {
  blockType: 'hero';
  heading: string;
  subheading?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: Media;
}

export interface FeaturesBlock {
  blockType: 'features';
  title?: string;
  featureList?: Feature[];
}

export interface Feature {
  icon?: string;
  title: string;
  description?: string;
}

export interface TestimonialsBlock {
  blockType: 'testimonials';
  title?: string;
  testimonialList?: Testimonial[];
}

export interface Testimonial {
  quote: string;
  author: string;
  position?: string;
  avatar?: Media;
}

export interface CTABlock {
  blockType: 'cta';
  heading: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

export interface ContactSubmission {
  name: string;
  email: string;
  message: string;
  locale: 'en' | 'es';
}