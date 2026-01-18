const Footer = ({ locale = 'en' }: { locale?: string }) => {
  const currentYear = new Date().getFullYear();
  const text = locale === 'en'
    ? { rights: 'All rights reserved.' }
    : { rights: 'Todos los derechos reservados.' };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Hey Abhishek</h3>
            <p className="text-gray-400">
              {locale === 'en' 
                ? 'Building amazing experiences with modern technology.'
                : 'Construyendo experiencias increíbles con tecnología moderna.'}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{locale === 'en' ? 'Quick Links' : 'Enlaces Rápidos'}</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href={locale === 'en' ? '/' : '/es'} className="hover:text-white transition-colors">
                {locale === 'en' ? 'Home' : 'Inicio'}
              </a></li>
              <li><a href={locale === 'en' ? '/contact' : '/es/contact'} className="hover:text-white transition-colors">
                {locale === 'en' ? 'Contact' : 'Contacto'}
              </a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{locale === 'en' ? 'Connect' : 'Conectar'}</h4>
            <p className="text-gray-400">corporateabhishek47@gmail.com</p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          © {currentYear} Abhishek. {text.rights}
        </div>
      </div>
    </footer>
  );
};

export default Footer;