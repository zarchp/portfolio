'use client';

import { Code2, Lightbulb, Rocket, Zap } from 'lucide-react';

export default function About() {
  return (
    <section
      id="about"
      className="bg-background py-24"
    >
      <div className="container mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
          {/* Left Column - Main Philosophy */}
          <div className="space-y-8">
            <div>
              <h2 className="font-display mb-6 text-4xl font-semibold text-foreground">
                About Me
              </h2>
              <div className="mb-8 h-1 w-16 rounded-full bg-primary" />
            </div>

            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I believe in crafting digital experiences that are not just
                functional, but truly delightful. My development philosophy
                centers on writing clean, maintainable code that scales
                gracefully while prioritizing user experience at every
                touchpoint.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                With over 8 years in the industry, I've learned that the best
                solutions often come from understanding the problem deeply
                before diving into implementation. I approach each project with
                curiosity, asking the right questions to build software that
                genuinely serves its users.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                Technology moves fast, but principles endure. I focus on
                mastering fundamentals while staying curious about emerging
                tools and methodologies that can enhance the development process
                and user outcomes.
              </p>
            </div>

            {/* Philosophy Pillars */}
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="flex items-start space-x-4">
                <div className="rounded-lg border border-border bg-card p-3">
                  <Code2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-display mb-2 font-medium text-foreground">
                    Clean Code
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Writing maintainable, scalable solutions that stand the test
                    of time
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="rounded-lg border border-border bg-card p-3">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-display mb-2 font-medium text-foreground">
                    User-Centric
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Prioritizing user experience and accessibility in every
                    decision
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Tech Exploration */}
          <div className="space-y-8">
            {/* Visual Element - Profile Placeholder */}
            <div className="mb-8 rounded-2xl border border-border bg-card p-8 text-center">
              <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/5">
                <Rocket className="h-12 w-12 text-primary" />
              </div>
              <div className="space-y-2">
                <p className="font-display font-medium text-foreground">
                  Always Exploring
                </p>
                <p className="text-sm text-muted-foreground">
                  Passionate about emerging technologies and innovative
                  solutions
                </p>
              </div>
            </div>

            {/* Current Exploration */}
            <div className="rounded-xl border border-border bg-card p-8">
              <div className="mb-6 flex items-center space-x-3">
                <Zap className="h-6 w-6 text-warning" />
                <h3 className="font-display text-xl font-medium text-foreground">
                  Currently Exploring
                </h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-display mb-3 font-medium text-foreground">
                    NativePHP
                  </h4>
                  <p className="mb-4 leading-relaxed text-muted-foreground">
                    Fascinated by NativePHP's approach to building native
                    desktop applications using familiar web technologies.
                    Exploring how it bridges the gap between web and desktop
                    development.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                      Desktop Apps
                    </span>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                      PHP
                    </span>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                      Electron Alternative
                    </span>
                  </div>
                </div>

                <div className="border-t border-border pt-6">
                  <h4 className="font-display mb-3 font-medium text-foreground">
                    Other Interests
                  </h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center space-x-3">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span>
                        WebAssembly for performance-critical applications
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span>Edge computing and serverless architectures</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span>AI-assisted development workflows</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span>Progressive Web App capabilities</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Learning Mindset */}
            <div className="rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent p-6">
              <p className="mb-2 font-medium text-foreground">
                "The best developers are perpetual learners."
              </p>
              <p className="text-sm text-muted-foreground">
                I dedicate time each week to exploring new technologies,
                contributing to open source, and sharing knowledge with the
                developer community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
