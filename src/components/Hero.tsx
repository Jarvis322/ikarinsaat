"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const images = [
  '/hero-bg (1).jpeg',
  '/hero-bg (1).jpg',
  '/hero-bg (2).jpeg',
  '/hero-bg (2).jpg',
  '/hero-bg (3).jpeg',
  '/hero-bg (4).jpeg',
  '/hero-bg (5).jpeg'
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Her 5 saniyede bir değişecek

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen">
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <Image
            key={image}
            src={image}
            alt={`İkar İnşaat Slider ${index + 1}`}
            fill
            className={`object-cover transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            priority={index === 0}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-center">
          <div className="container mx-auto px-4 pt-20 md:pt-0">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-6xl font-bold text-white mb-6 md:mb-8">
                <span className="block mb-2 md:mb-4">1968&apos;den Beri</span>
                <span className="block">Aradığınız Çözüm</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl">
                Konut projelerinden, ticari yapılara, endüstriyel tesislerden renovasyon projelerine kadar tüm yapı ihtiyaçlarınız için yanınızdayız.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/projeler"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 md:py-4 px-6 md:px-8 rounded transition-colors text-sm md:text-base"
                >
                  Projelerimiz
                </Link>
                <Link 
                  href="/iletisim"
                  className="bg-white hover:bg-gray-100 text-black font-bold py-3 md:py-4 px-6 md:px-8 rounded transition-colors text-sm md:text-base"
                >
                  İletişime Geçin
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                <div className="bg-black/30 backdrop-blur p-6 rounded">
                  <div className="text-4xl font-bold text-yellow-500 mb-2">45+</div>
                  <div className="text-white font-medium">Yıllık Tecrübe</div>
                </div>
                <div className="bg-black/30 backdrop-blur p-6 rounded">
                  <div className="text-4xl font-bold text-yellow-500 mb-2">750+</div>
                  <div className="text-white font-medium">Tamamlanan Proje</div>
                </div>
                <div className="bg-black/30 backdrop-blur p-6 rounded">
                  <div className="text-4xl font-bold text-yellow-500 mb-2">1.5M+</div>
                  <div className="text-white font-medium">m² İnşaat Alanı</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Slider Noktaları */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentImageIndex ? 'bg-yellow-500 w-4' : 'bg-white/50'
            }`}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero; 