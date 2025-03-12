import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function Testimonials() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarFallback>TS</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">Thabo S.</p>
              <p className="text-sm text-gray-500">Engineering Student</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500">
            "The application assistance from Future Start was a game-changer. They handled everything while I focused on
            my final year of high school. I got accepted to my dream university!"
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarFallback>LM</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">Lerato M.</p>
              <p className="text-sm text-gray-500">Business Student</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500">
            "The book 'Conquering Your Years in Tertiary Education' transformed my approach to studying. I went from
            struggling to achieving distinction in just one semester!"
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarFallback>NK</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">Nomsa K.</p>
              <p className="text-sm text-gray-500">Medical Student</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500">
            "Finding accommodation was my biggest worry. Future Start connected me with a safe, affordable place near
            campus. Their mentoring program has been invaluable for my academic success."
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarFallback>JN</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">John N.</p>
              <p className="text-sm text-gray-500">Computer Science Student</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500">
            "The mentoring I received helped me navigate the challenges of my first year. The strategies from the book
            are practical and effective. I'm now on track for a cum laude graduation!"
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarFallback>ZM</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">Zanele M.</p>
              <p className="text-sm text-gray-500">Law Student</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500">
            "Future Start's application service saved me so much time and stress. Their expert advice on course
            selection was spot on. I couldn't be happier with my university experience."
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarFallback>BT</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">Blessing T.</p>
              <p className="text-sm text-gray-500">Education Student</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500">
            "The accommodation service was excellent! I got a great place within my budget. The book has been my go-to
            guide for everything university-related. Highly recommend Future Start!"
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

