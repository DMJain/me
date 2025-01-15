"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { Github} from "lucide-react"
import Image from "next/image"
import { ProjectModal, type Project } from "../project-modal"

const featuredProjects: Project[] = [
  {
    title: "Web-IDE 2.0",
    description: "A Collabrative WebIDE to Build Together with Friends.",
    longDescription: "A reall time colabrative web-IDE built with MERN stack, featuring real-time cursor tracking, code updates, and applciation preview.",
    image: "/projects/webide.png",
    tags: ["ReactJs","Docker", "Socket.io", "Monaco-Editor"],
    liveUrl: "",
    githubUrl: "https://github.com/DMJain/CollabrativeCloudIDE",
    features: [
      "Real-time cursor tracking",
      "Real-time code update",
      "Real-time chat",
      "Application preview",
      "Contenarized IDE environment",
      "Psuedo Terminal"
    ],
    techStack: [
      "ReactJs",
      "NodeJs",
      "Docker",
      "Node-PTY",
      "TailwindCSS",
      "Monaco-Editor",
      "Socket.io",
      "Redux Toolkit",
      'MongoDB'
    ]
  },
  {
    title: "StayNest",
    description: "Book Your Next Stay.",
    longDescription: "A PG booking application to find nearest PG from your location or desired Location, Book, Track and Pay rent from one n all PG booking application.",
    image: "/projects/staynest.png",
    tags: ["React", "Algolia Search", "React-Leaflet", "CashFree Payments"],
    liveUrl: "",
    githubUrl: "https://github.com/DMJain/SmartPayingGuest",
    features: [
      "Interactive Map with PG Location",
      "Aloglia Elastic Search",
      "Admin panel",
      "Book, Pay rent with Cashfree payments",
      "Chats"
    ],
    techStack: [
      "ReactJs",
      "NodeJs",
      "React-Leaflet",
      "Aloglia Search",
      "Socket-io",
      "Redux Toolkit",
      'MongoDB',
      "CashFree Payment Gateways"
    ]
  },
  {
    title: "BookThatMovie",
    description: "Watch your Fav movie near you.",
    longDescription: "A Movie booking application to find movies at your nearist theaters.",
    image: "/projects/moviesite.png",
    tags: ["React", "NodeKs", "Socket-IO", "CashFree Payments"],
    liveUrl: "",
    githubUrl: "https://github.com/DMJain/MovieBookingApp",
    features: [
      "Real-time Seat tracking Updates",
      "Book, cancel & refund payments through Cashfree payment",
      "Aloglia Elastic Search",
      "Admin panel",
      "Add, Edit, Delete Movie, Theater, etc",
      "Watch Trailer Video effortlessly"
    ],
    techStack: [
      "ReactJs",
      "NodeJs",
      "Aloglia Search",
      "Socket-io",
      "Redux Toolkit",
      'MongoDB',
      "CashFree Payment Gateways"
    ]
  },
]

export default function ProjectsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-12"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here are some of my recent projects. Each one is crafted with attention to detail and best practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card 
                  className="overflow-hidden h-full flex flex-col cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative h-48">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="100%"
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-4 flex-grow">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2 mt-auto pt-4">
                      {/* <Button variant="outline" size="sm" className="gap-2" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </a>
                      </Button> */}
                      <Button variant="outline" size="sm" className="gap-2" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                          <Github className="h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}