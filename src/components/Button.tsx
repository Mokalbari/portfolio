import { motion } from "framer-motion"
type Props = {
  text: string
  type: "submit" | "button" | "reset"
  className?: string
  onClick?: () => void
  onTouchEnd?: () => void
}

const Button = ({ text, type, className, onClick, onTouchEnd }: Props) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 1.1 }}
      className={`min-w-fit rounded-xl border border-black bg-yellow px-4 py-1 font-medium text-black shadow-half-full ${className || ""}`}
      type={type}
      onClick={onClick}
      onTouchEnd={onTouchEnd}
    >
      {text}
    </motion.button>
  )
}

export default Button
