import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Palette, Heart, Sparkles, Search, BookOpen, Globe } from "lucide-react"

const features = [
  {
    icon: Search,
    title: "Smart Discovery",
    description: "AI-powered recommendations help you discover art that matches your taste and interests.",
  },
  {
    icon: Heart,
    title: "Personal Collections",
    description: "Curate your own digital gallery with favorites, notes, and custom organization.",
  },
  {
    icon: BookOpen,
    title: "Rich Context",
    description: "Learn the stories behind each piece with detailed histories, artist bios, and expert insights.",
  },
  {
    icon: Globe,
    title: "Global Museums",
    description: "Access collections from world-renowned institutions, all in one beautiful app.",
  },
  {
    icon: Sparkles,
    title: "Daily Inspiration",
    description: "Get personalized art recommendations delivered daily to spark your creativity.",
  },
  {
    icon: Palette,
    title: "Style Explorer",
    description: "Browse by movement, period, or medium to discover new artistic styles and techniques.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-balance">
            Everything you need to explore art
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Powerful features designed to make art discovery intuitive, personal, and delightful.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <Card key={i} className="border border-border bg-card hover:shadow-lg transition-all duration-300 group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center mb-4 group-hover:bg-brand-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-brand-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
