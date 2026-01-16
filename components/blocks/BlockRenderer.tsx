import { ContentBlock } from '@/types/payload';
import HeroBlock from './HeroBlock';
import FeaturesBlock from './FeaturesBlock';
import TestimonialsBlock from './TestimonialsBlock';
import CTABlock from './CTABlock';

export default function BlockRenderer({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <>
      {blocks.map((block, index) => {
        switch (block.blockType) {
          case 'hero':
            return <HeroBlock key={index} block={block} />;
          case 'features':
            return <FeaturesBlock key={index} block={block} />;
          case 'testimonials':
            return <TestimonialsBlock key={index} block={block} />;
          case 'cta':
            return <CTABlock key={index} block={block} />;
          default:
            return null;
        }
      })}
    </>
  );
}
