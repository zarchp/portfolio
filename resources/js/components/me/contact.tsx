// ALWAYS WRITE IN ENGLISH COMMENT LINE AND IN ENGLISH CODE
// Principal Engineer refactor: Inertia useForm + proper UX states

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
  CircleAlert,
  Download,
  Mail,
  MessageSquareText,
  SendHorizontal,
} from 'lucide-react';
import { motion } from 'motion/react';
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

import { useForm, usePage } from '@inertiajs/react';

export default function Contact() {
  const form = useForm({
    name: '',
    email: '',
    message: '',
    website: '', // honeypot
  });

  const { props } = usePage<{ flash: { success?: string; error?: string } }>();
  const flash = props.flash;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    form.post('/contact', {
      preserveScroll: true,
      onSuccess: () => {
        form.reset('name', 'email', 'message', 'website');
      },
    });
  }

  return (
    <Section
      id="contact"
      className="section-deferred"
    >
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
              {flash?.success && (
                <div className="mb-6 rounded-xl border border-success/30 bg-success/10 p-4 text-center text-success">
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle2 className="size-10 md:size-5" />
                    <span>{flash.success}</span>
                  </div>
                </div>
              )}

              {flash?.error && (
                <div className="mb-6 rounded-xl border border-destructive/30 bg-destructive/10 p-4 text-center text-destructive-foreground">
                  <div className="flex items-center justify-center gap-2">
                    <CircleAlert className="size-10 md:size-5" />
                    <span>{flash.error}</span>
                  </div>
                </div>
              )}

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
                noValidate
              >
                <input
                  type="text"
                  name="website"
                  value={form.data.website}
                  onChange={(e) => form.setData('website', e.target.value)}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      value={form.data.name}
                      onChange={(e) => form.setData('name', e.target.value)}
                      placeholder="Your name"
                      required
                      className="bg-background/70"
                    />
                    {form.errors.name && (
                      <p className="text-xs text-destructive-foreground">
                        {form.errors.name}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={form.data.email}
                      onChange={(e) => form.setData('email', e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="bg-background/70"
                    />
                    {form.errors.email && (
                      <p className="text-xs text-destructive-foreground">
                        {form.errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={form.data.message}
                    onChange={(e) => form.setData('message', e.target.value)}
                    placeholder="How can I help you?"
                    rows={8}
                    required
                    className="dark:bg-backround/70 h-32 resize-none bg-background/70"
                  />
                  {form.errors.message && (
                    <p className="text-xs text-destructive-foreground">
                      {form.errors.message}
                    </p>
                  )}
                </div>

                <div className="flex justify-center">
                  <Button
                    variant="candy"
                    type="submit"
                    size="lg"
                    disabled={form.processing}
                    className="group"
                    data-umami-event="contact-send-message-button"
                  >
                    {form.processing ? (
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
                  asChild
                  data-umami-event="contact-download-cv-button"
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
                  asChild
                  data-umami-event="contact-whatsapp-button"
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
                  asChild
                  data-umami-event="contact-email-button"
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
