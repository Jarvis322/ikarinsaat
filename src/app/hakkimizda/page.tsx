import Image from 'next/image';
import { FaAward, FaUsers, FaHandshake, FaHardHat } from 'react-icons/fa';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Hakkımızda - İkar İnşaat | 40 Yıllık Güvenilir İnşaat Firması',
  description: '1986\'dan beri İstanbul\'da kaliteli konut projeleri, iş merkezleri ve ticari yapılar inşa eden İkar İnşaat. 40 yıllık tecrübe ve güvenilirlik.',
};

const AboutPage = () => {
  return (
    <main>
      <section className="pt-32 pb-16 section-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-yellow-500 text-black px-4 py-2 text-sm font-bold mb-4">
              KURUMSAL
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              40 Yıllık Güven ve Tecrübe
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <Image
                src="/ikar-mockup.jpg"
                alt="İkar İnşaat Kurumsal"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Biz Kimiz?</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                1986 yılında İstanbul'un en prestijli lokasyonlarından biri olan Bağdat Caddesi'nde kurulan İKAR İNŞAAT, 
                kuruluşundan bu yana geçen neredeyse 40 senede inşaat alanındaki faaliyetlerini aralıksız olarak sürdürmüş olup, 
                ekseriyetle apartman ve villa tipi konutlar, iş merkezleri ve ticari yapılar inşa etmiştir.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                İnşaat faaliyetlerinin yanı sıra gayrimenkul yönetimi ve arsa geliştirme gibi konularda da engin bir tecrübe sahibi olan firmamız; 
                konsept oluşturulmasından, inşaatın anahtar teslimine kadar uzanan tüm süreçlerde müşterilerine hizmet vermektedir.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                'Butik Projeler' yaklaşımımızla her bir projenin kendine has şartlarını göz önüne alarak ve projelere has çözümler üreterek 
                müşteri memnuniyeti sağlamayı odağı haline getiren firmamız halihazırda faaliyetlerini Çiftehavuzlar Semti Bağdat Caddesi üzerindeki 
                İKAR PLAZA'da sürdürmektedir.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <FaAward className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">40+ Yıl</h3>
              <p className="text-gray-600">Sektör Tecrübesi</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <FaUsers className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">1000+</h3>
              <p className="text-gray-600">Mutlu Aile</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <FaHandshake className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">500+</h3>
              <p className="text-gray-600">Tamamlanan Proje</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <FaHardHat className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">150+</h3>
              <p className="text-gray-600">Uzman Kadro</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Yaklaşımımız</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-600 leading-relaxed">
                  Tamamladığımız her binanın içinde bulunduğu bölgeye katma değer sağlamasını hedefliyor ve de geliştirdiğimiz projelerin 
                  seçkin şehirler yaratma yolunda ortaya koyacağı katkıyı önemsiyoruz.
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  Bu anlayışla en güncel inşaat yönetmeliklerine ve teknolojilerine uygun, mimari ilkelere ve çevreye duyarlı, kaliteyi önceleyen 
                  yapılar inşa ediyoruz.
                </p>
              </div>
              <div>
                <p className="text-gray-600 leading-relaxed">
                  Tüm bunları yaparken firma olarak taahhütlerimizi zamanında ve söz verdiğimiz şekilde yerine getirmeyi, zor projelerin ve 
                  koşulların üstesinden gelebilmeyi ve de etik değerlere uygun davranmayı değişilmez kurallarımız olarak görüyoruz.
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  Dahası, İKAR İNŞAAT olarak başarılarımızı insana ve işe verdiğimiz değere borçlu olduğumuzu unutmadan, her geçen gün yenilenip, 
                  daha da gelişmeyi hedefliyoruz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default AboutPage; 