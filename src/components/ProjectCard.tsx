type Props = {
  imgSrc: string
  description: string
  className: string
  bgColor: string
}

const ProjectCard = ({ imgSrc, description, className, bgColor }: Props) => {
  return (
    <figure
      className={`rounded-lg border border-black shadow-full ${className}`}
    >
      <img className="rounded-t-lg" src={imgSrc} alt={description} />
      <figcaption className={`rounded-b-lg py-2 text-center ${bgColor}`}>
        {description}
      </figcaption>
    </figure>
  )
}

export default ProjectCard
