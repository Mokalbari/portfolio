import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

import mokalbari from "../assets/romain_nepal.jpg"
import SvgGithub from "./svg/SvgGithub"
import SvgLinkedIn from "./svg/SvgLinkedIn"
import SvgResume from "./svg/SvgResume"
import Button from "./Button"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setIsOpen(false)
      }, 3000)
    }
  }, [isOpen])

  const handleCopyToClipboard = () => {
    const email = "rahoarau@gmail.com"
    navigator.clipboard.writeText(email)
  }

  const handleClick = () => {
    handleCopyToClipboard()
    setIsOpen(true)
  }

  return (
    <header className="pt-8">
      <div className="flex gap-4">
        <motion.img
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.25, ease: "easeIn" }}
          className="max-w-14 self-center rounded-full border border-black sm:max-w-16"
          src={mokalbari}
          alt="Romain, au Népal octobre 2023"
        />
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.25, ease: "easeIn" }}
            className="font-syne text-xl font-bold"
          >
            Romain Hoarau Alastor
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.25, ease: "easeIn" }}
          >
            Développeur web
          </motion.h2>
        </div>
      </div>
      <p className="mt-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at
        lectus ligula. Quisque scelerisque.
      </p>
      <p className="mt-4">
        Quisque varius mattis dui. Pellentesque ac dapibus lectus, ac mollis
        ligula. Maecenas nunc felis, ultricies et nisi non, vestibulum.
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
            <Button
              className="justify-self-center"
              text="Me contacter"
              type="button"
              onClick={handleClick}
              onTouchEnd={handleClick}
            />
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
