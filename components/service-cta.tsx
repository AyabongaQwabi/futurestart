import Link from "next/link"
import { Button } from "@/components/ui/button"

interface ServiceCTAProps {
  title: string
  description: string
  buttonText: string
  buttonLink: string
}

export default function ServiceCTA({ title, description, buttonText, buttonLink }: ServiceCTAProps) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-green-600 text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{title}</h2>
            <p className="max-w-[900px] text-green-50 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {description}
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button size="lg" asChild className="bg-white text-green-600 hover:bg-green-50">
              <Link href={buttonLink}>{buttonText}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

