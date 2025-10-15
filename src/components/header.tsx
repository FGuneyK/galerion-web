"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import Image from "next/image"
import Link from 'next/link';

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/"><div className="flex items-center gap-2">
            {/* Logo alanı */}
            <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg bg-transparent flex items-center justify-center">
              {/* Burada, logo görselini ekleyeceğiz. */}
              <Image 
                src="/logo.png" // public klasöründeki logo.png dosyasına erişim
                alt="Logo"
                width={48} // Mobil boyut
                height={48} // Mobil boyut
                className="object-contain" // Görselin düzgün bir şekilde yerleşmesini sağlamak için
              />
            </div>
  <span className="text-xl font-semibold">Galerion</span>

          </div></Link>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              How it works
            </a>
            <a href="#gallery" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Gallery
            </a>
          </nav>

          <div className="flex items-center gap-3">
      {/*          <Button variant="ghost" size="sm" className="hidden sm:inline-flex">Sign in</Button> */}
            <Button size="sm" className="bg-brand-primary hover:bg-brand-primary/90">
              Download
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
