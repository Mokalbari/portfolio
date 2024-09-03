import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useMediaQuery } from "use-media-query-react"

import mokalbari from "../assets/romain_nepal.jpg"
import SvgGithub from "./svg/SvgGithub"
import SvgLinkedIn from "./svg/SvgLinkedIn"
import SvgResume from "./svg/SvgResume"
import Button from "./Button"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")
  const email = "rahoarau@gmail.com"
  const subject = "Prendre contact"
  const body = "Bonjour, \n\nJe souhaite vous contacter pour..."

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setIsOpen(false)
      }, 3000)
    }
  }, [isOpen])

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(email)
  }

  const handleClick = () => {
    handleCopyToClipboard()
    setIsOpen(true)
  }

  return (
    <header className="pt-8">
      <div className="flex gap-4">
        <img
          className="max-w-14 self-center rounded-full border border-black sm:max-w-16"
          src={mokalbari}
          alt="Romain, au Népal octobre 2023"
        />
        <div>
          <h1 className="font-syne text-xl font-bold">Romain Hoarau Alastor</h1>
          <h2>Développeur web</h2>
        </div>
      </div>
      <p className="mt-8">
        👋 Bonjour ! Bienvenue dans mon coin d'internet ! <br /> Je suis Romain,
        développeur web spécialisé en React, TypeScript et NextJS.
      </p>
      <p className="mt-4">
        En 2023, je m'amusais à créer des processus d'automatisation et des
        algorithmes pour résoudre divers problèmes de ma précédente carrière.
        Aujourd'hui, j'ai la chance de pouvoir mettre en œuvre ces compétences
        au quotidien par le biais du développement web.
      </p>
      <p className="mt-4">
        Toujours en quête de nouveaux défis pour améliorer mes compétences et
        participer à des projets innovants, je suis ouvert aux collaborations.{" "}
        <br />
        Discutons si nos visions se rejoignent !
      </p>
      <nav>
        <div className="flex flex-col sm:flex-row sm:items-end">
          <menu className="mt-4 flex justify-around text-slate-500 sm:items-center sm:justify-start sm:gap-6">
            <li>
              <a
                className="flex items-center gap-1"
                href="https://github.com/Mokalbari"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SvgGithub />
                {""}Github
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-1"
                href="https://www.linkedin.com/in/romain-hoarau-alastor/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SvgLinkedIn />
                {""}LinkedIn
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-1"
                href="https://drive.google.com/drive/folders/1ZD7dnLPY5C-m2EqHJ5T0y_3v6FdYzkId?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SvgResume />
                {""}CV
              </a>
            </li>
          </menu>
          <div className="relative mt-8 text-center sm:ml-8">
            {isMobile ? (
              <a
                href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
              >
                <Button
                  className="justify-self-center"
                  text="Me contacter"
                  type="button"
                />
              </a>
            ) : (
              <Button
                className="justify-self-center"
                text="Me contacter"
                type="button"
                onClick={handleClick}
                onTouchEnd={handleClick}
              />
            )}
            <AnimatePresence>
              {isOpen && (
                <motion.p
                  initial={{ opacity: 0, scaleY: 0, y: 0 }}
                  animate={{ opacity: 1, scaleY: 1, y: 10 }}
                  exit={{ opacity: 0, scaleY: 0, y: 5 }}
                  className="absolute origin-top rounded-xl border border-black bg-pink p-1 shadow-half-full"
                >
                  ✅ Adresse mail copiée dans le presse-papiers
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
