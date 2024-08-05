import { motion } from "framer-motion"
type Props = {
  imgSrc: string
  description: string
  className: string
  bgColor: string
}

const ProjectCard = ({ imgSrc, description, className, bgColor }: Props) => {
  return (
    <motion.figure
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1.1 }}
      className={`cursor-pointer rounded-lg border border-black shadow-full ${className}`}
    >
      <img className="rounded-t-lg" src={imgSrc} alt={description} />
      <figcaption className={`rounded-b-lg py-2 text-center ${bgColor}`}>
        {description}
      </figcaption>
    </motion.figure>
  )
}

export default ProjectCard
