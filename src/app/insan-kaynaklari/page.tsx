"use client";

import { useState, FormEvent, ChangeEvent } from 'react';
import { FaUserTie, FaFileUpload, FaBuilding, FaUsers } from 'react-icons/fa';
import Footer from '@/components/Footer';

interface FormData {
  name: string;
  email: string;
  phone: string;
  position: string;
  cv: File | null;
}

const HRPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    position: '',
    cv: null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 10 * 1024 * 1024) {
        setSubmitStatus({
          type: 'error',
          message: 'Dosya boyutu 10MB&apos;dan küçük olmalıdır.'
        });
        e.target.value = '';
        return;
      }
      if (!['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(file.type)) {
        setSubmitStatus({
          type: 'error',
          message: 'Lütfen PDF veya Word dosyası yükleyin.'
        });
        e.target.value = '';
        return;
      }
      setFormData(prev => ({
        ...prev,
        cv: file
      }));
      setSubmitStatus({
        type: 'success',
        message: `${file.name} başarıyla yüklendi.`
      });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    if (!formData.name || !formData.email || !formData.phone || !formData.position || !formData.cv) {
      setSubmitStatus({
        type: 'error',
        message: 'Lütfen tüm alanları doldurun ve CV yükleyin.'
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (value) formDataToSend.append(key, value);
      });

      const response = await fetch('/api/career-application', {
        method: 'POST',
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error('Başvuru gönderilirken bir hata oluştu.');
      }

      setSubmitStatus({
        type: 'success',
        message: 'Başvurunuz başarıyla alındı. En kısa sürede sizinle iletişime geçeceğiz.'
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        position: '',
        cv: null
      });
      
      const fileInput = document.getElementById('file-upload') as HTMLInputElement;
      if (fileInput) fileInput.value = '';

    } catch {
      setSubmitStatus({
        type: 'error',
        message: 'Başvuru gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      <section className="pt-32 pb-16 section-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-yellow-500 text-black px-4 py-2 text-sm font-bold mb-4">
              İNSAN KAYNAKLARI
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Kariyer Fırsatları
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              İKAR İNŞAAT olarak alanımızda en başarılı ve en çok tercih edilen marka olma hedefimizde bizi yeni ufuklara ulaştırabilecek çalışkan, kişisel gelişimine önem veren çalışma arkadaşlarına kapımız her daim açıktır.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUserTie className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Profesyonel Gelişim</h3>
              <p className="text-gray-600">Sürekli eğitim ve gelişim fırsatları</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaBuilding className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Modern Çalışma Ortamı</h3>
              <p className="text-gray-600">Dinamik ve yenilikçi iş ortamı</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUsers className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Takım Ruhu</h3>
              <p className="text-gray-600">Güçlü ekip çalışması ve iş birliği</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaFileUpload className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Kariyer Fırsatları</h3>
              <p className="text-gray-600">Yükselme ve ilerleme imkanları</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">İş Başvurusu</h2>
              
              {submitStatus.type && (
                <div className={`mb-6 p-4 rounded ${
                  submitStatus.type === 'success' ? 'bg-green-500/20 text-green-100' : 'bg-red-500/20 text-red-100'
                }`}>
                  {submitStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Ad Soyad
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white"
                      placeholder="Adınız Soyadınız"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      E-posta
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white"
                      placeholder="ornek@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white"
                    placeholder="(5XX) XXX XX XX"
                  />
                </div>

                <div>
                  <label htmlFor="position" className="block text-sm font-medium mb-2">
                    Başvurulan Pozisyon
                  </label>
                  <select
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white"
                  >
                    <option value="">Seçiniz</option>
                    <option value="mimar">Mimar</option>
                    <option value="muhendis">İnşaat Mühendisi</option>
                    <option value="tekniker">Tekniker</option>
                    <option value="profesyonel">İnşaat Profesyoneli</option>
                    <option value="ofis">Ofis Çalışanı</option>
                    <option value="stajyer">Stajyer</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    CV Yükle
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-600 border-dashed rounded-lg hover:border-yellow-500 transition-colors">
                    <div className="space-y-1 text-center">
                      <FaFileUpload className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="flex text-sm">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer bg-gray-700 rounded-md font-medium text-yellow-500 hover:text-yellow-400"
                        >
                          <span>CV&apos;nizi yükleyin</span>
                          <input 
                            id="file-upload" 
                            name="cv" 
                            type="file" 
                            className="sr-only"
                            onChange={handleFileChange}
                            accept=".pdf,.doc,.docx"
                          />
                        </label>
                        <p className="pl-1 text-gray-400">veya sürükleyip bırakın</p>
                      </div>
                      <p className="text-xs text-gray-400">
                        PDF, DOC, DOCX (MAX. 10MB)
                      </p>
                      {formData.cv && (
                        <p className="text-sm text-green-400">
                          Seçilen dosya: {formData.cv.name}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-lg transition-colors ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Gönderiliyor...' : 'Başvuruyu Gönder'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default HRPage; 