import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'Enterprise CRM System',
      subtitle: 'Customer Relationship Management Platform',
      type: 'Web Application',
      duration: '6 months',
      summary:
        'Built a comprehensive CRM system for a mid-size company to manage customer relationships, sales pipeline, and business analytics.',
      challenge:
        'The client needed to replace multiple disconnected systems with a unified platform that could handle complex business workflows and real-time reporting.',
      solution:
        'Developed a modular Laravel application with FilamentPHP admin interface, real-time notifications using Livewire, and responsive dashboard with Chart.js integration.',
      result:
        'Increased sales team productivity by 40% and reduced customer response time from 24 hours to 2 hours. System now handles 10,000+ customers and $2M+ in transactions.',
      stack: [
        'Laravel',
        'FilamentPHP',
        'Livewire',
        'MySQL',
        'Tailwind',
        'Chart.js',
      ],
      github: '#',
      live: '#',
      color: 'bg-primary',
    },
    {
      title: 'Real-time Trading Dashboard',
      subtitle: 'Financial Data Visualization Platform',
      type: 'SPA Application',
      duration: '4 months',
      summary:
        'Created a real-time trading dashboard for cryptocurrency and stock market data with live price updates and portfolio tracking.',
      challenge:
        'Building a performant application that could handle thousands of real-time data points while maintaining smooth user experience across devices.',
      solution:
        'Built with React and WebSocket connections for real-time data, implemented efficient state management with Redux, and optimized rendering with virtual scrolling.',
      result:
        'Successfully handles 50,000+ concurrent users with sub-100ms latency. Featured on Product Hunt and gained 10,000+ active users in first month.',
      stack: ['React', 'Redux', 'WebSocket', 'Node.js', 'PostgreSQL', 'Redis'],
      github: '#',
      live: '#',
      color: 'bg-secondary',
    },
    {
      title: 'E-learning Management System',
      subtitle: 'Online Education Platform',
      type: 'Full-Stack Platform',
      duration: '8 months',
      summary:
        'Developed a comprehensive e-learning platform with course management, video streaming, assessments, and student progress tracking.',
      challenge:
        'Creating a scalable platform that could handle video content delivery, real-time collaboration features, and complex assessment logic for 10,000+ students.',
      solution:
        'Architected microservices with Laravel for API, Vue.js for student interface, and integrated AWS S3 for video storage with CloudFront CDN for global delivery.',
      result:
        'Platform serves 25,000+ students across 150+ courses. Achieved 98% uptime and reduced video loading times by 70% through CDN optimization.',
      stack: ['Laravel', 'Vue.js', 'AWS S3', 'CloudFront', 'MySQL', 'Redis'],
      github: '#',
      live: '#',
      color: 'bg-accent',
    },
    {
      title: 'Multi-tenant SaaS Platform',
      subtitle: 'Project Management Tool',
      type: 'SaaS Application',
      duration: '10 months',
      summary:
        'Built a multi-tenant project management SaaS with team collaboration, time tracking, and advanced reporting features.',
      challenge:
        'Designing a secure multi-tenant architecture that could scale efficiently while maintaining data isolation and performance across thousands of organizations.',
      solution:
        'Implemented tenant-aware Laravel application with database-per-tenant strategy, integrated Stripe for billing, and built REST API with rate limiting and caching.',
      result:
        'Onboarded 500+ organizations in first year, processing $100K+ in recurring revenue. System maintains 99.9% uptime with sub-200ms response times.',
      stack: ['Laravel', 'React', 'Stripe', 'PostgreSQL', 'Docker', 'AWS'],
      github: '#',
      live: '#',
      color: 'bg-neo-green',
    },
    {
      title: 'IoT Data Analytics Platform',
      subtitle: 'Industrial Monitoring System',
      type: 'IoT Application',
      duration: '5 months',
      summary:
        'Created an IoT data collection and analytics platform for manufacturing companies to monitor equipment performance and predict maintenance needs.',
      challenge:
        'Processing and visualizing massive amounts of sensor data in real-time while providing actionable insights for industrial equipment maintenance.',
      solution:
        'Built data pipeline with Laravel for API management, InfluxDB for time-series data, and React dashboard with real-time charts and alerting system.',
      result:
        'Reduced equipment downtime by 35% through predictive maintenance. System processes 1M+ data points daily from 500+ sensors across 10 facilities.',
      stack: ['Laravel', 'React', 'InfluxDB', 'MQTT', 'Grafana', 'Docker'],
      github: '#',
      live: '#',
      color: 'bg-neo-orange',
    },
    {
      title: 'Mobile-First PWA',
      subtitle: 'Food Delivery Application',
      type: 'Progressive Web App',
      duration: '3 months',
      summary:
        'Developed a mobile-first progressive web app for food delivery with offline capabilities, push notifications, and real-time order tracking.',
      challenge:
        'Creating a native-like mobile experience that works offline and provides real-time updates for delivery tracking across various network conditions.',
      solution:
        'Built PWA with Vue.js and service workers for offline functionality, integrated Web Push API for notifications, and implemented WebSocket for real-time tracking.',
      result:
        'Achieved 90+ Lighthouse score, 60% faster than native app equivalent. Increased user engagement by 45% with push notifications and offline capabilities.',
      stack: [
        'Vue.js',
        'PWA',
        'Service Workers',
        'Laravel',
        'WebSocket',
        'Firebase',
      ],
      github: '#',
      live: '#',
      color: 'bg-neo-purple',
    },
  ];

  return (
    <section
      id="projects"
      className="neo-section bg-muted px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="font-brutal mb-6 text-4xl text-foreground md:text-5xl">
            FEATURED <span className="text-primary">PROJECTS</span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl font-bold text-muted-foreground">
            A showcase of recent full-stack applications built with modern
            technologies
          </p>
        </div>

        <div className="mb-12 grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="neo-card p-6"
            >
              {/* Header */}
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <span className={`neo-badge ${project.color} text-background`}>
                  {project.type}
                </span>
                <span className="neo-badge bg-muted text-muted-foreground">
                  {project.duration}
                </span>
              </div>

              <h3 className="font-brutal mb-2 text-2xl text-foreground">
                {project.title}
              </h3>
              <p className="mb-4 text-lg font-bold text-primary">
                {project.subtitle}
              </p>

              {/* Summary */}
              <p className="mb-4 font-medium text-foreground">
                {project.summary}
              </p>

              {/* Challenge, Solution, Result */}
              <div className="mb-6 space-y-3">
                <div>
                  <h4 className="mb-1 text-sm font-bold tracking-wide text-destructive uppercase">
                    Challenge:
                  </h4>
                  <p className="text-sm font-medium text-muted-foreground">
                    {project.challenge}
                  </p>
                </div>
                <div>
                  <h4 className="text-neo-cyan mb-1 text-sm font-bold tracking-wide uppercase">
                    Solution:
                  </h4>
                  <p className="text-sm font-medium text-muted-foreground">
                    {project.solution}
                  </p>
                </div>
                <div>
                  <h4 className="text-neo-green mb-1 text-sm font-bold tracking-wide uppercase">
                    Result:
                  </h4>
                  <p className="text-sm font-medium text-muted-foreground">
                    {project.result}
                  </p>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="mb-2 text-sm font-bold tracking-wide text-primary uppercase">
                  Tech Stack:
                </h4>
                <div className="flex flex-wrap gap-1">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="neo-badge text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button
                  variant="neo"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <Github className="h-4 w-4" />
                  Code
                </Button>
                <Button
                  variant="neo-secondary"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center">
          <div className="neo-card inline-block bg-primary p-8">
            <h3 className="font-brutal mb-4 text-2xl text-primary-foreground">
              Want to See More?
            </h3>
            <p className="mb-6 text-lg font-bold text-primary-foreground/90">
              Check out my complete portfolio with 50+ projects
            </p>
            <Button
              variant="neo-outline"
              size="neo-lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
