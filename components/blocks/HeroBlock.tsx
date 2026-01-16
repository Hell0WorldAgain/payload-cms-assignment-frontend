import Image from 'next/image';
import Link from 'next/link';
import { HeroBlock as HeroBlockType } from '@/types/payload';
import { getMediaUrl } from '@/lib/payload';

export default function HeroBlock({ block }: { block: HeroBlockType }) {
  return (
    <div className="relative bg-gradient-to-br from-blue-600 to-purple-700 text-white overflow-hidden">
      {block.backgroundImage && (
        <div className="absolute inset-0 opacity-20">
          <Image
            src={getMediaUrl(block.backgroundImage.url)}
            alt={block.backgroundImage.alt}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {block.heading}
          </h1>
          {block.subheading && (
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              {block.subheading}
            </p>
          )}
          {block.ctaText && block.ctaLink && (
            <Link
              href={block.ctaLink}
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors shadow-lg"
            >
              {block.ctaText}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}