import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function FeaturedActivities() {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Camp Activities</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FullSizeRender.heic-EvEWN9SyrK1hQuhJYmyJxRG7MEeMAx.jpeg"
              alt="Camp Activities - Children participating in sack race"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Fostering a Collaborative Environment</h3>
            <p className="text-lg text-muted-foreground">
              At DJ Gator's All-Star Camp, we believe in learning through play! Our campers enjoy a variety of engaging
              activities that build teamwork, confidence, and create lasting memories. From classic games like sack
              races to modern team challenges, every day brings new adventures and opportunities to grow while having
              fun.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-bold mb-2">Team Building</h4>
                  <p className="text-sm text-muted-foreground">
                    Develop leadership and cooperation skills through group activities
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-bold mb-2">Active Play</h4>
                  <p className="text-sm text-muted-foreground">Stay active and healthy with outdoor games and sports</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

