import ProjectCard from "./ProjectCard"
import imgPlaceholder from "../assets/c3uhsgo1vx541.jpg"

// type Props = {}

const ProjectSection = () => {
  return (
    <section>
      <h2 className="mt-16 text-center font-syne text-xl font-bold">
        Une sélection de projets
      </h2>
      <article className="mt-11">
        <ProjectCard imgSrc={imgPlaceholder} description="Coffee Roaster" />
        <p className="mt-6 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at
          lectus ligula. Quisque scelerisque consectetur blandit. Proin sed
          velit rhoncus, consequat purus ac, porta orci. Sed suscipit efficitur
          cursus. Quisque varius mattis dui. Pellentesque ac dapibus lectus, ac
          mollis ligula.
        </p>
        <p className="mt-4 text-center font-medium">
          React | TypeScript | Tailwind
        </p>
      </article>
      <article className="mt-11">
        <ProjectCard imgSrc={imgPlaceholder} description="Coffee Roaster" />
        <p className="mt-6 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at
          lectus ligula. Quisque scelerisque consectetur blandit. Proin sed
          velit rhoncus, consequat purus ac, porta orci. Sed suscipit efficitur
          cursus. Quisque varius mattis dui. Pellentesque ac dapibus lectus, ac
          mollis ligula.
        </p>
        <p className="mt-4 text-center font-medium">
          React | TypeScript | Tailwind
        </p>
      </article>
      <article className="mt-11">
        <ProjectCard imgSrc={imgPlaceholder} description="Coffee Roaster" />
        <p className="mt-6 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at
          lectus ligula. Quisque scelerisque consectetur blandit. Proin sed
          velit rhoncus, consequat purus ac, porta orci. Sed suscipit efficitur
          cursus. Quisque varius mattis dui. Pellentesque ac dapibus lectus, ac
          mollis ligula.
        </p>
        <p className="mt-4 text-center font-medium">
          React | TypeScript | Tailwind
        </p>
      </article>
    </section>
  )
}

export default ProjectSection
