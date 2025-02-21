"use client";

import { useState } from 'react';
import Image from 'next/image';
import Footer from '@/components/Footer';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
}

const projects: Project[] = [
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

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <main>
      <section className="pt-32 pb-16 section-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-yellow-500 text-black px-4 py-2 text-sm font-bold mb-4">
              PROJELERİMİZ
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Tamamlanan ve Devam Eden Projeler
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              40 yıllık tecrübemizle hayata geçirdiğimiz seçkin projelerimiz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="group relative h-[400px] rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedProject(project)}
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
        </div>
      </section>

      {/* Proje Detay Popup */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-end z-50">
          <div className="bg-white w-full max-w-2xl h-full overflow-y-auto animate-slide-left">
            <div className="relative h-[300px]">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="p-8">
              <span className="inline-block bg-yellow-500 text-black text-sm font-semibold px-3 py-1 rounded-full mb-3">
                {selectedProject.category}
              </span>
              <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>
              <p className="text-gray-600">
                Proje detayları yakında eklenecektir.
              </p>
            </div>
          </div>
        </div>
      )}

      <Footer />

      <style jsx global>{`
        @keyframes slide-left {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-slide-left {
          animation: slide-left 0.3s ease-out;
        }
      `}</style>
    </main>
  );
};

export default ProjectsPage; 