type Props = {
  imgSrc: string
  description: string
  className: string
}

const ProjectCard = ({ imgSrc, description, className }: Props) => {
  return (
    <figure
      className={`rounded-lg border border-black shadow-full ${className}`}
    >
      <img className="rounded-t-lg" src={imgSrc} alt={description} />
      <figcaption className="rounded-b-lg bg-green py-2 text-center">
        {description}
      </figcaption>
    </figure>
  )
}

export default ProjectCard
