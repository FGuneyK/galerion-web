import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Download, Sparkles, Heart, Share2 } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Download,
    title: "Download the app",
    description: "Get Galerion free on iOS and Android to start your art journey.",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "Discover your taste",
    description: "Browse curated collections and let our AI learn what resonates with you.",
  },
  {
    number: "03",
    icon: Heart,
    title: "Build your gallery",
    description: "Save favorites, add notes, and organize your personal collection.",
  },
  {
    number: "04",
    icon: Share2,
    title: "Share & explore",
    description: "Connect with fellow art lovers and discover new perspectives.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <Badge variant="secondary" className="mb-4">
            How it works
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-balance">
            Start exploring in minutes
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Four simple steps to transform how you discover and experience art.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <Card
                key={i}
                className="relative p-6 border border-border bg-card hover:shadow-lg transition-all duration-300"
              >
                <div className="text-6xl font-bold text-muted-foreground/20 mb-4">{step.number}</div>
                <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-brand-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
