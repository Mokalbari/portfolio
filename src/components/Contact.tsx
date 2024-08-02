// type Props = {

import Button from "./Button"
import SvgArrow from "./svg/SvgArrow"

// }

const Contact = () => {
  return (
    <div className="relative flex flex-col items-center sm:items-start">
      <h2 className="mt-16 font-syne text-xl font-bold">Me contacter</h2>
      <p className="mt-4">
        Oh woaw ! Vous avez lu jusqu’ici ? Merci ! Si vous souhaitez prendre
        contact :
      </p>
      <Button
        className="mb-20 mt-6 sm:self-end"
        type="button"
        text="Me contacter"
      />
      <SvgArrow
        size="90"
        className="absolute bottom-0 max-sm:left-1/4 sm:right-1/4"
      />
    </div>
  )
}

export default Contact
