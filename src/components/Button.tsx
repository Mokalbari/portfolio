type Props = {
  text: string
  type: "submit" | "button" | "reset"
  className?: string
}

const Button = ({ text, type, className }: Props) => {
  return (
    <button
      className={`rounded-xl border border-black bg-yellow px-3 py-2 text-black shadow-half-full ${className || ""}`}
      type={type}
    >
      {text}
    </button>
  )
}

export default Button
