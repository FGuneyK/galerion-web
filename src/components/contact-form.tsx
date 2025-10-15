"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { sendContactMessage } from "@/app/contact/actions"
import { Loader2 } from "lucide-react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)
    setMessage(null)

    const formData = new FormData(event.currentTarget)
    const result = await sendContactMessage(formData)

    setIsSubmitting(false)

    if (result.success) {
      setMessage({ type: "success", text: "Message sent successfully! We'll get back to you soon." })
      // Reset form
      event.currentTarget.reset()
    } else {
      setMessage({ type: "error", text: result.error || "Failed to send message. Please try again." })
    }
  }

  return (
    <Card className="md:col-span-2 p-8 border-border">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="firstName" className="text-sm font-medium">
              First name
            </label>
            <Input id="firstName" name="firstName" placeholder="John" className="bg-background" required />
          </div>
          <div className="space-y-2">
            <label htmlFor="lastName" className="text-sm font-medium">
              Last name
            </label>
            <Input id="lastName" name="lastName" placeholder="Doe" className="bg-background" required />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="john@example.com"
            className="bg-background"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="subject" className="text-sm font-medium">
            Subject
          </label>
          <Input id="subject" name="subject" placeholder="How can we help?" className="bg-background" required />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium">
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            placeholder="Tell us more about your inquiry..."
            rows={6}
            className="bg-background resize-none"
            required
          />
        </div>

        {message && (
          <div
            className={`p-4 rounded-lg text-sm ${
              message.type === "success"
                ? "bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20"
                : "bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20"
            }`}
          >
            {message.text}
          </div>
        )}

        <Button size="lg" className="w-full sm:w-auto" type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </Button>
      </form>
    </Card>
  )
}
