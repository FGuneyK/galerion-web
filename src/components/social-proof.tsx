export function SocialProof() {
  const stats = [
    { value: "50K+", label: "Active users" },
    { value: "2K+", label: "Artworks" },
    { value: "150+", label: "Artists" },
    { value: "4.9", label: "App rating" },
  ]

  return (
    <section className="py-16 border-y border-border bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
