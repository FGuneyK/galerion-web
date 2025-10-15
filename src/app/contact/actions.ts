"use server"

export async function sendContactMessage(formData: FormData) {
  const firstName = formData.get("firstName") as string
  const lastName = formData.get("lastName") as string
  const email = formData.get("email") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string

  // Validate required fields
  if (!firstName || !lastName || !email || !subject || !message) {
    return { success: false, error: "All fields are required" }
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return { success: false, error: "Please enter a valid email address" }
  }

  // Here you would integrate with an email service like Resend, SendGrid, etc.
  // For now, we'll simulate sending to hello@galerion.app
  console.log("Contact form submission:", {
    to: "hello@galerion.app",
    from: email,
    name: `${firstName} ${lastName}`,
    subject,
    message,
  })

  // Simulate email sending delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return { success: true }
}
