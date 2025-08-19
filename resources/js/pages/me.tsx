import About from '@/components/me/about';
import Contact from '@/components/me/contact';
import Experience from '@/components/me/experience';
import FloatingNavbar from '@/components/me/floating-navbar';
import Footer from '@/components/me/footer';
import { Hero } from '@/components/me/hero';
import Projects from '@/components/me/projects';
import Skills from '@/components/me/skills';
import { Testimonials } from '@/components/me/testimonials';

export default function Me() {
  return (
    <main className="min-h-screen">
      <FloatingNavbar />
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
