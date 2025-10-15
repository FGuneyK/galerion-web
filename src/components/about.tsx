import Image from "next/image"

export function About() {
  return (
    <section className="py-24 px-6 bg-galerion-surface">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-galerion-text-primary mb-6 text-balance">
            What is Galerion?
          </h2>
          <div className="space-y-4 text-lg md:text-xl text-galerion-text-secondary leading-relaxed max-w-3xl mx-auto">
            <p className="text-pretty">
              Galerion is your personal gateway to the world&apos;s finest art. Browse masterpieces from across history,
              discover emerging artists, and build your own curated collection.
            </p>
            <p className="text-pretty">
              Whether you are an art enthusiast or just beginning your journey, Galerion makes exploring art history
              accessible, engaging, and beautifully simple.
            </p>
            <p className="text-pretty">Experience the museum in your pocket — anytime, anywhere.</p>
          </div>
        </div>

        {/* Image grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-16">
          {[
            "renaissance+painting+masterpiece",
            "impressionist+artwork+museum",
            "modern+abstract+art+gallery",
            "classical+sculpture+art",
            "contemporary+digital+art",
            "baroque+painting+museum",
          ].map((query, i) => (
            <div
              key={i}
              className="aspect-square rounded-xl overflow-hidden border border-galerion-border hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              <Image
    src={`/.jpg?height=400&width=400&query=${query}`}
    alt={`Art preview ${i + 1}`}
    fill
    className="object-cover"
  />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
