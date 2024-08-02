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
          className="max-w-16 rounded-full border border-black"
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
        <div className="flex flex-col sm:flex-row">
          <menu className="mt-4 flex justify-between text-slate-500 sm:items-center sm:justify-start sm:gap-6">
            <li>
              <a
                className="flex items-center gap-3"
                href="https://github.com/Mokalbari"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SvgGithub />
                {""}Github
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-3"
                href="https://www.linkedin.com/in/romain-hoarau-alastor/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SvgLinkedIn />
                {""}LinkedIn
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-3"
                href="https://drive.google.com/drive/folders/1ZD7dnLPY5C-m2EqHJ5T0y_3v6FdYzkId?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SvgResume />
                {""}CV
              </a>
            </li>
          </menu>
          <div className="mt-4 text-center sm:ml-8">
            <Button
              className="justify-self-center"
              text="Me contacter"
              type="button"
            />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
