type Props = {
  text: string
  type: "submit" | "button" | "reset"
  className?: string
}

const Button = ({ text, type, className }: Props) => {
  return (
    <button
      className={`min-w-fit rounded-xl border border-black bg-yellow px-4 py-1 font-medium text-black shadow-half-full ${className || ""}`}
      type={type}
    >
      {text}
    </button>
  )
}

export default Button
