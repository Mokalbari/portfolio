import ProjectCard from "./ProjectCard"
import coffeeRoaster from "../../public/coffeeroaster.png"
import escapade from "../../public/escapade.png"
import planets from "../../public/planets.png"
import primeVideo from "../../public/primevideo.png"

// type Props = {}

const ProjectSection = () => {
  return (
    <section>
      <h2 className="mt-16 text-center font-syne text-xl font-bold">
        Une sélection de projets
      </h2>

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
          href="https://escapade-p2.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ProjectCard
            imgSrc={escapade}
            description="Escapade"
            className="sm:max-w-48"
            bgColor="bg-peach"
          />
        </a>
        <div className="flex-1">
          <p className="mt-6 text-xs sm:mt-0">
            Création d’une application full stack d’exploration des villes de
            France ; mise en place d’une API locale et d’un serveur Express,
            maquettage et design sous Figma, implémentation frontend avec React.
            Travail selon les méthodes agiles. <em>Projet collaboratif</em>.
            <br />
            <a
              className="underline"
              href="https://github.com/WildCodeSchool/05-2024-RemFr-Q2-TeamRocket-P2-G3"
              target="_blank"
              rel="noopener noreferrer"
            >
              Voir le repo
            </a>
          </p>
          <p className="mt-4 text-center font-medium sm:text-left">
            React | JavaScript | ExpressJS
          </p>
        </div>
      </article>
      <article className="mt-11 sm:flex sm:flex-row-reverse sm:items-start sm:gap-6">
        <a
          href="https://planets-facts-2.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ProjectCard
            imgSrc={planets}
            description="Planets Facts"
            className="sm:max-w-48"
            bgColor="bg-blue"
          />
        </a>
        <div className="flex-1">
          <p className="mt-6 text-xs sm:mt-0">
            Implémentation d’un design frontend depuis Figma avec React. Typage
            des données avec TypeScript. Le principal défi de ce site a été le
            formatage des données pour faciliter l’utilisation des informations
            sous React.
            <br />
            <a
              className="underline"
              href="https://github.com/Mokalbari/planets-facts-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Voir le repo
            </a>
          </p>
          <p className="mt-4 text-center font-medium sm:text-left">
            React | TypeScript
          </p>
        </div>
      </article>
    </section>
  )
}

export default ProjectSection
