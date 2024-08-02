import StackCard from "./StackCard"

const Stack = () => {
  const frontendSkills = [
    "React",
    "TypeScript",
    "Tailwind",
    "JavaScript",
    "Framer Motion",
    "GSAP",
  ]

  const backendSkills = ["NodeJS", "SQL", "ExpressJS"]

  const otherSkills = ["Jest - Vitest", "Figma", "Git - GitHub"]

  return (
    <section className="mt-14">
      <h2 className="text-center font-syne text-xl font-bold">
        Ma stack technique
      </h2>
      <h3 className="text-center font-medium">
        React | TypeScript | ExpressJS | MySQL
      </h3>
      <StackCard
        className="mt-8 bg-yellow"
        title="Frontend"
        skills={frontendSkills}
      />
      <StackCard
        className="mt-4 bg-yellow"
        title="Backend"
        skills={backendSkills}
      />
      <StackCard className="mt-4 bg-blue" title="Autres" skills={otherSkills} />
    </section>
  )
}

export default Stack
