import { Quote, Star } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      quote:
        'Working with this developer was exceptional. The Laravel application they built exceeded our expectations in both functionality and performance. Their attention to detail and proactive communication made the entire process smooth.',
      name: 'Sarah Chen',
      title: 'CTO',
      company: 'TechFlow Solutions',
      rating: 5,
    },
    {
      quote:
        'The TALL stack implementation was perfect for our needs. Real-time features work flawlessly, and the FilamentPHP admin panel is incredibly intuitive. Delivered on time and within budget.',
      name: 'Michael Rodriguez',
      title: 'Product Manager',
      company: 'DataDrive Inc',
      rating: 5,
    },
    {
      quote:
        'Outstanding full-stack developer with deep Laravel expertise. The e-commerce platform they built handles our growing traffic effortlessly. Their code quality and testing practices are top-notch.',
      name: 'Emma Thompson',
      title: 'Lead Developer',
      company: 'Commerce Plus',
      rating: 5,
    },
    {
      quote:
        'Highly skilled in modern web technologies. The React dashboard they created is both beautiful and performant. Great problem-solving skills and always willing to go the extra mile.',
      name: 'David Kim',
      title: 'Startup Founder',
      company: 'InnovateLab',
      rating: 5,
    },
    {
      quote:
        "The most reliable developer we've worked with. Their DevOps knowledge helped us scale our application to handle 10x more traffic. Excellent mentoring skills too.",
      name: 'Lisa Park',
      title: 'Engineering Manager',
      company: 'ScaleUp Technologies',
      rating: 5,
    },
    {
      quote:
        'Exceptional work on our mobile-first PWA. The offline capabilities and performance optimizations were exactly what we needed. Truly understands modern web development.',
      name: 'James Wilson',
      title: 'Digital Director',
      company: 'MobileFirst Agency',
      rating: 5,
    },
  ];

  return (
    <section
      id="testimonials"
      className="neo-section px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="font-brutal mb-6 text-4xl text-foreground md:text-5xl">
            CLIENT <span className="text-primary">TESTIMONIALS</span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl font-bold text-muted-foreground">
            What clients and colleagues say about working with me
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="neo-card relative p-6"
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 -left-3 flex h-8 w-8 items-center justify-center border-3 border-border bg-primary">
                <Quote className="h-4 w-4 text-primary-foreground" />
              </div>

              {/* Rating Stars */}
              <div className="mb-4 flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="fill-neo-orange text-neo-orange h-4 w-4"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="mb-6 leading-relaxed font-medium text-foreground">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="border-t-3 border-border pt-4">
                <div className="font-brutal mb-1 text-lg text-primary">
                  {testimonial.name}
                </div>
                <div className="text-sm font-bold text-muted-foreground">
                  {testimonial.title}
                </div>
                <div className="text-sm font-bold text-muted-foreground">
                  {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client Satisfaction Stats */}
        <div className="neo-card mt-12 bg-secondary p-8">
          <div className="grid gap-6 text-center md:grid-cols-4">
            <div>
              <div className="font-brutal mb-2 text-4xl text-primary">100%</div>
              <div className="font-bold tracking-wide text-secondary-foreground uppercase">
                Client Satisfaction
              </div>
            </div>
            <div>
              <div className="font-brutal mb-2 text-4xl text-accent">50+</div>
              <div className="font-bold tracking-wide text-secondary-foreground uppercase">
                Happy Clients
              </div>
            </div>
            <div>
              <div className="font-brutal text-neo-green mb-2 text-4xl">
                98%
              </div>
              <div className="font-bold tracking-wide text-secondary-foreground uppercase">
                On-Time Delivery
              </div>
            </div>
            <div>
              <div className="font-brutal text-neo-orange mb-2 text-4xl">
                24/7
              </div>
              <div className="font-bold tracking-wide text-secondary-foreground uppercase">
                Support Available
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
