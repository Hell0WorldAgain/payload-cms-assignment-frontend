import Link from 'next/link';
import { CTABlock as CTABlockType } from '@/types/payload';

export default function CTABlock({ block }: { block: CTABlockType }) {
  return (
    <div className="py-16 md:py-24 bg-gradient-to-r from-black-600 to-purple-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          {block.heading}
        </h2>
        {block.description && (
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            {block.description}
          </p>
        )}
        {block.buttonText && block.buttonLink && (
          <Link
            href={block.buttonLink}
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors shadow-lg"
          >
            {block.buttonText}
          </Link>
        )}
      </div>
    </div>
  );
}