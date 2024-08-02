import TechBadge from "./TechBadge"

type Props = {
  title: string
  skills: string[]
  className: string
}

const StackCard = ({ title, skills, className }: Props) => {
  return (
    <div
      className={`rounded-xl border border-black p-4 shadow-full ${className || ""}`}
    >
      <h3 className="justify-center text-center text-base font-bold">
        {title}
      </h3>
      <ul className="mt-4 flex flex-wrap items-center justify-center gap-1">
        {skills.map(skill => (
          <TechBadge key={skill} content={skill} />
        ))}
      </ul>
    </div>
  )
}

export default StackCard
