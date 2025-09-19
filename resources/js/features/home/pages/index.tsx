import Meta from '@/components/meta';
import { BubbleBackground } from '@/components/shadcn-io/bubble-background';
import { buildPageMeta } from '@/data/seo';
import { About } from '../components/about';
import Contact from '../components/contact';
import { Experience } from '../components/experience';
import FloatingNavbar from '../components/floating-navbar';
import Footer from '../components/footer';
import { Hero } from '../components/hero';
import { Projects } from '../components/projects';
import { Stacks } from '../components/stacks';

function HomeMeta() {
  const meta = buildPageMeta({
    path: '/',
  });

  return <Meta {...meta} />;
}

export default function Home() {
  return (
    <>
      <HomeMeta />

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
    </>
  );
}
