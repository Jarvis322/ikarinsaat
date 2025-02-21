import Image from 'next/image';
import Footer from '@/components/Footer';
import { FaHardHat, FaShieldAlt, FaUserCheck, FaBalanceScale, FaHandHoldingHeart, FaLeaf } from 'react-icons/fa';

const principles = [
  {
    id: 1,
    title: 'Vefa',
    icon: FaHandHoldingHeart,
    description: 'Bize güvenip iş veren müşterilerimizi asla yarı yolda bırakmamak temel anlayışımızdır.'
  },
  {
    id: 2,
    title: 'Dürüstlük',
    icon: FaUserCheck,
    description: 'Söz verdiğimiz işi, söz verdiğimiz zamanda, söz verdiğimiz şekilde yapmak olmazsa olmazımızdır.'
  },
  {
    id: 3,
    title: 'Ahlak',
    icon: FaUserCheck,
    description: 'Ahlaki bir tutum içinde yapılmayan hiçbir işin gerçek anlamda başarılı olamayacağının idrakindeyiz.'
  },
  {
    id: 4,
    title: 'Adalet',
    icon: FaBalanceScale,
    description: 'Bir taraf kazanırken, diğerinin kaybettiği bir denklem bize göre herkesin kaybettiği bir denklemdir.'
  },
  {
    id: 5,
    title: 'Güvenirlik',
    icon: FaShieldAlt,
    description: 'Bizim için güvenilirlik, müşterilerimizin hafızalarında daima iyi bir şekilde hatırlanmaktır.'
  },
  {
    id: 6,
    title: 'Çevreye Duyarlılık',
    icon: FaLeaf,
    description: 'Doğaya, şehir nizamına ve estetiğine ve de canlı sağlığına zarar verecek her türlü durumdan kaçınmak temel ilkelerimizdendir.'
  }
];

const SustainabilityPage = () => {
  return (
    <main>
      <section className="pt-32 pb-16 section-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-yellow-500 text-black px-4 py-2 text-sm font-bold mb-4">
              SÜRDÜRÜLEBİLİRLİK
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              İş Sağlığı ve Güvenliği
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Firmamızın temel değeri ve güvenliğini her şeyden önemli görmektedir. Bu doğrultuda İKAR İNŞAAT olarak çalışan sağlığı ve güvenliğini ön planda tutarak, çalışanlarımızın sağlıklı ve güvenli bir ortamda çalışmalarını sağlıyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div>
              <Image
                src="/ikar-mockup.jpg"
                alt="İş Sağlığı ve Güvenliği"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                İnsan ve çevre sağlığı ve güvenliğini her şeyden önemli görmektedir. Bu doğrultuda İKAR İNŞAAT olarak çalışan sağlığı ve güvenliğini ön planda tutarak, çalışanlarımızın sağlıklı ve güvenli bir ortamda çalışmalarını sağlıyoruz.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Bunun için tüm faaliyetlerimizin sırasında gerek çalışanlarımız, iş ortakları ve müteahhitlerimiz tarafından yürütülen operasyonlar, iş sağlığı ve güvenliği konusundaki yasal mevzuatlara ve de risk faktörlerine uygun olarak yönetilmektedir.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Sürekli iyileştirme yaklaşımı ile iş güvenliği performansımızı geliştirmekteyiz. İş kazalarını önlemek için risk değerlendirmeleri yaparak, çalışanlarımızın ve iş ortaklarımızın güvenliğini sağlamak için gerekli önlemleri alıyoruz.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {principles.map((principle) => (
              <div
                key={principle.id}
                className="group bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl hover:from-gray-100 hover:to-gray-200 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-300">
                    <principle.icon className="w-8 h-8 text-gray-900" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{principle.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default SustainabilityPage; 