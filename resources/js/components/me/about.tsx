// ENGLISH COMMENT LINE: Redesigned About section (no Next.js Link) + Goodreads tracker
// ENGLISH CODE
import {
  BadgeCheck,
  BookOpen,
  Briefcase,
  Globe,
  Mail,
  MapPin,
  Sparkles,
  Star,
  UserRoundCheck,
} from 'lucide-react';
import React from 'react';
import {
  Section,
  SectionBadge,
  SectionContainer,
  SectionContent,
  SectionDescription,
  SectionHeader,
  SectionTitle,
} from './section';

/* ============================================================================
   ENGLISH COMMENT LINE: Replace with your real data (or import from '@/data/profile')
============================================================================ */
const CONTACT = {
  email: 'hello@example.com',
  website: 'https://anzarsyah.id',
  location: 'Indonesia',
  linkedin: 'https://www.linkedin.com/in/your-handle',
  github: 'https://github.com/your-handle',
};

const CORE_TECH = [
  'Laravel',
  'React',
  'Inertia',
  'TypeScript',
  'Tailwind',
  'PostgreSQL',
  'Redis',
  'TDD',
  'CI/CD',
];

const ACHIEVEMENTS = [
  { icon: <Star className="size-4" />, label: '50+ Projects Delivered' },
  {
    icon: <BadgeCheck className="size-4" />,
    label: 'High client satisfaction',
  },
  { icon: <Briefcase className="size-4" />, label: '8+ Years of Experience' },
];

/* ============================================================================
   ENGLISH COMMENT LINE: Goodreads settings — put your real userId here
   Find it in your Goodreads profile URL, e.g. 1234567-anzar-syahid
============================================================================ */
const GOODREADS = {
  userId: '1234567-your-name', // <-- change me
  shelf: 'currently-reading', // 'currently-reading' | 'read' | 'to-read'
  bg: '0d0d0d', // hex without '#'
  text: 'e5e7eb',
  link: 'ff4db8',
};

