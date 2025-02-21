import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaHardHat } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-yellow-500 text-black px-4 py-2 text-sm font-bold mb-4">
            İLETİŞİM
          </div>
          <h2 className="text-4xl font-bold mb-4">Projeniz İçin Görüşelim</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Uzman ekibimiz, projenizi dinlemek ve size en uygun çözümleri sunmak için hazır.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <form className="bg-gray-100 p-8 rounded-lg shadow-lg">
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
                <label htmlFor="project" className="block text-sm font-medium text-gray-700 mb-2">
                  Proje Tipi
                </label>
                <select
                  id="project"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                >
                  <option value="">Seçiniz</option>
                  <option value="konut">Konut Projesi</option>
                  <option value="ticari">Ticari Yapı</option>
                  <option value="endustriyel">Endüstriyel Tesis</option>
                  <option value="renovasyon">Renovasyon</option>
                  <option value="guclendirme">Deprem Güçlendirme</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Proje Detayları
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Projeniz hakkında bize bilgi verin..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-lg transition-colors flex items-center justify-center"
              >
                <FaHardHat className="mr-2" />
                Teklif Alın
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-100 p-3 rounded-lg">
                  <FaPhone className="text-yellow-600 w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Telefon</h3>
                  <p className="text-gray-600">+90 (XXX) XXX XX XX</p>
                  <a
                    href="https://wa.me/905XXXXXXXXX"
                    className="flex items-center text-green-600 mt-2 hover:text-green-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp className="w-5 h-5 mr-2" />
                    WhatsApp&apos;tan Yazın
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-100 p-3 rounded-lg">
                  <FaEnvelope className="text-yellow-600 w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">E-posta</h3>
                  <p className="text-gray-600">info@ikarinsaat.com.tr</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-100 p-3 rounded-lg">
                  <FaMapMarkerAlt className="text-yellow-600 w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Merkez Ofis</h3>
                  <p className="text-gray-600">
                    İstanbul, Türkiye
                    <br />
                    Detaylı Adres
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 