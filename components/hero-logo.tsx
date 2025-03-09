import Image from "next/image"

export default function HeroLogo() {
  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto mb-8">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4vDYrCdkPNJ4HYFR7K6UVbndRmhdHc.png"
        alt="DJ Gator's All-Star Camp Logo"
        fill
        className="object-contain"
        priority
      />
    </div>
  )
}

