import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import CookieConsent from "@/components/CookieConsent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: 'İkar İnşaat - 1968\'den Beri Güvenilir İnşaat ve Taahhüt Hizmetleri',
    template: '%s | İkar İnşaat'
  },
  description: 'İkar İnşaat, 1968\'den beri İstanbul\'da konut projeleri, ticari yapılar ve endüstriyel tesisler inşa eden güvenilir bir inşaat firmasıdır. 45+ yıllık tecrübe, 750+ tamamlanan proje.',
  keywords: ['İkar İnşaat', 'inşaat firması', 'konut projeleri', 'ticari yapılar', 'İstanbul inşaat', 'müteahhit', 'güvenilir inşaat', 'Bağdat Caddesi'],
  authors: [{ name: 'İkar İnşaat' }],
  creator: 'İkar İnşaat',
  publisher: 'İkar İnşaat',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://www.ikarinsaat.com',
    siteName: 'İkar İnşaat',
    title: 'İkar İnşaat - 1968\'den Beri Güvenilir İnşaat ve Taahhüt Hizmetleri',
    description: 'İkar İnşaat, 1968\'den beri İstanbul\'da konut projeleri, ticari yapılar ve endüstriyel tesisler inşa eden güvenilir bir inşaat firmasıdır.',
    images: [
      {
        url: '/logo.png',
        width: 200,
        height: 70,
        alt: 'İkar İnşaat Logo',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'İkar İnşaat - 1968\'den Beri Güvenilir İnşaat ve Taahhüt Hizmetleri',
    description: 'İkar İnşaat, 1968\'den beri İstanbul\'da konut projeleri, ticari yapılar ve endüstriyel tesisler inşa eden güvenilir bir inşaat firmasıdır.',
    images: ['/logo.png'],
  },
  icons: {
    icon: { url: '/favicon.png', type: 'image/png' }
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#fbbf24',
  manifest: '/manifest.json'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <CookieConsent />
      </body>
    </html>
  );
}
