import Image from 'next/image';
import Link from 'next/link';
import { HeroBlock as HeroBlockType } from '@/types/payload';
import { getMediaUrl } from '@/lib/payload';

export default function HeroBlock({ block }: { block: HeroBlockType }) {
  const imageUrl = block.backgroundImage 
    ? getMediaUrl(block.backgroundImage.url)
    : 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=800&fit=crop';

  return (
    <div className="min-h-[50vh] bg-gradient-to-br from-purple-600 to-black-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[50vh]">
          {/* Left Column - Content */}
          <div className="text-white py-12 lg:py-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {block.heading}
            </h1>
            {block.subheading && (
              <p className="text-lg md:text-xl lg:text-2xl mb-8 text-blue-100 leading-relaxed">
                {block.subheading}
              </p>
            )}
            {block.ctaText && block.ctaLink && (
              <Link
                href={block.ctaLink}
                className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
              >
                {block.ctaText}
              </Link>
            )}
          </div>

          {/* Right Column - Image */}
          <div className="relative h-[50vh] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={imageUrl}
              alt={block.backgroundImage?.alt || 'Hero image'}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}