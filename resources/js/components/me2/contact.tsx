import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Github,
  Linkedin,
  Mail,
  MessageSquare,
  Phone,
  Send,
} from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'developer@example.com',
      action: 'mailto:developer@example.com',
      color: 'bg-primary',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+62 812 3456 7890',
      action: 'tel:+6281234567890',
      color: 'bg-secondary',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: '/in/fullstack-dev',
      action: 'https://linkedin.com/in/fullstack-dev',
      color: 'bg-accent',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@fullstack-dev',
      action: 'https://github.com/fullstack-dev',
      color: 'bg-neo-green',
    },
  ];

  const lookingFor = [
    'Remote freelance Laravel/TALL stack projects',
    'Interesting technical challenges',
    'Teams that value clean architecture',
    'Long-term partnership opportunities',
    'Startups needing rapid MVP development',
    'Enterprise applications requiring scale',
  ];

  return (
    <section
      id="contact"
      className="neo-section bg-muted px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="font-brutal mb-6 text-4xl text-foreground md:text-5xl">
            LET'S <span className="text-primary">CONNECT</span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl font-bold text-muted-foreground">
            Got a project in mind? Let's discuss how we can bring your ideas to
            life
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="neo-card p-6">
              <h3 className="font-brutal mb-6 flex items-center gap-3 text-2xl text-foreground">
                <MessageSquare className="h-6 w-6 text-primary" />
                Get In Touch
              </h3>

              <div className="grid gap-4">
                {contactMethods.map((method) => {
                  const Icon = method.icon;
                  return (
                    <a
                      key={method.label}
                      href={method.action}
                      className="neo-card hover:shadow-brutal-hover flex items-center gap-4 p-4 transition-all duration-200 hover:translate-x-[3px] hover:translate-y-[3px]"
                    >
                      <div
                        className={`h-12 w-12 ${method.color} flex items-center justify-center border-3 border-border`}
                      >
                        <Icon className="h-5 w-5 text-background" />
                      </div>
                      <div>
                        <div className="font-bold text-foreground">
                          {method.label}
                        </div>
                        <div className="font-medium text-muted-foreground">
                          {method.value}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* What I'm Looking For */}
            <div className="neo-card p-6">
              <h3 className="font-brutal mb-6 text-2xl text-foreground">
                What I'm Looking For
              </h3>
              <ul className="space-y-3">
                {lookingFor.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <div className="bg-neo-green mt-2 h-3 w-3 flex-shrink-0 border-2 border-border"></div>
                    <span className="font-medium text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Availability */}
            <div className="neo-card bg-primary p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="bg-neo-green h-4 w-4 animate-pulse rounded-full border-2 border-primary-foreground"></div>
                <h3 className="font-brutal text-xl text-primary-foreground">
                  Current Availability
                </h3>
              </div>
              <p className="mb-4 font-bold text-primary-foreground/90">
                ✅ Open to new projects and remote work opportunities
              </p>
              <p className="font-bold text-primary-foreground/90">
                📍 Available for relocation or global remote work
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="neo-card p-6">
            <h3 className="font-brutal mb-6 flex items-center gap-3 text-2xl text-foreground">
              <Send className="h-6 w-6 text-primary" />
              Send a Message
            </h3>

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <label className="mb-2 block text-sm font-bold tracking-wide text-foreground uppercase">
                  Your Name
                </label>
                <Input
                  type="text"
                  placeholder="John Doe"
                  className="neo-input"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold tracking-wide text-foreground uppercase">
                  Email Address
                </label>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  className="neo-input"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold tracking-wide text-foreground uppercase">
                  Project Details
                </label>
                <Textarea
                  placeholder="Tell me about your project, timeline, and requirements..."
                  rows={6}
                  className="neo-input resize-none"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                />
              </div>

              <Button
                type="submit"
                variant="neo"
                size="neo-lg"
                className="flex w-full items-center justify-center gap-3"
              >
                <Send className="h-5 w-5" />
                Send Message
              </Button>
            </form>

            <div className="mt-6 border-3 border-border bg-muted p-4">
              <p className="text-center text-sm font-bold text-muted-foreground">
                💡 Prefer a quick call? Schedule a free 30-minute consultation
                to discuss your project
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
