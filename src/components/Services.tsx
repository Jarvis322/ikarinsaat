import { FaTree, FaHardHat, FaBuilding, FaUniversity } from 'react-icons/fa';

const services = [
  {
    icon: FaTree,
    title: 'Tasarım',
    description: 'Modern mimari yaklaşımlar ve yenilikçi tasarım çözümleri ile projelerinizi hayata geçiriyoruz.'
  },
  {
    icon: FaHardHat,
    title: 'Yönetim',
    description: 'Profesyonel proje yönetimi ile süreçlerinizi etkin ve verimli şekilde yönetiyoruz.'
  },
  {
    icon: FaBuilding,
    title: 'Uygulama',
    description: 'Uzman ekibimiz ve teknik altyapımız ile projelerinizi en yüksek kalitede uyguluyoruz.'
  },
  {
    icon: FaUniversity,
    title: 'Eğitim',
    description: 'Sektördeki en son gelişmeleri ve teknolojileri yakından takip ederek sürekli gelişiyoruz.'
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-20">Hizmetlerimiz</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center mb-6 group-hover:bg-yellow-500 transition-colors duration-300">
                <service.icon className="w-12 h-12 text-gray-800 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 