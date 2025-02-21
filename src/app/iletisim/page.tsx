import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'İletişim - İkar İnşaat | Bize Ulaşın',
  description: 'İkar İnşaat iletişim bilgileri. Adres: Bağdat Cad. İkar Plaza, Göztepe/Kadıköy. Telefon: 90 216 350 50 70. Projeleriniz için bize ulaşın.',
};

const ContactPage = () => {
  return (
    <main>
      <section className="pt-32 pb-16 section-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-yellow-500 text-black px-4 py-2 text-sm font-bold mb-4">
              İLETİŞİM
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Projeleriniz İçin Buradayız
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              40 yıllık tecrübemizle projelerinizi hayata geçirmek için hazırız. 
              Sizi dinlemek ve en uygun çözümleri sunmak için ofisimize bekliyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <form className="bg-gray-50 p-8 rounded-2xl shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Ad Soyad
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      placeholder="Adınız Soyadınız"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      placeholder="(5XX) XXX XX XX"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-posta
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="ornek@email.com"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Konu
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  >
                    <option value="">Seçiniz</option>
                    <option value="proje">Yeni Proje</option>
                    <option value="teklif">Fiyat Teklifi</option>
                    <option value="is">İş Başvurusu</option>
                    <option value="diger">Diğer</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mesajınız
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="Mesajınızı yazın..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-lg transition-colors"
                >
                  Gönder
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-50 p-6 rounded-2xl shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-100 p-3 rounded-lg">
                    <FaPhone className="text-yellow-600 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Telefon</h3>
                    <p className="text-gray-600">T / F: 90 216 350 50 70</p>
                    <p className="text-gray-600">G: +90 534 355 42 25</p>
                    <a
                      href="https://wa.me/905343554225"
                      className="flex items-center text-green-600 mt-2 hover:text-green-700"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaWhatsapp className="w-5 h-5 mr-2" />
                      WhatsApp'tan Yazın
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-100 p-3 rounded-lg">
                    <FaEnvelope className="text-yellow-600 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">E-posta</h3>
                    <a 
                      href="mailto:info@ikarinsaat.com"
                      className="text-gray-600 hover:text-yellow-600"
                    >
                      info@ikarinsaat.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-100 p-3 rounded-lg">
                    <FaMapMarkerAlt className="text-yellow-600 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Adres</h3>
                    <p className="text-gray-600">
                      Bağdat Cad. İkar Plaza
                      <br />
                      N: 201/11
                      <br />
                      Göztepe Mah. PK: 34730
                      <br />
                      Kadıköy/İSTANBUL
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="h-[500px] relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d188.22815725036070!2d29.055412159251613!3d40.9741077059511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDU4JzI2LjgiTiAyOcKwMDMnMTkuNSJF!5e0!3m2!1str!2str!4v1710234567890!5m2!1str!2str"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      <Footer />
    </main>
  );
};

export default ContactPage; 