'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { profile } from '@/data/profile';
import { fadeInUp, slideInUp, staggerContainer } from '@/lib/motion';
import { SiWhatsapp } from '@icons-pack/react-simple-icons';
import {
  CheckCircle2,
  Download,
  Github,
  Linkedin,
  Mail,
  MessageSquareText,
  Phone,
  SendHorizontal,
  Twitter,
} from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { MotionOnVisible } from '../motion/motion-on-visible';
import {
  Section,
  SectionBadge,
  SectionContainer,
  SectionContent,
  SectionDescription,
  SectionHeader,
  SectionTitle,
} from './section';

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
    <Section id="contact">
      <SectionContainer>
        <MotionOnVisible variants={fadeInUp}>
          <SectionHeader>
            <SectionBadge>
              <MessageSquareText className="size-4" />
              Get in Touch
            </SectionBadge>
            <SectionTitle>Let's Work Together</SectionTitle>
            <SectionDescription>
              Ready to bring your ideas to life? I’m open to new opportunities,
              collaborations, or a quick chat. Let’s create something great
              together.
            </SectionDescription>
          </SectionHeader>
        </MotionOnVisible>

        <SectionContent>
          <MotionOnVisible
            variants={staggerContainer(0.2)}
            className="mx-auto flex max-w-xl flex-col gap-12"
          >
            <motion.div variants={slideInUp}>
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
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange('name', e.target.value)
                        }
                        placeholder="Your name"
                        required
                        className="bg-background dark:bg-input/30"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
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
                        className="bg-background dark:bg-input/30"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange('message', e.target.value)
                      }
                      placeholder="How can i help you?"
                      rows={8}
                      required
                      className="h-32 resize-none bg-background"
                    />
                  </div>

                  <div className="flex justify-center">
                    <Button
                      variant="candy"
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="group"
                    >
                      {isSubmitting ? (
                        'Sending...'
                      ) : (
                        <>
                          Send Message
                          <SendHorizontal className="ml-2 h-4 w-4 duration-300 group-hover:translate-x-1" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </motion.div>

            <motion.div
              variants={slideInUp}
              className="flex flex-col items-center justify-center gap-6"
            >
              <div>Or reach me directly:</div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <Button
                  variant="outliner"
                  size="lg"
                >
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center gap-2"
                  >
                    <Download className="size-4" />
                    Download CV
                  </a>
                </Button>

                <Button
                  variant="outliner"
                  size="lg"
                >
                  <a
                    href={profile.links.whatsapp}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center gap-2"
                  >
                    <SiWhatsapp className="size-4" />
                    Chat on Whatsapp
                  </a>
                </Button>
                <Button
                  variant="outliner"
                  size="lg"
                >
                  <a
                    href={`mailto:${profile.email}`}
                    rel="noreferrer noopener"
                    className="flex items-center gap-2"
                  >
                    <Mail className="size-4" />
                    Send Email
                  </a>
                </Button>
              </div>
            </motion.div>
          </MotionOnVisible>
        </SectionContent>
      </SectionContainer>
    </Section>
  );
}