export default function About() {
  return (
    <Section id="about">
      <SectionContainer>
        <SectionHeader>
          <SectionBadge>
            <UserRoundCheck className="size-4" />
            Get To Know Me
          </SectionBadge>
          <SectionTitle>About Me</SectionTitle>
          <SectionDescription>
            Crafting delightful digital experiences with clean code and
            curiosity.
          </SectionDescription>
        </SectionHeader>

        <SectionContent>
          <div className="grid gap-6 lg:grid-cols-3">
            {/* ENGLISH COMMENT LINE: Intro / main card */}
            <div className="lg:col-span-2">
              <div className="rounded-xl border border-border bg-card/80 p-6 shadow-sm backdrop-blur">
                <div className="mb-6 flex items-start justify-between">
                  <div>
                    <h3 className="flex items-center gap-2 text-2xl font-semibold">
                      <span>Hello, I’m Anzar Syahid</span>
                      <Sparkles className="size-4 text-brand" />
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Full-Stack Developer — Laravel • React • Inertia •
                      Tailwind • TDD
                    </p>
                  </div>
                </div>

                {/* ENGLISH COMMENT LINE: Philosophy */}
                <div className="space-y-5">
                  <p className="text-muted-foreground">
                    I believe in crafting digital experiences that are not just
                    functional, but truly delightful. My development philosophy
                    centers on writing clean, maintainable code that scales
                    gracefully while prioritizing user experience at every
                    touchpoint.
                  </p>
                  <p className="text-muted-foreground">
                    With 8+ years in the industry, I’ve learned the best
                    solutions come from deeply understanding the problem before
                    implementation. I approach each project with curiosity,
                    asking the right questions to build software that genuinely
                    serves users.
                  </p>
                  <p className="text-muted-foreground">
                    Technology moves fast, but principles endure. I focus on
                    fundamentals while exploring tools and methods that improve
                    outcomes and developer experience.
                  </p>
                </div>

                {/* ENGLISH COMMENT LINE: Pillars */}
                {/* <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Pillar
                  icon={<Code2 className="h-6 w-6 text-primary" />}
                  title="Clean Code"
                  desc="Maintainable, scalable solutions that last"
                />
                <Pillar
                  icon={<Lightbulb className="h-6 w-6 text-primary" />}
                  title="User-Centric"
                  desc="Prioritizing UX and accessibility in every decision"
                />
              </div> */}

                {/* ENGLISH COMMENT LINE: Core technologies chips */}
                {/* <div className="mt-8">
                <h4 className="mb-2 text-sm font-semibold">
                  Core Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {CORE_TECH.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div> */}

                {/* ENGLISH COMMENT LINE: CTAs */}
                {/* <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="rounded-md bg-brand px-4 py-2 text-sm font-medium text-white shadow transition hover:bg-brand/90"
                >
                  Explore My Work →
                </a>
                <a
                  href="#contact"
                  className="group flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2 text-sm font-medium shadow transition hover:bg-accent/50"
                >
                  Let’s Connect <span className="wave">👋</span>
                </a>
              </div> */}
              </div>
            </div>

            {/* ENGLISH COMMENT LINE: Right sidebar cards */}
            <div className="space-y-6">
              <SidebarCard title="Let’s Connect">
                <ContactRow
                  icon={<Mail className="size-4" />}
                  label={CONTACT.email}
                  href={`mailto:${CONTACT.email}`}
                />
                <ContactRow
                  icon={<Globe className="size-4" />}
                  label={CONTACT.website}
                  href={CONTACT.website}
                />
                <ContactRow
                  icon={<MapPin className="size-4" />}
                  label={CONTACT.location}
                />
              </SidebarCard>

              <SidebarCard title="Achievements">
                <div className="space-y-2">
                  {ACHIEVEMENTS.map((a) => (
                    <div
                      key={a.label}
                      className="flex items-center gap-3"
                    >
                      <span className="text-brand">{a.icon}</span>
                      <span className="text-sm">{a.label}</span>
                    </div>
                  ))}
                </div>
              </SidebarCard>

              {/* <SidebarCard
              title="Currently Exploring"
              icon={<Zap className="size-5 text-warning" />}
            >
              <div className="space-y-3">
                <div>
                  <h4 className="text-sm font-semibold">NativePHP</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Bridging web and desktop apps with familiar PHP tooling—an
                    alternative to Electron.
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {['Desktop Apps', 'PHP', 'Electron Alternative'].map(
                      (tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                        >
                          {tag}
                        </span>
                      ),
                    )}
                  </div>
                </div>
                <div className="border-t border-border pt-3 text-sm">
                  <h5 className="mb-2 font-semibold">Other Interests</h5>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'WebAssembly',
                      'Edge Computing',
                      'AI-assisted Dev',
                      'PWA Capabilities',
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SidebarCard> */}

              <SidebarCard
                title="Beyond Work"
                icon={<BookOpen className="size-5 text-brand" />}
              >
                <p className="text-sm text-muted-foreground">
                  I enjoy reading—here’s my current shelf from Goodreads:
                </p>
                <GoodreadsWidget />
                <div className="mt-2 flex gap-2">
                  <a
                    href={`https://www.goodreads.com/user/show/${GOODREADS.userId.split('-')[0]}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-brand underline-offset-2 hover:underline"
                  >
                    View Goodreads Profile
                  </a>
                </div>
              </SidebarCard>

              {/* <QuoteCard /> */}
            </div>
          </div>
        </SectionContent>
      </SectionContainer>
    </Section>
  );
}

/* ============================================================================
   ENGLISH COMMENT LINE: Small subcomponents (no Next.js dependencies)
============================================================================ */

function Pillar({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-lg border border-border bg-card p-4 shadow-sm transition hover:shadow-md">
      <div className="shrink-0 rounded-md bg-primary/10 p-2">{icon}</div>
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm text-muted-foreground">{desc}</p>
      </div>
    </div>
  );
}

function SidebarCard({
  title,
  icon,
  children,
}: {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-border bg-card/80 p-5 shadow-sm backdrop-blur">
      <div className="mb-3 flex items-center gap-2">
        {icon}
        <h3 className="font-display text-base font-semibold">{title}</h3>
      </div>
      {children}
    </div>
  );
}

function ContactRow({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  href?: string;
}) {
  if (href) {
    const isExternal = href.startsWith('http');
    return (
      <a
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noreferrer' : undefined}
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition hover:bg-accent"
      >
        <span className="text-muted-foreground">{icon}</span>
        <span>{label}</span>
      </a>
    );
  }
  return (
    <div className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm">
      <span className="text-muted-foreground">{icon}</span>
      <span>{label}</span>
    </div>
  );
}

function QuoteCard() {
  return (
    <div className="rounded-xl border border-primary/30 bg-gradient-to-r from-primary/10 to-transparent p-5">
      <p className="font-medium text-foreground">
        "The best developers are perpetual learners."
      </p>
      <p className="mt-1 text-sm text-muted-foreground">
        I dedicate time each week to explore new technologies, contribute to
        open source, and share knowledge with the community.
      </p>
    </div>
  );
}

function GoodreadsWidget() {
  // ENGLISH COMMENT LINE: Goodreads custom widget iframe
  const src = `https://www.goodreads.com/review/custom_widget/${GOODREADS.userId}.${GOODREADS.shelf}.html?cover_position=left&cover_size=small&num_books=3&order=d&shelf=${GOODREADS.shelf}&show_author=1&show_cover=1&show_rating=1&show_review=0&show_tags=0&show_title=1&show_user=0&widget_bg_color=${GOODREADS.bg}&widget_text_color=${GOODREADS.text}&widget_link_color=${GOODREADS.link}`;

  return (
    <div className="mt-3 overflow-hidden rounded-lg border border-border">
      <iframe
        title="Goodreads Reading Widget"
        src={src}
        className="h-[220px] w-full"
        loading="lazy"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
