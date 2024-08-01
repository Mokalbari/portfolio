import type { ReactNode } from "react"

type Props = {
  children: ReactNode
  className?: string
}

const Container = ({ children, className }: Props) => {
  return <div className={`px-4 ${className || ""}`}>{children}</div>
}

export default Container
