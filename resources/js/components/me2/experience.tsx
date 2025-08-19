import { Code, MapPin, Zap } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      period: '2024 – Present',
      title: 'Freelance Full Stack Developer',
      company: 'Independent',
      location: 'Remote',
      type: 'Freelance',
      description:
        'Delivering custom web solutions for clients worldwide, specializing in Laravel applications with modern front-end frameworks.',
      achievements: [
        'Built 10+ production applications using TALL stack',
        'Implemented real-time features with Laravel Livewire',
        'Developed custom FilamentPHP admin panels',
        'Maintained 100% client satisfaction rating',
      ],
      stack: ['Laravel', 'Livewire', 'React', 'Vue', 'Tailwind', 'AWS'],
      color: 'bg-primary',
    },
    {
      period: '2022 – 2024',
      title: 'Lead Full Stack Developer',
      company: 'PT Tech Solutions C',
      location: 'Jakarta, Indonesia',
      type: 'Full-time',
      description:
        'Led development team in creating enterprise-level web applications and mentored junior developers.',
      achievements: [
        'Architected microservices infrastructure serving 100k+ users',
        'Reduced application load times by 60% through optimization',
        'Mentored team of 5 junior developers',
        'Implemented comprehensive testing strategy (TDD)',
      ],
      stack: ['Laravel', 'React', 'PostgreSQL', 'Docker', 'AWS'],
      color: 'bg-secondary',
    },
    {
      period: '2017 – 2022',
      title: 'Lead Full Stack Developer',
      company: 'PT Digital Innovation B',
      location: 'Jakarta, Indonesia',
      type: 'Full-time',
      description:
        'Spearheaded development of customer-facing applications and internal management systems.',
      achievements: [
        'Built CRM system processing $2M+ in transactions',
        'Integrated payment gateways and third-party APIs',
        'Developed mobile-responsive web applications',
        'Established code review and deployment processes',
      ],
      stack: ['Laravel', 'Vue.js', 'MySQL', 'Bootstrap', 'Linux'],
      color: 'bg-accent',
    },
    {
      period: '2016 – 2017',
      title: 'Full Stack Developer',
      company: 'PT Web Agency A',
      location: 'Jakarta, Indonesia',
      type: 'Full-time',
      description:
        'Developed dynamic websites and web applications for various clients across different industries.',
      achievements: [
        'Delivered 20+ client projects on time and budget',
        'Mastered Laravel framework and MVC architecture',
        'Built responsive designs with Bootstrap and jQuery',
        'Collaborated with design team on UX/UI implementation',
      ],
      stack: ['Laravel', 'PHP', 'jQuery', 'Bootstrap', 'MySQL'],
      color: 'bg-neo-green',
    },
    {
      period: '2015',
      title: 'Intern Web Developer',
      company: 'Local Web Studio',
      location: 'Jakarta, Indonesia',
      type: 'Internship',
      description:
        'Learned foundations of web development and gained hands-on experience with modern web technologies.',
      achievements: [
        'Completed intensive 6-month web development program',
        'Built first full-stack application with PHP and MySQL',
        'Learned HTML, CSS, JavaScript fundamentals',
        'Contributed to 3 live client projects',
      ],
      stack: ['PHP', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
      color: 'bg-neo-orange',
    },
  ];

  return (
    <section
      id="experience"
      className="neo-section px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="font-brutal mb-6 text-4xl text-foreground md:text-5xl">
            WORK <span className="text-primary">EXPERIENCE</span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl font-bold text-muted-foreground">
            Nearly a decade of building robust web applications and leading
            development teams
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 hidden h-full w-1 -translate-x-1/2 transform bg-border lg:block"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`items-center lg:flex ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 z-10 hidden h-6 w-6 -translate-x-1/2 transform border-4 border-border bg-primary lg:block"></div>

                {/* Content */}
                <div
                  className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}
                >
                  <div className="neo-card p-6">
                    {/* Header */}
                    <div className="mb-4 flex flex-wrap items-center gap-2">
                      <span
                        className={`neo-badge ${exp.color} text-background`}
                      >
                        {exp.period}
                      </span>
                      <span className="neo-badge bg-muted text-muted-foreground">
                        {exp.type}
                      </span>
                    </div>

                    <h3 className="font-brutal mb-2 text-xl text-foreground">
                      {exp.title}
                    </h3>

                    <div className="mb-4 flex items-center gap-4 text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Code className="h-4 w-4" />
                        <span className="font-bold">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span className="font-bold">{exp.location}</span>
                      </div>
                    </div>

                    <p className="mb-4 font-medium text-foreground">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="mb-2 text-sm font-bold tracking-wide text-primary uppercase">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm"
                          >
                            <Zap className="text-neo-green mt-1 h-3 w-3 flex-shrink-0" />
                            <span className="font-medium">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h4 className="mb-2 text-sm font-bold tracking-wide text-primary uppercase">
                        Tech Stack:
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {exp.stack.map((tech) => (
                          <span
                            key={tech}
                            className="neo-badge text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
