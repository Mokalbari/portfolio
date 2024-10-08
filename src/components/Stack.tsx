import StackCard from "./StackCard"

const Stack = () => {
  const frontendSkills = [
    "NextJs",
    "React",
    "TypeScript",
    "Tailwind",
    "JavaScript",
    "Framer Motion",
    "GSAP",
    "React Native",
  ]

  const backendSkills = ["NextJS", "ExpressJS", "PostgreSQL", "MySQL"]

  const otherSkills = ["Jest - Vitest", "Figma", "Git - GitHub"]

  return (
    <section className="mt-14">
      <h2 className="text-center font-syne text-xl font-bold sm:text-left">
        Ma stack technique
      </h2>
      <h3 className="text-center font-medium sm:text-left">
        React | TypeScript | ExpressJS | MySQL
      </h3>
      <div className="sm:mt-8 sm:flex sm:gap-4">
        <StackCard
          className="mt-8 flex-col bg-yellow text-left sm:mt-0 sm:w-2/5 sm:gap-4"
          title="Frontend"
          skills={frontendSkills}
        />
        <div className="sm:flex-1">
          <StackCard
            className="mt-4 bg-yellow sm:mb-4 sm:mt-0 sm:gap-4"
            title="Backend"
            skills={backendSkills}
          />
          <StackCard
            className="mt-4 bg-blue sm:mt-0 sm:gap-4"
            title="Web - Général"
            skills={otherSkills}
          />
        </div>
      </div>
    </section>
  )
}

export default Stack
