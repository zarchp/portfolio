import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
      <img
        src="/images/404.svg"
        alt="404 Illustration"
        className="mb-4 w-150"
        loading="lazy"
        decoding="async"
      />

      <Button
        asChild
        size="lg"
      >
        <a href="/">Go Back Home</a>
      </Button>
    </main>
  );
}
