import { Metadata } from 'next';
import { getPage } from '@/lib/payload';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage('contact', 'es');
  
  return {
    title: page?.seo?.metaTitle || 'Contáctenos',
    description: page?.seo?.metaDescription || 'Póngase en contacto con nosotros',
  };
}

export default async function ContactPageES() {
  const page = await getPage('contact', 'es');

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {page?.title || 'Contáctenos'}
            </h1>
            <p className="text-xl text-blue-100">
              Nos encantaría saber de ti. ¡Envíanos un mensaje!
            </p>
          </div>
        </div>
        
        <div className="py-16 bg-gray-50">
          <ContactForm locale="es" />
        </div>
      </main>
      <Footer locale="es" />
    </div>
  );
}