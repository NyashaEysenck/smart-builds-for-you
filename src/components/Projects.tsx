
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  
  const projects = [
    {
      title: "AI Career Guidance Tool",
      description:
        "Helped users get personalized career recommendations, create professional CVs, prepare for interviews, and receive expert guidance through a smart interface.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: ["React", "TensorFlow.js", "Node.js", "MongoDB"],
      livePreviewUrl: "https://ai-career-guidance.example.com",
    },
    {
      title: "PCOS Smart Insights",
      description:
        "A user-friendly platform that helps individuals manage PCOS by tracking symptoms and offering personalized health tips—powered by advanced logic for better accuracy.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: ["Vue.js", "Python", "Django", "PostgreSQL"],
      livePreviewUrl: "https://pcos-insights.example.com",
    },
    {
      title: "Cybersecurity Monitoring System",
      description:
        "An intelligent dashboard that protects networks by detecting threats, monitoring connected devices, and sending real-time alerts—all in one simple interface.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      technologies: ["React", "Node.js", "WebSockets", "AWS Lambda"],
      livePreviewUrl: "https://cyber-monitor.example.com",
    },
  ];

  return (
    <section id="projects" className="section-padding bg-background/90">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Projects – Real Work, Real Results
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Take a look at some of the recent projects I've built for clients across different industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {projects.map((project, index) => (
            <button
              key={index}
              onClick={() => setActiveProject(index)}
              className={`text-left p-4 rounded-md transition-all duration-300 ${
                activeProject === index
                  ? "bg-primary/20 border-l-4 border-primary shadow-md transform -translate-y-1"
                  : "bg-background/50 hover:bg-background/30 hover:shadow-md"
              }`}
            >
              <h3 className="font-medium text-lg text-foreground">{project.title}</h3>
            </button>
          ))}
        </div>

        <div className="bg-background/50 rounded-lg shadow-md overflow-hidden border border-border transition-all duration-300 hover:shadow-lg">
          <div className="md:grid md:grid-cols-2">
            <div className="h-64 md:h-auto overflow-hidden">
              <img
                src={projects[activeProject].image}
                alt={projects[activeProject].title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                {projects[activeProject].title}
              </h3>
              <p className="text-foreground/80 mb-6">
                {projects[activeProject].description}
              </p>
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground/70 mb-2">
                  TECHNOLOGIES USED
                </h4>
                <div className="flex flex-wrap gap-2">
                  {projects[activeProject].technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/20 text-foreground rounded-full text-sm transition-all duration-300 hover:bg-primary/30 hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mt-6">
                <a 
                  href={projects[activeProject].livePreviewUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex"
                >
                  <Button variant="default" size="default" className="gap-2 transition-transform duration-300 hover:scale-105">
                    View Live Preview
                    <ExternalLink size={16} />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
