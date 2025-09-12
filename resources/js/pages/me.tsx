import { About } from '@/components/me/about';
import Contact from '@/components/me/contact';
import { Experience } from '@/components/me/experience';
import FloatingNavbar from '@/components/me/floating-navbar';
import Footer from '@/components/me/footer';
import { Hero } from '@/components/me/hero';
import { Projects } from '@/components/me/projects';
import { Stacks } from '@/components/me/stacks';
import { BubbleBackground } from '@/components/shadcn-io/bubble-background';

export default function Me() {
  return (
    <main className="relative min-h-screen">
      <BubbleBackground
        className="fixed inset-0 flex items-center justify-center bg-background transition-all"
        colors={{
          first: 'var(--bubble-1)',
          second: 'var(--bubble-2)',
          third: 'var(--bubble-3)',
          fourth: 'var(--bubble-4)',
          fifth: 'var(--bubble-5)',
          sixth: 'var(--bubble-6)',
        }}
      />
      <FloatingNavbar />
      <Hero />
      <Projects />
      <Experience />
      <Stacks />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
