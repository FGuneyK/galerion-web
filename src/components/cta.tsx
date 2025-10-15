import { Button } from "@/components/ui/button"
import { Apple } from "lucide-react"

export function CTA() {
  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-balance">
            Ready to discover your next favorite artwork?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-pretty">
            Join thousands of art enthusiasts exploring the world&apos;s greatest collections.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button size="lg" className="bg-brand-primary hover:bg-brand-primary/90 text-white group min-w-[200px]">
              <Apple className="mr-2 w-5 h-5" />
              Download for iOS
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">Free to download. No credit card required.</p>
        </div>
      </div>
    </section>
  )
}
