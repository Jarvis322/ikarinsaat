import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-lg font-bold mb-6">İletişim</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaPhone className="w-5 h-5 text-yellow-500 mr-3" />
                <div>
                  <p className="text-gray-600">T / F: 90 216 350 50 70</p>
                  <p className="text-gray-600">G: +90 534 355 42 25</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="w-5 h-5 text-yellow-500 mr-3" />
                <a href="mailto:info@ikarinsaat.com" className="text-gray-600 hover:text-yellow-600">
                  info@ikarinsaat.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Adres</h3>
            <div className="flex items-start">
              <FaMapMarkerAlt className="w-5 h-5 text-yellow-500 mr-3 mt-1" />
              <div className="text-gray-600">
                <p>Bağdat Cad. İkar Plaza</p>
                <p>N: 201/11</p>
                <p>Göztepe Mah. PK: 34730</p>
                <p>Kadıköy/İSTANBUL</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Yararlı Linkler</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/kvkk" className="text-gray-600 hover:text-yellow-600">KVKK</Link>
              </li>
              <li>
                <Link href="/insan-kaynaklari" className="text-gray-600 hover:text-yellow-600">İnsan Kaynakları</Link>
              </li>
              <li>
                <Link href="/is-sagligi-guvenligi" className="text-gray-600 hover:text-yellow-600">İş Sağlığı ve Güvenliği</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-500">
          <p>© 2024 İKAR İnşaat | Tüm Hakları Saklıdır | Jarvis Web Tasarım</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 