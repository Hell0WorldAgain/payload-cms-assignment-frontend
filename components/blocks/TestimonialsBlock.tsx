import Image from 'next/image';
import { TestimonialsBlock as TestimonialsBlockType } from '@/types/payload';
import { getMediaUrl } from '@/lib/payload';

export default function TestimonialsBlock({ block }: { block: TestimonialsBlockType }) {
  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {block.title && (
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            {block.title}
          </h2>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {block.testimonialList?.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl border border-gray-200"
            >
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center">
                {testimonial.avatar && (
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0">
                    <Image
                      src={getMediaUrl(testimonial.avatar.url)}
                      alt={testimonial.avatar.alt}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                )}
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.author}
                  </p>
                  {testimonial.position && (
                    <p className="text-sm text-gray-600">
                      {testimonial.position}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}