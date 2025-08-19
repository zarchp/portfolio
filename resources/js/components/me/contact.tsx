'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budgetRange: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after success message
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        projectType: '',
        budgetRange: '',
        message: '',
      });
    }, 3000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const projectTypes = [
    'Web Application',
    'Mobile App',
    'E-commerce Platform',
    'API Development',
    'Desktop Application',
    'Consulting',
    'Other',
  ];

  const budgetRanges = [
    'Under $5K',
    '$5K - $15K',
    '$15K - $30K',
    '$30K - $50K',
    '$50K+',
    'Hourly Rate',
    'To be discussed',
  ];

  const preferredMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'Primary',
      description: 'Best for detailed discussions',
    },
    {
      icon: Phone,
      label: 'Video Call',
      value: 'Available',
      description: 'For complex project planning',
    },
  ];

  const lookingFor = [
    'Long-term partnerships',
    'Interesting tech challenges',
    'Remote-first opportunities',
    'Full-stack projects',
    'Modern tech stacks',
    'Collaborative teams',
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: '#', handle: '@developer' },
    { icon: Linkedin, label: 'LinkedIn', href: '#', handle: '/in/developer' },
    { icon: Twitter, label: 'Twitter', href: '#', handle: '@developer' },
  ];

  return (
    <section
      id="contact"
      className="bg-background py-24"
    >
      <div className="container mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold lg:text-5xl">
            Let's Work Together
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Ready to bring your ideas to life? Get in touch and let's discuss
            how we can create something amazing together.
          </p>
        </div>

        {/* Main Contact Grid */}
        <div className="mb-16 grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="rounded-lg border bg-card p-8">
            <div className="mb-8">
              <h3 className="mb-2 text-2xl font-semibold">Send a Message</h3>
              <p className="text-muted-foreground">
                Tell me about your project and I'll get back to you within 24
                hours.
              </p>
            </div>

            {isSubmitted ? (
              <div className="py-12 text-center">
                <CheckCircle2 className="mx-auto mb-4 h-16 w-16 text-success" />
                <h4 className="mb-2 text-xl font-semibold">Message Sent!</h4>
                <p className="text-muted-foreground">
                  Thanks for reaching out. I'll get back to you soon.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange('name', e.target.value)
                      }
                      placeholder="Your name"
                      required
                      className="bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange('email', e.target.value)
                      }
                      placeholder="your@email.com"
                      required
                      className="bg-background"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="projectType">Project Type</Label>
                    <Select
                      value={formData.projectType}
                      onValueChange={(value) =>
                        handleInputChange('projectType', value)
                      }
                    >
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        {projectTypes.map((type) => (
                          <SelectItem
                            key={type}
                            value={type}
                          >
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="budgetRange">Budget Range</Label>
                    <Select
                      value={formData.budgetRange}
                      onValueChange={(value) =>
                        handleInputChange('budgetRange', value)
                      }
                    >
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        {budgetRanges.map((range) => (
                          <SelectItem
                            key={range}
                            value={range}
                          >
                            {range}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange('message', e.target.value)
                    }
                    placeholder="Tell me about your project, timeline, and any specific requirements..."
                    rows={5}
                    required
                    className="resize-none bg-background"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="rounded-lg border bg-card p-8">
              <h3 className="mb-6 text-2xl font-semibold">Get in Touch</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-medium">Email</h4>
                    <p className="mb-2 text-muted-foreground">
                      hello@developer.com
                    </p>
                    <Badge
                      variant="secondary"
                      className="text-xs"
                    >
                      Usually responds within 2-4 hours
                    </Badge>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-medium">Location</h4>
                    <p className="text-muted-foreground">
                      Remote • Available globally
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-success/10 p-2">
                    <CheckCircle2 className="h-5 w-5 text-success" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-medium">Availability</h4>
                    <p className="mb-2 text-muted-foreground">
                      Currently accepting new projects
                    </p>
                    <Badge className="border-success/20 bg-success/10 text-success">
                      Available for hire
                    </Badge>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-medium">Response Time</h4>
                    <p className="text-muted-foreground">
                      Within 24 hours • Often much faster
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Preferred Contact Methods */}
            <div className="rounded-lg border bg-card p-8">
              <h3 className="mb-6 text-xl font-semibold">
                Preferred Contact Methods
              </h3>

              <div className="space-y-4">
                {preferredMethods.map((method) => (
                  <div
                    key={method.label}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <method.icon className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">{method.label}</p>
                        <p className="text-sm text-muted-foreground">
                          {method.description}
                        </p>
                      </div>
                    </div>
                    <Badge variant="outline">{method.value}</Badge>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="rounded-lg border bg-card p-8">
              <h3 className="mb-6 text-xl font-semibold">Connect on Social</h3>

              <div className="space-y-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="group flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-secondary/50"
                  >
                    <social.icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
                    <div className="flex-1">
                      <p className="font-medium">{social.label}</p>
                      <p className="text-sm text-muted-foreground">
                        {social.handle}
                      </p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-12" />

        {/* What I'm Looking For */}
        <div className="rounded-lg border bg-card p-8">
          <div className="mb-8 text-center">
            <h3 className="mb-4 text-2xl font-semibold">
              What I'm Looking For
            </h3>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              I'm passionate about working on projects that challenge me
              technically and allow me to create meaningful impact. Here's what
              excites me most:
            </p>
          </div>

          <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {lookingFor.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-lg border border-primary/10 bg-primary/5 p-4"
              >
                <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="mb-6 text-muted-foreground">
              If your project aligns with these interests, I'd love to hear from
              you. Let's build something extraordinary together.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-success"></div>
                <span>Available for new projects</span>
              </div>
              <Separator
                orientation="vertical"
                className="h-4"
              />
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Starting January 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
