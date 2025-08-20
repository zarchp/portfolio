import { cn } from '@/lib/utils';
import * as React from 'react';

type DivProps = React.ComponentPropsWithoutRef<'div'>;

function Section({ className, children, ...props }: DivProps) {
  return (
    <div
      className={cn('bg-background py-16', className)}
      {...props}
    >
      {children}
    </div>
  );
}

function SectionContainer({ className, children, ...props }: DivProps) {
  return (
    <div
      className={cn('container mx-auto max-w-5xl px-6', className)}
      {...props}
    >
      {children}
    </div>
  );
}

function SectionHeader({ className, children, ...props }: DivProps) {
  return (
    <div
      className={cn(
        'mb-16 flex flex-col items-center gap-6 text-center',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

function SectionBadge({ className, children, ...props }: DivProps) {
  return (
    <div
      className={cn(
        'flex items-center gap-2 rounded-full border border-brand-200 bg-brand-100 px-4 py-2 text-sm font-semibold text-brand',
        className,
      )}
      {...props}
    >
      {/* <MessageSquareText className="size-4" /> */}
      {children}
    </div>
  );
}

function SectionTitle({ className, children, ...props }: DivProps) {
  return (
    <h2
      className={cn('text-4xl font-bold text-brand lg:text-5xl', className)}
      {...props}
    >
      {children}
    </h2>
  );
}

function SectionDescription({ className, children, ...props }: DivProps) {
  return (
    <p
      className={cn(
        'mx-auto max-w-3xl text-lg text-muted-foreground',
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
}

function SectionContent({ className, children, ...props }: DivProps) {
  return (
    <p
      className={cn('', className)}
      {...props}
    >
      {children}
    </p>
  );
}

export {
  Section,
  SectionBadge,
  SectionContainer,
  SectionContent,
  SectionDescription,
  SectionHeader,
  SectionTitle,
};
