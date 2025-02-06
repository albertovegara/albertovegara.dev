import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="grid items-center gap-14 py-4 md:py-4">
      {/* Intro */}
      <section className="delay-0 duration-500 animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards">
        <article className="prose py-4 dark:prose-invert prose-a:font-normal prose-a:decoration-neutral-500 prose-a:decoration-dotted prose-a:underline-offset-[5px] prose-a:opacity-80">
          <h1 className="text-3xl">
            Hey there, <span className="font-bold tracking-tight">Alberto</span>{" "}
            here! 👋
          </h1>
          <p className="text-lg leading-loose">
            {`I'm`} a software engineer from Spain with 2 years of experience.
          </p>
        </article>
      </section>

      <Experience />
      <Projects />
    </div>
  );
}
