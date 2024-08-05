import { motion } from "framer-motion"
type Props = { size?: string; className?: string }

const SvgEllipse = ({ size = "75", className }: Props) => {
  return (
    <motion.svg
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY }}
      initial={{ y: -35, x: 30 }}
      className={className}
      width={size}
      height={size}
      viewBox="0 0 75 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Elément décoratif</title>
      <circle
        cx="37.8334"
        cy="37.8334"
        r="35.8633"
        stroke="black"
        strokeWidth="2.47333"
        strokeDasharray="4.95 4.95"
      />
      <circle
        cx="37.8334"
        cy="37.8334"
        r="17.3133"
        fill="#FFC700"
        stroke="black"
        strokeWidth="2.47333"
      />
    </motion.svg>
  )
}

export default SvgEllipse
