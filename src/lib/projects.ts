import coffeeRoaster from "../../public/coffeeroaster.png"
import escapade from "../../public/escapade.png"
import planets from "../../public/planets.png"

interface Project {
  title: string
  url: string
  imgSrc: string
  description: string
  bgColor: string
  details: string
  repoUrl: string
  technologies: string[]
  isReverse?: boolean
  index: number
}

export const projects: Project[] = [
  {
    title: "Coffee Roaster",
    url: "https://coffee-roaster-theta.vercel.app/",
    imgSrc: coffeeRoaster,
    description: "Coffee Roaster",
    bgColor: "bg-green",
    details:
      "Implémentation d'une application multipage pour un torréfacteur de cafés réalisée avec React, Tailwind et TypeScript. Les animations sont faites avec Framer Motion et le site présente un design responsif complexe et un formulaire avancé.",
    repoUrl: "https://github.com/Mokalbari/coffee-roaster",
    technologies: ["React", "TypeScript", "Tailwind"],
    index: 1,
  },
  {
    title: "Planets Facts",
    url: "https://planets-facts-2.vercel.app/",
    imgSrc: planets,
    description: "Planets Facts",
    bgColor: "bg-pink",
    details:
      "Implémentation d'un design frontend depuis Figma avec React. Typage des données avec TypeScript. Le principal défi de ce site a été le formatage des données pour faciliter l'utilisation des informations sous React.",
    repoUrl: "https://github.com/Mokalbari/planets-facts-2",
    technologies: ["React", "TypeScript"],
    isReverse: true,
    index: 2,
  },
  {
    title: "Escapade",
    url: "https://escapade-p2.netlify.app/",
    imgSrc: escapade,
    description: "Escapade",
    bgColor: "bg-peach",
    details:
      "Création d'une application full stack d'exploration des villes de France ; mise en place d'une API locale et d'un serveur Express, maquettage et design sous Figma, implémentation frontend avec React. Travail selon les méthodes agiles. Projet collaboratif.",
    repoUrl:
      "https://github.com/WildCodeSchool/05-2024-RemFr-Q2-TeamRocket-P2-G3",
    technologies: ["React", "JavaScript", "ExpressJS"],
    index: 3,
  },
]
