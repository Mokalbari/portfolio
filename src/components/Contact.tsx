import { useState, useEffect } from "react"

import Button from "./Button"
import SvgArrow from "./svg/SvgArrow"

const Contact = () => {
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
    <div className="relative flex flex-col items-center sm:items-start">
      <h2 className="mt-16 font-syne text-xl font-bold">Me contacter</h2>
      <p className="mt-4">
        Oh woaw ! Vous avez lu jusqu’ici ? Merci ! Si vous souhaitez prendre
        contact :
      </p>
      <Button
        className="mb-20 mt-6 sm:self-end"
        type="button"
        text="Me contacter"
        onClick={handleClick}
      />
      <p
        className={`${!isOpen ? "hidden" : null} absolute bottom-0 right-0 z-10 max-w-36 translate-y-4 rounded-xl border border-black bg-pink p-1 shadow-half-full`}
      >
        ✅ Adresse mail copiée dans le presse-papiers
      </p>
      <SvgArrow
        size="90"
        className="absolute bottom-0 max-sm:left-1/4 sm:right-1/4"
      />
    </div>
  )
}

export default Contact
