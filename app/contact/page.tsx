import { Metadata } from 'next';
import { getPage } from '@/lib/payload';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage('contact', 'en');
  
  return {
    title: page?.seo?.metaTitle || 'Contact Us',
    description: page?.seo?.metaDescription || 'Get in touch with us',
  };
}

export default async function ContactPage() {
  const page = await getPage('contact', 'en');

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {page?.title || 'Contact Us'}
            </h1>
            <p className="text-xl text-blue-100">
              We'd love to hear from you. Send us a message!
            </p>
          </div>
        </div>
        
        <div className="py-16 bg-gray-50">
          <ContactForm locale="en" />
        </div>
      </main>
      <Footer locale="en" />
    </div>
  );
}