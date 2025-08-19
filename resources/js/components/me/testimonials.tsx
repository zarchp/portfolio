'use client';

import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import AutoScroll from 'embla-carousel-auto-scroll';
import { ChevronRight } from 'lucide-react';
import { useRef } from 'react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CTO at TechFlow',
    company: 'TechFlow Solutions',
    avatar: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Sarah%20Chen',
    content:
      'Working with this developer on our e-commerce platform rebuild was exceptional. They delivered clean, scalable React code ahead of schedule and their communication throughout the project was outstanding. The attention to performance optimization saved us significant hosting costs.',
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Product Manager at InnovateLab',
    company: 'InnovateLab',
    avatar:
      'https://api.dicebear.com/9.x/adventurer/svg?seed=Marcus%20Rodriguez',
    content:
      'Their full-stack expertise with Node.js and PostgreSQL helped us launch our SaaS product two months early. They proactively suggested improvements and handled complex database migrations flawlessly. A true professional who understands both technical and business requirements.',
  },
  {
    name: 'Emma Taylor',
    role: 'Startup Founder',
    company: 'GreenTech Ventures',
    avatar: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Emma%20Taylor',
    content:
      'As a non-technical founder, I needed someone who could explain complex concepts clearly. They built our MVP from scratch using Next.js and made sure I understood every decision. The code quality and documentation they provided made it easy for our future hires to contribute.',
  },
  {
    name: 'David Kim',
    role: 'Lead Developer at DataSync',
    company: 'DataSync Corp',
    avatar: 'https://api.dicebear.com/9.x/adventurer/svg?seed=David%20Kim',
    content:
      'Their expertise in API integration and microservices architecture was exactly what we needed. They seamlessly integrated multiple third-party services and built robust error handling. The Docker containerization they implemented simplified our deployment process significantly.',
  },
  {
    name: 'Lisa Brown',
    role: 'Creative Director at DesignCo',
    company: 'DesignCo Studio',
    avatar: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Lisa%20Brown',
    content:
      "Collaborating on our agency's new website was a breeze. They translated our Figma designs into pixel-perfect React components with smooth animations. Their attention to accessibility and mobile responsiveness exceeded our expectations. Highly reliable and creative problem solver.",
  },
  {
    name: 'James Wilson',
    role: 'Engineering Manager at CloudTech',
    company: 'CloudTech Industries',
    avatar: 'https://api.dicebear.com/9.x/adventurer/svg?seed=James%20Wilson',
    content:
      'They joined our team as a contractor for a critical dashboard project using TypeScript and D3.js. Not only did they deliver exceptional code, but they also mentored junior developers and established better testing practices. Their collaborative approach made the entire team more productive.',
  },
];

const Testimonials = () => {
  const plugin = useRef(
    AutoScroll({
      startDelay: 500,
      speed: 0.7,
    }),
  );

  return (
    <section
      id="testimonials"
      className="bg-background py-32"
    >
      <div className="container mx-auto flex flex-col items-center gap-4">
        <h2 className="font-display text-center text-3xl font-semibold lg:text-4xl">
          What Clients Say
        </h2>
        <p className="font-body text-center text-muted-foreground lg:text-lg">
          Testimonials from clients who've trusted me with their development
          projects
        </p>
        <a
          href="#contact"
          className="flex items-center gap-1 font-semibold text-primary transition-colors hover:text-primary/80"
        >
          Get in touch for your project
          <ChevronRight className="mt-0.5 h-4 w-auto" />
        </a>
      </div>
      <div className="mx-auto lg:container">
        <div className="mt-16 space-y-4">
          <Carousel
            opts={{
              loop: true,
            }}
            plugins={[plugin.current]}
            onMouseLeave={() => plugin.current.play()}
            className="relative before:absolute before:top-0 before:bottom-0 before:left-0 before:z-10 before:w-36 before:bg-linear-to-r before:from-background before:to-transparent after:absolute after:top-0 after:right-0 after:bottom-0 after:z-10 after:w-36 after:bg-linear-to-l after:from-background after:to-transparent"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="basis-auto"
                >
                  <Card className="max-w-96 border-border bg-card p-6 select-none">
                    <div className="mb-4 flex gap-4">
                      <Avatar className="size-14 rounded-full ring-1 ring-input">
                        <AvatarImage
                          src={testimonial.avatar}
                          alt={testimonial.name}
                        />
                      </Avatar>
                      <div>
                        <p className="font-display font-medium">
                          {testimonial.name}
                        </p>
                        <p className="font-body text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                        <p className="font-body text-xs text-primary">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                    <q className="font-body leading-7 text-muted-foreground">
                      {testimonial.content}
                    </q>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export { Testimonials };
