import Header from "./components/Header"
import ProjectSection from "./components/ProjectSection"
import Stack from "./components/Stack"
import Contact from "./components/Contact"

const App = () => {
  return (
    <div className="mx-4 my-8 max-w-[600px] rounded-lg border border-black bg-white px-4 shadow-full sm:mx-auto sm:my-16 sm:px-16 sm:py-8">
      <Header />
      <Stack />
      <ProjectSection />
      <Contact />
    </div>
  )
}

export default App
