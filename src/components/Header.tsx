import mokalbari from "../assets/romain_nepal.jpg"
import SvgGithub from "./svg/SvgGithub"
import SvgLinkedIn from "./svg/SvgLinkedIn"
import SvgResume from "./svg/SvgResume"
import Button from "./Button"

const Header = () => {
  return (
    <header className="pt-8">
      <div className="flex gap-4">
        <img
          className="max-w-14 rounded-full border border-black"
          src={mokalbari}
          alt="Romain, au Népal octobre 2023"
        />
        <div>
          <h1 className="font-syne text-xl font-bold">Romain Hoarau Alastor</h1>
          <h2>Développeur web · Tea geek</h2>
        </div>
      </div>
      <p className="mt-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at
        lectus ligula. Quisque scelerisque.
      </p>
      <p className="mt-4">
        Quisque varius mattis dui. Pellentesque ac dapibus lectus, ac mollis
        ligula. Maecenas nunc felis, ultricies et nisi non, vestibulum.
      </p>
      <nav>
        <menu className="mt-4 flex flex-wrap justify-between text-slate-500">
          <li className="flex items-center gap-3">
            <SvgGithub />
            {""}Github
          </li>
          <li className="flex items-center gap-3">
            <SvgLinkedIn />
            {""}LinkedIn
          </li>
          <li className="flex items-center gap-3">
            <SvgResume />
            {""}CV
          </li>
        </menu>
        <div className="mt-4 text-center">
          <Button
            className="justify-self-center"
            text="Me contacter"
            type="button"
          />
        </div>
      </nav>
    </header>
  )
}

export default Header
