import { Separator } from "@/components/ui/separator"
import { Instagram, } from "lucide-react"
import Image from "next/image"
import Link from 'next/link';

export function Footer() {
  const footerLinks = {
    Product: ["Features", "How it works", "Gallery", "Pricing"],
    Legal: [
      { name: "Home", href: "/" },
      { name: "Privacy", href: "/privacy" },
      { name: "Contact", href: "/contact" },
    ],
  }

  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Brand column */}
          <div className="col-span-2">
            <Link href="/"><div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center">
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
            <p className="text-sm text-muted-foreground mb-6 max-w-xs">
              Your personal art discovery companion. Explore masterpieces from around the world.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/galerionapp"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-border flex items-center justify-center hover:bg-accent hover:border-accent-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4 text-sm">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => {
                  const linkName = typeof link === "string" ? link : link.name
                  const linkHref = typeof link === "string" ? "#" : link.href

                  return (
                    <li key={linkName}>
                      <a
                        href={linkHref}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {linkName}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Galerion. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
