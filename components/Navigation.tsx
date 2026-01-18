'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Globe } from 'lucide-react';

const Navigation = () => {
  const pathname = usePathname();
  const currentLocale = pathname.startsWith('/es') ? 'es' : 'en';

  const toggleLocale = () => {
    const newLocale = currentLocale === 'en' ? 'es' : 'en';
    const pathWithoutLocale = pathname.replace(/^\/(en|es)/, '');
    return newLocale === 'en' ? pathWithoutLocale || '/' : `/${newLocale}${pathWithoutLocale}`;
  };

  const navItems = currentLocale === 'en' 
    ? [
        { href: '/', label: 'Home' },
        { href: '/contact', label: 'Contact' },
      ]
    : [
        { href: '/es', label: 'Inicio' },
        { href: '/es/contact', label: 'Contacto' },
      ];

  return (
    <nav className="border-b bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href={currentLocale === 'en' ? '/' : '/es'} className="text-2xl font-bold text-blue-600">
              Hi,
            </Link>
          </div>

          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  pathname === item.href ? 'text-blue-600' : 'text-gray-700'
                }`}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href={toggleLocale()}
              className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span>{currentLocale === 'en' ? 'ES' : 'EN'}</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;