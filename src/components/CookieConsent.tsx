"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 365);
    localStorage.setItem('cookieConsent', expiryDate.toISOString());
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm">
          Bu web sitesi, size en iyi deneyimi sunmak için çerezleri kullanmaktadır. 
          Daha fazla bilgi için <Link href="/kvkk" className="text-yellow-500 hover:text-yellow-400 underline">KVKK Aydınlatma Metni&apos;ni</Link> inceleyebilirsiniz.
        </div>
        <button
          onClick={acceptCookies}
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded whitespace-nowrap"
        >
          Kabul Et
        </button>
      </div>
    </div>
  );
};

export default CookieConsent; 