import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Introduction from '@/components/Introduction';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Introduction />
      <Services />
      <Projects />
    </>
  );
}
