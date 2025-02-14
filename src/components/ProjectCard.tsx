import Github from "@/icons/Github";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

interface Technology {
  name: string;
  icon: string;
}

interface Project {
  name: string;
  description: string;
  icon: string;
  repository: string;
  url: string;
  technologies: Technology[];
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border rounded-sm shadow-sm px-2 py-4 flex flex-col space-y-2">
      <div className="flex items-center justify-between">
        <Link
          href={project.url}
          target="_blank"
          rel="noopener"
          className="group flex items-center gap-[6px] font-medium decoration-neutral-500 decoration-dotted underline-offset-[5px] hover:underline"
        >
          <span>{project.name}</span>
          <ArrowUpRight
            size={13}
            strokeWidth={2}
            className="opacity-50 duration-200 group-hover:translate-x-[1.5px] group-hover:opacity-100"
          />
        </Link>
        {project.repository && (
          <Link
            href={project.repository}
            title={`View ${project.name} repository on GitHub`}
            target="_blank"
            rel="noopener"
            className="opacity-75 transition-opacity duration-100 hover:opacity-100"
          >
            <Github height={18} />
          </Link>
        )}
      </div>
      <p className="truncate text-sm dark:text-neutral-400">
        {project.description}
      </p>
    </div>
  );
}
