export function Skills() {
  const skillCategories = [
    {
      title: 'Front-End',
      color: 'bg-primary',
      skills: [
        'React',
        'Vue.js',
        'Tailwind CSS',
        'Alpine.js',
        'Bootstrap',
        'jQuery',
        'JavaScript',
        'TypeScript',
      ],
    },
    {
      title: 'Back-End',
      color: 'bg-secondary',
      skills: [
        'Laravel',
        'PHP',
        'Livewire',
        'FilamentPHP',
        'API Development',
        'REST',
        'GraphQL',
        'TDD',
      ],
    },
    {
      title: 'Databases',
      color: 'bg-accent',
      skills: [
        'MySQL',
        'PostgreSQL',
        'Oracle',
        'SQLite',
        'SQL Server',
        'NoSQL',
        'Redis',
        'Database Design',
      ],
    },
    {
      title: 'DevOps & Tools',
      color: 'bg-neo-green',
      skills: [
        'AWS',
        'Alibaba Cloud',
        'Oracle Cloud',
        'Docker',
        'Linux',
        'Windows Server',
        'Git',
        'CI/CD',
      ],
    },
    {
      title: 'Emerging Tech',
      color: 'bg-neo-orange',
      skills: [
        'NativePHP',
        'Microservices',
        'Serverless',
        'PWAs',
        'WebSockets',
        'Real-time Apps',
        'Mobile Development',
        'Desktop Apps',
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="neo-section bg-muted px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="font-brutal mb-6 text-4xl text-foreground md:text-5xl">
            TECHNICAL <span className="text-primary">SKILLS</span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl font-bold text-muted-foreground">
            A comprehensive toolkit built over years of hands-on development
            experience
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="neo-card p-6"
            >
              <div className="mb-6 flex items-center gap-3">
                <div
                  className={`h-4 w-4 ${category.color} border-2 border-border`}
                ></div>
                <h3 className="font-brutal text-xl tracking-wide text-foreground uppercase">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="neo-badge text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Specialization Highlight */}
        <div className="neo-card mt-12 bg-primary p-8 text-center">
          <h3 className="font-brutal mb-4 text-2xl text-primary-foreground">
            TALL STACK SPECIALIST
          </h3>
          <p className="mb-6 text-lg font-bold text-primary-foreground/90">
            Tailwind CSS • Alpine.js • Laravel • Livewire
          </p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              'Rapid Development',
              'Real-time UIs',
              'Modern Styling',
              'Full-Stack Power',
            ].map((benefit) => (
              <div
                key={benefit}
                className="neo-badge bg-primary-foreground text-xs text-primary"
              >
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
