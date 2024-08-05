import Header from "./components/Header"
import ProjectSection from "./components/ProjectSection"
import Stack from "./components/Stack"
import Contact from "./components/Contact"
import SvgEllipse from "./components/svg/SvgEllipse"
import SvgDoublePlay from "./components/svg/SvgDoublePlay"
import SvgFlower from "./components/svg/SvgFlower"
import SvgStar from "./components/svg/SvgStar"

const App = () => {
  return (
    <div className="relative mx-4 my-8 max-w-[600px] rounded-lg border border-black bg-white px-4 shadow-full sm:mx-auto sm:my-16 sm:px-16 sm:py-8">
      <Header />
      <main>
        <Stack />
        <ProjectSection />
        <Contact />
      </main>
      <aside>
        <SvgEllipse className="absolute right-0 top-0 -translate-y-10 translate-x-10 max-sm:max-w-12 max-sm:-translate-y-8 max-sm:translate-x-4" />
        <SvgDoublePlay
          className="absolute left-0 top-0 -translate-x-32 translate-y-12 max-lg:hidden"
          sizeHeight="90"
        />
        <SvgFlower className="absolute -right-36 bottom-1/3 -z-10 max-sm:hidden" />
        <SvgFlower className="absolute -bottom-36 -right-24 -z-10 sm:hidden" />
        <SvgStar className="absolute -left-12 bottom-48 -z-10 max-sm:hidden" />
      </aside>
    </div>
  )
}

export default App
