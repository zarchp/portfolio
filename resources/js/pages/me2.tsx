import { About } from '@/components/me2/about';
import { Contact } from '@/components/me2/contact';
import { Experience } from '@/components/me2/experience';
import { Footer } from '@/components/me2/footer';
import { Header } from '@/components/me2/header';
import { Projects } from '@/components/me2/projects';
import { Skills } from '@/components/me2/skills';
import { Testimonials } from '@/components/me2/testimonials';
import { Hero } from './../components/me2/hero';

export default function Me2() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
