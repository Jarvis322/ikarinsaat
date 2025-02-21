import Image from 'next/image';
import Footer from '@/components/Footer';

const OHSPage = () => {
  return (
    <main>
      <section className="pt-32 pb-16 section-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              İş Sağlığı ve Güvenliği
            </h1>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600 text-lg mb-8">
              Firmamız insan sağlığı ve güvenliğini her şeyden önemli görmektedir. Bu doğrultuda <span className="font-semibold">İKAR İNŞAAT</span> olarak dünya standartlarında üst yapılar inşa ederken, güvenli ve sağlıklı bir iş ortamı oluşturmayı, operasyonları esnasında çevreye duyarlı olmayı, müşteri memnuniyetini sağlamayı ve bunu sürdürmeyi taahhüt ediyoruz.
            </p>

            <p className="text-gray-600 text-lg mb-12">
              İnsana ve her türlü canlıya değer veren anlayışımız çerçevesinde yasal düzenlemelere, uluslararası standartlara ve de etik kaidelere uyarak güvenli bir çalışma ortamı oluşturmak asli görevlerimizdendir.
            </p>

            <div className="relative h-[400px] mb-12">
              <Image
                src="/isg.webp"
                alt="İş Sağlığı ve Güvenliği"
                fill
                className="object-cover rounded-lg shadow-xl"
              />
            </div>

            <p className="text-gray-600 text-lg">
              Bunun yanı sıra faaliyetlerimiz sırasında çevre kirlenmesini önlemek, iş kazaları ve meslek hastalıklarının meydana gelmesini engelleyecek önlemleri almak, aldığımız tedbirlerin birer gereği olarak görüyoruz. İş sağlığı ve güvenliği kapsamında riskleri asgariye indirecek önlemler almak ve iş kazalarına neden olabilecek insan faktörünü eğitimler ve iş yönetimsel organizasyon vasıtasıyla sıfıra indirgemek firma olarak temel hedeflerimizdendir.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default OHSPage; 