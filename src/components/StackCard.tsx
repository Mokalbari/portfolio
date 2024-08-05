import TechBadge from "./TechBadge"

type Props = {
  title: string
  skills: string[]
  className: string
}

const StackCard = ({ title, skills, className }: Props) => {
  return (
    <div
      className={`rounded-xl border border-black p-4 shadow-full sm:flex ${className || ""}`}
    >
      <h3 className="text-base font-bold max-sm:text-center sm:ml-1">
        {title}
      </h3>
      <ul className="mt-4 flex flex-wrap items-center gap-1 max-sm:justify-center sm:mt-0">
        {skills.map(skill => (
          <TechBadge key={skill} content={skill} />
        ))}
      </ul>
    </div>
  )
}

export default StackCard
