"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: Linkedin,
    },
    {
      name: "Twitter",
      href: "https://twitter.com",
      icon: Twitter,
    },
    {
      name: "Email",
      href: "mailto:hello@example.com",
      icon: Mail,
    },
  ]

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <Button
                  key={link.name}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="h-10 w-10 rounded-full hover:bg-secondary transition-colors duration-200"
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                </Button>
              )
            })}
          </div>

          {/* Copyright and Credits */}
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              © {currentYear} All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Built with{" "}
              <a
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors duration-200"
              >
                Next.js
              </a>
              ,{" "}
              <a
                href="https://tailwindcss.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors duration-200"
              >
                Tailwind CSS
              </a>
              , and{" "}
              <a
                href="https://ui.shadcn.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors duration-200"
              >
                shadcn/ui
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
