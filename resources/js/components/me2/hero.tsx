import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Linkedin, Mail, Phone } from 'lucide-react';

export function Hero() {
  return (
    <section className="px-4 pt-24 pb-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          {/* Availability Badge */}
          <div className="mb-8 inline-flex items-center gap-2">
            <div className="bg-neo-green h-3 w-3 animate-pulse rounded-full border-2 border-border"></div>
            <span className="neo-badge bg-neo-green text-background">
              Available for Freelance or Full-Time
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-brutal mb-6 text-4xl leading-tight text-foreground md:text-6xl lg:text-7xl">
            EXPERIENCED
            <br />
            <span className="text-primary">FULL-STACK</span>
            <br />
            DEVELOPER
          </h1>

          {/* Subheading */}
          <p className="mx-auto mb-8 max-w-3xl text-xl font-bold text-muted-foreground md:text-2xl">
            Nearly 10 years crafting robust web applications with the TALL
            stack, Laravel, React, Vue, and modern DevOps practices.
          </p>

          {/* Core Skills */}
          <div className="mx-auto mb-12 grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
            {[
              'Laravel Expert',
              'TALL Stack',
              'React & Vue',
              'DevOps & TDD',
            ].map((skill) => (
              <div
                key={skill}
                className="neo-card p-4"
              >
                <span className="text-sm font-bold tracking-wide uppercase">
                  {skill}
                </span>
              </div>
            ))}
          </div>

          {/* Contact Buttons */}
          <div className="mb-8 flex flex-wrap justify-center gap-4">
            <Button
              variant="neo"
              size="neo-lg"
              className="flex items-center gap-2"
            >
              <Mail className="h-5 w-5" />
              Email Me
            </Button>
            <Button
              variant="neo-secondary"
              size="neo-lg"
              className="flex items-center gap-2"
            >
              <Github className="h-5 w-5" />
              GitHub
            </Button>
            <Button
              variant="neo-accent"
              size="neo-lg"
              className="flex items-center gap-2"
            >
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </Button>
            <Button
              variant="neo-outline"
              size="neo-lg"
              className="flex items-center gap-2"
            >
              <Phone className="h-5 w-5" />
              Call Me
            </Button>
          </div>

          {/* CTA */}
          <div className="neo-card mx-auto max-w-2xl bg-muted p-6">
            <p className="mb-4 text-lg font-bold">
              Ready to bring your next project to life?
            </p>
            <Button
              variant="neo-destructive"
              size="neo-lg"
              className="mx-auto flex items-center gap-2"
            >
              Let's Build Something Amazing
              <ExternalLink className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
