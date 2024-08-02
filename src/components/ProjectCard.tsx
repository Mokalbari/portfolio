type Props = {
  imgSrc: string
  description: string
}

const ProjectCard = ({ imgSrc, description }: Props) => {
  return (
    <figure className="rounded-lg border border-black shadow-full">
      <img className="rounded-t-lg" src={imgSrc} alt={description} />
      <figcaption className="rounded-b-lg bg-green py-2 text-center">
        {description}
      </figcaption>
    </figure>
  )
}

export default ProjectCard
