type Props = {
  text: string
  type: "submit" | "button" | "reset"
  className?: string
  onClick: () => void
}

const Button = ({ text, type, className, onClick }: Props) => {
  return (
    <button
      className={`min-w-fit rounded-xl border border-black bg-yellow px-4 py-1 font-medium text-black shadow-half-full ${className || ""}`}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button
