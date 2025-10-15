import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { SocialProof } from "@/components/social-proof"
import { Features } from "@/components/features"
import { HowItWorks } from "@/components/how-it-works"
import { Gallery } from "@/components/gallery"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <Features />
        <HowItWorks />
        <Gallery />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
