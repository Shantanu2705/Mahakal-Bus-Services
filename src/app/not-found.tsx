import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-brand-cream relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border-[60px] border-brand-navy" />
      </div>
      
      <Container className="relative z-10 text-center">
        <h1 className="text-9xl font-bold text-brand-navy-dark mb-4">404</h1>
        <div className="h-1 w-24 bg-brand-gold mx-auto mb-8 rounded-full" />
        <h2 className="text-3xl md:text-4xl font-bold text-brand-navy-dark mb-6">
          Looks like this road has taken a wrong turn.
        </h2>
        <p className="text-lg text-gray-600 mb-10 max-w-lg mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Button asChild size="lg" variant="primary">
          <Link href="/">
            Back to Home
          </Link>
        </Button>
      </Container>
    </section>
  );
}
