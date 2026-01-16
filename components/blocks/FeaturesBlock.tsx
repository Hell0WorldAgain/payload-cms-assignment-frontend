import * as LucideIcons from 'lucide-react';
import { FeaturesBlock as FeaturesBlockType } from '@/types/payload';

export default function FeaturesBlock({ block }: { block: FeaturesBlockType }) {
  return (
    <div className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {block.title && (
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            {block.title}
          </h2>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {block.featureList?.map((feature, index) => {
            const IconComponent = feature.icon 
              ? (LucideIcons as any)[feature.icon] 
              : LucideIcons.Sparkles;

            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  {IconComponent && <IconComponent className="w-6 h-6 text-blue-600" />}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {feature.title}
                </h3>
                {feature.description && (
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}