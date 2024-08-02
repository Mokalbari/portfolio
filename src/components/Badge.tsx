type Props = {
  text: string
  className?: string
}

const Badge = ({ text, className }: Props) => {
  return (
    <span
      className={`rounded-lg border border-black bg-white ${className || ""}`}
    >
      {text}
    </span>
  )
}

export default Badge
