import mokalbari from "../assets/romain_nepal.jpg"

const Header = () => {
  return (
    <header className="pt-8">
      <div className="flex gap-4">
        <img
          className="max-w-14 rounded-full"
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
    </header>
  )
}

export default Header
