export function About() {
  return (
    <section
      id="about"
      className="neo-section px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="font-brutal mb-6 text-4xl text-foreground md:text-5xl">
            ABOUT <span className="text-primary">ME</span>
          </h2>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-2">
          {/* Main Content */}
          <div className="neo-card p-8">
            <h3 className="mb-6 text-2xl font-bold text-primary">My Journey</h3>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                For nearly a decade, I've been passionate about crafting robust,
                scalable web applications that solve real-world problems. My
                journey began as an intern web developer in 2015, and I've since
                evolved into a senior full-stack developer with deep expertise
                in the TALL stack.
              </p>
              <p>
                I thrive on the challenge of gathering requirements, analyzing
                complex problems, and designing elegant solutions. Whether it's
                building a custom CRM with FilamentPHP, implementing real-time
                features with Laravel Livewire, or creating responsive
                interfaces with React and Vue, I approach every project with
                curiosity and attention to detail.
              </p>
              <p>
                Currently, I'm exploring the exciting possibilities of{' '}
                <strong>NativePHP</strong> to extend Laravel applications to
                mobile and desktop platforms. Continuous learning isn't just a
                necessity in tech—it's my passion.
              </p>
            </div>
          </div>

          {/* Stats & Highlights */}
          <div className="space-y-6">
            <div className="neo-card bg-secondary p-6">
              <h3 className="mb-4 text-xl font-bold text-secondary-foreground">
                By the Numbers
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="font-brutal mb-2 text-3xl text-primary">
                    10
                  </div>
                  <div className="text-sm font-bold tracking-wide uppercase">
                    Years Experience
                  </div>
                </div>
                <div className="text-center">
                  <div className="font-brutal mb-2 text-3xl text-accent">
                    50+
                  </div>
                  <div className="text-sm font-bold tracking-wide uppercase">
                    Projects Delivered
                  </div>
                </div>
                <div className="text-center">
                  <div className="font-brutal text-neo-green mb-2 text-3xl">
                    100%
                  </div>
                  <div className="text-sm font-bold tracking-wide uppercase">
                    Client Satisfaction
                  </div>
                </div>
                <div className="text-center">
                  <div className="font-brutal text-neo-orange mb-2 text-3xl">
                    24/7
                  </div>
                  <div className="text-sm font-bold tracking-wide uppercase">
                    Support Ready
                  </div>
                </div>
              </div>
            </div>

            <div className="neo-card bg-accent p-6">
              <h3 className="mb-4 text-xl font-bold text-accent-foreground">
                Core Values
              </h3>
              <ul className="space-y-3">
                {[
                  'Clean, maintainable code',
                  'Test-driven development',
                  'User-centered design',
                  'Continuous improvement',
                  'Reliable communication',
                ].map((value) => (
                  <li
                    key={value}
                    className="flex items-center gap-3"
                  >
                    <div className="h-3 w-3 border-2 border-border bg-accent-foreground"></div>
                    <span className="font-bold">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
