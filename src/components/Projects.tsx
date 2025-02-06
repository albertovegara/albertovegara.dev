import React from "react";
import ProjectCard from "./ProjectCard";

interface Technology {
  name: string;
  icon: string;
}

interface Project {
  name: string;
  description: string;
  icon: string;
  url: string;
  technologies: Technology[];
}

const projects: Project[] = [
  {
    name: "alberto-vb.dev",
    description: "🚀 My personal website.",
    icon: "",
    url: "https://alberto-vb.dev",
    technologies: [
      {
        name: "Next.js",
        icon: "",
      },
      {
        name: "Tailwind CSS",
        icon: "",
      },
    ],
  },
  {
    name: "minGPT-interpretability",
    description:
      "Exploring transformer interpretability with activation patching.",
    icon: "",
    url: "https://github.com/alberto-vb/minGPT-interpretability",
    technologies: [],
  },
  {
    name: "trim-link",
    description: "🔗 An URL shortener.",
    icon: "",
    url: "https://github.com/alberto-vb/trim-link",
    technologies: [],
  },
];

export default function Projects() {
  return (
    <section className="flex flex-col space-y-4 delay-200 duration-500 animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards">
      <div className="flex flex-col space-y-4">
        <h2 className="text-xl font-medium">Projects</h2>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
