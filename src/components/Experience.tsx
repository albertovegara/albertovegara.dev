import { ArrowUpRight } from "lucide-react";
import React from "react";

interface Experience {
  company: string;
  companyUrl: string;
  position: string;
  description: string | string[];
  startDate: string;
  endDate: string;
}

const experience: Experience[] = [
  {
    company: "Hypt",
    companyUrl: "https://join-hypt.com/en/home/",
    position: "Back-end Engineer",
    description: [
      "Led the development of a chatbot workflow system enabling customizable conversational experiences for industries like healthcare and insurance.",
      "Designed and implemented robust CI/CD pipelines and QA processes to enhance deployment efficiency and code reliability.",
      "Built a migration manager for Ory Identity, enabling smooth version transitions.",
    ],
    startDate: "2023",
    endDate: "Present",
  },
  {
    company: "Altia S.A.",
    companyUrl: "https://www.altia.es",
    position: "Software Engineer Intern",
    description:
      "Developed and maintained a microservice for the company's private portal using Java Spring Boot and PostgreSQL. Collaborated with the engineering team to improve system architecture, refactor code, and address bad practices to enhance maintainability and performance.",
    startDate: "2022",
    endDate: "2022",
  },
];

export default function Experience() {
  return (
    <section className="flex flex-col space-y-4 delay-200 duration-500 animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards">
      <div className="flex flex-col space-y-4">
        <h2 className="text-xl font-medium">Experience</h2>
      </div>

      <ol className="relative space-y-6 border-s-2 border-neutral-300 dark:border-neutral-800">
        {experience.map((experience) => (
          <li className="ms-5 mt-1" key={experience.company}>
            <div className="absolute -start-[6.5px] mt-2 h-3 w-3 rounded-full border border-neutral-400 bg-neutral-200 dark:border-neutral-600 dark:bg-neutral-800"></div>

            <time className="mb-2 font-mono text-xs font-normal leading-none text-neutral-600 dark:text-neutral-400">
              {experience.startDate} - {experience.endDate}
            </time>

            <div className="mt-2 flex flex-col space-y-0.5">
              <h3 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                {experience.position}
              </h3>
              <a
                href={experience.companyUrl}
                target="_blank"
                rel="noopener"
                className="group flex w-max items-center text-pretty text-sm text-neutral-600 transition-colors duration-150 hover:text-black dark:border-neutral-800 dark:text-neutral-400 dark:hover:text-white"
              >
                <span>{experience.company}</span>
                <ArrowUpRight
                  className="ml-1 duration-150 group-hover:translate-x-[1.5px]"
                  size={12}
                  strokeWidth={1.5}
                />
              </a>
            </div>

            <div className="mt-3 text-pretty text-sm dark:text-neutral-400">
              {typeof experience.description === "string" ? (
                <p>{experience.description}</p>
              ) : Array.isArray(experience.description) ? (
                <ul>
                  {experience.description.map((description, index) => (
                    <li key={index}>{description}</li>
                  ))}
                </ul>
              ) : (
                <p>No description provided.</p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
