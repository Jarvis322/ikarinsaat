import Image from 'next/image';
import Link from 'next/link';
import { FaHandHoldingHeart, FaBalanceScale, FaUserCheck, FaHandshake, FaShieldAlt, FaLeaf, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: 'Esenler Konut',
    category: 'Konut',
    image: '/ikar-mockup.jpg'
  },
  {
    id: 2,
    title: 'Çiftehavuzlar Plaza',
    category: 'Ticari',
    image: '/ikar-mockup.jpg'
  },
  {
    id: 3,
    title: 'Göztepe Park Konut',
    category: 'Konut',
    image: '/ikar-mockup.jpg'
  },
  {
    id: 4,
    title: 'Küçükyalı Konut',
    category: 'Konut',
    image: '/ikar-mockup.jpg'
  },
  {
    id: 5,
    title: 'Silivri Villa',
    category: 'Villa',
    image: '/ikar-mockup.jpg'
  },
  {
    id: 6,
    title: 'Kemerburgaz Site',
    category: 'Site',
    image: '/ikar-mockup.jpg'
  }
];

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

const Projects = () => {
  return (
    <>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-yellow-500 text-black px-4 py-2 text-sm font-bold mb-4">
              PROJELERİMİZ
            </div>
            <h2 className="text-4xl font-bold mb-4">Öne Çıkan Projeler</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              40 yıllık tecrübemizle hayata geçirdiğimiz seçkin projelerimizden bazıları
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="group relative h-[400px] rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block bg-yellow-500 text-black text-sm font-semibold px-3 py-1 rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-lg transition-colors inline-flex items-center">
              Tüm Projelerimizi İnceleyin
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">İlkelerimiz</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {principles.map((principle) => (
              <div
                key={principle.id}
                className="group bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-2xl hover:from-gray-700 hover:to-gray-600 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-300">
                    <principle.icon className="w-8 h-8 text-gray-900" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{principle.title}</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
    </>
  );
};

export default Projects; 