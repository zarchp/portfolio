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
        className="fixed inset-0 flex items-center justify-center bg-background opacity-15"
        colors={{
          first: '242,128,188',
          second: '198,150,255',
          third: '145,182,255',
          fourth: '255,145,145',
          fifth: '255,180,135',
          sixth: '150,235,220',
        }}
      />
      <FloatingNavbar />
      <Hero />
      <Projects />
      <Experience />
      <Stacks />
      {/* <Testimonials /> */}
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
