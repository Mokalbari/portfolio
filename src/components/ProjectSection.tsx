import coffeeRoaster from "../../public/coffeeroaster.png"
import financewizard from "../../public/financewizard.png"
import primeVideo from "../../public/primevideo.png"
import ProjectCard from "./ProjectCard"

// type Props = {}

const ProjectSection = () => {
  return (
    <section>
      <h2 className="mt-16 text-center font-syne text-xl font-bold">
        Une sélection de projets
      </h2>

      <article className="mt-11 sm:flex sm:items-start sm:gap-6">
        <a
          href="https://finance-wizard-mu.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ProjectCard
            imgSrc={financewizard}
            description="Finance Wizard"
            className="sm:max-w-48"
            bgColor="bg-green"
          />
        </a>
        <div className="flex-1">
          <p className="mt-6 text-xs sm:mt-0">
            Implémentation d’une application de gestion financière avec Next.js,
            React et TypeScript. L'application exploite la génération côté
            serveur et les server components de React pour des performances
            optimisées et une expérience utilisateur fluide.
            <br />
            <a
              className="underline"
              href="https://github.com/Mokalbari/finance-wizard"
              target="_blank"
              rel="noopener noreferrer"
            >
              Voir le repo
            </a>
          </p>
          <p className="mt-4 text-center font-medium sm:text-left">
            NextJS | TypeScript | Tailwind
          </p>
        </div>
      </article>
      <article className="mt-11 sm:flex sm:flex-row-reverse sm:items-start sm:gap-6">
        <a
          href="https://prime-stream-zeta.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ProjectCard
            imgSrc={primeVideo}
            description="Prime Video"
            className="sm:max-w-48"
            bgColor="bg-pink"
          />
        </a>
        <div className="flex-1">
          <p className="mt-6 text-xs sm:mt-0">
            Création d'une application full stack pour un site de streaming avec
            React et TypeScript. Le serveur est développé avec Express, en
            exposant une API REST. Le design du site est réalisé avec Tailwind
            et Framer Motion.
            <br />
            <a
              className="underline"
              href="https://github.com/Mokalbari/PrimeStream"
              target="_blank"
              rel="noopener noreferrer"
            >
              Voir le repo
            </a>
          </p>
          <p className="mt-4 text-center font-medium sm:text-left">
            React | TypeScript | ExpressJS
          </p>
        </div>
      </article>
      <article className="mt-11 sm:flex sm:items-start sm:gap-6">
        <a
          href="https://coffee-roaster-theta.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ProjectCard
            imgSrc={coffeeRoaster}
            description="Coffee Roaster"
            className="sm:max-w-48"
            bgColor="bg-green"
          />
        </a>
        <div className="flex-1">
          <p className="mt-6 text-xs sm:mt-0">
            Implémentation d’une application multipage pour un torréfacteur de
            cafés réalisée avec React, Tailwind et TypeScript. Les animations
            sont faites avec Framer Motion et le site présente un design
            responsif complexe et un formulaire avancé. <br />
            <a
              className="underline"
              href="https://github.com/Mokalbari/coffee-roaster"
              target="_blank"
              rel="noopener noreferrer"
            >
              Voir le repo
            </a>
          </p>
          <p className="mt-4 text-center font-medium sm:text-left">
            React | TypeScript | Tailwind
          </p>
        </div>
      </article>
    </section>
  )
}

export default ProjectSection
