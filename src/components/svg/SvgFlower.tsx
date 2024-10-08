import { motion } from "framer-motion"

type Props = { sizeWidth?: string; sizeHeight?: string; className?: string }

const SvgFlower = ({
  sizeWidth = "261",
  sizeHeight = "260",
  className,
}: Props) => {
  return (
    <motion.svg
      initial={{ scale: 0 }}
      whileInView={{ scale: [0.7, 1.2, 1.0, 1.0] }}
      transition={{ delay: 0.2, duration: 0.5 }}
      viewport={{ once: true, margin: "100px" }}
      className={className}
      width={sizeWidth}
      height={sizeHeight}
      viewBox="0 0 261 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Elément décoratif</title>
      <path
        d="M138.989 127.588C300.42 84.3019 254.754 5.24637 136.609 123.454C254.816 5.24637 175.698 -40.3578 132.474 121.073C175.761 -40.3578 84.4272 -40.3578 127.651 121.073C84.3645 -40.4204 5.309 5.24636 123.454 123.391C5.309 5.24636 -40.3578 84.3019 121.073 127.588C-40.3578 84.3019 -40.3578 175.635 121.073 132.412C-40.3578 175.698 5.309 254.754 123.454 136.546C5.24637 254.754 84.3645 300.358 127.588 138.927C84.3019 300.358 175.635 300.358 132.412 138.927C175.698 300.358 254.754 254.691 136.546 136.546C254.754 254.754 300.358 175.635 138.927 132.412C300.42 175.635 300.42 84.3019 138.989 127.588Z"
        fill="#00EB90"
      />
    </motion.svg>
  )
}

export default SvgFlower
