import Image from 'next/image';

const Introduction = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">İKAR İNŞAAT</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              1986 yılında Bağdat Caddesi'nde kurulan <span className="font-semibold">İKAR İNŞAAT</span>, 
              kuruluşundan bu yana geçen neredeyse 40 senede inşaat alanındaki faaliyetlerini 
              aralıksız olarak sürdürmüş olup, ekseriyetle apartman ve villa tipi konutlar, 
              iş merkezleri ve ticari yapılar inşa etmiştir.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Konut Projeleri</h3>
                <p className="text-gray-600">
                  Apartman ve villa tipi modern yaşam alanları
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Ticari Yapılar</h3>
                <p className="text-gray-600">
                  İş merkezleri ve ticari kompleksler
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="/ikar-info.webp"
              alt="İkar İnşaat Proje Çalışması"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
              <div className="p-8">
                <div className="inline-block bg-yellow-500 text-black px-4 py-2 text-sm font-bold mb-4 rounded">
                  40 YILLIK TECRÜBE
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Profesyonel Proje Yönetimi
                </h3>
                <p className="text-gray-100">
                  Uzman kadromuz ile projelerinizi en ince detayına kadar planlıyoruz
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction; 