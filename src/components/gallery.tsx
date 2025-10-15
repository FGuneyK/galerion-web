"use client"

import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export function Gallery() {
  const artworks = [
    "artwork",
    "2",
    "3",
    "4",
    "5",
    "6",
  ]

  return (
    <section id="gallery" className="py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <Badge variant="secondary" className="mb-4">
            Gallery preview
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-balance">
            A world of art at your fingertips
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            From Renaissance masterpieces to contemporary works, explore thousands of artworks in stunning detail.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          {artworks.map((query, i) => (
            <div
              key={i}
              className="group relative rounded-xl overflow-hidden border border-border shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <Image
                src={`/artworks/${query}.png`}
                alt={`Artwork ${i + 1}`}
                width={600}  // Dinamik olarak yüksek çözünürlük
                height={600} // Dinamik olarak yüksek çözünürlük
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
