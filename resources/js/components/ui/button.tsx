import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
        outline:
          "border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        neo: "neo-button uppercase tracking-wide",
        "neo-secondary": "bg-secondary text-secondary-foreground border-[3px] border-border shadow-brutal hover:shadow-brutal-hover hover:translate-x-[3px] hover:translate-y-[3px] active:shadow-none active:translate-x-[6px] active:translate-y-[6px] uppercase tracking-wide font-bold transition-all duration-200",
        "neo-accent": "bg-accent text-accent-foreground border-[3px] border-border shadow-brutal hover:shadow-brutal-hover hover:translate-x-[3px] hover:translate-y-[3px] active:shadow-none active:translate-x-[6px] active:translate-y-[6px] uppercase tracking-wide font-bold transition-all duration-200",
        "neo-outline": "bg-background text-foreground border-[3px] border-border shadow-brutal hover:shadow-brutal-hover hover:translate-x-[3px] hover:translate-y-[3px] active:shadow-none active:translate-x-[6px] active:translate-y-[6px] uppercase tracking-wide font-bold transition-all duration-200",
        "neo-destructive": "bg-destructive text-destructive-foreground border-[3px] border-border shadow-brutal hover:shadow-brutal-hover hover:translate-x-[3px] hover:translate-y-[3px] active:shadow-none active:translate-x-[6px] active:translate-y-[6px] uppercase tracking-wide font-bold transition-all duration-200",
        candy: "hover:from-brand-secondary hover:to-brand-secondary bg-gradient-to-b from-brand text-shadow-sm to-brand-secondary text-white shadow-custom-brand",
        outliner:
          "from-smooth-100 to-background bg-gradient-to-b hover:from-background hover:text-foreground shadow-custom-btgray border",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "neo-default": "h-12 px-6 py-3",
        "neo-lg": "h-16 px-8 py-4 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
