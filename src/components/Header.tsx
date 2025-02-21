"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gradient-to-b from-gray-900/90 to-gray-900/70 backdrop-blur-sm shadow-lg' 
        : isHomePage 
          ? 'bg-transparent'
          : 'bg-gradient-to-b from-gray-900/90 to-gray-900/70 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="İkar İnşaat Logo"
              width={200}
              height={70}
              className={`object-contain transition-opacity duration-300 mr-4 w-[150px] md:w-[200px] ${
                isScrolled || !isHomePage ? 'opacity-100 brightness-200' : 'opacity-90'
              }`}
            />
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className={`font-medium transition-colors ${
                isScrolled || !isHomePage ? 'text-gray-100 hover:text-yellow-400' : 'text-white hover:text-yellow-400'
              }`}
            >
              Ana Sayfa
            </Link>
            <Link 
              href="/hakkimizda" 
              className={`font-medium transition-colors ${
                isScrolled || !isHomePage ? 'text-gray-100 hover:text-yellow-400' : 'text-white hover:text-yellow-400'
              }`}
            >
              Hakkımızda
            </Link>
            <Link 
              href="/projeler" 
              className={`font-medium transition-colors ${
                isScrolled || !isHomePage ? 'text-gray-100 hover:text-yellow-400' : 'text-white hover:text-yellow-400'
              }`}
            >
              Projeler
            </Link>
            <Link 
              href="/surdurulebilirlik" 
              className={`font-medium transition-colors ${
                isScrolled || !isHomePage ? 'text-gray-100 hover:text-yellow-400' : 'text-white hover:text-yellow-400'
              }`}
            >
              Sürdürülebilirlik
            </Link>
            <Link 
              href="/insan-kaynaklari" 
              className={`font-medium transition-colors ${
                isScrolled || !isHomePage ? 'text-gray-100 hover:text-yellow-400' : 'text-white hover:text-yellow-400'
              }`}
            >
              İnsan Kaynakları
            </Link>
            <Link 
              href="/iletisim" 
              className={`font-medium transition-colors ${
                isScrolled || !isHomePage ? 'text-gray-100 hover:text-yellow-400' : 'text-white hover:text-yellow-400'
              }`}
            >
              İletişim
            </Link>
          </nav>

          <button 
            onClick={toggleMobileMenu}
            className={`md:hidden ${
              isScrolled || !isHomePage ? 'text-gray-100' : 'text-white'
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobil Menü */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                href="/"
                className="block px-3 py-2 text-white hover:text-yellow-400"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Ana Sayfa
              </Link>
              <Link 
                href="/hakkimizda"
                className="block px-3 py-2 text-white hover:text-yellow-400"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Hakkımızda
              </Link>
              <Link 
                href="/projeler"
                className="block px-3 py-2 text-white hover:text-yellow-400"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projeler
              </Link>
              <Link 
                href="/surdurulebilirlik"
                className="block px-3 py-2 text-white hover:text-yellow-400"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sürdürülebilirlik
              </Link>
              <Link 
                href="/insan-kaynaklari"
                className="block px-3 py-2 text-white hover:text-yellow-400"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                İnsan Kaynakları
              </Link>
              <Link 
                href="/iletisim"
                className="block px-3 py-2 text-white hover:text-yellow-400"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                İletişim
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 