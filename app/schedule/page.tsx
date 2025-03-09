import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"

interface ScheduleItem {
  time: string
  activity: string
  description?: string
}

interface DaySchedule {
  title: string
  description: string
  schedule: ScheduleItem[]
}

const weeklySchedule: DaySchedule[] = [
  {
    title: "Monday: Kickoff & Team Building",
    description: "Start your camp journey with team building and introductions to your chosen major.",
    schedule: [
      { time: "7:00 – 8:00 AM", activity: "Early Bird Class", description: "Optional early morning session" },
      { time: "8:00 – 8:30 AM", activity: "Drop-off & Check-in" },
      { time: "8:45 – 9:15 AM", activity: "Welcome Assembly", description: "Noah & Gabe introduce camp, rules, and expectations" },
      { time: "9:15 – 10:15 AM", activity: "Icebreakers & Team Formation", description: "Name games, fun challenges, and meeting group members" },
      { time: "10:15 – 12:00 PM", activity: "Course Work", description: "Campers dive into their major: DJing, Emceeing, or Dance" },
      { time: "12:00 – 1:00 PM", activity: "Lunch & Outdoor Break" },
      { time: "1:00 – 1:50 PM", activity: "Camp Dance Party", description: "Led by counselors and directors" },
      { time: "1:50 – 2:30 PM", activity: "Course Work Continues" },
      { time: "2:30 – 3:30 PM", activity: "Camp Game: Capture the Flag" },
      { time: "3:30 – 4:00 PM", activity: "Pickup" }
    ]
  },
  {
    title: "Tuesday: Deep Dive & Guest Workshop",
    description: "Focus on skill-building and learn from industry professionals.",
    schedule: [
      { time: "7:00 – 8:00 AM", activity: "Early Bird Class", description: "Optional early morning session" },
      { time: "8:00 – 8:15 AM", activity: "Drop-off" },
      { time: "8:15 – 11:45 AM", activity: "Extended Course Work", description: "Focused skill-building in DJing, Emceeing, or Dance" },
      { time: "11:45 – 12:15 PM", activity: "Lunch" },
      { time: "12:15 – 1:15 PM", activity: "Guest Instructor Workshop", description: "Special guest speaker from the industry" },
      { time: "1:15 – 2:00 PM", activity: "Sports & Chill", description: "Casual games, reflections, and winding down" },
      { time: "2:00 – 3:30 PM", activity: "Course Work Continues" },
      { time: "3:30 - 3:15 PM", activity: "Pickup" }
    ]
  },
  {
    title: "Wednesday: Mid-Week Progress & Group Activity",
    description: "Build on your skills and collaborate with fellow campers.",
    schedule: [
      { time: "7:00 – 8:00 AM", activity: "Early Bird Class", description: "Optional early morning session" },
      { time: "8:00 – 8:15 AM", activity: "Drop-off" },
      { time: "8:15 – 11:00 AM", activity: "Course Work", description: "Skill mastery & performance practice" },
      { time: "11:00 – 12:00 PM", activity: "Group Activity", description: "Camp-wide challenge or collaborative event" },
      { time: "12:00 – 1:30 PM", activity: "Lunch Break" },
      { time: "1:30 – 2:15 PM", activity: "Guest Instructor Workshop" },
      { time: "2:15 – 3:00 PM", activity: "Course Work Continues" },
      { time: "3:30 - 3:15 PM", activity: "Pickup" }
    ]
  },
  {
    title: "Thursday: Final Rehearsals & Dress Run",
    description: "Perfect your performance and prepare for the big show.",
    schedule: [
      { time: "7:00 – 8:00 AM", activity: "Early Bird Class", description: "Optional early morning session" },
      { time: "8:00 – 8:30 AM", activity: "Drop-off" },
      { time: "9:00 – 12:00 PM", activity: "Final Course Work & Rehearsals", description: "Fine-tuning performances, final skill work" },
      { time: "12:00 – 12:30 PM", activity: "Lunch" },
      { time: "12:30 – 1:45 PM", activity: "Dress Rehearsal", description: "Full run-through of performances with instructor feedback" },
      { time: "1:45 - 3:45 PM", activity: "Group Activity" },
      { time: "3:30 – 3:45 PM", activity: "Pickup" }
    ]
  },
  {
    title: "Friday: Performance Day & Grand Finale",
    description: "Showcase your talents and celebrate your achievements!",
    schedule: [
      { time: "7:00 – 8:00 AM", activity: "Early Bird Class", description: "Optional early morning session" },
      { time: "8:00 – 8:30 AM", activity: "Drop-off & Check-in" },
      { time: "9:00 – 11:00 AM", activity: "Final Rehearsals", description: "Last full run-through of performances with final adjustments" },
      { time: "11:00 – 12:00 PM", activity: "Show Prep", description: "Packing up gear, costumes, and anything needed for the final performance" },
      { time: "12:00 – 12:30 PM", activity: "Lunch" },
      { time: "12:30 – 1:30 PM", activity: "Wrap-Up & Camper Dismissal", description: "Campers head home to rest before the big night" },
      { time: "5:00 PM", activity: "Call Time for Campers", description: "All campers arrive at the venue, warm up, and do final checks" },
      { time: "6:00 PM", activity: "Final Performance", description: "Showtime! Campers showcase everything they've worked on throughout the week" },
      { time: "7:30 PM", activity: "Closing Ceremony & Awards", description: "Recognition for campers, celebration, and group photos" },
      { time: "8:00 PM", activity: "End of Event", description: "Final goodbyes, cleanup, and dismissal" }
    ]
  }
]

export default function SchedulePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-primary-foreground">Weekly Schedule</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Camp Schedule</h2>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Your day-by-day guide to an unforgettable week at DJ Gator's All-Star Camp
          </p>

          <Accordion type="single" collapsible className="space-y-4">
            {weeklySchedule.map((day, index) => (
              <AccordionItem key={index} value={`day-${index}`} className="bg-card rounded-lg border">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex flex-col items-start text-left">
                    <h3 className="text-xl font-semibold">{day.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{day.description}</p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <div className="space-y-4">
                    {day.schedule.map((item, itemIndex) => (
                      <Card key={itemIndex} className="p-4 hover:bg-accent/5 transition-colors">
                        <div className="flex flex-col space-y-1">
                          <div className="flex justify-between items-start">
                            <span className="font-medium text-primary">{item.time}</span>
                            <span className="font-semibold">{item.activity}</span>
                          </div>
                          {item.description && (
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                          )}
                        </div>
                      </Card>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </main>
    </div>
  )
} 