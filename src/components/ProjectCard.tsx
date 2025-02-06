import React from "react";

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

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div>
      <div className="flex flex-col space-y-2">
        <h3 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
          {project.name}
        </h3>
        <p className="text-pretty text-sm dark:text-neutral-400">
          {project.description}
        </p>
      </div>
    </div>
  );
}
