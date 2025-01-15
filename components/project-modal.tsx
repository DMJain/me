"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export type Project = {
  title: string
  description: string
  longDescription?: string
  image: string
  tags: string[]
  liveUrl: string
  githubUrl: string
  features?: string[]
  techStack?: string[]
}

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{project.title}</DialogTitle>
          <DialogDescription>{project.description}</DialogDescription>
        </DialogHeader>
        
        <div className="relative h-64 my-4">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover rounded-md"
          />
        </div>

        {project.longDescription && (
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">About the Project</h3>
            <p className="text-muted-foreground">{project.longDescription}</p>
          </div>
        )}

        {project.features && (
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Key Features</h3>
            <ul className="list-disc list-inside text-muted-foreground">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        {project.techStack && (
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        )}

        <div className="flex gap-4 mt-4">
          <Button className="gap-2" asChild>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          </Button>
          <Button variant="outline" className="gap-2" asChild>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              View Code
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}