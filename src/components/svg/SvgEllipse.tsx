type Props = { size: string; className?: string }

const MyComponent = ({ size = "75", className }: Props) => {
  return (
    <svg
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
        stroke-width="2.47333"
        stroke-dasharray="4.95 4.95"
      />
      <circle
        cx="37.8334"
        cy="37.8334"
        r="17.3133"
        fill="#FFC700"
        stroke="black"
        stroke-width="2.47333"
      />
    </svg>
  )
}

export default MyComponent
