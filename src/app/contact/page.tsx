import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Mail, MapPin, Phone } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">Get in Touch</h1>
          <p className="text-lg md:text-xl text-muted-foreground text-balance">
            Have questions about Galerion? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as
            possible.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <Card className="p-6 border-border hover:border-brand-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-brand-primary/10 flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-brand-primary" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-sm text-muted-foreground mb-3">Our team is here to help</p>
              <a href="mailto:hello@galerion.app" className="text-sm text-brand-primary hover:underline">
                hello@galerion.app
              </a>
            </Card>

            <Card className="p-6 border-border hover:border-brand-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-brand-primary/10 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-brand-primary" />
              </div>
              <h3 className="font-semibold mb-2">Office</h3>
              <p className="text-sm text-muted-foreground mb-3">Visit us in person</p>
              <p className="text-sm">
                19 May Avenue, 14
                <br />
                Antalya, Türkiye
              </p>
            </Card>

            <Card className="p-6 border-border hover:border-brand-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-brand-primary/10 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-brand-primary" />
              </div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-sm text-muted-foreground mb-3">Mon-Fri from 9am to 6pm</p>
              <a href="tel:+905412663070" className="text-sm text-brand-primary hover:underline">
                +90 (541) 266-30-70
              </a>
            </Card>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </main>

      <Footer />
    </div>
  )
}
