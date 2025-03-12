import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Send, Users, ArrowRight, CheckCircle } from "lucide-react"
import ContactForm from "@/components/contact-form"
import Testimonials from "@/components/testimonials"
import BookFeatures from "@/components/book-features"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-07%20at%2020.11.24-aiRSvS4nTzPtzOlvrrO8NPFtkZKU0Y.jpeg"
              alt="Future Start Logo"
              width={150}
              height={50}
              className="h-10 w-auto"
            />
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#home" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </a>
            <a href="#book" className="text-sm font-medium transition-colors hover:text-primary">
              The Book
            </a>
            <a href="#services" className="text-sm font-medium transition-colors hover:text-primary">
              Our Services
            </a>
            <a href="#testimonials" className="text-sm font-medium transition-colors hover:text-primary">
              Testimonials
            </a>
            <a href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </a>
          </nav>
          <div>
            <Button>Buy Now</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-green-50 to-green-100">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  <span className="text-red-600">Future</span> <span className="text-green-600">Start</span>
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Let your Future start with us
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700">
                    Get Your Copy
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="#services">
                      Explore Our Services <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-07%20at%2019.44.53-kuW9s4vZwbOxjs6qn3PwsT5ZNqhP1q.jpeg"
                  alt="Conquering Your Years in Tertiary Education Book"
                  width={400}
                  height={500}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Welcome Message */}
        <section className="w-full py-8 md:py-12 bg-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto prose prose-green">
              <p>
                Welcome to Future Start, dedicated to empowering learners and students on their academic journey.
                Applying for acceptance at university or college can be very stressful. We take the stress out of
                university and college applications by handling the entire process on their behalf, allowing them to
                focus fully on their studies.
              </p>
              <p>
                We provide specialised mentoring and coaching programmes provide personalised guidance tailored to each
                student's needs, helping them thrive both academically and personally. This guidance is inspired by the
                principles outlined in Conquering Your Years in Tertiary Education, a book authored by a top academic
                achiever, ensuring proven strategies for success.
              </p>
              <p>
                Additionally, we assist students in finding suitable accommodation, ensuring a smooth and seamless
                transition from high school to university or college. Supporting students every step of the way—your
                success is our priority!
              </p>
            </div>
          </div>
        </section>

        {/* Quick Benefits */}
        <section className="w-full py-8 md:py-12 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="flex items-start gap-2 p-4 rounded-lg border">
                <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
                <div>
                  <h3 className="font-medium">Expert Guidance</h3>
                  <p className="text-sm text-gray-500">Written by a top academic achiever</p>
                </div>
              </div>
              <div className="flex items-start gap-2 p-4 rounded-lg border">
                <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
                <div>
                  <h3 className="font-medium">Proven Strategies</h3>
                  <p className="text-sm text-gray-500">Techniques for academic excellence</p>
                </div>
              </div>
              <div className="flex items-start gap-2 p-4 rounded-lg border">
                <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
                <div>
                  <h3 className="font-medium">Comprehensive Support</h3>
                  <p className="text-sm text-gray-500">From application to graduation</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Book Section */}
        <section id="book" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About The Book</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  "Conquering Your Years in Tertiary Education" is your essential guide to academic success, written by
                  a top academic achiever.
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-08%20at%2011.45.04%20%281%29-6Nc4NoA7Bpc1J95GXUCBEonxMPZmCi.jpeg"
                    alt="Expert mentoring session"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md object-cover"
                  />
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-08%20at%2011.45.03%20%281%29-rMBj8yQyLfuBNZd2B96DCsEMEX2DmH.jpeg"
                    alt="Students learning together"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md object-cover"
                  />
                </div>
              </div>
              <BookFeatures />
            </div>
          </div>
        </section>

        {/* Mid-page CTA */}
        <section className="w-full py-12 md:py-16 bg-green-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-08%20at%2011.45.04-diPtQ9OTlpZtF2a3IdjHWMzjm5GJFY.jpeg"
              alt="College building"
              fill
              className="object-cover"
            />
          </div>
          <div className="container px-4 md:px-6 relative">
            <div className="grid gap-6 lg:grid-cols-2 items-center">
              <div>
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                  Don't Navigate University Alone
                </h2>
                <p className="mt-4 text-green-50">
                  Get the guidance and support you need to excel in your tertiary education journey.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-end">
                <Button size="lg" className="bg-white text-green-600 hover:bg-green-50" asChild>
                  <Link href="#contact">Contact Us Today</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-green-700" asChild>
                  <Link href="#services">Explore Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  At Future Start, we're dedicated to empowering students to achieve their full potential in their
                  tertiary education journey.
                </p>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-3 mt-8">
              <Card className="flex flex-col">
                <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-08%20at%2011.45.03%20%282%29-rMZ0ch9t5Z5cwwLpujWYxieg1Q63fP.jpeg"
                    alt="Student working on application"
                    width={400}
                    height={300}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Let's Apply For You</CardTitle>
                  <CardDescription>We handle the entire application process</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm text-gray-500 mb-4">
                    We eliminate stress by managing the entire application process on your behalf, from researching
                    universities to submitting applications.
                  </p>
                  <Button variant="outline" className="w-full mt-auto" asChild>
                    <Link href="/services/apply-for-you">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="flex flex-col">
                <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-08%20at%2011.45.04%20%281%29-6Nc4NoA7Bpc1J95GXUCBEonxMPZmCi.jpeg"
                    alt="Expert mentoring"
                    width={400}
                    height={300}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Expert Advice</CardTitle>
                  <CardDescription>Personalized mentoring and coaching</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm text-gray-500 mb-4">
                    Get specialized mentoring and coaching programs tailored to your needs, helping you thrive both
                    academically and personally.
                  </p>
                  <Button variant="outline" className="w-full mt-auto" asChild>
                    <Link href="/services/expert-advice">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="flex flex-col">
                <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-08%20at%2011.45.03%20%286%29-6ivtzpImidAw0YzCNqeIDAo3799fBq.jpeg"
                    alt="Student accommodation"
                    width={400}
                    height={300}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Accommodation Services</CardTitle>
                  <CardDescription>Find suitable student housing</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm text-gray-500 mb-4">
                    We connect you with safe, comfortable, and affordable accommodation options near your university.
                  </p>
                  <Button variant="outline" className="w-full mt-auto" asChild>
                    <Link href="/services/accommodation">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Students Say</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from students who have transformed their academic journey with our guidance.
                </p>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-08%20at%2011.45.03%20%284%29-qLpP5dv8wpmjb4Hm4sYNFYNOXyeZ0t.jpeg"
                alt="Successful graduates"
                width={400}
                height={300}
                className="rounded-lg shadow-xl object-cover"
              />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-08%20at%2011.45.03%20%283%29-XSDFJfeZvcnpI8atnk5vNiRFYDxn95.jpeg"
                alt="Graduation celebration"
                width={400}
                height={300}
                className="rounded-lg shadow-xl object-cover"
              />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-08%20at%2011.45.03%20%281%29-rMBj8yQyLfuBNZd2B96DCsEMEX2DmH.jpeg"
                alt="Students learning"
                width={400}
                height={300}
                className="rounded-lg shadow-xl object-cover"
              />
            </div>
            <Testimonials />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get In Touch</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have questions about our book or services? Reach out to us and we'll get back to you as soon as
                  possible.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Send className="h-5 w-5 text-green-600" />
                    <span>info@futurestart.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-green-600" />
                    <span>Follow us on social media @futurestart</span>
                  </div>
                </div>
                <div className="mt-6">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-08%20at%2011.45.04-diPtQ9OTlpZtF2a3IdjHWMzjm5GJFY.jpeg"
                    alt="Our campus location"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-xl object-cover"
                  />
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-gray-500 md:text-left">
            © 2025 Future Start. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="text-sm font-medium transition-colors hover:text-primary">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm font-medium transition-colors hover:text-primary">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

