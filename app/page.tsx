import { ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import CampMajor from "@/components/camp-major"
import MediaGallery from "@/components/media-gallery"
import { Button } from "@/components/ui/button"
import TaglineSection from "@/components/tagline-section"
import FeaturedActivities from "@/components/featured-activities"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-primary py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4vDYrCdkPNJ4HYFR7K6UVbndRmhdHc.png"
              alt="DJ Gator's All-Star Camp Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <h1 className="text-xl font-bold text-primary-foreground md:text-2xl">DJ Gator's All-Star Camp</h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#about" className="text-primary-foreground hover:text-primary-foreground/80 font-medium">
              About
            </Link>
            <Link href="#majors" className="text-primary-foreground hover:text-primary-foreground/80 font-medium">
              Majors
            </Link>
            <Link href="#gallery" className="text-primary-foreground hover:text-primary-foreground/80 font-medium">
              Gallery
            </Link>
            <Link href="/schedule" className="text-primary-foreground hover:text-primary-foreground/80 font-medium">
              Schedule
            </Link>
            <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">Register Now</Button>
          </nav>
          <Button variant="ghost" className="md:hidden text-primary-foreground">
            <ChevronDown className="h-6 w-6" />
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FullSizeRender.heic-EvEWN9SyrK1hQuhJYmyJxRG7MEeMAx.jpeg"
            alt="Camp Activities - Children participating in sack race"
            fill
            className="object-cover object-center opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/30" />
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          {/* Removed HeroLogo component */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">DJ Gator's All-Star Camp</h1>
          <div className="inline-block bg-accent text-accent-foreground px-6 py-3 rounded-full text-xl md:text-2xl font-bold mb-8">
            Summer 2025
          </div>
          <p className="text-white text-xl md:text-2xl max-w-2xl mx-auto mb-8">
            Join us for an unforgettable summer experience where talents shine and friendships form! 
          </p>
          <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg">
            Register Now
          </Button>
        </div>
      </section>

      {/* Tagline Section */}
      <TaglineSection />

      {/* About Section */}
      <section id="about" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About the Camp</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary">Experienced Entertainment Leaders</h3>
                <p className="text-lg text-muted-foreground">
                  Our camp is led by a dynamic team of young entertainment professionals who have been making waves in
                  the industry for over a decade. With experience serving hundreds of events across the country, our
                  instructors bring real-world expertise directly to our campers.
                </p>
                <p className="text-lg text-muted-foreground">
                  What sets us apart is our team's hands-on experience in the entertainment industry. From DJing major
                  events to producing shows and managing live performances, our instructors don't just teach –<strong>they
                  actively practice what they preach.</strong> 
                </p>
                <p className="text-lg text-muted-foreground">
                  We're committed to creating an environment where young talent can thrive, learn, and grow into the
                  next generation of entertainment professionals. Our proven track record of success and dedication to
                  excellence ensures that every camper receives top-tier instruction and mentorship.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col items-center p-4 bg-muted rounded-lg">
                  <span className="text-3xl font-bold text-primary">10+</span>
                  <span className="text-sm text-muted-foreground">Years Experience</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-muted rounded-lg">
                  <span className="text-3xl font-bold text-primary">400+</span>
                  <span className="text-sm text-muted-foreground">Events Served</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-muted rounded-lg">
                  <span className="text-3xl font-bold text-primary">3</span>
                  <span className="text-sm text-muted-foreground">Camp Majors</span>
                </div>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0040-aGYBFCq8jx741TZl23KzOoSuu9gmaw.jpeg"
                alt="DJ Gator's All-Star Camp Team - Young entertainment professionals in a studio setting"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p className="text-white text-sm font-medium">Our dedicated team of entertainment professionals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Activities Section */}
      <FeaturedActivities />

      {/* Camp Majors Section */}
      <section id="majors" className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Camp Majors</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <CampMajor
              title="DJ & Computers"
              icon="music"
              color="bg-blue-500"
              description="Learn the art of DJing and music production while developing computer skills. Campers will explore beat matching, mixing techniques, and digital audio workstations."
              details={[
                "Introduction to DJ equipment and software",
                "Basic music theory and beat matching",
                "Digital audio workstation fundamentals",
                "Creating original mixes and tracks",
                "Computer skills for music production",
              ]}
            />

            <CampMajor
              title="Emceeing & Public Speaking"
              icon="mic"
              color="bg-yellow-500"
              description="Develop confidence and communication skills through emceeing and public speaking activities. Campers will learn how to engage audiences and express themselves clearly."
              details={[
                "Voice projection and microphone techniques",
                "Crafting compelling introductions and transitions",
                "Improvisational speaking skills",
                "Audience engagement strategies",
                "Performance anxiety management",
              ]}
            />

            <CampMajor
              title="Dance & Sport"
              icon="activity"
              color="bg-red-500"
              description="Explore various dance styles and sports activities that promote physical fitness, coordination, and teamwork. Campers will learn choreography and participate in fun athletic competitions."
              details={[
                "Hip-hop, contemporary, and traditional dance styles",
                "Choreography development and performance",
                "Team sports and cooperative games",
                "Physical conditioning and flexibility training",
                "Final showcase preparation",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Media Gallery Section */}
      <section id="gallery" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Media Gallery</h2>
          <MediaGallery />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Campers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-md">
              <p className="italic mb-4">
                "The DJ program was amazing! I learned so much about mixing music and using computers for production.
                Can't wait to come back next year!"
              </p>
              <p className="font-bold">- Alex, 14</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md">
              <p className="italic mb-4">
                "I was really shy before, but the public speaking major helped me gain confidence. Now I'm not afraid to
                speak in front of my class!"
              </p>
              <p className="font-bold">- Jamie, 12</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md">
              <p className="italic mb-4">
                "The dance program was so fun! I made new friends and learned cool routines. The instructors were
                awesome and supportive."
              </p>
              <p className="font-bold">- Taylor, 13</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-6">Ready to Join the Fun?</h2>
          <p className="text-xl text-secondary-foreground/80 max-w-2xl mx-auto mb-8">
            Spaces are limited for our August 4th - August 11th session. Secure your spot today!
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg">
            Register Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">DJ Gator's All-Star Camp</h3>
              <p className="mb-2">123 Camp Road</p>
              <p className="mb-2">Gatorville, FL 12345</p>
              <p className="mb-2">info@gatorallstars.com</p>
              <p>(123) 456-7890</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-secondary">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-secondary">
                    Camp Schedule
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-secondary">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-secondary">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
              <div className="flex space-x-4 mb-4">
                <Link href="#" className="hover:text-secondary">
                  Facebook
                </Link>
                <Link href="#" className="hover:text-secondary">
                  Instagram
                </Link>
                <Link href="#" className="hover:text-secondary">
                  Twitter
                </Link>
                <Link href="#" className="hover:text-secondary">
                  YouTube
                </Link>
              </div>
              <p className="text-sm mt-4">Subscribe to our newsletter for camp updates and special offers.</p>
              <div className="flex mt-2">
                <input type="email" placeholder="Your email" className="px-4 py-2 rounded-l text-gray-900 w-full" />
                <Button className="rounded-l-none bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} DJ Gator's All-Star Camp. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

