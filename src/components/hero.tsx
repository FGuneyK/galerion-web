"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Apple, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden grid-pattern">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm">
            <Sparkles className="w-3 h-3 mr-2 inline" />
            Your personal art discovery companion
          </Badge>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-balance">
            Discover art that
            <br />
            <span className="gradient-text">moves you</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed text-pretty">
            Explore masterpieces from around the world, curate your personal collection, and connect with art that
            speaks to your soul.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <Button size="lg" className="bg-brand-primary hover:bg-brand-primary/90 text-white group min-w-[200px]">
              <Apple className="mr-2 w-5 h-5" />
              Download for iOS
            </Button>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="relative rounded-2xl border border-border bg-card shadow-2xl overflow-hidden">
              <Image
                src="/preview.png"
                alt="Galerion App Interface"
                width={628}
                height={844}
                className="w-full h-auto"
                priority
              />
            </div>
            {/* Subtle glow effect */}
            <div className="absolute inset-0 -z-10 bg-brand-primary/10 blur-3xl rounded-full" />
          </div>
        </div>
      </div>
    </section>
  )
}