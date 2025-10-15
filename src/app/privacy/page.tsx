import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Separator } from "@/components/ui/separator"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">Privacy Policy</h1>
          <p className="text-lg text-muted-foreground">
            Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto prose prose-neutral dark:prose-invert">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Welcome to Galerion. We respect your privacy and are committed to protecting your personal data. This
              privacy policy will inform you about how we look after your personal data when you visit our app and tell
              you about your privacy rights and how the law protects you.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped
              together as follows:
            </p>
            <ul className="space-y-2 text-muted-foreground ml-6 list-disc">
              <li>
                <strong>Identity Data:</strong> includes first name, last name, username or similar identifier.
              </li>
              <li>
                <strong>Contact Data:</strong> includes email address and telephone numbers.
              </li>
              <li>
                <strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time
                zone setting and location, operating system and platform.
              </li>
              <li>
                <strong>Usage Data:</strong> includes information about how you use our app, products and services.
              </li>
              <li>
                <strong>Marketing and Communications Data:</strong> includes your preferences in receiving marketing
                from us and your communication preferences.
              </li>
            </ul>
          </section>

          <Separator className="my-8" />

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal
              data in the following circumstances:
            </p>
            <ul className="space-y-2 text-muted-foreground ml-6 list-disc">
              <li>To provide and maintain our service</li>
              <li>To notify you about changes to our service</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information so that we can improve our service</li>
              <li>To monitor the usage of our service</li>
              <li>To detect, prevent and address technical issues</li>
            </ul>
          </section>

          <Separator className="my-8" />

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We have put in place appropriate security measures to prevent your personal data from being accidentally
              lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your
              personal data to those employees, agents, contractors and other third parties who have a business need to
              know.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Your Legal Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Under certain circumstances, you have rights under data protection laws in relation to your personal data,
              including the right to:
            </p>
            <ul className="space-y-2 text-muted-foreground ml-6 list-disc">
              <li>Request access to your personal data</li>
              <li>Request correction of your personal data</li>
              <li>Request erasure of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Request restriction of processing your personal data</li>
              <li>Request transfer of your personal data</li>
              <li>Right to withdraw consent</li>
            </ul>
          </section>

          <Separator className="my-8" />

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use cookies and similar tracking technologies to track the activity on our service and hold certain
              information. Cookies are files with small amount of data which may include an anonymous unique identifier.
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Third-Party Links</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our app may include links to third-party websites, plug-ins and applications. Clicking on those links or
              enabling those connections may allow third parties to collect or share data about you. We do not control
              these third-party websites and are not responsible for their privacy statements.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the &quot;Last updated&quot; date at the top of this Privacy Policy.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul className="space-y-2 text-muted-foreground ml-6 list-disc">
              <li>By email: hello@galerion.app</li>
              <li>
                By visiting this page on our website:{" "}
                <a href="/contact" className="text-brand-primary hover:underline">
                  galerion.app/contact
                </a>
              </li>
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
