type Props = {
  content: string
}

const TechBadge = ({ content }: Props) => {
  return (
    <li className="w-fit rounded-lg border border-black bg-white px-2 text-xs">
      {content}
    </li>
  )
}

export default TechBadge
