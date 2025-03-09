"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, Music, Mic, Activity } from "lucide-react"
import { cn } from "@/lib/utils"

interface CampMajorProps {
  title: string
  icon: string
  color: string
  description: string
  details: string[]
}

export default function CampMajor({ title, icon, color, description, details }: CampMajorProps) {
  const [isOpen, setIsOpen] = useState(false)

  const getIcon = (): JSX.Element => {
    switch (icon) {
      case "music":
        return <Music className="h-6 w-6" />
      case "mic":
        return <Mic className="h-6 w-6" />
      case "activity":
        return <Activity className="h-6 w-6" />
      default:
        return <Music className="h-6 w-6" />
    }
  }

  // Update the color assignments to match the new color scheme
  const getColor = (): string => {
    switch (icon) {
      case "music":
        return "bg-primary" // Dark blue for DJ & Computers
      case "mic":
        return "bg-secondary" // Orange/yellow for Emceeing & Public Speaking
      case "activity":
        return "bg-accent" // Green for Dance & Sport
      default:
        return "bg-primary"
    }
  }

  return (
    <div className="bg-card rounded-lg shadow-md overflow-hidden transition-all duration-300">
      <div className={cn("p-4 text-white flex items-center justify-between", getColor())}>
        <div className="flex items-center gap-2">
          {getIcon()}
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-1 rounded-full hover:bg-white/20"
          aria-expanded={isOpen}
          aria-controls={`details-${title.toLowerCase().replace(/\s+/g, "-")}`}
        >
          {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </button>
      </div>
      <div className="p-4">
        <p className="text-card-foreground">{description}</p>
        <div
          id={`details-${title.toLowerCase().replace(/\s+/g, "-")}`}
          className={cn(
            "mt-4 space-y-2 overflow-hidden transition-all duration-300",
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <h4 className="font-bold text-lg">What You'll Learn:</h4>
          <ul className="list-disc pl-5 space-y-1">
            {details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

