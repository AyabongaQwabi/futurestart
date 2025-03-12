import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, GraduationCap, Award, Clock, Brain, Lightbulb } from "lucide-react"

export default function BookFeatures() {
  return (
    <div className="grid gap-6 md:grid-cols-2 mt-8">
      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
          <BookOpen className="h-8 w-8 text-green-600" />
          <div>
            <CardTitle className="text-base sm:text-lg">Comprehensive Guide</CardTitle>
            <CardDescription>Everything you need to know about tertiary education</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500">
            A complete roadmap covering all aspects of university life, from enrollment to graduation.
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
          <Award className="h-8 w-8 text-green-600" />
          <div>
            <CardTitle className="text-base sm:text-lg">Academic Excellence</CardTitle>
            <CardDescription>Strategies to graduate with Cum Laude</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500">
            Learn proven techniques for achieving top grades and standing out academically.
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
          <Clock className="h-8 w-8 text-green-600" />
          <div>
            <CardTitle className="text-base sm:text-lg">Time Management</CardTitle>
            <CardDescription>Balance studies, social life, and personal growth</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500">
            Master effective time management strategies to excel in all areas of university life.
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
          <Brain className="h-8 w-8 text-green-600" />
          <div>
            <CardTitle className="text-base sm:text-lg">Study Techniques</CardTitle>
            <CardDescription>Optimize your learning approach</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500">
            Discover research-backed study methods that enhance retention and understanding.
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
          <Lightbulb className="h-8 w-8 text-green-600" />
          <div>
            <CardTitle className="text-base sm:text-lg">Avoiding Pitfalls</CardTitle>
            <CardDescription>Navigate common challenges successfully</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500">
            Learn to identify and overcome the obstacles that prevent many students from graduating on time.
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
          <GraduationCap className="h-8 w-8 text-green-600" />
          <div>
            <CardTitle className="text-base sm:text-lg">Career Preparation</CardTitle>
            <CardDescription>Set yourself up for post-graduation success</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500">
            Guidance on internships, networking, and building a strong foundation for your future career.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

