import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SiGithub } from "react-icons/si";

const projects = [
  {
    title: "Physics Simulator",
    description: "Interactive physics simulations for JEE concepts",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
    github: "https://github.com/yourusername/physics-sim"
  },
  {
    title: "Math Formula Visualizer",
    description: "Visual representation of mathematical formulas",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    github: "https://github.com/yourusername/math-viz"
  },
  {
    title: "Chemistry Calculator",
    description: "Advanced calculator for chemical equations",
    image: "https://images.unsplash.com/photo-1607706189992-eae578626c86",
    github: "https://github.com/yourusername/chem-calc"
  },
  {
    title: "Study Tracker",
    description: "Track and analyze your study patterns",
    image: "https://images.unsplash.com/photo-1499673610122-01c7122c5dcb",
    github: "https://github.com/yourusername/study-tracker"
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen p-6 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto space-y-8"
      >
        <h1 className="text-4xl font-bold">Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group hover:border-primary/50 transition-colors">
                <CardHeader className="space-y-4">
                  <div className="aspect-video relative rounded-md overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-primary transition-colors"
                      >
                        <SiGithub className="w-8 h-8" />
                      </a>
                    </div>
                  </div>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
