import { motion } from "framer-motion"

type Props = {
  sizeWidth?: string
  sizeHeight?: string
  className?: string
}

const SvgDoublePlay = ({
  sizeWidth = "90",
  sizeHeight = "120",
  className,
}: Props) => {
  return (
    <svg
      className={className}
      width={sizeWidth}
      height={sizeHeight}
      viewBox="0 0 90 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Elément décoratif</title>
      <motion.path
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.35 }}
        d="M2 4.82843L57.1716 60L1.99999 115.172L2 4.82843Z"
        fill="#FFC700"
        stroke="black"
        strokeWidth="4"
      />
      <motion.path
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.25 }}
        d="M32 4.82843L87.1716 60L32 115.172L32 4.82843Z"
        stroke="black"
        strokeWidth="4"
      />
    </svg>
  )
}

export default SvgDoublePlay
