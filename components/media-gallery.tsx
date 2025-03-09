"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play } from "lucide-react"

export default function MediaGallery() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null)

  const images = [
    { src: "/placeholder.svg?height=400&width=600", alt: "Camp Activities 1" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Camp Activities 2" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Camp Activities 3" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Camp Activities 4" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Camp Activities 5" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Camp Activities 6" },
  ]

  const videos = [
    {
      id: "video1",
      thumbnail: "/placeholder.svg?height=400&width=600",
      title: "DJ Workshop Highlights",
      src: "",
    },
    {
      id: "video2",
      thumbnail: "/placeholder.svg?height=400&width=600",
      title: "Public Speaking Competition",
      src: "",
    },
    {
      id: "video3",
      thumbnail: "/placeholder.svg?height=400&width=600",
      title: "Dance Performance",
      src: "",
    },
    {
      id: "video4",
      thumbnail: "/placeholder.svg?height=400&width=600",
      title: "Sports Tournament",
      src: "",
    },
    {
      id: "gator-camp-video",
      thumbnail: "/placeholder.svg?height=400&width=600",
      title: "Further develop your skills with our dance routine training course!",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8302-fYGLICWzbQR3kk60XSbSF6g5IdjpRZ.MP4",
    },
  ]

  return (
    <Tabs defaultValue="images" className="w-full">
      <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
        <TabsTrigger value="images">Images</TabsTrigger>
        <TabsTrigger value="videos">Videos</TabsTrigger>
      </TabsList>

      <TabsContent value="images" className="mt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative aspect-video rounded-lg overflow-hidden shadow-md">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform hover:scale-105"
              />
            </div>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="videos" className="mt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="relative aspect-video rounded-lg overflow-hidden shadow-md cursor-pointer group"
              onClick={() => setActiveVideo(video.id)}
            >
              <Image src={video.thumbnail || "/placeholder.svg"} alt={video.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-white/20 rounded-full p-3">
                  <Play className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-2">
                <p className="text-white text-sm">{video.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal - Play the actual video when available */}
        {activeVideo && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setActiveVideo(null)}
          >
            <div className="relative w-full max-w-4xl aspect-video bg-black" onClick={(e) => e.stopPropagation()}>
              {videos.find((v) => v.id === activeVideo)?.src ? (
                <video
                  src={videos.find((v) => v.id === activeVideo)?.src}
                  controls
                  autoPlay
                  className="w-full h-full"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-white text-lg">Video player would appear here</p>
                </div>
              )}
              <button
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2"
                onClick={(e) => {
                  e.stopPropagation()
                  setActiveVideo(null)
                }}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </TabsContent>
    </Tabs>
  )
}

